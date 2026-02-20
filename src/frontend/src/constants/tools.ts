import type { ToolMetadata } from '../types/tools';

// Comprehensive toolkit: 13 tools across calculators, converters, and text-tools categories
export const ALL_TOOLS: ToolMetadata[] = [
  // ==================== CALCULATORS ====================
  { 
    id: 'percentage-calculator',
    name: 'Percentage Calculator', 
    description: 'Calculate percentages, increases, and decreases instantly', 
    category: 'calculators', 
    icon: 'Percent',
    path: '/tools/calculators/percentage-calculator', 
    tags: ['math', 'percentage', 'calculator', 'finance'],
    isNew: false,
    usabilitySteps: [
      'Enter the base value in the first input field',
      'Enter the percentage or comparison value in the second field',
      'Click the "Calculate" button to see the result',
      'View the detailed breakdown of your calculation',
      'Use the Reset button to clear and start over'
    ],
    aboutContent: {
      introduction: 'The Percentage Calculator is a versatile tool designed to simplify percentage calculations for everyday use. Whether you need to calculate discounts, tax amounts, grade percentages, or financial changes, this tool provides instant and accurate results.',
      keyFeatures: [
        'Calculate percentage of any number instantly',
        'Find percentage increase or decrease between two values',
        'Determine what percentage one number is of another',
        'Reverse percentage calculations to find original values',
        'Real-time calculation as you type',
        'Clear visual display of results'
      ],
      whoBenefits: [
        'Students calculating grades and test scores',
        'Shoppers comparing discounts and sale prices',
        'Business professionals analyzing financial data',
        'Teachers grading assignments',
        'Anyone needing quick percentage calculations'
      ],
      whyChoose: [
        'Instant calculations with no waiting',
        'Multiple calculation modes in one tool',
        'No registration or installation required',
        'Works on all devices and browsers',
        'Completely free to use'
      ]
    },
    faqs: [
      { question: 'How do I calculate percentage increase?', answer: 'Enter the original value and the new value, then select the percentage increase option. The calculator will show you the percentage change.' },
      { question: 'Can I calculate discounts?', answer: 'Yes, enter the original price and discount percentage to see the final price and amount saved.' },
      { question: 'Is this tool free?', answer: 'Yes, completely free with no registration required. Use it as many times as you need.' },
      { question: 'How accurate are the calculations?', answer: 'Our calculator uses precise mathematical formulas for 100% accuracy in all percentage calculations.' },
      { question: 'Can I use this on mobile?', answer: 'Yes, the tool is fully responsive and works perfectly on smartphones, tablets, and desktop computers.' },
      { question: 'What is the formula for percentage?', answer: 'Percentage = (Part / Whole) × 100. For example, 25 out of 100 is (25/100) × 100 = 25%.' }
    ]
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index and health category',
    category: 'calculators',
    icon: 'Activity',
    path: '/tools/calculators/bmi-calculator',
    tags: ['health', 'fitness', 'bmi', 'calculator', 'wellness'],
    isNew: false,
    usabilitySteps: [
      'Enter your weight in kilograms or pounds',
      'Enter your height in centimeters or feet/inches',
      'Click "Calculate" to see your BMI',
      'View your BMI category and health recommendations',
      'Use Reset to calculate for different values'
    ],
    aboutContent: {
      introduction: 'The BMI Calculator helps you determine your Body Mass Index, a widely used indicator of healthy body weight. Understanding your BMI can help you make informed decisions about your health and fitness goals.',
      keyFeatures: [
        'Calculate BMI using metric or imperial units',
        'Instant BMI category classification',
        'Health recommendations based on your BMI',
        'Support for both kg/cm and lbs/inches',
        'Color-coded BMI categories for easy understanding',
        'Educational information about BMI ranges'
      ],
      whoBenefits: [
        'Individuals monitoring their health and fitness',
        'People starting a weight loss or gain journey',
        'Healthcare professionals doing quick assessments',
        'Fitness enthusiasts tracking progress',
        'Anyone curious about their health metrics'
      ],
      whyChoose: [
        'Medically accurate BMI calculations',
        'Clear category explanations (Underweight, Normal, Overweight, Obese)',
        'Flexible unit options for global users',
        'Privacy-focused - no data stored',
        'Instant results with health guidance'
      ]
    },
    faqs: [
      { question: 'What is BMI?', answer: 'BMI (Body Mass Index) is a measure of body fat based on height and weight. It is calculated as weight (kg) divided by height squared (m²).' },
      { question: 'What is a healthy BMI range?', answer: 'A healthy BMI is typically between 18.5 and 24.9. Below 18.5 is underweight, 25-29.9 is overweight, and 30+ is obese.' },
      { question: 'Is BMI accurate for everyone?', answer: 'BMI is a general indicator but may not be accurate for athletes, pregnant women, elderly, or children. Consult a healthcare provider for personalized assessment.' },
      { question: 'Can I use pounds and inches?', answer: 'Yes! The calculator supports both metric (kg, cm) and imperial (lbs, inches) units for your convenience.' },
      { question: 'How often should I check my BMI?', answer: 'Monthly checks are sufficient for most people. More frequent monitoring may be helpful if you are actively working on weight goals.' },
      { question: 'Does BMI account for muscle mass?', answer: 'No, BMI does not distinguish between muscle and fat. Athletes with high muscle mass may have high BMI but low body fat.' }
    ]
  },
  {
    id: 'tip-calculator',
    name: 'Tip Calculator',
    description: 'Calculate tips and split bills easily',
    category: 'calculators',
    icon: 'DollarSign',
    path: '/tools/calculators/tip-calculator',
    tags: ['tip', 'calculator', 'restaurant', 'bill', 'split'],
    isNew: false,
    usabilitySteps: [
      'Enter the total bill amount',
      'Select or enter the tip percentage',
      'Enter the number of people to split the bill',
      'View the tip amount and total per person',
      'Use preset tip percentages for quick calculations'
    ],
    aboutContent: {
      introduction: 'The Tip Calculator makes dining out stress-free by instantly calculating tips and splitting bills among multiple people. Perfect for restaurants, cafes, and any service where tipping is customary.',
      keyFeatures: [
        'Calculate tips with any percentage',
        'Preset tip options (15%, 18%, 20%, 25%)',
        'Split bills among multiple people',
        'See total amount including tip',
        'Calculate per-person cost automatically',
        'Round up options for convenience'
      ],
      whoBenefits: [
        'Diners wanting to tip appropriately',
        'Groups splitting restaurant bills',
        'People unfamiliar with local tipping customs',
        'Anyone wanting quick and accurate calculations',
        'Service industry workers checking their tips'
      ],
      whyChoose: [
        'Instant calculations with preset percentages',
        'Easy bill splitting for groups',
        'No math errors or awkward moments',
        'Works for any currency',
        'Simple and intuitive interface'
      ]
    },
    faqs: [
      { question: 'What is a standard tip percentage?', answer: 'In the US, 15-20% is standard for good service. 18% is common, while 20-25% is for excellent service.' },
      { question: 'How do I split a bill evenly?', answer: 'Enter the total bill, select your tip percentage, and enter the number of people. The calculator shows the amount each person pays.' },
      { question: 'Can I use this for other currencies?', answer: 'Yes! The calculator works with any currency. Just enter the amount and it will calculate the tip and split accordingly.' },
      { question: 'Should I tip on the pre-tax or post-tax amount?', answer: 'This varies by region. In the US, it is common to tip on the pre-tax amount, but many people tip on the total including tax.' },
      { question: 'What if I want to tip a custom percentage?', answer: 'You can enter any custom percentage you like. The calculator is not limited to the preset options.' },
      { question: 'How do I handle uneven splits?', answer: 'This calculator splits evenly. For uneven splits, calculate each person\'s portion separately based on what they ordered.' }
    ]
  },
  {
    id: 'loan-calculator',
    name: 'Loan Calculator',
    description: 'Calculate monthly payments and total interest on loans',
    category: 'calculators',
    icon: 'Calculator',
    path: '/tools/calculators/loan-calculator',
    tags: ['loan', 'calculator', 'finance', 'mortgage', 'interest'],
    isNew: false,
    usabilitySteps: [
      'Enter the loan amount (principal)',
      'Enter the annual interest rate',
      'Enter the loan term in years',
      'Click Calculate to see monthly payment',
      'View total payment and total interest breakdown'
    ],
    aboutContent: {
      introduction: 'The Loan Calculator helps you understand the true cost of borrowing by calculating monthly payments, total interest, and total amount paid over the life of a loan. Essential for making informed financial decisions.',
      keyFeatures: [
        'Calculate monthly loan payments',
        'See total interest paid over loan term',
        'View total amount paid (principal + interest)',
        'Support for any loan amount and term',
        'Accurate amortization calculations',
        'Clear breakdown of payment components'
      ],
      whoBenefits: [
        'Home buyers planning mortgage payments',
        'Car buyers comparing auto loans',
        'Students evaluating education loans',
        'Business owners considering business loans',
        'Anyone comparing loan offers'
      ],
      whyChoose: [
        'Accurate amortization formula',
        'Clear display of all payment components',
        'Helps compare different loan scenarios',
        'Understand true cost of borrowing',
        'Make informed financial decisions'
      ]
    },
    faqs: [
      { question: 'How is monthly payment calculated?', answer: 'Monthly payment uses the amortization formula: M = P[r(1+r)^n]/[(1+r)^n-1], where P is principal, r is monthly interest rate, and n is number of payments.' },
      { question: 'What is the difference between principal and interest?', answer: 'Principal is the original loan amount you borrow. Interest is the cost of borrowing that money, paid to the lender.' },
      { question: 'Can I use this for mortgages?', answer: 'Yes! This calculator works for mortgages, auto loans, personal loans, and any fixed-rate loan with regular payments.' },
      { question: 'What is amortization?', answer: 'Amortization is the process of paying off a loan through regular payments. Early payments are mostly interest; later payments are mostly principal.' },
      { question: 'How can I reduce total interest paid?', answer: 'Make extra principal payments, choose a shorter loan term, or negotiate a lower interest rate to reduce total interest.' },
      { question: 'Does this include taxes and insurance?', answer: 'No, this calculator shows only principal and interest. For mortgages, add property taxes, insurance, and HOA fees separately.' }
    ]
  },
  {
    id: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    description: 'Calculate compound interest and investment growth',
    category: 'calculators',
    icon: 'TrendingUp',
    path: '/tools/calculators/compound-interest',
    tags: ['compound', 'interest', 'investment', 'savings', 'calculator'],
    isNew: false,
    usabilitySteps: [
      'Enter your initial investment amount',
      'Enter the annual interest rate',
      'Enter the investment time period in years',
      'Select compounding frequency (annually, monthly, daily)',
      'View final amount and interest earned'
    ],
    aboutContent: {
      introduction: 'The Compound Interest Calculator shows how your investments grow over time with compound interest. Understanding compound interest is key to building wealth and planning for financial goals.',
      keyFeatures: [
        'Calculate compound interest with multiple frequencies',
        'Support for annual, semi-annual, quarterly, monthly, and daily compounding',
        'See final investment value',
        'View total interest earned',
        'Compare different compounding scenarios',
        'Accurate compound interest formula'
      ],
      whoBenefits: [
        'Investors planning long-term investments',
        'Savers comparing savings accounts',
        'Students learning about compound interest',
        'Retirement planners forecasting growth',
        'Anyone interested in wealth building'
      ],
      whyChoose: [
        'Accurate compound interest calculations',
        'Multiple compounding frequency options',
        'Clear display of growth over time',
        'Understand the power of compounding',
        'Make informed investment decisions'
      ]
    },
    faqs: [
      { question: 'What is compound interest?', answer: 'Compound interest is interest calculated on both the initial principal and accumulated interest from previous periods. It is "interest on interest."' },
      { question: 'How does compounding frequency affect returns?', answer: 'More frequent compounding (daily vs. annually) results in slightly higher returns because interest is calculated and added more often.' },
      { question: 'What is the compound interest formula?', answer: 'A = P(1 + r/n)^(nt), where A is final amount, P is principal, r is annual rate, n is compounding frequency, and t is time in years.' },
      { question: 'Is compound interest better than simple interest?', answer: 'Yes, compound interest grows faster because you earn interest on previously earned interest, creating exponential growth.' },
      { question: 'How often do banks compound interest?', answer: 'Most savings accounts compound daily or monthly. Investment accounts may compound quarterly or annually. Check with your financial institution.' },
      { question: 'Can I add regular contributions?', answer: 'This basic calculator shows growth of a single initial investment. For regular contributions, use a more advanced investment calculator.' }
    ]
  },

  // ==================== CONVERTERS ====================
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert between different units of measurement',
    category: 'converters',
    icon: 'ArrowLeftRight',
    path: '/tools/converters/unit-converter',
    tags: ['unit', 'converter', 'measurement', 'length', 'distance'],
    isNew: false,
    usabilitySteps: [
      'Enter the value you want to convert',
      'Select the unit you are converting from',
      'Select the unit you want to convert to',
      'Click Convert to see the result',
      'Use Reset to clear and start a new conversion'
    ],
    aboutContent: {
      introduction: 'The Unit Converter makes it easy to convert between different units of length and distance. Perfect for international projects, travel planning, or any situation requiring unit conversions.',
      keyFeatures: [
        'Convert between metric and imperial units',
        'Support for meters, feet, inches, kilometers, and miles',
        'Instant conversion with high precision',
        'Bidirectional conversion capability',
        'Clear display of conversion results',
        'No limit on values you can convert'
      ],
      whoBenefits: [
        'International travelers converting distances',
        'Students working on science and math problems',
        'Engineers and architects working with different standards',
        'DIY enthusiasts following international instructions',
        'Anyone needing quick unit conversions'
      ],
      whyChoose: [
        'Accurate conversion factors',
        'Support for both metric and imperial systems',
        'Simple and intuitive interface',
        'Instant results with no delays',
        'Works with any positive or negative value'
      ]
    },
    faqs: [
      { question: 'What units can I convert?', answer: 'This converter supports length units including meters, feet, inches, kilometers, and miles for comprehensive distance conversions.' },
      { question: 'How accurate are the conversions?', answer: 'Conversions use standard international conversion factors and are accurate to several decimal places for precision.' },
      { question: 'Can I convert between metric and imperial?', answer: 'Yes! You can convert between any combination of metric (meters, kilometers) and imperial (feet, inches, miles) units.' },
      { question: 'Is there a limit to the values I can convert?', answer: 'No, you can convert any positive or negative number, from microscopic to astronomical distances.' },
      { question: 'What is the difference between meters and feet?', answer: '1 meter equals approximately 3.28084 feet. Meters are used in the metric system, feet in the imperial system.' },
      { question: 'Can I convert other types of units?', answer: 'This tool focuses on length/distance. For other conversions (weight, temperature, etc.), use our specialized converters.' }
    ]
  },
  {
    id: 'currency-converter',
    name: 'Currency Converter',
    description: 'Convert between different world currencies',
    category: 'converters',
    icon: 'DollarSign',
    path: '/tools/converters/currency-converter',
    tags: ['currency', 'converter', 'money', 'exchange', 'forex'],
    isNew: false,
    usabilitySteps: [
      'Enter the amount you want to convert',
      'Select the currency you are converting from',
      'Select the currency you want to convert to',
      'Click Convert to see the exchange rate result',
      'Use Reset to perform another conversion'
    ],
    aboutContent: {
      introduction: 'The Currency Converter provides quick and easy currency conversions for major world currencies. Essential for international travelers, online shoppers, and anyone dealing with foreign exchange.',
      keyFeatures: [
        'Convert between major world currencies',
        'Support for USD, EUR, GBP, JPY, CAD, AUD',
        'Real-time exchange rate calculations',
        'Bidirectional currency conversion',
        'Clear display of converted amounts',
        'Works with any amount'
      ],
      whoBenefits: [
        'International travelers planning budgets',
        'Online shoppers buying from foreign sites',
        'Business professionals handling international transactions',
        'Forex traders checking exchange rates',
        'Anyone sending money internationally'
      ],
      whyChoose: [
        'Support for major global currencies',
        'Accurate exchange rate calculations',
        'Simple and fast conversions',
        'No registration required',
        'Free to use unlimited times'
      ]
    },
    faqs: [
      { question: 'Are the exchange rates real-time?', answer: 'Exchange rates are updated regularly to provide accurate conversions. For live trading, consult your bank or forex platform.' },
      { question: 'What currencies are supported?', answer: 'We support major world currencies including USD (US Dollar), EUR (Euro), GBP (British Pound), JPY (Japanese Yen), CAD (Canadian Dollar), and AUD (Australian Dollar).' },
      { question: 'Can I convert large amounts?', answer: 'Yes, you can convert any amount. Note that actual exchange rates may vary for large transactions and may include fees from your bank.' },
      { question: 'Do you charge fees for conversions?', answer: 'No, this is a free reference tool. Actual currency exchanges through banks or services may involve fees and different rates.' },
      { question: 'Why do exchange rates change?', answer: 'Exchange rates fluctuate based on economic factors, interest rates, political stability, and market demand for currencies.' },
      { question: 'Is this suitable for forex trading?', answer: 'This tool provides reference rates. For actual forex trading, use a dedicated trading platform with real-time market data.' }
    ]
  },
  {
    id: 'temperature-converter',
    name: 'Temperature Converter',
    description: 'Convert between Celsius, Fahrenheit, and Kelvin',
    category: 'converters',
    icon: 'Thermometer',
    path: '/tools/converters/temperature-converter',
    tags: ['temperature', 'converter', 'celsius', 'fahrenheit', 'kelvin'],
    isNew: false,
    usabilitySteps: [
      'Enter the temperature value',
      'Select the unit you are converting from (C, F, or K)',
      'Select the unit you want to convert to',
      'Click Convert to see the result',
      'View the conversion formula used'
    ],
    aboutContent: {
      introduction: 'The Temperature Converter makes it easy to convert between Celsius, Fahrenheit, and Kelvin temperature scales. Perfect for cooking, science, travel, and weather understanding.',
      keyFeatures: [
        'Convert between Celsius, Fahrenheit, and Kelvin',
        'Accurate temperature conversion formulas',
        'Display conversion formula for educational purposes',
        'Support for positive and negative temperatures',
        'Instant conversion results',
        'Clear explanation of temperature scales'
      ],
      whoBenefits: [
        'Travelers understanding weather in different countries',
        'Cooks following international recipes',
        'Students learning temperature scales',
        'Scientists working with different standards',
        'Anyone needing temperature conversions'
      ],
      whyChoose: [
        'Support for all three major temperature scales',
        'Accurate scientific conversion formulas',
        'Educational formula display',
        'Works with any temperature value',
        'Simple and intuitive interface'
      ]
    },
    faqs: [
      { question: 'What is the difference between Celsius and Fahrenheit?', answer: 'Celsius is based on water\'s freezing (0°C) and boiling (100°C) points. Fahrenheit uses 32°F for freezing and 212°F for boiling. Celsius is used in most countries, Fahrenheit primarily in the US.' },
      { question: 'When would I use Kelvin?', answer: 'Kelvin is used in scientific contexts, especially physics and chemistry. It is an absolute temperature scale starting at absolute zero (0 K = -273.15°C).' },
      { question: 'How do I convert Celsius to Fahrenheit?', answer: 'Use the formula: °F = (°C × 9/5) + 32. For example, 20°C = (20 × 9/5) + 32 = 68°F.' },
      { question: 'What is absolute zero?', answer: 'Absolute zero is 0 Kelvin (-273.15°C or -459.67°F), the theoretical lowest possible temperature where molecular motion stops.' },
      { question: 'Can I convert negative temperatures?', answer: 'Yes! The converter handles negative temperatures correctly for all three scales.' },
      { question: 'Which temperature scale is most common?', answer: 'Celsius is used by most countries worldwide. The US primarily uses Fahrenheit. Kelvin is used in scientific research globally.' }
    ]
  },

  // ==================== TEXT TOOLS ====================
  {
    id: 'character-counter',
    name: 'Character Counter',
    description: 'Count characters, words, sentences, and paragraphs',
    category: 'text-tools',
    icon: 'Type',
    path: '/tools/text-tools/character-counter',
    tags: ['text', 'counter', 'words', 'characters', 'statistics', 'analysis', 'writing'],
    isNew: false,
    usabilitySteps: [
      'Paste or type your text into the input area',
      'View real-time character count with and without spaces',
      'See word, sentence, and paragraph counts',
      'Copy all statistics to clipboard if needed',
      'Use Reset to clear all text and start over'
    ],
    aboutContent: {
      introduction: 'The Character Counter provides comprehensive text analysis, counting characters (with and without spaces), words, sentences, paragraphs, and lines in real-time. Perfect for writers, students, and content creators who need to meet specific length requirements.',
      keyFeatures: [
        'Real-time character counting with and without spaces',
        'Word count using intelligent whitespace detection',
        'Sentence count based on punctuation marks',
        'Paragraph and line counting',
        'Copy all statistics to clipboard',
        'No character limit or restrictions',
        'Privacy-focused - all processing in browser'
      ],
      whoBenefits: [
        'Writers tracking word counts for articles and essays',
        'Students meeting assignment length requirements',
        'Social media managers optimizing post lengths',
        'Content creators adhering to platform limits',
        'Bloggers monitoring article length',
        'Copywriters meeting brief specifications'
      ],
      whyChoose: [
        'Instant real-time counting as you type',
        'Multiple metrics in one comprehensive tool',
        'Clean interface with no distractions',
        'Works entirely in your browser for privacy',
        'No registration or sign-up required',
        'Completely free with unlimited use'
      ]
    },
    faqs: [
      { question: 'How are words counted?', answer: 'Words are counted by splitting text on whitespace characters. Multiple spaces are treated as a single separator, ensuring accurate word counts.' },
      { question: 'What counts as a sentence?', answer: 'Sentences are identified by periods, exclamation marks, and question marks followed by spaces or end of text.' },
      { question: 'How are paragraphs detected?', answer: 'Paragraphs are separated by double line breaks (empty lines between text blocks). Single line breaks do not create new paragraphs.' },
      { question: 'Is there a character limit?', answer: 'No, you can analyze text of any length. The tool processes everything in your browser with no server limits.' },
      { question: 'Does this tool save my text?', answer: 'No, all processing happens locally in your browser. Your text is never sent to a server or stored anywhere.' },
      { question: 'Can I count characters in multiple languages?', answer: 'Yes! The counter works with any language and character set, including special characters, emojis, and Unicode.' },
      { question: 'What is the difference between characters with and without spaces?', answer: 'Characters with spaces includes all characters including spaces and line breaks. Without spaces counts only visible characters, excluding whitespace.' }
    ]
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text between different letter cases',
    category: 'text-tools',
    icon: 'CaseSensitive',
    path: '/tools/text-tools/case-converter',
    tags: ['text', 'case', 'uppercase', 'lowercase', 'title-case', 'formatting', 'conversion'],
    isNew: false,
    usabilitySteps: [
      'Enter or paste your text into the input field',
      'View all five case conversions simultaneously',
      'Click "Copy" next to any conversion to copy it',
      'Choose from uppercase, lowercase, title, sentence, or alternating case',
      'Use Reset to clear the input and start over'
    ],
    aboutContent: {
      introduction: 'The Case Converter instantly transforms your text between five different letter case formats: UPPERCASE, lowercase, Title Case, Sentence case, and aLtErNaTiNg CaSe. All conversions are displayed simultaneously for easy comparison and selection.',
      keyFeatures: [
        'Five case conversion types in one tool',
        'UPPERCASE: All letters capitalized',
        'lowercase: All letters in lowercase',
        'Title Case: First letter of each word capitalized',
        'Sentence case: First letter of sentences capitalized',
        'aLtErNaTiNg CaSe: Alternating upper and lower case',
        'Individual copy buttons for each conversion',
        'Instant conversion as you type'
      ],
      whoBenefits: [
        'Writers formatting titles and headings',
        'Developers working with naming conventions',
        'Content creators preparing social media posts',
        'Students formatting academic papers',
        'Editors standardizing text formatting',
        'Anyone needing quick case changes'
      ],
      whyChoose: [
        'See all conversions at once for easy comparison',
        'Instant conversion as you type',
        'No manual retyping required',
        'Works with any language using Latin alphabet',
        'One-click copying for each format',
        'Completely free and unlimited use'
      ]
    },
    faqs: [
      { question: 'What is Title Case?', answer: 'Title Case capitalizes the first letter of each word, commonly used for titles and headings. Example: "The Quick Brown Fox".' },
      { question: 'How does Sentence case work?', answer: 'Sentence case capitalizes only the first letter of each sentence, like normal prose. Example: "The quick brown fox. It jumped over the fence."' },
      { question: 'What is alternating case used for?', answer: 'Alternating case (aLtErNaTiNg) is often used for stylistic or humorous effect in informal communication and memes.' },
      { question: 'Does this work with special characters?', answer: 'Yes, special characters, numbers, and punctuation are preserved unchanged while letters are converted according to the selected case.' },
      { question: 'Can I convert very long texts?', answer: 'Yes, there is no length limit. The tool handles texts of any size efficiently in your browser.' },
      { question: 'Will this work with accented characters?', answer: 'Yes, the converter properly handles accented characters (é, ñ, ü, etc.) and converts them correctly.' },
      { question: 'Can I undo a conversion?', answer: 'Use the Reset button to clear everything and paste your original text again, or simply copy your original text before converting.' }
    ]
  },
  {
    id: 'text-reverser',
    name: 'Text Reverser',
    description: 'Reverse text by characters or words',
    category: 'text-tools',
    icon: 'ArrowLeftRight',
    path: '/tools/text-tools/text-reverser',
    tags: ['text', 'reverse', 'backwards', 'flip', 'mirror', 'string', 'manipulation'],
    isNew: false,
    usabilitySteps: [
      'Enter your text in the input field',
      'Choose between character-level or word-level reversal',
      'View the reversed text instantly',
      'Click "Copy" to copy the reversed text',
      'Toggle between modes to see different reversal types'
    ],
    aboutContent: {
      introduction: 'The Text Reverser offers two reversal modes: character-level (entire string backwards) and word-level (word order reversed while maintaining word spelling). Useful for creative writing, puzzles, text manipulation, and fun text effects.',
      keyFeatures: [
        'Character-level reversal: Complete string backwards',
        'Word-level reversal: Reverse word order only',
        'Instant preview of reversed text',
        'Easy toggle between reversal modes',
        'Copy reversed text with one click',
        'Preserves original formatting and spacing',
        'Works with any text length'
      ],
      whoBenefits: [
        'Puzzle creators designing word games',
        'Educators creating learning exercises',
        'Developers testing string manipulation',
        'Creative writers exploring text effects',
        'Social media users creating unique posts',
        'Anyone having fun with text'
      ],
      whyChoose: [
        'Two reversal modes for different needs',
        'Instant results with no processing delay',
        'Simple and intuitive interface',
        'Works with any text length',
        'Handles special characters correctly',
        'Completely free to use'
      ]
    },
    faqs: [
      { question: 'What is character-level reversal?', answer: 'Character-level reversal flips the entire string backwards, so "Hello World" becomes "dlroW olleH". Every character is reversed in order.' },
      { question: 'What is word-level reversal?', answer: 'Word-level reversal changes word order but keeps words spelled correctly, so "Hello World" becomes "World Hello". Words stay intact.' },
      { question: 'Are spaces preserved?', answer: 'In character reversal, spaces are reversed with other characters. In word reversal, single spaces between words are maintained.' },
      { question: 'Can I reverse multiple lines?', answer: 'Yes, the tool handles multi-line text. Character reversal reverses everything including line breaks. Word reversal reverses word order across all lines.' },
      { question: 'Does this work with special characters?', answer: 'Yes, all characters including punctuation, symbols, numbers, and emojis are reversed according to the selected mode.' },
      { question: 'What happens to punctuation in word reversal?', answer: 'In word reversal, punctuation attached to words stays with those words. Standalone punctuation is treated as separate elements.' },
      { question: 'Can I reverse text in other languages?', answer: 'Yes! The reverser works with any language and character set, including non-Latin scripts.' }
    ]
  },
  {
    id: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    description: 'Remove duplicate lines from text',
    category: 'text-tools',
    icon: 'Filter',
    path: '/tools/text-tools/remove-duplicate-lines',
    tags: ['text', 'duplicate', 'unique', 'lines', 'filter', 'cleanup', 'deduplication'],
    isNew: false,
    usabilitySteps: [
      'Paste your text with duplicate lines',
      'Toggle case-sensitive matching if needed',
      'View cleaned text with duplicates removed',
      'See statistics showing original and final line counts',
      'Copy the cleaned text or use Reset to start over'
    ],
    aboutContent: {
      introduction: 'The Remove Duplicate Lines tool efficiently removes duplicate lines from text while preserving the original order. Features case-sensitive and case-insensitive matching modes, making it perfect for cleaning up lists, logs, data files, and any text with repetitive content.',
      keyFeatures: [
        'Remove duplicate lines while preserving order',
        'Case-sensitive and case-insensitive modes',
        'Statistics showing removed duplicates',
        'Handles large text files efficiently',
        'Copy cleaned text with one click',
        'Preserves empty lines if unique',
        'First occurrence of each line is kept'
      ],
      whoBenefits: [
        'Developers cleaning up log files',
        'Data analysts preparing datasets',
        'Writers organizing lists and notes',
        'Anyone working with repetitive text data',
        'Database administrators cleaning data',
        'Content managers deduplicating content'
      ],
      whyChoose: [
        'Fast processing of large text files',
        'Flexible case-sensitivity options',
        'Clear statistics on duplicates removed',
        'Preserves original line order',
        'No data loss - keeps first occurrence',
        'Works entirely in your browser'
      ]
    },
    faqs: [
      { question: 'How does case-sensitive mode work?', answer: 'In case-sensitive mode, "Hello" and "hello" are treated as different lines. In case-insensitive mode, they are considered duplicates and only one is kept.' },
      { question: 'Are empty lines removed?', answer: 'Empty lines are treated like any other line. If multiple empty lines exist, only one is kept. They are not automatically removed.' },
      { question: 'Is the original order preserved?', answer: 'Yes, the tool keeps the first occurrence of each unique line in its original position. The order of unique lines never changes.' },
      { question: 'Can I process very large files?', answer: 'Yes, the tool efficiently handles large text files with thousands of lines. All processing happens in your browser.' },
      { question: 'Does this work with special characters?', answer: 'Yes, all characters including Unicode, emojis, and special symbols are supported and compared correctly.' },
      { question: 'What happens to trailing spaces?', answer: 'Trailing spaces are considered part of the line. "Hello " and "Hello" are different lines unless you trim them first.' },
      { question: 'Can I remove duplicates from CSV files?', answer: 'Yes, but note that this tool treats each line as a whole. For column-specific deduplication, use a CSV-specific tool.' }
    ]
  },

  // ==================== DEVELOPER TOOLS ====================
  {
    id: 'json-to-typescript',
    name: 'JSON to TypeScript',
    description: 'Convert JSON to TypeScript interfaces',
    category: 'developer-tools',
    icon: 'Code2',
    path: '/tools/developer-tools/json-to-typescript',
    tags: ['json', 'typescript', 'interface', 'type', 'conversion', 'developer', 'code'],
    isNew: true,
    usabilitySteps: [
      'Paste your JSON data into the input field',
      'View the generated TypeScript interface',
      'Copy the interface to use in your project',
      'Adjust the interface name if needed'
    ],
    aboutContent: {
      introduction: 'The JSON to TypeScript converter automatically generates TypeScript interfaces from JSON data. It analyzes your JSON structure and creates properly typed interfaces, saving time and reducing errors in TypeScript projects.',
      keyFeatures: [
        'Automatic TypeScript interface generation',
        'Handles nested objects and arrays',
        'Detects and types primitive values correctly',
        'Generates clean, readable TypeScript code',
        'Copy generated interfaces with one click',
        'Supports complex JSON structures'
      ],
      whoBenefits: [
        'TypeScript developers working with APIs',
        'Frontend developers integrating backends',
        'Full-stack developers building type-safe applications',
        'Anyone learning TypeScript',
        'Teams maintaining type definitions'
      ],
      whyChoose: [
        'Saves time writing type definitions manually',
        'Reduces typing errors',
        'Handles complex nested structures',
        'Generates clean, idiomatic TypeScript',
        'Free and unlimited use'
      ]
    },
    faqs: [
      { question: 'What is a TypeScript interface?', answer: 'A TypeScript interface defines the structure of an object, specifying what properties it has and their types. It provides type safety and autocomplete.' },
      { question: 'Can this handle nested objects?', answer: 'Yes, the converter automatically generates interfaces for nested objects and creates separate interface definitions as needed.' },
      { question: 'What about arrays?', answer: 'Arrays are properly typed. For example, an array of numbers becomes number[], and an array of objects gets its own interface type.' },
      { question: 'Does it handle null values?', answer: 'Yes, null values are typed as null or as optional properties depending on the context.' },
      { question: 'Can I customize the interface name?', answer: 'The tool generates a default name, but you can easily rename it in the generated code before copying.' }
    ]
  },

  // Additional tools from other categories for reference
  {
    id: 'percentage-change-calculator',
    name: 'Percentage Change Calculator',
    description: 'Calculate percentage increase or decrease',
    category: 'calculators',
    icon: 'TrendingUp',
    path: '/tools/calculators/percentage-change-calculator',
    tags: ['percentage', 'change', 'calculator', 'increase', 'decrease', 'math', 'statistics'],
    isNew: true,
    usabilitySteps: [
      'Enter the initial value',
      'Enter the final value',
      'View the absolute difference',
      'See the percentage change with increase/decrease indicator'
    ],
    aboutContent: {
      introduction: 'The Percentage Change Calculator determines the percentage increase or decrease between two values. It displays both the absolute difference and the percentage change with visual indicators for increases (green) and decreases (red).',
      keyFeatures: [
        'Calculate percentage change between two values',
        'Display absolute difference',
        'Visual indicators for increase (green) and decrease (red)',
        'Step-by-step calculation breakdown',
        'Formula display for educational purposes',
        'Instant results as you type'
      ],
      whoBenefits: [
        'Business analysts tracking metrics',
        'Investors monitoring portfolio changes',
        'Students learning percentage calculations',
        'Anyone comparing before/after values'
      ],
      whyChoose: [
        'Clear visual indicators for trends',
        'Shows both absolute and relative change',
        'Educational calculation breakdown',
        'Simple and intuitive interface'
      ]
    },
    faqs: [
      { question: 'How is percentage change calculated?', answer: 'Percentage change = ((Final - Initial) / Initial) × 100. For example, from 100 to 150 is a 50% increase.' },
      { question: 'What if the initial value is zero?', answer: 'Percentage change is undefined when the initial value is zero, as division by zero is not possible.' },
      { question: 'What does a negative percentage mean?', answer: 'A negative percentage indicates a decrease. For example, -20% means the value decreased by 20%.' },
      { question: 'Can I calculate percentage decrease?', answer: 'Yes, simply enter a final value that is less than the initial value to see the percentage decrease.' },
      { question: 'Is this the same as percentage difference?', answer: 'No, percentage change uses the initial value as the base, while percentage difference uses the average of both values.' }
    ]
  },
  {
    id: 'standard-deviation-calculator',
    name: 'Standard Deviation Calculator',
    description: 'Calculate mean, variance, and standard deviation',
    category: 'calculators',
    icon: 'BarChart',
    path: '/tools/calculators/standard-deviation-calculator',
    tags: ['standard-deviation', 'statistics', 'variance', 'mean', 'calculator', 'math', 'analysis'],
    isNew: true,
    usabilitySteps: [
      'Enter numbers separated by commas or line breaks',
      'Click Calculate to compute statistics',
      'View count, mean, variance, and standard deviation',
      'Review step-by-step calculation breakdown',
      'Use Reset to clear and start over'
    ],
    aboutContent: {
      introduction: 'The Standard Deviation Calculator computes statistical measures including count, mean (average), variance, and standard deviation for a dataset. Essential for data analysis, quality control, and understanding data distribution.',
      keyFeatures: [
        'Calculate count, mean, variance, and standard deviation',
        'Accept comma-separated or line-separated input',
        'Step-by-step calculation breakdown',
        'Clear display of all statistical measures',
        'Input validation with error messages',
        'Handles datasets of any size'
      ],
      whoBenefits: [
        'Data analysts performing statistical analysis',
        'Students learning statistics',
        'Quality control professionals',
        'Researchers analyzing experimental data'
      ],
      whyChoose: [
        'Comprehensive statistical calculations',
        'Educational step-by-step breakdown',
        'Flexible input format',
        'Accurate standard deviation formula'
      ]
    },
    faqs: [
      { question: 'What is standard deviation?', answer: 'Standard deviation measures how spread out numbers are from their average. Low standard deviation means data points are close to the mean.' },
      { question: 'What is variance?', answer: 'Variance is the average of squared differences from the mean. Standard deviation is the square root of variance.' },
      { question: 'How is the mean calculated?', answer: 'Mean (average) is the sum of all numbers divided by the count of numbers.' },
      { question: 'What is a good standard deviation?', answer: 'It depends on context. In quality control, lower is often better. In finance, it indicates volatility.' },
      { question: 'Can I use decimal numbers?', answer: 'Yes, the calculator accepts decimal numbers and performs calculations with full precision.' }
    ]
  },
];
