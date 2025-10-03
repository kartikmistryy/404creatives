import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Check if required fields are provided
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Check if Google Sheets credentials are configured
    if (!process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_CLIENT_EMAIL) {
      console.error('Google Sheets credentials not configured');
      return NextResponse.json({ 
        error: 'Google Sheets service not configured' 
      }, { status: 500 });
    }

    // Initialize Google Sheets API using the same credentials as newsletter
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Use the same spreadsheet as newsletter
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

    // Check if Contact Responses sheet exists, create if not
    try {
      await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Contact Responses!A1:E1',
      });
    } catch (error) {
      if (error.code === 400) {
        // Create Contact Responses sheet with headers
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId,
          requestBody: {
            requests: [{
              addSheet: {
                properties: {
                  title: 'Contact Responses',
                  gridProperties: { rowCount: 1000, columnCount: 5 }
                }
              }
            }]
          }
        });

        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: 'Contact Responses!A1:E1',
          valueInputOption: 'RAW',
          requestBody: {
            values: [['Timestamp', 'Name', 'Email', 'Phone', 'Message']]
          }
        });
      } else {
        throw error;
      }
    }

    // Prepare the data to append
    const values = [
      [
        new Date().toISOString(), // Timestamp
        name,
        email,
        phone || '', // Phone is optional
        message || '' // Message is optional
      ]
    ];

    // Append data to the Contact Responses sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Contact Responses!A:E', // New sheet for contact responses
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    return NextResponse.json({ 
      message: 'Contact form submitted successfully!' 
    }, { status: 200 });

  } catch (error) {
    console.error('Google Sheets error:', error);
    return NextResponse.json({ 
      error: 'Error saving contact form data', 
      details: error.message 
    }, { status: 500 });
  }
}
