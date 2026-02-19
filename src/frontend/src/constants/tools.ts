import type { ToolMetadata } from '../types/tools';

// Foundation phase: 8 essential tools across diverse categories
export const ALL_TOOLS: ToolMetadata[] = [
  // Calculators
  { 
    id: 'percentage-calculator', 
    name: 'Percentage Calculator', 
    description: 'Calculate percentages, increases, and decreases instantly', 
    category: 'calculators', 
    icon: '/assets/generated/icon-calculator.dim_64x64.png', 
    path: '/tools/percentage-calculator', 
    tags: ['math', 'percentage'],
    introduction: 'Our percentage calculator helps you quickly calculate percentages, percentage increases, decreases, and differences. Perfect for students, professionals, and anyone needing quick percentage calculations.',
    usabilitySteps: [
      'Enter the base value in the first input field',
      'Enter the percentage or comparison value in the second field',
      'Click the "Calculate" button to see the result',
      'View the detailed breakdown of your calculation',
      'Use the "Reset" button to start a new calculation'
    ]
  },
  { 
    id: 'bmi-calculator', 
    name: 'BMI Calculator', 
    description: 'Calculate your Body Mass Index and health category', 
    category: 'calculators', 
    icon: '/assets/generated/icon-calculator.dim_64x64.png', 
    path: '/tools/bmi-calculator', 
    tags: ['health', 'fitness'],
    subcategory: 'Health',
    introduction: 'Calculate your Body Mass Index (BMI) to understand your weight category and health status. Our BMI calculator provides instant results with health recommendations based on WHO standards.',
    usabilitySteps: [
      'Enter your weight in kilograms or pounds',
      'Enter your height in centimeters or feet/inches',
      'Click "Calculate BMI" to see your results',
      'Review your BMI score and health category',
      'Read the personalized health recommendations'
    ]
  },
  
  // Converters
  { 
    id: 'unit-converter', 
    name: 'Unit Converter', 
    description: 'Convert between different units of measurement', 
    category: 'converters', 
    icon: '/assets/generated/icon-converter.dim_64x64.png', 
    path: '/tools/unit-converter', 
    tags: ['conversion', 'units'],
    introduction: 'Convert between various units of measurement including length, weight, temperature, and more. Our unit converter supports all common measurement systems.',
    usabilitySteps: [
      'Select the type of conversion (length, weight, etc.)',
      'Choose the unit you want to convert from',
      'Enter the value to convert',
      'Select the target unit',
      'Click "Convert" to see the result instantly'
    ]
  },
  { 
    id: 'currency-converter', 
    name: 'Currency Converter', 
    description: 'Convert between world currencies with live rates', 
    category: 'converters', 
    icon: '/assets/generated/icon-converter.dim_64x64.png', 
    path: '/tools/currency-converter', 
    tags: ['finance', 'currency'],
    subcategory: 'Finance',
    introduction: 'Convert between major world currencies with up-to-date exchange rates. Perfect for travelers, international business, and online shopping.',
    usabilitySteps: [
      'Enter the amount you want to convert',
      'Select the currency you are converting from',
      'Select the currency you want to convert to',
      'Click "Convert" to see the current exchange rate',
      'View the converted amount and rate information'
    ]
  },
  
  // Generators
  { 
    id: 'password-generator', 
    name: 'Password Generator', 
    description: 'Generate secure, random passwords', 
    category: 'generators', 
    icon: '/assets/generated/icon-generator.dim_64x64.png', 
    path: '/tools/password-generator', 
    tags: ['security', 'password'],
    introduction: 'Create strong, secure passwords with our advanced password generator. Customize length and character types to meet any security requirement.',
    usabilitySteps: [
      'Set your desired password length using the slider',
      'Select character types (uppercase, lowercase, numbers, symbols)',
      'Click "Generate Password" to create a secure password',
      'Copy the generated password to your clipboard',
      'Generate multiple passwords until you find one you like'
    ]
  },
  { 
    id: 'qr-code-generator', 
    name: 'QR Code Generator', 
    description: 'Create QR codes for URLs, text, and more', 
    category: 'generators', 
    icon: '/assets/generated/icon-generator.dim_64x64.png', 
    path: '/tools/qr-code-generator', 
    tags: ['qr', 'code'],
    introduction: 'Generate QR codes instantly for URLs, text, contact information, and more. Download high-quality QR codes for print or digital use.',
    usabilitySteps: [
      'Enter the text or URL you want to encode',
      'Click "Generate QR Code" to create your code',
      'Preview the generated QR code',
      'Download the QR code image for your use',
      'Test the QR code with your mobile device'
    ]
  },
  
  // Analyzers
  { 
    id: 'text-analyzer', 
    name: 'Text Analyzer', 
    description: 'Analyze text for word count, readability, and more', 
    category: 'analyzers', 
    icon: '/assets/generated/icon-analyzer.dim_64x64.png', 
    path: '/tools/text-analyzer', 
    tags: ['text', 'analysis'],
    introduction: 'Analyze your text for word count, character count, reading time, and more. Perfect for writers, students, and content creators.',
    usabilitySteps: [
      'Paste or type your text into the text area',
      'Click "Analyze" to process your text',
      'View detailed statistics including word and character counts',
      'Check reading time and sentence analysis',
      'Use the insights to improve your writing'
    ]
  },
  
  // Productivity
  { 
    id: 'pomodoro-timer', 
    name: 'Pomodoro Timer', 
    description: 'Boost productivity with the Pomodoro Technique', 
    category: 'productivity', 
    icon: '/assets/generated/icon-productivity.dim_64x64.png', 
    path: '/tools/pomodoro-timer', 
    tags: ['productivity', 'timer'],
    introduction: 'Improve your focus and productivity with the Pomodoro Technique. Work in focused 25-minute intervals with short breaks in between.',
    usabilitySteps: [
      'Click "Start" to begin a 25-minute work session',
      'Focus on your task until the timer completes',
      'Take a 5-minute break when prompted',
      'Repeat the cycle to maintain productivity',
      'After 4 cycles, take a longer 15-minute break'
    ]
  },
];
