import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

const PASSWORD = "Letsconnect";

export async function POST(req) {
    const { password } = await req.json();

    if (password !== PASSWORD) {
        alert("Wrong password")
        return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    const filePath = path.join(process.cwd(), 'public', 'solutionsOverview.pdf'); 
    const fileBuffer = await fs.readFile(filePath);

    return new Response(fileBuffer, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="solutionsOverview.pdf"',
        },
    });
}
