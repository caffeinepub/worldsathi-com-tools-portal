import React, { useState } from 'react';
import ToolPageTemplate from './ToolPageTemplate';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/Button';
import { ALL_TOOLS } from '@/constants/tools';
import { getRelatedTools } from '@/utils/toolHelpers';

export default function Calculator3() {
  const tool = ALL_TOOLS.find((t) => t.id === 'bmi-calculator')!;
  const relatedTools = getRelatedTools(tool.id, ALL_TOOLS, 3);

  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // Convert cm to meters

    if (!isNaN(w) && !isNaN(h) && h > 0) {
      const calculatedBmi = w / (h * h);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setCategory('Underweight');
      } else if (calculatedBmi < 25) {
        setCategory('Normal weight');
      } else if (calculatedBmi < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
  };

  const faqs = [
    {
      question: 'What is BMI?',
      answer: 'Body Mass Index (BMI) is a measure of body fat based on height and weight. It provides a general indication of whether you are underweight, normal weight, overweight, or obese.',
    },
    {
      question: 'How is BMI calculated?',
      answer: 'BMI is calculated by dividing your weight in kilograms by your height in meters squared (kg/m²). For example, if you weigh 70 kg and are 1.75 m tall, your BMI is 70 / (1.75 × 1.75) = 22.86.',
    },
    {
      question: 'What is a healthy BMI range?',
      answer: 'A healthy BMI for adults is typically between 18.5 and 24.9. Below 18.5 is considered underweight, 25-29.9 is overweight, and 30 or above is obese.',
    },
    {
      question: 'Is BMI accurate for everyone?',
      answer: 'BMI is a useful screening tool but has limitations. It does not account for muscle mass, bone density, or body composition. Athletes and very muscular individuals may have high BMIs despite being healthy.',
    },
    {
      question: 'Should I use BMI to track my health?',
      answer: 'BMI is one of many health indicators. Combine it with other measurements like waist circumference, body fat percentage, and overall fitness level for a complete picture of your health.',
    },
  ];

  return (
    <ToolPageTemplate
      tool={tool}
      gradientFilename="tool-bmi-calculator-gradient.dim_1200x300.png"
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="Enter height in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="primary" onClick={handleCalculate} className="flex-1">
            Calculate BMI
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>

        {bmi !== null && (
          <div className="p-6 bg-primary/10 border-2 border-primary rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Your BMI:</p>
            <p className="text-3xl font-bold text-primary mb-2">
              {bmi.toFixed(1)}
            </p>
            <p className="text-lg font-semibold text-foreground">
              Category: {category}
            </p>
          </div>
        )}
      </div>
    </ToolPageTemplate>
  );
}
