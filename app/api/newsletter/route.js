import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Load service account credentials
    const keyFilePath = path.join(process.cwd(), '404creatives.json');
    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '19FLyMKZ9L9BbLw6EzCBUKXU0gAVC3qTtR_xX6szLF_0';
    const range = 'Sheet1!B3:B'; // Update to match your sheet name

    // Append the email to the sheet
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
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
