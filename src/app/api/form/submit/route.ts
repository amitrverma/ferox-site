import { NextRequest, NextResponse } from 'next/server';
import { BlobServiceClient } from '@azure/storage-blob';
import { v4 as uuidv4 } from 'uuid';

const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING!;

type FormType = 'contact' | 'demo';

interface ContactOrDemoData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  subject?: string;
}

interface FormPayload {
  type: FormType;
  data: ContactOrDemoData;
}

const containerMap: Record<FormType, string> = {
  contact: 'contacts',
  demo: 'demos',
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as FormPayload;
    const { type, data } = body;

    const containerName = containerMap[type] || 'contacts';

    const blobServiceClient = BlobServiceClient.fromConnectionString(
      AZURE_STORAGE_CONNECTION_STRING
    );
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const blobName = `metadata/${uuidv4()}.json`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    const payload = {
      type,
      data,
      submittedAt: new Date().toISOString(),
    };

    const buffer = Buffer.from(JSON.stringify(payload));

    await blockBlobClient.upload(buffer, buffer.length, {
      blobHTTPHeaders: { blobContentType: 'application/json' },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission failed:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
