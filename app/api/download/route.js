import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';


export async function POST(req) {

    const filePath = path.join(process.cwd(), 'public', 'socialmediakit.pdf'); // Store PDF in 'public'
    const fileBuffer = await fs.readFile(filePath);

    return new Response(fileBuffer, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="your-file.pdf"',
        },
    });
}
