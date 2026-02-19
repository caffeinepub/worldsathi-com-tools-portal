import React, { useState } from 'react';
import ToolPageTemplate from './ToolPageTemplate';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/Button';
import { Download } from 'lucide-react';
import { ALL_TOOLS } from '@/constants/tools';
import { getRelatedTools } from '@/utils/toolHelpers';

export default function Generator2() {
  const tool = ALL_TOOLS.find((t) => t.id === 'qr-code-generator')!;
  const relatedTools = getRelatedTools(tool.id, ALL_TOOLS, 3);

  const [text, setText] = useState<string>('');
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  const handleGenerate = () => {
    if (text.trim()) {
      const encodedText = encodeURIComponent(text);
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedText}`;
      setQrCodeUrl(url);
    }
  };

  const handleDownload = () => {
    if (qrCodeUrl) {
      const link = document.createElement('a');
      link.href = qrCodeUrl;
      link.download = 'qrcode.png';
      link.click();
    }
  };

  const handleReset = () => {
    setText('');
    setQrCodeUrl('');
  };

  const faqs = [
    {
      question: 'What can I encode in a QR code?',
      answer: 'You can encode URLs, text, contact information, WiFi credentials, and more.',
    },
    {
      question: 'Can I download the QR code?',
      answer: 'Yes, click the Download button below the QR code to save it as an image.',
    },
    {
      question: 'What is the maximum text length?',
      answer: 'QR codes can store up to several thousand characters, but shorter content scans more reliably.',
    },
    {
      question: 'Are QR codes free to use?',
      answer: 'Yes, QR codes are free to generate and use without any restrictions.',
    },
    {
      question: 'Will the QR code expire?',
      answer: 'No, QR codes do not expire. They will work as long as the encoded content is valid.',
    },
  ];

  return (
    <ToolPageTemplate
      tool={tool}
      gradientFilename="tool-qr-generator-gradient.dim_1200x300.png"
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="text">Text or URL</Label>
          <Input
            id="text"
            type="text"
            placeholder="Enter text or URL"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <Button variant="primary" onClick={handleGenerate} className="flex-1">
            Generate QR Code
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>

        {qrCodeUrl && (
          <div className="p-6 bg-primary/10 border-2 border-primary rounded-lg text-center">
            <img
              src={qrCodeUrl}
              alt="QR Code"
              className="mx-auto mb-4 border-4 border-white shadow-lg"
            />
            <Button variant="primary" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download QR Code
            </Button>
          </div>
        )}
      </div>
    </ToolPageTemplate>
  );
}
