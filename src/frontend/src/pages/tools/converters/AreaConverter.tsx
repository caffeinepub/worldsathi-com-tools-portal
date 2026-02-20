import React, { useState } from 'react';
import ToolPageTemplate from '../ToolPageTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getToolById } from '@/constants/tools';
import { Maximize2 } from 'lucide-react';

type AreaUnit = 'sqm' | 'sqft' | 'acre' | 'hectare' | 'sqkm';

const conversionRates: Record<AreaUnit, number> = {
  sqm: 1,
  sqft: 10.7639,
  acre: 0.000247105,
  hectare: 0.0001,
  sqkm: 0.000001,
};

const unitLabels: Record<AreaUnit, string> = {
  sqm: 'Square Meters (m²)',
  sqft: 'Square Feet (ft²)',
  acre: 'Acres',
  hectare: 'Hectares',
  sqkm: 'Square Kilometers (km²)',
};

export default function AreaConverter() {
  const tool = getToolById('area-converter');
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState<AreaUnit>('sqm');
  const [toUnit, setToUnit] = useState<AreaUnit>('sqft');
  const [result, setResult] = useState<number | null>(null);

  const convertArea = () => {
    const inputValue = parseFloat(value);
    if (isNaN(inputValue)) return;

    const valueInSqm = inputValue / conversionRates[fromUnit];
    const convertedValue = valueInSqm * conversionRates[toUnit];
    setResult(convertedValue);
  };

  const handleReset = () => {
    setValue('');
    setResult(null);
  };

  if (!tool) return <div>Tool not found</div>;

  const relatedTools = [
    getToolById('unit-converter'),
    getToolById('speed-converter'),
    getToolById('weight-converter'),
  ].filter((t): t is NonNullable<typeof t> => t !== undefined);

  return (
    <ToolPageTemplate
      tool={tool}
      gradientFilename="tool-area-converter-hero-gradient.dim_1200x400.png"
      faqs={tool.faqs || []}
      relatedTools={relatedTools}
    >
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="value" className="flex items-center gap-2">
                  <Maximize2 className="h-4 w-4" />
                  Area Value
                </Label>
                <Input
                  id="value"
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Enter area value"
                  min="0"
                  step="any"
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fromUnit">From</Label>
                  <Select value={fromUnit} onValueChange={(value) => setFromUnit(value as AreaUnit)}>
                    <SelectTrigger id="fromUnit" className="mt-2 bg-white dark:bg-gray-800">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(unitLabels).map(([key, label]) => (
                        <SelectItem key={key} value={key}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="toUnit">To</Label>
                  <Select value={toUnit} onValueChange={(value) => setToUnit(value as AreaUnit)}>
                    <SelectTrigger id="toUnit" className="mt-2 bg-white dark:bg-gray-800">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(unitLabels).map(([key, label]) => (
                        <SelectItem key={key} value={key}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={convertArea} disabled={!value} className="flex-1 border-2 border-primary">
                  Convert
                </Button>
                <Button onClick={handleReset} variant="outline" className="border-2">
                  Reset
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {result !== null && (
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Result</h3>
              <p className="text-3xl font-bold text-primary">
                {result.toFixed(6)} {unitLabels[toUnit].split('(')[0].trim()}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {value} {unitLabels[fromUnit].split('(')[0].trim()} = {result.toFixed(6)}{' '}
                {unitLabels[toUnit].split('(')[0].trim()}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </ToolPageTemplate>
  );
}
