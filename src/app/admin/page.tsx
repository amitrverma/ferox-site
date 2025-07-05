'use client';

import { useEffect, useState } from 'react';

type SubmissionType = 'contacts' | 'demos' | 'resumes';

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

export default function AdminPage() {
  const [type, setType] = useState<SubmissionType>('contacts');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin/list?type=${type}`);
        const result = await res.json();
        if (result.success) {
          setSubmissions(result.data);
        } else {
          console.error('Failed to fetch submissions');
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [type]);

  return (
    <main className="min-h-screen bg-gray-100 text-black px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Admin –{' '}
          {type === 'contacts'
            ? 'Contact'
            : type === 'demos'
            ? 'Demo'
            : 'Resume'} Submissions
        </h1>

        <div className="mb-6 space-x-4">
          {(['contacts', 'demos', 'resumes'] as SubmissionType[]).map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-4 py-2 rounded font-medium ${
                type === t ? 'bg-black text-white' : 'bg-white border border-gray-300'
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : submissions.length === 0 ? (
          <p>No submissions found.</p>
        ) : (
          <ul className="space-y-4">
            {submissions.map((s, i) => (
              <li key={i} className="bg-white rounded shadow p-4">
                <p><strong>Name:</strong> {s.name || s.data?.name || '—'}</p>
                <p><strong>Email:</strong> {s.email || s.data?.email || '—'}</p>
                <p><strong>Phone:</strong> {s.phone || s.data?.phone || '—'}</p>
                <p><strong>Message:</strong> {s.message || s.data?.message || s.data?.subject || '—'}</p>
                {type === 'resumes' && 'resumeUrl' in s && s.resumeUrl && (
                  <p>
                    <strong>Resume:</strong>{' '}
                    <a
                      href={s.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Download
                    </a>
                  </p>
                )}
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Submitted:</strong> {new Date(s.submittedAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
