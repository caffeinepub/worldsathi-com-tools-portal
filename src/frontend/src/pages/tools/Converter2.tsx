import React, { useState } from 'react';
import ToolPageTemplate from './ToolPageTemplate';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/Button';
import { ALL_TOOLS } from '@/constants/tools';
import { getRelatedTools } from '@/utils/toolHelpers';

export default function Converter2() {
  const tool = ALL_TOOLS.find((t) => t.id === 'currency-converter')!;
  const relatedTools = getRelatedTools(tool.id, ALL_TOOLS, 3);

  const [amount, setAmount] = useState<string>('');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [result, setResult] = useState<number | null>(null);

  // Mock exchange rates (in a real app, fetch from an API)
  const exchangeRates: Record<string, number> = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.0,
    INR: 74.5,
  };

  const handleConvert = () => {
    const amt = parseFloat(amount);
    if (!isNaN(amt)) {
      const inUSD = amt / exchangeRates[fromCurrency];
      const converted = inUSD * exchangeRates[toCurrency];
      setResult(converted);
    }
  };

  const handleReset = () => {
    setAmount('');
    setResult(null);
  };

  const faqs = [
    {
      question: 'Are the exchange rates live?',
      answer: 'The rates shown are indicative. For real-time rates, please check with your financial institution.',
    },
    {
      question: 'What currencies are supported?',
      answer: 'We support major currencies including USD, EUR, GBP, JPY, and INR.',
    },
    {
      question: 'How often are rates updated?',
      answer: 'Rates are updated periodically. For the most accurate rates, consult your bank or financial service.',
    },
    {
      question: 'Can I convert cryptocurrency?',
      answer: 'Cryptocurrency conversion will be added in a future update.',
    },
    {
      question: 'Is this tool accurate for large amounts?',
      answer: 'This tool provides estimates. For large transactions, always verify with your financial institution.',
    },
  ];

  return (
    <ToolPageTemplate
      tool={tool}
      gradientFilename="tool-currency-converter-gradient.dim_1200x300.png"
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fromCurrency">From</Label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger id="fromCurrency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="GBP">GBP</SelectItem>
                <SelectItem value="JPY">JPY</SelectItem>
                <SelectItem value="INR">INR</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="toCurrency">To</Label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger id="toCurrency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="GBP">GBP</SelectItem>
                <SelectItem value="JPY">JPY</SelectItem>
                <SelectItem value="INR">INR</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="primary" onClick={handleConvert} className="flex-1">
            Convert Currency
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>

        {result !== null && (
          <div className="p-6 bg-primary/10 border-2 border-primary rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Result:</p>
            <p className="text-3xl font-bold text-primary">
              {result.toFixed(2)} {toCurrency}
            </p>
          </div>
        )}
      </div>
    </ToolPageTemplate>
  );
}
