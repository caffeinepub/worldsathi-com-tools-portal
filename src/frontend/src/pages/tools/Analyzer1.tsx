import React, { useState } from 'react';
import ToolPageTemplate from './ToolPageTemplate';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/Button';
import { ALL_TOOLS } from '@/constants/tools';
import { getRelatedTools } from '@/utils/toolHelpers';

export default function Analyzer1() {
  const tool = ALL_TOOLS.find((t) => t.id === 'text-analyzer')!;
  const relatedTools = getRelatedTools(tool.id, ALL_TOOLS, 3);

  const [text, setText] = useState<string>('');
  const [stats, setStats] = useState<{
    characters: number;
    words: number;
    sentences: number;
    paragraphs: number;
  } | null>(null);

  const handleAnalyze = () => {
    const characters = text.length;
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const sentences = text.split(/[.!?]+/).filter(Boolean).length;
    const paragraphs = text.split(/\n\n+/).filter(Boolean).length;

    setStats({ characters, words, sentences, paragraphs });
  };

  const handleReset = () => {
    setText('');
    setStats(null);
  };

  const faqs = [
    {
      question: 'What metrics are analyzed?',
      answer: 'We analyze character count, word count, sentence count, and paragraph count.',
    },
    {
      question: 'Is my text stored?',
      answer: 'No, all analysis is done client-side. Your text never leaves your browser.',
    },
    {
      question: 'Can I analyze multiple texts?',
      answer: 'Yes, simply clear the current text and paste new text to analyze again.',
    },
    {
      question: 'What is the character limit?',
      answer: 'There is no hard limit, but very large texts may take longer to analyze.',
    },
    {
      question: 'How are sentences counted?',
      answer: 'Sentences are counted by detecting periods, exclamation marks, and question marks.',
    },
  ];

  return (
    <ToolPageTemplate
      tool={tool}
      gradientFilename="tool-text-analyzer-gradient.dim_1200x300.png"
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="text">Enter Text</Label>
          <Textarea
            id="text"
            placeholder="Type or paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={10}
          />
        </div>

        <div className="flex gap-4">
          <Button variant="primary" onClick={handleAnalyze} className="flex-1">
            Analyze Text
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>

        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-primary/10 border-2 border-primary rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">Characters</p>
              <p className="text-2xl font-bold text-primary">{stats.characters}</p>
            </div>
            <div className="p-4 bg-primary/10 border-2 border-primary rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">Words</p>
              <p className="text-2xl font-bold text-primary">{stats.words}</p>
            </div>
            <div className="p-4 bg-primary/10 border-2 border-primary rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">Sentences</p>
              <p className="text-2xl font-bold text-primary">{stats.sentences}</p>
            </div>
            <div className="p-4 bg-primary/10 border-2 border-primary rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">Paragraphs</p>
              <p className="text-2xl font-bold text-primary">{stats.paragraphs}</p>
            </div>
          </div>
        )}
      </div>
    </ToolPageTemplate>
  );
}
