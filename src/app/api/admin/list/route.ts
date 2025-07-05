import { NextRequest, NextResponse } from 'next/server';
import { BlobServiceClient } from '@azure/storage-blob';

const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING!;

// Submission Types
interface BaseSubmission {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  submittedAt: string;
  data?: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    subject?: string;
  };
}

interface ResumeSubmission extends BaseSubmission {
  resumeUrl?: string;
}

type Submission = BaseSubmission | ResumeSubmission;

// Helper to convert NodeJS.ReadableStream to string
async function streamToString(readableStream: NodeJS.ReadableStream): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Uint8Array[] = [];
    readableStream.on('data', (data) => chunks.push(data));
    readableStream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
    readableStream.on('error', reject);
  });
}

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const type = url.searchParams.get('type') || 'contacts';

    const blobServiceClient = BlobServiceClient.fromConnectionString(
      AZURE_STORAGE_CONNECTION_STRING
    );
    const containerClient = blobServiceClient.getContainerClient(type);

    const result: Submission[] = [];

    for await (const blob of containerClient.listBlobsFlat({ prefix: 'metadata/' })) {
      const client = containerClient.getBlobClient(blob.name);
      const response = await client.download();
      const text = await streamToString(response.readableStreamBody!);
      const json = JSON.parse(text);
      result.push(json);
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Admin list failed:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to load submissions' },
      { status: 500 }
    );
  }
}
