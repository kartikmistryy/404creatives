import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const email = body.email;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Check if Google Sheets credentials are configured
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      return NextResponse.json({ 
        error: 'Google Sheets service not configured' 
      }, { status: 500 });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    
    // Get the first available sheet or create one
    let range = 'Sheet1!B3:B';
    try {
      // Try to access Sheet1 first
      await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Sheet1!B1:B1',
      });
    } catch (error) {
      if (error.code === 400) {
        // Sheet1 doesn't exist, get the first available sheet
        const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
        
        if (spreadsheet.data.sheets?.length > 0) {
          const firstSheetName = spreadsheet.data.sheets[0].properties.title;
          range = `${firstSheetName}!B3:B`;
        } else {
          // No sheets exist, create Sheet1 with header
          await sheets.spreadsheets.batchUpdate({
            spreadsheetId,
            requestBody: {
              requests: [{
                addSheet: {
                  properties: {
                    title: 'Sheet1',
                    gridProperties: { rowCount: 1000, columnCount: 10 }
                  }
                }
              }]
            }
          });
          
          await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: 'Sheet1!B1:B1',
            valueInputOption: 'RAW',
            requestBody: { values: [['Email']] }
          });
        }
      } else {
        throw error;
      }
    }

    // Append the email to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: { values: [[email]] },
    });

    return NextResponse.json({ message: 'Email submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Newsletter submission error:', error);
    return NextResponse.json({ 
      error: 'Failed to submit email', 
      details: error.message 
    }, { status: 500 });
  }
}
