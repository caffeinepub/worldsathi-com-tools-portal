import React, { useState } from 'react';
import ToolPageTemplate from '../ToolPageTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { getToolById } from '@/constants/tools';
import { Percent, DollarSign } from 'lucide-react';

export default function DiscountCalculator() {
  const tool = getToolById('discount-calculator');
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');
  const [result, setResult] = useState<{
    discountAmount: number;
    finalPrice: number;
    savings: number;
  } | null>(null);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);

    if (isNaN(price) || isNaN(discount) || price <= 0 || discount < 0 || discount > 100) {
      return;
    }

    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    const savings = discount;

    setResult({
      discountAmount,
      finalPrice,
      savings,
    });
  };

  const handleReset = () => {
    setOriginalPrice('');
    setDiscountPercent('');
    setResult(null);
  };

  if (!tool) return <div>Tool not found</div>;

  const relatedTools = [
    getToolById('percentage-calculator'),
    getToolById('tip-calculator'),
    getToolById('loan-calculator'),
  ].filter((t): t is NonNullable<typeof t> => t !== undefined);

  return (
    <ToolPageTemplate
      tool={tool}
      gradientFilename="tool-discount-calculator-hero-gradient.dim_1200x400.png"
      faqs={tool.faqs || []}
      relatedTools={relatedTools}
    >
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="originalPrice" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Original Price
                </Label>
                <Input
                  id="originalPrice"
                  type="number"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  placeholder="Enter original price"
                  min="0"
                  step="0.01"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="discountPercent" className="flex items-center gap-2">
                  <Percent className="h-4 w-4" />
                  Discount Percentage
                </Label>
                <Input
                  id="discountPercent"
                  type="number"
                  value={discountPercent}
                  onChange={(e) => setDiscountPercent(e.target.value)}
                  placeholder="Enter discount percentage"
                  min="0"
                  max="100"
                  step="0.1"
                  className="mt-2"
                />
              </div>

              <div className="flex gap-3">
                <Button onClick={calculateDiscount} className="flex-1 border-2 border-primary">
                  Calculate
                </Button>
                <Button onClick={handleReset} variant="outline" className="border-2">
                  Reset
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {result && (
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Discount Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-muted-foreground">Original Price:</span>
                  <span className="font-semibold">${parseFloat(originalPrice).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-muted-foreground">Discount ({result.savings}%):</span>
                  <span className="font-semibold text-destructive">-${result.discountAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border-2 border-primary">
                  <span className="font-semibold">Final Price:</span>
                  <span className="text-2xl font-bold text-primary">${result.finalPrice.toFixed(2)}</span>
                </div>
                <div className="text-center p-3 bg-accent/10 rounded-lg">
                  <span className="text-sm text-muted-foreground">You save </span>
                  <span className="font-bold text-accent">${result.discountAmount.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </ToolPageTemplate>
  );
}
