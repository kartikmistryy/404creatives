import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    console.log("Private Key:", process.env.GOOGLE_PRIVATE_KEY ? "Loaded" : "Not Loaded");

    const body = await req.json();
    const email = body.email;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Load credentials from environment variables
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Fix newlines in private key
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID; // Use .env variable
    const range = 'Sheet1!B3:B'; // Adjust as needed

    // Append the email to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[email]],
      },
    });

    return NextResponse.json({ message: 'Email submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting email:', error);
    return NextResponse.json(error, { status: 500 });
  }
}
