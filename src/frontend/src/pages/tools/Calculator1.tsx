import React, { useState } from 'react';
import ToolPageTemplate from './ToolPageTemplate';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/Button';
import { ALL_TOOLS } from '@/constants/tools';
import { getRelatedTools } from '@/utils/toolHelpers';

export default function Calculator1() {
  const tool = ALL_TOOLS.find((t) => t.id === 'percentage-calculator')!;
  const relatedTools = getRelatedTools(tool.id, ALL_TOOLS, 3);

  const [value, setValue] = useState<string>('');
  const [percentage, setPercentage] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const val = parseFloat(value);
    const pct = parseFloat(percentage);

    if (!isNaN(val) && !isNaN(pct)) {
      const calculatedResult = (val * pct) / 100;
      setResult(calculatedResult);
    }
  };

  const handleReset = () => {
    setValue('');
    setPercentage('');
    setResult(null);
  };

  const faqs = [
    {
      question: 'How do I calculate a percentage?',
      answer: 'Enter the base value and the percentage you want to calculate. Click Calculate to see the result.',
    },
    {
      question: 'Can I calculate percentage increases?',
      answer: 'Yes! Enter your original value and the percentage increase to see the new value.',
    },
    {
      question: 'What is the formula for percentage calculation?',
      answer: 'The formula is: (Value × Percentage) ÷ 100. For example, 20% of 100 is (100 × 20) ÷ 100 = 20.',
    },
    {
      question: 'Can I calculate percentage decreases?',
      answer: 'Yes, enter a negative percentage to calculate decreases. For example, -10% of 100 gives you -10.',
    },
    {
      question: 'Is this calculator accurate?',
      answer: 'Yes, this calculator uses standard mathematical formulas and provides accurate results up to 2 decimal places.',
    },
  ];

  return (
    <ToolPageTemplate
      tool={tool}
      gradientFilename="tool-percentage-calculator-gradient.dim_1200x300.png"
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div className="space-y-2">
            <Label htmlFor="percentage">Percentage (%)</Label>
            <Input
              id="percentage"
              type="number"
              placeholder="Enter percentage"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="primary" onClick={handleCalculate} className="flex-1">
            Calculate
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>

        {result !== null && (
          <div className="p-6 bg-primary/10 border-2 border-primary rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Result:</p>
            <p className="text-3xl font-bold text-primary">
              {result.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </ToolPageTemplate>
  );
}
