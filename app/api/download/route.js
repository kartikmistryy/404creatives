import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

const PASSWORD = "kartikmistry"; // Change this to your actual password

export async function POST(req) {
    const { password } = await req.json();
    console.log(password);

    if (password !== PASSWORD) {
        return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    const filePath = path.join(process.cwd(), 'public', 'socialmediakit.pdf'); // Store PDF in 'public'
    const fileBuffer = await fs.readFile(filePath);

    return new Response(fileBuffer, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="your-file.pdf"',
        },
    });
}
