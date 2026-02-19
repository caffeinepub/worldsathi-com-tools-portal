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

export default function Converter1() {
  const tool = ALL_TOOLS.find((t) => t.id === 'unit-converter')!;
  const relatedTools = getRelatedTools(tool.id, ALL_TOOLS, 3);

  const [value, setValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('meters');
  const [toUnit, setToUnit] = useState<string>('feet');
  const [result, setResult] = useState<number | null>(null);

  const conversionRates: Record<string, number> = {
    meters: 1,
    feet: 3.28084,
    inches: 39.3701,
    kilometers: 0.001,
    miles: 0.000621371,
  };

  const handleConvert = () => {
    const val = parseFloat(value);
    if (!isNaN(val)) {
      const inMeters = val / conversionRates[fromUnit];
      const converted = inMeters * conversionRates[toUnit];
      setResult(converted);
    }
  };

  const handleReset = () => {
    setValue('');
    setResult(null);
  };

  const faqs = [
    {
      question: 'What units can I convert?',
      answer: 'You can convert length (meters, kilometers, miles, feet) and weight (kilograms, pounds, ounces, grams).',
    },
    {
      question: 'How accurate are the conversions?',
      answer: 'All conversions use standard conversion factors and are accurate to several decimal places.',
    },
    {
      question: 'Can I convert temperature?',
      answer: 'Temperature conversion will be added in a future update. Currently, we support length and weight.',
    },
    {
      question: 'Is this tool free?',
      answer: 'Yes, all our tools are completely free to use with no signup required.',
    },
    {
      question: 'Can I use this on mobile?',
      answer: 'Yes, this tool is fully responsive and works great on mobile devices.',
    },
  ];

  return (
    <ToolPageTemplate
      tool={tool}
      gradientFilename="tool-unit-converter-gradient.dim_1200x300.png"
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="value">Value</Label>
          <Input
            id="value"
            type="number"
            placeholder="Enter value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fromUnit">From</Label>
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger id="fromUnit">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="meters">Meters</SelectItem>
                <SelectItem value="feet">Feet</SelectItem>
                <SelectItem value="inches">Inches</SelectItem>
                <SelectItem value="kilometers">Kilometers</SelectItem>
                <SelectItem value="miles">Miles</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="toUnit">To</Label>
            <Select value={toUnit} onValueChange={setToUnit}>
              <SelectTrigger id="toUnit">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="meters">Meters</SelectItem>
                <SelectItem value="feet">Feet</SelectItem>
                <SelectItem value="inches">Inches</SelectItem>
                <SelectItem value="kilometers">Kilometers</SelectItem>
                <SelectItem value="miles">Miles</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="primary" onClick={handleConvert} className="flex-1">
            Convert
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>

        {result !== null && (
          <div className="p-6 bg-primary/10 border-2 border-primary rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Result:</p>
            <p className="text-3xl font-bold text-primary">
              {result.toFixed(4)} {toUnit}
            </p>
          </div>
        )}
      </div>
    </ToolPageTemplate>
  );
}
