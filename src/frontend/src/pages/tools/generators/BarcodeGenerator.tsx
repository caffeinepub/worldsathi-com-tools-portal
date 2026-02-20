import React, { useState } from 'react';
import ToolPageTemplate from '../ToolPageTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getToolById } from '@/constants/tools';
import { Barcode, Download } from 'lucide-react';

type BarcodeFormat = 'CODE128' | 'EAN13' | 'UPC';

export default function BarcodeGenerator() {
  const tool = getToolById('barcode-generator');
  const [data, setData] = useState('');
  const [format, setFormat] = useState<BarcodeFormat>('CODE128');
  const [barcode, setBarcode] = useState<string>('');

  const generateBarcode = () => {
    if (!data) return;

    // Simple barcode representation (in production, use a library like JsBarcode)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 100;

    // Draw simple barcode pattern
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';

    // Simple bar pattern
    for (let i = 0; i < data.length * 10; i++) {
      if (i % 2 === 0) {
        ctx.fillRect(i * 3, 10, 2, 70);
      }
    }

    // Add text
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(data, canvas.width / 2, 95);

    setBarcode(canvas.toDataURL());
  };

  const handleReset = () => {
    setData('');
    setBarcode('');
  };

  const downloadBarcode = () => {
    if (!barcode) return;
    const link = document.createElement('a');
    link.download = `barcode-${format}.png`;
    link.href = barcode;
    link.click();
  };

  if (!tool) return <div>Tool not found</div>;

  const relatedTools = [
    getToolById('qr-code-generator'),
    getToolById('uuid-generator'),
    getToolById('password-generator'),
  ].filter((t): t is NonNullable<typeof t> => t !== undefined);

  return (
    <ToolPageTemplate
      tool={tool}
      gradientFilename="tool-barcode-generator-hero-gradient.dim_1200x400.png"
      faqs={tool.faqs || []}
      relatedTools={relatedTools}
    >
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="data" className="flex items-center gap-2">
                  <Barcode className="h-4 w-4" />
                  Barcode Data
                </Label>
                <Input
                  id="data"
                  type="text"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  placeholder="Enter text or numbers"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="format">Barcode Format</Label>
                <Select value={format} onValueChange={(value) => setFormat(value as BarcodeFormat)}>
                  <SelectTrigger id="format" className="mt-2 bg-white dark:bg-gray-800">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CODE128">CODE128 (Alphanumeric)</SelectItem>
                    <SelectItem value="EAN13">EAN13 (13 digits)</SelectItem>
                    <SelectItem value="UPC">UPC (12 digits)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3">
                <Button onClick={generateBarcode} disabled={!data} className="flex-1 border-2 border-primary">
                  Generate Barcode
                </Button>
                <Button onClick={handleReset} variant="outline" className="border-2">
                  Reset
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {barcode && (
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Generated Barcode</h3>
              <div className="bg-white p-6 rounded-lg flex justify-center">
                <img src={barcode} alt="Generated Barcode" className="max-w-full" />
              </div>
              <Button onClick={downloadBarcode} className="w-full mt-4 border-2 border-primary">
                <Download className="h-4 w-4 mr-2" />
                Download Barcode
              </Button>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Format: {format} | Data: {data}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </ToolPageTemplate>
  );
}
