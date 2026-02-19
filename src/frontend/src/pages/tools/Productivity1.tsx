import React, { useState, useEffect } from 'react';
import ToolPageTemplate from './ToolPageTemplate';
import { Button } from '@/components/Button';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { ALL_TOOLS } from '@/constants/tools';
import { getRelatedTools } from '@/utils/toolHelpers';

export default function Productivity1() {
  const tool = ALL_TOOLS.find((t) => t.id === 'pomodoro-timer')!;
  const relatedTools = getRelatedTools(tool.id, ALL_TOOLS, 3);

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer finished
            setIsActive(false);
            if (isBreak) {
              setMinutes(25);
              setIsBreak(false);
            } else {
              setMinutes(5);
              setIsBreak(true);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, minutes, seconds, isBreak]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
    setIsBreak(false);
  };

  const faqs = [
    {
      question: 'What is the Pomodoro Technique?',
      answer: 'The Pomodoro Technique is a time management method that uses 25-minute focused work sessions followed by 5-minute breaks.',
    },
    {
      question: 'How do I use this timer?',
      answer: 'Click Start to begin a 25-minute work session. When it ends, take a 5-minute break. Repeat as needed.',
    },
    {
      question: 'Can I customize the timer duration?',
      answer: 'The standard Pomodoro is 25 minutes of work and 5 minutes of break. Custom durations may be added in future updates.',
    },
    {
      question: 'Will I get a notification when time is up?',
      answer: 'Currently, the timer stops automatically. Audio notifications may be added in a future update.',
    },
    {
      question: 'How many Pomodoros should I do per day?',
      answer: 'Most people do 4-8 Pomodoros per day, depending on their schedule and energy levels.',
    },
  ];

  return (
    <ToolPageTemplate
      tool={tool}
      gradientFilename="tool-pomodoro-timer-gradient.dim_1200x300.png"
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <div className="space-y-8">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            {isBreak ? 'Break Time' : 'Work Time'}
          </p>
          <div className="text-7xl font-bold text-primary mb-8">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
        </div>

        <div className="flex justify-center gap-4">
          {!isActive ? (
            <Button variant="primary" onClick={handleStart} size="lg">
              <Play className="w-5 h-5 mr-2" />
              Start
            </Button>
          ) : (
            <Button variant="primary" onClick={handlePause} size="lg">
              <Pause className="w-5 h-5 mr-2" />
              Pause
            </Button>
          )}
          <Button variant="secondary" onClick={handleReset} size="lg">
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset
          </Button>
        </div>
      </div>
    </ToolPageTemplate>
  );
}
