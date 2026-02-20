import type { ToolMetadata } from '../types/tools';

// Comprehensive toolkit: 23 tools across multiple categories (13 existing + 10 restored)
export const ALL_TOOLS: ToolMetadata[] = [
  // ==================== CALCULATORS (8 tools: 5 existing + 3 restored) ====================
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
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate age in years, months, and days',
    category: 'calculators',
    icon: 'Calendar',
    path: '/tools/calculators/age-calculator',
    tags: ['age', 'calculator', 'birthday', 'date', 'years'],
    isNew: false,
    usabilitySteps: [
      'Enter your date of birth',
      'Click Calculate to see your exact age',
      'View age in years, months, and days',
      'See your next birthday countdown',
      'Use Reset to calculate for different dates'
    ],
    aboutContent: {
      introduction: 'The Age Calculator precisely determines your age in years, months, and days from your birth date. Perfect for tracking milestones, planning celebrations, or calculating age for official documents.',
      keyFeatures: [
        'Calculate exact age from birth date',
        'Display age in years, months, and days',
        'Show next birthday countdown',
        'Calculate age at any specific date',
        'Accurate leap year handling',
        'Simple date picker interface'
      ],
      whoBenefits: [
        'Parents tracking child development milestones',
        'People planning birthday celebrations',
        'HR professionals verifying employee ages',
        'Anyone filling out age-related forms',
        'Genealogy researchers calculating historical ages'
      ],
      whyChoose: [
        'Precise calculations including leap years',
        'Multiple age format displays',
        'Next birthday countdown feature',
        'Easy-to-use date picker',
        'Instant accurate results'
      ]
    },
    faqs: [
      { question: 'How is age calculated?', answer: 'Age is calculated by finding the difference between your birth date and today\'s date, accounting for leap years and varying month lengths.' },
      { question: 'Does it account for leap years?', answer: 'Yes, the calculator properly handles leap years to ensure accurate age calculations down to the day.' },
      { question: 'Can I calculate age at a future date?', answer: 'Yes, you can calculate how old you will be at any future date by entering your birth date and the target date.' },
      { question: 'Why does my age show months and days?', answer: 'The calculator provides your exact age including the months and days since your last birthday for precision.' },
      { question: 'Can I use this for historical dates?', answer: 'Yes, you can calculate ages for any historical date, useful for genealogy research or historical documentation.' },
      { question: 'Is the calculation accurate across time zones?', answer: 'The calculator uses your local date and time zone for accurate age calculations based on your location.' }
    ]
  },
  {
    id: 'date-calculator',
    name: 'Date Calculator',
    description: 'Calculate date differences and add/subtract days',
    category: 'calculators',
    icon: 'CalendarDays',
    path: '/tools/calculators/date-calculator',
    tags: ['date', 'calculator', 'days', 'difference', 'calendar'],
    isNew: false,
    usabilitySteps: [
      'Select the operation (difference, add, or subtract)',
      'Enter the first date using the date picker',
      'Enter the second date or number of days',
      'Click Calculate to see the result',
      'View results in days, weeks, months, and years'
    ],
    aboutContent: {
      introduction: 'The Date Calculator helps you find the difference between two dates or add/subtract days from a specific date. Essential for project planning, event scheduling, and deadline management.',
      keyFeatures: [
        'Calculate difference between two dates',
        'Add or subtract days from any date',
        'Display results in multiple formats',
        'Show results in days, weeks, months, years',
        'Account for leap years automatically',
        'Easy date picker interface'
      ],
      whoBenefits: [
        'Project managers tracking timelines',
        'Event planners scheduling activities',
        'Students calculating study periods',
        'HR professionals managing leave dates',
        'Anyone needing date calculations'
      ],
      whyChoose: [
        'Multiple calculation modes in one tool',
        'Accurate leap year handling',
        'Results in multiple time units',
        'Simple and intuitive interface',
        'Instant calculations'
      ]
    },
    faqs: [
      { question: 'How do I calculate days between dates?', answer: 'Select the "Difference" option, enter both dates, and click Calculate. The tool will show the exact number of days between them.' },
      { question: 'Can I add business days only?', answer: 'This calculator counts all calendar days. For business days (excluding weekends), you would need to manually account for weekends.' },
      { question: 'Does it handle leap years?', answer: 'Yes, the calculator automatically accounts for leap years when calculating date differences or adding/subtracting days.' },
      { question: 'Can I calculate months between dates?', answer: 'Yes, the calculator displays results in multiple formats including days, weeks, months, and years for comprehensive understanding.' },
      { question: 'What if I need to subtract days?', answer: 'Select the "Subtract" operation, enter your starting date and the number of days to subtract, then click Calculate.' },
      { question: 'Can I use this for historical dates?', answer: 'Yes, you can calculate with any historical or future dates. The calculator handles dates across centuries accurately.' }
    ]
  },
  {
    id: 'discount-calculator',
    name: 'Discount Calculator',
    description: 'Calculate discounts and final prices',
    category: 'calculators',
    icon: 'Percent',
    path: '/tools/calculators/discount-calculator',
    tags: ['discount', 'calculator', 'sale', 'price', 'savings'],
    isNew: false,
    usabilitySteps: [
      'Enter the original price',
      'Enter the discount percentage',
      'Click Calculate to see savings',
      'View final price and amount saved',
      'Use Reset for new calculations'
    ],
    aboutContent: {
      introduction: 'The Discount Calculator instantly shows you how much you save and the final price after applying a discount. Perfect for shopping, comparing deals, and understanding sale prices.',
      keyFeatures: [
        'Calculate discount amount instantly',
        'Show final price after discount',
        'Display savings percentage',
        'Support for any currency',
        'Multiple discount calculations',
        'Clear breakdown of savings'
      ],
      whoBenefits: [
        'Shoppers comparing sale prices',
        'Retailers setting discount prices',
        'Budget-conscious consumers',
        'Online shoppers evaluating deals',
        'Anyone wanting to know true savings'
      ],
      whyChoose: [
        'Instant discount calculations',
        'Clear display of savings',
        'Works with any currency',
        'Simple percentage input',
        'No complex math required'
      ]
    },
    faqs: [
      { question: 'How is discount calculated?', answer: 'Discount amount = Original price × (Discount % ÷ 100). Final price = Original price - Discount amount.' },
      { question: 'Can I calculate multiple discounts?', answer: 'For multiple discounts, calculate them sequentially. Apply the first discount, then use the result as the original price for the second discount.' },
      { question: 'What if I know the final price?', answer: 'If you know the final price and want to find the discount percentage, use: Discount % = ((Original - Final) ÷ Original) × 100.' },
      { question: 'Does this work for any currency?', answer: 'Yes! The calculator works with any currency. Just enter the price amount and it will calculate the discount accordingly.' },
      { question: 'Can I calculate tax after discount?', answer: 'This calculator focuses on discounts. To add tax, calculate the discount first, then multiply the final price by (1 + tax rate).' },
      { question: 'How do I compare different discount offers?', answer: 'Calculate each discount separately to see which gives you the lowest final price and highest savings.' }
    ]
  },

  // ==================== CONVERTERS (8 tools: 6 existing + 2 restored) ====================
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
        'Instant conversion calculations',
        'Clear display of exchange rates',
        'Bidirectional currency conversion',
        'Simple dropdown selection'
      ],
      whoBenefits: [
        'International travelers planning budgets',
        'Online shoppers buying from foreign sites',
        'Business professionals handling international transactions',
        'Forex traders checking exchange rates',
        'Anyone dealing with multiple currencies'
      ],
      whyChoose: [
        'Support for major world currencies',
        'Instant conversion results',
        'Easy-to-use interface',
        'Accurate exchange rate calculations',
        'No registration required'
      ]
    },
    faqs: [
      { question: 'What currencies are supported?', answer: 'The converter supports major currencies including USD, EUR, GBP, JPY, CAD, and AUD for comprehensive global coverage.' },
      { question: 'Are the exchange rates real-time?', answer: 'This tool uses standard exchange rates for demonstration. For real-time rates, check with your bank or financial institution.' },
      { question: 'Can I convert any amount?', answer: 'Yes, you can convert any positive amount. The calculator handles both small and large currency values.' },
      { question: 'How accurate are the conversions?', answer: 'Conversions use standard exchange rate formulas. For actual transactions, rates may vary based on your financial institution.' },
      { question: 'Can I add more currencies?', answer: 'The current version supports the most commonly traded currencies. Additional currencies may be added in future updates.' },
      { question: 'Do conversion rates include fees?', answer: 'No, these are base exchange rates. Banks and exchange services typically add fees or margins to the rate.' }
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
      'Select the source temperature scale',
      'Select the target temperature scale',
      'Click Convert to see the result',
      'View the conversion formula used'
    ],
    aboutContent: {
      introduction: 'The Temperature Converter makes it easy to convert between Celsius, Fahrenheit, and Kelvin temperature scales. Essential for science, cooking, travel, and weather understanding.',
      keyFeatures: [
        'Convert between Celsius, Fahrenheit, and Kelvin',
        'Display conversion formulas',
        'Instant accurate conversions',
        'Support for negative temperatures',
        'Clear scale explanations',
        'Bidirectional conversion'
      ],
      whoBenefits: [
        'Travelers understanding weather in different countries',
        'Students working on science assignments',
        'Cooks following international recipes',
        'Scientists conducting experiments',
        'Anyone needing temperature conversions'
      ],
      whyChoose: [
        'Support for all major temperature scales',
        'Shows conversion formulas for learning',
        'Accurate scientific calculations',
        'Simple and intuitive interface',
        'Instant results'
      ]
    },
    faqs: [
      { question: 'What is the difference between Celsius and Fahrenheit?', answer: 'Celsius is used in most countries and based on water freezing at 0° and boiling at 100°. Fahrenheit is used mainly in the US, with water freezing at 32° and boiling at 212°.' },
      { question: 'When should I use Kelvin?', answer: 'Kelvin is used in scientific contexts, especially physics and chemistry. It starts at absolute zero (0 K = -273.15°C), the coldest possible temperature.' },
      { question: 'How do I convert Celsius to Fahrenheit?', answer: 'Use the formula: °F = (°C × 9/5) + 32. For example, 20°C = (20 × 9/5) + 32 = 68°F.' },
      { question: 'Can I convert negative temperatures?', answer: 'Yes, the converter handles negative temperatures correctly for all scales, useful for cold weather and scientific applications.' },
      { question: 'What is absolute zero?', answer: 'Absolute zero is 0 Kelvin (-273.15°C or -459.67°F), the theoretical lowest possible temperature where molecular motion stops.' },
      { question: 'Why does the formula show in the result?', answer: 'Showing the formula helps you understand how the conversion works and allows you to verify the calculation or do it manually if needed.' }
    ]
  },
  {
    id: 'timezone-converter',
    name: 'Time Zone Converter',
    description: 'Convert times between different time zones',
    category: 'converters',
    icon: 'Clock',
    path: '/tools/converters/timezone-converter',
    tags: ['timezone', 'converter', 'time', 'world', 'clock'],
    isNew: false,
    usabilitySteps: [
      'Enter the date and time',
      'Select the source time zone',
      'Select the target time zone',
      'Click Convert to see the converted time',
      'View time zone abbreviations and offsets'
    ],
    aboutContent: {
      introduction: 'The Time Zone Converter helps you convert times between different time zones worldwide. Perfect for scheduling international meetings, coordinating with remote teams, or planning travel.',
      keyFeatures: [
        'Convert between major world time zones',
        'Support for EST, PST, GMT, UTC, and more',
        'Display time zone abbreviations',
        'Show UTC offset information',
        'Handle daylight saving time',
        'Easy datetime picker interface'
      ],
      whoBenefits: [
        'Remote teams scheduling meetings',
        'International travelers planning itineraries',
        'Business professionals coordinating across time zones',
        'Event organizers with global audiences',
        'Anyone working with international contacts'
      ],
      whyChoose: [
        'Support for major world time zones',
        'Clear display of converted times',
        'Shows time zone abbreviations',
        'Handles DST automatically',
        'Simple and accurate'
      ]
    },
    faqs: [
      { question: 'What time zones are supported?', answer: 'The converter supports major time zones including EST, CST, MST, PST, GMT, UTC, CET, JST, and more.' },
      { question: 'Does it handle daylight saving time?', answer: 'Yes, the converter accounts for daylight saving time changes when applicable to the selected time zones.' },
      { question: 'What is UTC?', answer: 'UTC (Coordinated Universal Time) is the primary time standard by which the world regulates clocks and time. It is not affected by daylight saving time.' },
      { question: 'How do I schedule an international meeting?', answer: 'Enter your local time and time zone, then convert to your colleague\'s time zone to find a mutually convenient meeting time.' },
      { question: 'Can I convert historical dates?', answer: 'Yes, you can convert any date and time, though historical DST rules may vary. The converter uses current DST rules.' },
      { question: 'What is the difference between GMT and UTC?', answer: 'GMT and UTC are essentially the same for most purposes. UTC is the modern standard, while GMT is the older term still commonly used.' }
    ]
  },
  {
    id: 'weight-converter',
    name: 'Weight Converter',
    description: 'Convert between different units of weight',
    category: 'converters',
    icon: 'Weight',
    path: '/tools/converters/weight-converter',
    tags: ['weight', 'converter', 'mass', 'kilograms', 'pounds'],
    isNew: false,
    usabilitySteps: [
      'Enter the weight value',
      'Select the source weight unit',
      'Select the target weight unit',
      'Click Convert to see the result',
      'Use Reset for new conversions'
    ],
    aboutContent: {
      introduction: 'The Weight Converter makes it easy to convert between different units of weight and mass. Perfect for cooking, shipping, fitness tracking, and international commerce.',
      keyFeatures: [
        'Convert between metric and imperial weight units',
        'Support for kg, lbs, oz, g, and metric tons',
        'Instant accurate conversions',
        'Bidirectional conversion capability',
        'High precision calculations',
        'Simple dropdown selection'
      ],
      whoBenefits: [
        'Cooks following international recipes',
        'Fitness enthusiasts tracking weight',
        'Shippers calculating package weights',
        'International traders handling goods',
        'Anyone needing weight conversions'
      ],
      whyChoose: [
        'Support for common weight units',
        'Accurate conversion factors',
        'Works with metric and imperial',
        'Instant results',
        'Easy to use interface'
      ]
    },
    faqs: [
      { question: 'What weight units are supported?', answer: 'The converter supports kilograms, pounds, ounces, grams, and metric tons for comprehensive weight conversions.' },
      { question: 'How accurate are the conversions?', answer: 'Conversions use standard international conversion factors and are accurate to several decimal places.' },
      { question: 'Can I convert between metric and imperial?', answer: 'Yes! You can convert between any combination of metric (kg, g, metric tons) and imperial (lbs, oz) units.' },
      { question: 'What is the difference between weight and mass?', answer: 'Mass is the amount of matter in an object (constant), while weight is the force of gravity on that mass (varies by location). For everyday use, the terms are often used interchangeably.' },
      { question: 'How many pounds are in a kilogram?', answer: '1 kilogram equals approximately 2.20462 pounds. This is the standard conversion factor used internationally.' },
      { question: 'Can I use this for cooking measurements?', answer: 'Yes! The converter is perfect for converting recipe measurements between metric and imperial units.' }
    ]
  },
  {
    id: 'number-base-converter',
    name: 'Number Base Converter',
    description: 'Convert between binary, decimal, octal, and hexadecimal',
    category: 'converters',
    icon: 'Binary',
    path: '/tools/converters/number-base-converter',
    tags: ['number', 'base', 'converter', 'binary', 'hexadecimal', 'octal'],
    isNew: false,
    usabilitySteps: [
      'Enter the number you want to convert',
      'Select the source number base',
      'Select the target number base',
      'Click Convert to see the result',
      'View conversions in all bases simultaneously'
    ],
    aboutContent: {
      introduction: 'The Number Base Converter converts numbers between binary, octal, decimal, and hexadecimal systems. Essential for programmers, computer science students, and anyone working with different number systems.',
      keyFeatures: [
        'Convert between binary, octal, decimal, and hexadecimal',
        'Instant conversion to all bases',
        'Input validation for each base',
        'Support for large numbers',
        'Clear error messages',
        'Educational base explanations'
      ],
      whoBenefits: [
        'Programmers working with different number systems',
        'Computer science students learning number bases',
        'Digital electronics engineers',
        'Network administrators working with IP addresses',
        'Anyone needing number base conversions'
      ],
      whyChoose: [
        'Support for all common number bases',
        'Instant conversion to multiple bases',
        'Input validation prevents errors',
        'Clear and accurate results',
        'Educational tool for learning'
      ]
    },
    faqs: [
      { question: 'What is binary?', answer: 'Binary (base-2) uses only 0 and 1. It is the fundamental number system used by computers and digital electronics.' },
      { question: 'What is hexadecimal?', answer: 'Hexadecimal (base-16) uses digits 0-9 and letters A-F. It is commonly used in programming for representing colors, memory addresses, and binary data compactly.' },
      { question: 'What is octal?', answer: 'Octal (base-8) uses digits 0-7. It was historically used in computing and is still used in some Unix file permissions.' },
      { question: 'How do I convert binary to decimal?', answer: 'Each binary digit represents a power of 2. For example, binary 1011 = (1×8) + (0×4) + (1×2) + (1×1) = 11 in decimal.' },
      { question: 'Why do programmers use hexadecimal?', answer: 'Hexadecimal is compact and easily converts to/from binary. Each hex digit represents exactly 4 binary digits, making it convenient for representing binary data.' },
      { question: 'Can I convert negative numbers?', answer: 'This converter handles positive integers. For negative numbers, you would need to use two\'s complement representation in binary.' }
    ]
  },
  {
    id: 'area-converter',
    name: 'Area Converter',
    description: 'Convert between different units of area',
    category: 'converters',
    icon: 'Maximize2',
    path: '/tools/converters/area-converter',
    tags: ['area', 'converter', 'measurement', 'square', 'meters'],
    isNew: false,
    usabilitySteps: [
      'Enter the area value',
      'Select the source area unit',
      'Select the target area unit',
      'Click Convert to see the result',
      'Use Reset for new conversions'
    ],
    aboutContent: {
      introduction: 'The Area Converter makes it easy to convert between different units of area measurement. Perfect for real estate, construction, land surveying, and property management.',
      keyFeatures: [
        'Convert between metric and imperial area units',
        'Support for square meters, square feet, acres, hectares, square kilometers',
        'Instant accurate conversions',
        'Bidirectional conversion capability',
        'High precision calculations',
        'Simple dropdown selection'
      ],
      whoBenefits: [
        'Real estate professionals listing properties',
        'Contractors estimating material needs',
        'Land surveyors measuring plots',
        'Farmers calculating field sizes',
        'Anyone needing area conversions'
      ],
      whyChoose: [
        'Support for common area units',
        'Accurate conversion factors',
        'Works with metric and imperial',
        'Instant results',
        'Easy to use interface'
      ]
    },
    faqs: [
      { question: 'What area units are supported?', answer: 'The converter supports square meters, square feet, acres, hectares, and square kilometers for comprehensive area conversions.' },
      { question: 'How many square feet are in an acre?', answer: 'One acre equals 43,560 square feet. This is a standard unit used in real estate and land measurement in the US.' },
      { question: 'What is a hectare?', answer: 'A hectare is a metric unit of area equal to 10,000 square meters or about 2.47 acres. It is commonly used for land measurement worldwide.' },
      { question: 'Can I convert between metric and imperial?', answer: 'Yes! You can convert between any combination of metric (square meters, hectares, square kilometers) and imperial (square feet, acres) units.' },
      { question: 'How accurate are the conversions?', answer: 'Conversions use standard international conversion factors and are accurate to several decimal places for precision.' },
      { question: 'Can I use this for room sizes?', answer: 'Yes! The converter is perfect for converting room sizes, property areas, or any area measurement between different units.' }
    ]
  },
  {
    id: 'speed-converter',
    name: 'Speed Converter',
    description: 'Convert between different units of speed',
    category: 'converters',
    icon: 'Gauge',
    path: '/tools/converters/speed-converter',
    tags: ['speed', 'converter', 'velocity', 'mph', 'kmh'],
    isNew: false,
    usabilitySteps: [
      'Enter the speed value',
      'Select the source speed unit',
      'Select the target speed unit',
      'Click Convert to see the result',
      'Use Reset for new conversions'
    ],
    aboutContent: {
      introduction: 'The Speed Converter makes it easy to convert between different units of speed and velocity. Perfect for travel, sports, physics, and understanding speed limits in different countries.',
      keyFeatures: [
        'Convert between metric and imperial speed units',
        'Support for km/h, mph, m/s, knots, and ft/s',
        'Instant accurate conversions',
        'Bidirectional conversion capability',
        'High precision calculations',
        'Simple dropdown selection'
      ],
      whoBenefits: [
        'Travelers understanding speed limits abroad',
        'Athletes tracking running or cycling speeds',
        'Pilots and sailors using knots',
        'Students working on physics problems',
        'Anyone needing speed conversions'
      ],
      whyChoose: [
        'Support for common speed units',
        'Accurate conversion factors',
        'Works with metric and imperial',
        'Instant results',
        'Easy to use interface'
      ]
    },
    faqs: [
      { question: 'What speed units are supported?', answer: 'The converter supports kilometers per hour (km/h), miles per hour (mph), meters per second (m/s), knots, and feet per second (ft/s).' },
      { question: 'How do I convert mph to km/h?', answer: 'Multiply mph by 1.60934 to get km/h. For example, 60 mph = 60 × 1.60934 = 96.56 km/h.' },
      { question: 'What is a knot?', answer: 'A knot is one nautical mile per hour, used in maritime and aviation. One knot equals approximately 1.852 km/h or 1.151 mph.' },
      { question: 'Can I convert between metric and imperial?', answer: 'Yes! You can convert between any combination of metric (km/h, m/s) and imperial (mph, ft/s) units, plus knots.' },
      { question: 'How accurate are the conversions?', answer: 'Conversions use standard international conversion factors and are accurate to several decimal places for precision.' },
      { question: 'Why do scientists use m/s?', answer: 'Meters per second (m/s) is the SI unit of speed, making it standard in scientific calculations and physics equations.' }
    ]
  },

  // ==================== GENERATORS (7 tools: 5 existing + 2 restored) ====================
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate secure random passwords',
    category: 'generators',
    icon: 'Key',
    path: '/tools/generators/password-generator',
    tags: ['password', 'generator', 'security', 'random'],
    isNew: false,
    usabilitySteps: [
      'Select password length (8-32 characters)',
      'Choose character types (uppercase, lowercase, numbers, symbols)',
      'Click Generate to create a secure password',
      'Copy the password to your clipboard',
      'Generate multiple passwords if needed'
    ],
    aboutContent: {
      introduction: 'The Password Generator creates strong, random passwords to protect your online accounts. Using a mix of uppercase, lowercase, numbers, and symbols ensures maximum security against brute-force attacks.',
      keyFeatures: [
        'Generate passwords from 8 to 32 characters',
        'Customize character types (uppercase, lowercase, numbers, symbols)',
        'Instant password generation',
        'One-click copy to clipboard',
        'Generate multiple passwords',
        'Visual strength indicator'
      ],
      whoBenefits: [
        'Anyone creating new online accounts',
        'Security-conscious users updating passwords',
        'IT professionals managing multiple accounts',
        'Businesses enforcing password policies',
        'Users wanting stronger password security'
      ],
      whyChoose: [
        'Cryptographically secure random generation',
        'Customizable password complexity',
        'Instant generation and copying',
        'No password storage or logging',
        'Free and unlimited use'
      ]
    },
    faqs: [
      { question: 'How secure are generated passwords?', answer: 'Generated passwords use cryptographically secure random number generation, making them highly resistant to brute-force and dictionary attacks.' },
      { question: 'What makes a strong password?', answer: 'Strong passwords are long (12+ characters), use mixed character types (uppercase, lowercase, numbers, symbols), and are unique for each account.' },
      { question: 'Should I use symbols in my password?', answer: 'Yes, including symbols significantly increases password strength by expanding the possible character combinations.' },
      { question: 'How long should my password be?', answer: 'We recommend at least 12-16 characters for good security. Longer passwords are exponentially harder to crack.' },
      { question: 'Are the passwords stored anywhere?', answer: 'No, passwords are generated in your browser and never sent to any server or stored anywhere.' },
      { question: 'Can I generate multiple passwords?', answer: 'Yes, click Generate as many times as needed. Each generation creates a completely new random password.' }
    ]
  },
  {
    id: 'qr-code-generator',
    name: 'QR Code Generator',
    description: 'Generate QR codes from text or URLs',
    category: 'generators',
    icon: 'QrCode',
    path: '/tools/generators/qr-code-generator',
    tags: ['qr', 'code', 'generator', 'barcode'],
    isNew: false,
    usabilitySteps: [
      'Enter the text or URL you want to encode',
      'Click Generate to create the QR code',
      'View the generated QR code',
      'Download the QR code as an image',
      'Scan with any QR code reader to verify'
    ],
    aboutContent: {
      introduction: 'The QR Code Generator creates scannable QR codes from any text or URL. Perfect for sharing links, contact information, WiFi credentials, or any data that needs quick mobile access.',
      keyFeatures: [
        'Generate QR codes from text or URLs',
        'Instant QR code creation',
        'Download as PNG image',
        'High-quality output',
        'No size limits on input text',
        'Works with any QR code scanner'
      ],
      whoBenefits: [
        'Businesses sharing website links',
        'Event organizers distributing information',
        'Restaurants creating digital menus',
        'Marketers running mobile campaigns',
        'Anyone needing quick data sharing'
      ],
      whyChoose: [
        'Instant QR code generation',
        'High-quality scannable codes',
        'Download for printing or digital use',
        'No registration required',
        'Completely free'
      ]
    },
    faqs: [
      { question: 'What can I encode in a QR code?', answer: 'You can encode URLs, text, contact information, WiFi credentials, email addresses, phone numbers, and more.' },
      { question: 'How do I scan a QR code?', answer: 'Use your smartphone camera or any QR code scanner app. Most modern phones can scan QR codes directly from the camera app.' },
      { question: 'Can I customize the QR code appearance?', answer: 'This basic generator creates standard black and white QR codes. For custom colors and logos, use advanced QR code tools.' },
      { question: 'What size should I make my QR code?', answer: 'For printing, use at least 2×2 cm (0.8×0.8 inches). Larger codes are easier to scan from a distance.' },
      { question: 'Do QR codes expire?', answer: 'No, QR codes themselves never expire. However, if the code links to a URL, that URL must remain active for the code to work.' },
      { question: 'Can I track QR code scans?', answer: 'Static QR codes (like these) cannot track scans. For analytics, use dynamic QR codes with URL shorteners that provide tracking.' }
    ]
  },
  {
    id: 'lorem-ipsum-generator',
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text for designs',
    category: 'generators',
    icon: 'FileText',
    path: '/tools/generators/lorem-ipsum',
    tags: ['lorem', 'ipsum', 'placeholder', 'text', 'generator'],
    isNew: false,
    usabilitySteps: [
      'Select the type (paragraphs, words, or characters)',
      'Enter the quantity you need',
      'Click Generate to create placeholder text',
      'Copy the generated text to your clipboard',
      'Use in your designs or mockups'
    ],
    aboutContent: {
      introduction: 'The Lorem Ipsum Generator creates placeholder text for design mockups and prototypes. The classic "Lorem ipsum dolor sit amet" text helps visualize layouts without distracting with readable content.',
      keyFeatures: [
        'Generate by paragraphs, words, or characters',
        'Customizable quantity',
        'Classic Lorem Ipsum text',
        'Instant generation',
        'One-click copy to clipboard',
        'Perfect for design mockups'
      ],
      whoBenefits: [
        'Web designers creating mockups',
        'Graphic designers laying out publications',
        'Developers building prototypes',
        'Content managers planning layouts',
        'Anyone needing placeholder text'
      ],
      whyChoose: [
        'Industry-standard placeholder text',
        'Flexible generation options',
        'Instant results',
        'Easy copying',
        'Free and unlimited'
      ]
    },
    faqs: [
      { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is scrambled Latin text used as placeholder content since the 1500s. It has a natural letter distribution similar to English.' },
      { question: 'Why use Lorem Ipsum instead of real text?', answer: 'Lorem Ipsum is meaningless, so viewers focus on design and layout rather than reading the content. It also has realistic word and letter patterns.' },
      { question: 'Can I generate specific amounts?', answer: 'Yes, you can generate any number of paragraphs, words, or characters to fit your exact needs.' },
      { question: 'Is Lorem Ipsum copyrighted?', answer: 'No, Lorem Ipsum is in the public domain and free to use for any purpose without attribution.' },
      { question: 'Where does Lorem Ipsum come from?', answer: 'It comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" by Cicero, written in 45 BC.' },
      { question: 'Can I use this for commercial projects?', answer: 'Yes, Lorem Ipsum is free to use in any project, commercial or personal, without restrictions.' }
    ]
  },
  {
    id: 'uuid-generator',
    name: 'UUID Generator',
    description: 'Generate unique identifiers (UUIDs)',
    category: 'generators',
    icon: 'Hash',
    path: '/tools/generators/uuid-generator',
    tags: ['uuid', 'guid', 'generator', 'unique', 'identifier'],
    isNew: false,
    usabilitySteps: [
      'Click Generate to create a new UUID',
      'View the generated UUID in standard format',
      'Copy the UUID to your clipboard',
      'Generate multiple UUIDs if needed',
      'Use in your applications or databases'
    ],
    aboutContent: {
      introduction: 'The UUID Generator creates universally unique identifiers (UUIDs) in the standard v4 format. Perfect for database keys, session IDs, or any situation requiring guaranteed unique identifiers.',
      keyFeatures: [
        'Generate UUID v4 (random)',
        'Standard 36-character format',
        'Cryptographically secure randomness',
        'Instant generation',
        'One-click copy to clipboard',
        'Generate multiple UUIDs'
      ],
      whoBenefits: [
        'Developers needing unique database keys',
        'System administrators managing resources',
        'API developers creating session tokens',
        'Database designers planning schemas',
        'Anyone needing unique identifiers'
      ],
      whyChoose: [
        'Cryptographically secure generation',
        'Standard UUID v4 format',
        'Guaranteed uniqueness',
        'Instant generation',
        'Free and unlimited'
      ]
    },
    faqs: [
      { question: 'What is a UUID?', answer: 'UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify information. It is also called GUID (Globally Unique Identifier).' },
      { question: 'How unique are UUIDs?', answer: 'UUIDs are extremely unique. The probability of generating duplicate UUID v4s is so low it is effectively zero for practical purposes.' },
      { question: 'What is UUID v4?', answer: 'UUID v4 uses random numbers for generation. It is the most common UUID version and suitable for most use cases.' },
      { question: 'Can I use UUIDs as database primary keys?', answer: 'Yes, UUIDs are commonly used as primary keys, especially in distributed systems where centralized ID generation is impractical.' },
      { question: 'What is the UUID format?', answer: 'UUIDs are displayed as 32 hexadecimal digits in groups: 8-4-4-4-12, like "550e8400-e29b-41d4-a716-446655440000".' },
      { question: 'Are UUIDs secure for sensitive data?', answer: 'UUID v4 uses random generation and is suitable for most purposes, but for cryptographic security, use dedicated security tokens.' }
    ]
  },
  {
    id: 'color-palette-generator',
    name: 'Color Palette Generator',
    description: 'Generate random color palettes',
    category: 'generators',
    icon: 'Palette',
    path: '/tools/generators/color-palette',
    tags: ['color', 'palette', 'generator', 'design', 'hex'],
    isNew: false,
    usabilitySteps: [
      'Click Generate to create a new color palette',
      'View 5 random colors with hex codes',
      'Click any color to copy its hex code',
      'Generate new palettes until you find one you like',
      'Use the colors in your designs'
    ],
    aboutContent: {
      introduction: 'The Color Palette Generator creates random 5-color schemes perfect for design projects. Each palette includes hex codes and RGB values for easy use in any design tool or code.',
      keyFeatures: [
        'Generate 5-color palettes instantly',
        'Display hex codes and RGB values',
        'Visual color swatches',
        'One-click color code copying',
        'Unlimited palette generation',
        'Perfect for design inspiration'
      ],
      whoBenefits: [
        'Web designers seeking color inspiration',
        'Graphic designers starting new projects',
        'UI/UX designers creating interfaces',
        'Artists exploring color combinations',
        'Anyone needing color scheme ideas'
      ],
      whyChoose: [
        'Instant color palette generation',
        'Easy color code copying',
        'Visual and code representations',
        'Unlimited free generation',
        'Great for creative inspiration'
      ]
    },
    faqs: [
      { question: 'How are the colors generated?', answer: 'Colors are randomly generated using RGB values, creating diverse and unique palettes with each generation.' },
      { question: 'Can I customize the number of colors?', answer: 'This generator creates 5-color palettes, which is ideal for most design projects providing enough variety without overwhelming.' },
      { question: 'What is a hex code?', answer: 'A hex code is a 6-digit code representing a color in hexadecimal format (e.g., #FF5733). It is widely used in web design and CSS.' },
      { question: 'How do I use these colors in my design?', answer: 'Copy the hex code or RGB values and paste them into your design software, CSS, or any tool that accepts color codes.' },
      { question: 'Can I save my favorite palettes?', answer: 'This tool does not save palettes, but you can screenshot or note down the hex codes of palettes you like.' },
      { question: 'Are the palettes harmonious?', answer: 'Colors are randomly generated, so palettes may vary in harmony. Generate multiple times to find combinations that work for your project.' }
    ]
  },
  {
    id: 'barcode-generator',
    name: 'Barcode Generator',
    description: 'Generate barcodes from text or numbers',
    category: 'generators',
    icon: 'Barcode',
    path: '/tools/generators/barcode-generator',
    tags: ['barcode', 'generator', 'code128', 'ean', 'upc'],
    isNew: false,
    usabilitySteps: [
      'Enter the text or number to encode',
      'Select the barcode format (CODE128, EAN13, UPC)',
      'Click Generate to create the barcode',
      'View the generated barcode image',
      'Download the barcode for printing or use'
    ],
    aboutContent: {
      introduction: 'The Barcode Generator creates scannable barcodes in multiple formats. Perfect for inventory management, product labeling, asset tracking, and any application requiring barcode identification.',
      keyFeatures: [
        'Generate CODE128, EAN13, and UPC barcodes',
        'Support for text and numeric data',
        'High-quality SVG output',
        'Instant barcode generation',
        'Download for printing',
        'Scannable with standard barcode readers'
      ],
      whoBenefits: [
        'Retailers creating product labels',
        'Warehouse managers tracking inventory',
        'Small businesses managing assets',
        'Event organizers creating tickets',
        'Anyone needing barcode generation'
      ],
      whyChoose: [
        'Multiple barcode format support',
        'High-quality scannable output',
        'Easy download and printing',
        'No registration required',
        'Completely free'
      ]
    },
    faqs: [
      { question: 'What barcode formats are supported?', answer: 'The generator supports CODE128 (alphanumeric), EAN13 (13-digit product codes), and UPC (12-digit product codes).' },
      { question: 'What is CODE128?', answer: 'CODE128 is a high-density barcode that can encode all 128 ASCII characters, making it versatile for various applications.' },
      { question: 'What is the difference between EAN13 and UPC?', answer: 'EAN13 is used internationally with 13 digits, while UPC is used primarily in North America with 12 digits. Both are for product identification.' },
      { question: 'Can I scan the generated barcodes?', answer: 'Yes, all generated barcodes are scannable with standard barcode readers and smartphone barcode scanner apps.' },
      { question: 'What size should I print barcodes?', answer: 'For reliable scanning, print barcodes at least 1 inch (2.5 cm) wide. Larger barcodes are easier to scan from a distance.' },
      { question: 'Can I use these barcodes commercially?', answer: 'Yes, but for official product barcodes (EAN/UPC), you need to register with GS1 to get legitimate product codes.' }
    ]
  },
  {
    id: 'username-generator',
    name: 'Username Generator',
    description: 'Generate creative unique usernames',
    category: 'generators',
    icon: 'User',
    path: '/tools/generators/username-generator',
    tags: ['username', 'generator', 'nickname', 'handle', 'creative'],
    isNew: false,
    usabilitySteps: [
      'Select username length preference',
      'Choose options (include numbers, special characters)',
      'Select style (camelCase, snake_case, etc.)',
      'Click Generate to create usernames',
      'Copy your favorite username'
    ],
    aboutContent: {
      introduction: 'The Username Generator creates unique and creative usernames for social media, gaming, forums, and online accounts. Generate memorable handles that stand out and reflect your personality.',
      keyFeatures: [
        'Generate creative username combinations',
        'Customizable length options',
        'Include numbers and special characters',
        'Multiple style formats (camelCase, snake_case)',
        'Generate multiple options at once',
        'One-click copy to clipboard'
      ],
      whoBenefits: [
        'Gamers creating new accounts',
        'Social media users seeking unique handles',
        'Content creators building their brand',
        'Forum members needing usernames',
        'Anyone struggling to find available usernames'
      ],
      whyChoose: [
        'Creative word combinations',
        'Customizable generation options',
        'Multiple username suggestions',
        'Easy copying',
        'Free and unlimited'
      ]
    },
    faqs: [
      { question: 'How are usernames generated?', answer: 'Usernames are created by combining random words, adjectives, and nouns with optional numbers and special characters for uniqueness.' },
      { question: 'Can I customize the username style?', answer: 'Yes, you can choose different styles like camelCase (MyUsername), snake_case (my_username), or plain lowercase.' },
      { question: 'Are the generated usernames available?', answer: 'The generator creates unique combinations, but you need to check availability on your specific platform as popular names may be taken.' },
      { question: 'Can I include numbers in usernames?', answer: 'Yes, you can enable the option to include numbers, which increases uniqueness and helps find available usernames.' },
      { question: 'What if I don\'t like any suggestions?', answer: 'Simply click Generate again to get a new set of username suggestions. Generate as many times as needed.' },
      { question: 'Can I use these for professional accounts?', answer: 'While the generator creates creative names, consider your audience. For professional accounts, you may want simpler, more formal usernames.' }
    ]
  },

  // ==================== TEXT TOOLS (5 tools: 4 existing + 1 restored) ====================
  {
    id: 'character-counter',
    name: 'Character Counter',
    description: 'Count characters, words, and sentences',
    category: 'text-tools',
    icon: 'Type',
    path: '/tools/text-tools/character-counter',
    tags: ['character', 'counter', 'word', 'text', 'statistics'],
    isNew: false,
    usabilitySteps: [
      'Paste or type your text into the input area',
      'View real-time character count (with and without spaces)',
      'See word count, sentence count, and paragraph count',
      'View line count and reading time estimate',
      'Use Reset to clear and start over'
    ],
    aboutContent: {
      introduction: 'The Character Counter provides comprehensive text statistics including character count, word count, sentences, paragraphs, and more. Essential for writers, students, and anyone working with text limits.',
      keyFeatures: [
        'Real-time character counting',
        'Count with and without spaces',
        'Word, sentence, and paragraph counts',
        'Line count tracking',
        'Reading time estimation',
        'Copy statistics to clipboard'
      ],
      whoBenefits: [
        'Writers tracking word counts',
        'Students meeting assignment requirements',
        'Social media managers staying within limits',
        'SEO specialists optimizing content length',
        'Anyone working with text constraints'
      ],
      whyChoose: [
        'Comprehensive text statistics',
        'Real-time counting as you type',
        'Multiple counting metrics',
        'Easy to use interface',
        'Free and unlimited'
      ]
    },
    faqs: [
      { question: 'What is the difference between characters with and without spaces?', answer: 'Characters with spaces counts every character including spaces. Characters without spaces only counts letters, numbers, and punctuation.' },
      { question: 'How are words counted?', answer: 'Words are counted by splitting text on whitespace. Hyphenated words are counted as one word.' },
      { question: 'How is reading time calculated?', answer: 'Reading time is estimated based on an average reading speed of 200-250 words per minute for typical content.' },
      { question: 'Does it count special characters?', answer: 'Yes, all characters including letters, numbers, punctuation, and special characters are counted.' },
      { question: 'Can I copy the statistics?', answer: 'Yes, use the copy button to copy all text statistics to your clipboard for easy sharing or documentation.' },
      { question: 'Is there a text length limit?', answer: 'No, you can analyze text of any length. The tool handles everything from short tweets to long documents.' }
    ]
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text between different cases',
    category: 'text-tools',
    icon: 'CaseSensitive',
    path: '/tools/text-tools/case-converter',
    tags: ['case', 'converter', 'uppercase', 'lowercase', 'title'],
    isNew: false,
    usabilitySteps: [
      'Paste or type your text into the input area',
      'View all case conversions simultaneously',
      'Click copy button for the case you need',
      'Choose from uppercase, lowercase, title, sentence, or alternating case',
      'Use Reset to clear and convert new text'
    ],
    aboutContent: {
      introduction: 'The Case Converter transforms text between different letter cases instantly. Convert to uppercase, lowercase, title case, sentence case, or alternating case with one click.',
      keyFeatures: [
        'Convert to uppercase (ALL CAPS)',
        'Convert to lowercase (all lowercase)',
        'Convert to Title Case (Capitalize Each Word)',
        'Convert to Sentence case (First letter only)',
        'Convert to aLtErNaTiNg CaSe',
        'Copy any conversion with one click'
      ],
      whoBenefits: [
        'Writers formatting text properly',
        'Developers converting variable names',
        'Content creators preparing social posts',
        'Students formatting assignments',
        'Anyone needing text case changes'
      ],
      whyChoose: [
        'Five case conversions simultaneously',
        'Instant conversion results',
        'Easy one-click copying',
        'No manual retyping needed',
        'Free and unlimited'
      ]
    },
    faqs: [
      { question: 'What is title case?', answer: 'Title case capitalizes the first letter of each major word, commonly used for titles and headings.' },
      { question: 'What is sentence case?', answer: 'Sentence case capitalizes only the first letter of the first word and proper nouns, like normal sentences.' },
      { question: 'What is alternating case?', answer: 'Alternating case alternates between lowercase and uppercase for each letter, creating a playful effect like "aLtErNaTiNg".' },
      { question: 'Can I convert multiple paragraphs?', answer: 'Yes, the converter handles text of any length including multiple paragraphs, maintaining paragraph structure.' },
      { question: 'Does it preserve special characters?', answer: 'Yes, special characters, numbers, and punctuation are preserved. Only letter cases are changed.' },
      { question: 'Can I undo a conversion?', answer: 'The original text remains in the input field. You can always refer back to it or use Reset to start over.' }
    ]
  },
  {
    id: 'text-reverser',
    name: 'Text Reverser',
    description: 'Reverse text character by character or word by word',
    category: 'text-tools',
    icon: 'ArrowLeftRight',
    path: '/tools/text-tools/text-reverser',
    tags: ['text', 'reverser', 'reverse', 'backwards', 'flip'],
    isNew: false,
    usabilitySteps: [
      'Paste or type your text into the input area',
      'Select reversal mode (character-level or word-level)',
      'View the reversed text instantly',
      'Click copy to copy the reversed text',
      'Use Reset to clear and reverse new text'
    ],
    aboutContent: {
      introduction: 'The Text Reverser flips your text backwards either character by character or word by word. Fun for creating mirror text, puzzles, or just experimenting with text manipulation.',
      keyFeatures: [
        'Reverse text character by character',
        'Reverse text word by word',
        'Toggle between reversal modes',
        'Instant reversal as you type',
        'One-click copy to clipboard',
        'Preserve or reverse punctuation'
      ],
      whoBenefits: [
        'Puzzle creators making word games',
        'Teachers creating educational activities',
        'Social media users creating unique posts',
        'Developers testing text handling',
        'Anyone wanting to reverse text'
      ],
      whyChoose: [
        'Two reversal modes',
        'Instant results',
        'Easy copying',
        'Fun and useful',
        'Free and unlimited'
      ]
    },
    faqs: [
      { question: 'What is character-level reversal?', answer: 'Character-level reversal flips the entire text backwards letter by letter. "Hello" becomes "olleH".' },
      { question: 'What is word-level reversal?', answer: 'Word-level reversal keeps words intact but reverses their order. "Hello World" becomes "World Hello".' },
      { question: 'Can I reverse multiple paragraphs?', answer: 'Yes, the reverser handles text of any length including multiple paragraphs and lines.' },
      { question: 'What happens to punctuation?', answer: 'Punctuation is treated as characters and reversed along with the text in character mode. In word mode, punctuation stays with its word.' },
      { question: 'Can I reverse the reversed text back?', answer: 'Yes, simply copy the reversed text back into the input field and reverse it again to get the original text.' },
      { question: 'Why would I need to reverse text?', answer: 'Text reversal is useful for puzzles, games, creating mirror text, testing software, or just for fun and creative purposes.' }
    ]
  },
  {
    id: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    description: 'Remove duplicate lines from text',
    category: 'text-tools',
    icon: 'ListFilter',
    path: '/tools/text-tools/remove-duplicate-lines',
    tags: ['duplicate', 'lines', 'remove', 'unique', 'text'],
    isNew: false,
    usabilitySteps: [
      'Paste your text with duplicate lines',
      'Toggle case-sensitive option if needed',
      'View statistics (original, removed, final line counts)',
      'See the cleaned text with duplicates removed',
      'Copy the cleaned text or use Reset'
    ],
    aboutContent: {
      introduction: 'The Remove Duplicate Lines tool cleans up text by removing duplicate lines, keeping only unique entries. Perfect for cleaning lists, removing redundant data, or organizing text files.',
      keyFeatures: [
        'Remove duplicate lines automatically',
        'Case-sensitive or case-insensitive matching',
        'Show statistics (original, removed, final counts)',
        'Preserve line order',
        'Handle large text files',
        'One-click copy cleaned text'
      ],
      whoBenefits: [
        'Data analysts cleaning datasets',
        'Developers managing configuration files',
        'Writers organizing research notes',
        'Students compiling unique references',
        'Anyone working with lists'
      ],
      whyChoose: [
        'Instant duplicate removal',
        'Flexible case sensitivity',
        'Clear statistics display',
        'Preserves original order',
        'Free and unlimited'
      ]
    },
    faqs: [
      { question: 'How are duplicates detected?', answer: 'Lines are compared exactly. If two lines match character-for-character (considering case sensitivity setting), one is removed.' },
      { question: 'What is case-sensitive matching?', answer: 'Case-sensitive treats "Hello" and "hello" as different. Case-insensitive treats them as duplicates.' },
      { question: 'Which duplicate is kept?', answer: 'The first occurrence of each line is kept, and subsequent duplicates are removed, preserving the original order.' },
      { question: 'Does it remove blank lines?', answer: 'Blank lines are treated like any other line. If you have multiple blank lines, only one will be kept.' },
      { question: 'Can it handle large files?', answer: 'Yes, the tool can process large text files with thousands of lines efficiently in your browser.' },
      { question: 'Does it preserve line order?', answer: 'Yes, the original order of unique lines is preserved. Only duplicate occurrences are removed.' }
    ]
  },
  {
    id: 'text-diff-checker',
    name: 'Text Diff Checker',
    description: 'Compare two texts and highlight differences',
    category: 'text-tools',
    icon: 'FileText',
    path: '/tools/text-tools/text-diff-checker',
    tags: ['diff', 'compare', 'text', 'difference', 'checker'],
    isNew: false,
    usabilitySteps: [
      'Paste the original text in the first textarea',
      'Paste the modified text in the second textarea',
      'Click Compare to see differences',
      'View additions highlighted in green',
      'View deletions highlighted in red'
    ],
    aboutContent: {
      introduction: 'The Text Diff Checker compares two texts and highlights the differences between them. Perfect for reviewing document changes, comparing versions, or spotting modifications in text.',
      keyFeatures: [
        'Line-by-line text comparison',
        'Word-by-word difference detection',
        'Highlight additions in green',
        'Highlight deletions in red',
        'Side-by-side or unified view',
        'Clear visual difference indicators'
      ],
      whoBenefits: [
        'Writers reviewing document revisions',
        'Developers comparing code versions',
        'Editors tracking content changes',
        'Students comparing essay drafts',
        'Anyone needing to spot text differences'
      ],
      whyChoose: [
        'Clear visual difference highlighting',
        'Multiple comparison modes',
        'Easy to spot changes',
        'No file upload required',
        'Free and unlimited'
      ]
    },
    faqs: [
      { question: 'How does the diff checker work?', answer: 'The tool compares texts line by line or word by word, identifying additions (green) and deletions (red) between the two versions.' },
      { question: 'What is line-by-line comparison?', answer: 'Line-by-line comparison treats each line as a unit, showing which lines were added, removed, or modified.' },
      { question: 'What is word-by-word comparison?', answer: 'Word-by-word comparison shows differences at the word level, useful for spotting small changes within lines.' },
      { question: 'Can I compare large documents?', answer: 'Yes, the tool can handle large documents, though very large files may take a moment to process.' },
      { question: 'Does it show unchanged text?', answer: 'Yes, unchanged text is displayed in normal color, while only differences are highlighted in green (additions) and red (deletions).' },
      { question: 'Can I export the comparison?', answer: 'You can copy the compared text from the display. For advanced export options, consider using dedicated diff tools.' }
    ]
  },

  // ==================== ANALYZERS (2 tools: 1 existing + 1 restored) ====================
  {
    id: 'text-analyzer',
    name: 'Text Analyzer',
    description: 'Analyze text for readability and statistics',
    category: 'analyzers',
    icon: 'Search',
    path: '/tools/analyzers/text-analyzer',
    tags: ['text', 'analyzer', 'readability', 'statistics'],
    isNew: false,
    usabilitySteps: [
      'Paste or type your text into the analyzer',
      'View comprehensive text statistics',
      'Check readability scores and grade level',
      'Review word frequency analysis',
      'Use insights to improve your writing'
    ],
    aboutContent: {
      introduction: 'The Text Analyzer provides comprehensive analysis of your text including readability scores, statistics, and insights. Perfect for writers, students, and content creators wanting to improve their writing.',
      keyFeatures: [
        'Readability score calculation',
        'Grade level assessment',
        'Word and character statistics',
        'Sentence complexity analysis',
        'Word frequency tracking',
        'Writing improvement suggestions'
      ],
      whoBenefits: [
        'Writers improving readability',
        'Students checking assignment complexity',
        'Content creators optimizing for audiences',
        'SEO specialists analyzing content',
        'Anyone wanting writing insights'
      ],
      whyChoose: [
        'Comprehensive text analysis',
        'Multiple readability metrics',
        'Actionable writing insights',
        'Easy to understand results',
        'Free and unlimited'
      ]
    },
    faqs: [
      { question: 'What is a readability score?', answer: 'Readability scores measure how easy text is to read and understand, typically based on sentence length and word complexity.' },
      { question: 'What is grade level?', answer: 'Grade level indicates the education level needed to understand the text. For example, grade 8 means an 8th grader should understand it.' },
      { question: 'How can I improve readability?', answer: 'Use shorter sentences, simpler words, active voice, and clear structure. Aim for grade 8-10 for general audiences.' },
      { question: 'What is word frequency analysis?', answer: 'Word frequency shows which words appear most often in your text, helping identify overused words or key themes.' },
      { question: 'Is there a text length limit?', answer: 'No, you can analyze text of any length from short paragraphs to long documents.' },
      { question: 'Can I analyze multiple documents?', answer: 'Analyze one document at a time. For multiple documents, analyze each separately and compare results.' }
    ]
  },
  {
    id: 'readability-analyzer',
    name: 'Readability Analyzer',
    description: 'Analyze text readability and complexity',
    category: 'analyzers',
    icon: 'BookOpen',
    path: '/tools/analyzers/readability-analyzer',
    tags: ['readability', 'analyzer', 'flesch', 'grade', 'complexity'],
    isNew: false,
    usabilitySteps: [
      'Paste your text into the analyzer',
      'Click Analyze to calculate readability scores',
      'View Flesch Reading Ease score',
      'Check Flesch-Kincaid Grade Level',
      'Review average words per sentence and readability rating'
    ],
    aboutContent: {
      introduction: 'The Readability Analyzer calculates Flesch Reading Ease and Flesch-Kincaid Grade Level scores to help you understand how easy your text is to read. Essential for writers targeting specific audiences.',
      keyFeatures: [
        'Flesch Reading Ease score (0-100)',
        'Flesch-Kincaid Grade Level',
        'Average words per sentence',
        'Readability rating (Very Easy to Very Difficult)',
        'Instant analysis results',
        'Clear score interpretation'
      ],
      whoBenefits: [
        'Content writers optimizing for readers',
        'Educators assessing text difficulty',
        'Marketers creating accessible content',
        'Technical writers simplifying documentation',
        'Anyone wanting readable content'
      ],
      whyChoose: [
        'Industry-standard readability metrics',
        'Clear score interpretations',
        'Instant analysis',
        'Actionable insights',
        'Free and unlimited'
      ]
    },
    faqs: [
      { question: 'What is Flesch Reading Ease?', answer: 'Flesch Reading Ease scores text from 0-100. Higher scores mean easier reading. 60-70 is standard, 90-100 is very easy, 0-30 is very difficult.' },
      { question: 'What is Flesch-Kincaid Grade Level?', answer: 'This score indicates the US school grade level needed to understand the text. Grade 8 means an 8th grader should comprehend it.' },
      { question: 'What is a good readability score?', answer: 'For general audiences, aim for Flesch Reading Ease of 60-70 (grade 8-9). For technical content, 50-60 is acceptable.' },
      { question: 'How is readability calculated?', answer: 'Readability formulas consider sentence length and syllables per word. Shorter sentences and simpler words improve scores.' },
      { question: 'Can I improve my readability score?', answer: 'Yes! Use shorter sentences, simpler words, active voice, and clear structure. Break up long paragraphs.' },
      { question: 'Is there a minimum text length?', answer: 'For accurate results, analyze at least 100 words. Shorter texts may give less reliable readability scores.' }
    ]
  },

  // ==================== DEVELOPER TOOLS (1 tool + 1 restored) ====================
  {
    id: 'favicon-generator',
    name: 'Favicon Generator',
    description: 'Generate favicons in multiple sizes',
    category: 'developer-tools',
    icon: 'Image',
    path: '/tools/developer-tools/favicon-generator',
    tags: ['favicon', 'generator', 'icon', 'website', 'ico'],
    isNew: false,
    usabilitySteps: [
      'Upload an image or enter text/emoji',
      'Preview the favicon in multiple sizes',
      'Click Generate to create favicon files',
      'Download as ICO or individual PNG files',
      'Add the favicon to your website'
    ],
    aboutContent: {
      introduction: 'The Favicon Generator creates website favicons in multiple sizes from images or text. Generate professional favicons for your website, web app, or blog in seconds.',
      keyFeatures: [
        'Upload image or use text/emoji',
        'Generate multiple sizes (16x16, 32x32, 64x64)',
        'Preview all sizes before download',
        'Download as ICO or PNG files',
        'Automatic image resizing',
        'Support for transparent backgrounds'
      ],
      whoBenefits: [
        'Web developers creating websites',
        'Designers branding web projects',
        'Bloggers personalizing their sites',
        'App developers needing icons',
        'Anyone needing website favicons'
      ],
      whyChoose: [
        'Multiple size generation',
        'Image and text input options',
        'Professional quality output',
        'Easy download and implementation',
        'Free and unlimited'
      ]
    },
    faqs: [
      { question: 'What is a favicon?', answer: 'A favicon is the small icon that appears in browser tabs, bookmarks, and address bars, helping users identify your website.' },
      { question: 'What sizes should I generate?', answer: 'Generate 16x16 (browser tab), 32x32 (taskbar), and 64x64 (high-res displays) for comprehensive browser support.' },
      { question: 'Can I use text or emoji?', answer: 'Yes! You can create simple favicons from text or emoji, perfect for quick branding or placeholder icons.' },
      { question: 'What image format should I upload?', answer: 'Upload PNG, JPG, or SVG images. PNG with transparent background works best for clean favicons.' },
      { question: 'How do I add a favicon to my website?', answer: 'Add <link rel="icon" href="/favicon.ico"> to your HTML <head> section, or use individual PNG files with appropriate link tags.' },
      { question: 'What is an ICO file?', answer: 'ICO is a file format that can contain multiple icon sizes in one file, commonly used for favicons for broad browser compatibility.' }
    ]
  },
];

// Helper function to get tool by ID
export function getToolById(id: string): ToolMetadata | undefined {
  return ALL_TOOLS.find(tool => tool.id === id);
}

// Helper function to get tools by category
export function getToolsByCategory(category: string): ToolMetadata[] {
  return ALL_TOOLS.filter(tool => tool.category === category);
}

// Helper function to get featured tools
export function getFeaturedTools(count: number = 6): ToolMetadata[] {
  return ALL_TOOLS.slice(0, count);
}

// Helper function to get new tools
export function getNewTools(): ToolMetadata[] {
  return ALL_TOOLS.filter(tool => tool.isNew);
}

// Helper function to search tools
export function searchTools(query: string): ToolMetadata[] {
  const lowerQuery = query.toLowerCase();
  if (query.length === 0) {
    return [];
  }

  return ALL_TOOLS.filter(tool => 
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
  );
}
