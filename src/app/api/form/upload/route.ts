import { NextRequest, NextResponse } from 'next/server';
import { BlobServiceClient } from '@azure/storage-blob';
import { v4 as uuidv4 } from 'uuid';

const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING!;
const CONTAINER_NAME = 'resumes';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const file = formData.get("resume") as File;

    if (!file || !file.name) {
      return NextResponse.json({ success: false, error: 'Resume file missing' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const extension = file.name.split('.').pop() || 'pdf';
    const fileName = `${uuidv4()}.${extension}`;

    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);

    // Upload resume file
    const fileBlob = containerClient.getBlockBlobClient(`files/${fileName}`);
    await fileBlob.uploadData(buffer, {
      blobHTTPHeaders: { blobContentType: file.type || 'application/octet-stream' },
    });

    // Upload metadata
    const metadata = {
      name,
      email,
      phone,
      message,
      resumeUrl: fileBlob.url,
      submittedAt: new Date().toISOString(),
    };

    const metadataBlob = containerClient.getBlockBlobClient(`metadata/${uuidv4()}.json`);
    const metadataBuffer = Buffer.from(JSON.stringify(metadata));
    await metadataBlob.uploadData(metadataBuffer, {
      blobHTTPHeaders: { blobContentType: 'application/json' },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, error: 'Upload failed' }, { status: 500 });
  }
}
