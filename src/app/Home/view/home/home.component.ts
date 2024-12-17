import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  questions: any[] = [];
  banking: any;
  quiztitle: any;
  Quiz: any[]=[];

  constructor(private router: Router) { }

  ngOnInit(): void {}

  BankingQuestions() {
    localStorage.clear();

    const quiztitle={
      quizname : "Banking"
    }
    this.Quiz.push(quiztitle);

    localStorage.setItem('QuizTypeName', JSON.stringify(this.Quiz));
    console.log(this.Quiz);

    this.questions.push({
      id: "1",
      quesTitle: "What does ATM stand for?",
      opt1: "Automated Teller Machine",
      opt2: "Automatic Transaction Machine",
      opt3: "Advanced Teller Management",
      opt4: "Automated Transfer Money",
      correctOPT: "Automatic Transaction Machine"
    },
      {
        id: "2",
        quesTitle: "Which of the following is not a type of bank account?",
        opt1: "Checking account",
        opt2: "Saving account",
        opt3: "Credit account",
        opt4: "Money market account",
        correctOPT: "Credit account"
      },
      {
        id: "3",
        quesTitle: "What is the term for the interest rate at which the Federal Reserve lends to banks?",
        opt1: "Prime Rate",
        opt2: "Discount Rate",
        opt3: "LIBOR",
        opt4: "Federal Funds Rate",
        correctOPT: "Federal Funds Rate"
      },
      {
        id: "4",
        quesTitle: "What is the minimum amount of money required to open a checking account called?",
        opt1: "Account Balance",
        opt2: "Account Deposit",
        opt3: "Account Minimum",
        opt4: "Account Threshold",
        correctOPT: "Account Deposit"
      },
      {
        id: "5",
        quesTitle: "Which type of check is guaranteed by the bank that issues it?",
        opt1: "Personal Check",
        opt2: "Certified Check",
        opt3: "Cashier's Check",
        opt4: "Money Order",
        correctOPT: "Certified Check"
      },
      {
        id: "6",
        quesTitle: "What is the primary function of a bank's routing number?",
        opt1: "To identify the account holder",
        opt2: "To identify the bank",
        opt3: "To track transactions",
        opt4: "To generate interest",
        correctOPT: "To identify the bank"
      },
      {
        id: "7",
        quesTitle: "Which of the following is not a type of financial institution?",
        opt1: "Credit Union",
        opt2: "Investment Bank",
        opt3: "Mortgage Bank",
        opt4: "Securities Exchange",
        correctOPT: "Securities Exchange"
      },
      {
        id: "8",
        quesTitle: "What is the term for the fee charged by a bank when an account holder withdraws more money than is available in the account?",
        opt1: "Overdraft Fee",
        opt2: "Transaction Fee",
        opt3: "Balance Inquiry Fee",
        opt4: "Service Charge",
        correctOPT: "Overdraft Fee"
      },
      {
        id: "9",
        quesTitle: "Which government agency oversees credit unions in the United States?",
        opt1: "FDIC",
        opt2: "NCUA",
        opt3: "OCC",
        opt4: "SEC",
        correctOPT: "NCUA"
      },
      {
        id: "10",
        quesTitle: "What is the main difference between a credit union and a bank?",
        opt1: "Ownership",
        opt2: "Services offered",
        opt3: "Interest rates",
        opt4: "Membership eligibility",
        correctOPT: "Ownership"
      },
      {
        id: "11",
        quesTitle: "What is the maximum amount of money covered by FDIC insurance per depositor, per bank?",
        opt1: "$100,000",
        opt2: "$250,000",
        opt3: "$500,000",
        opt4: "$1,000,000",
        correctOPT: "$250,000"
      },
      {
        id: "12",
        quesTitle: "Which type of account typically offers the highest interest rate?",
        opt1: "Checking Account",
        opt2: "Savings Account",
        opt3: "Money Market Account",
        opt4: "Certificate of Deposit (CD)",
        correctOPT: "Certificate of Deposit (CD)"
      },
      {
        id: "13",
        quesTitle: "What is the term for the process of moving money from one bank account to another electronically?",
        opt1: "Wire Transfer",
        opt2: "Direct Deposit",
        opt3: "EFT (Electronic Funds Transfer)",
        opt4: "Mobile Banking",
        correctOPT: "EFT (Electronic Funds Transfer)"
      },
      {
        id: "14",
        quesTitle: "What does the term 'APY' stand for in banking?",
        opt1: "Annual Percentage Yield",
        opt2: " Average Principal Yield",
        opt3: "Accumulated Profit Yield",
        opt4: "Annual Profitability Year",
        correctOPT: "Annual Percentage Yield"
      },
      {
        id: "15",
        quesTitle: "Which of the following is not a function of the Federal Reserve?",
        opt1: "Issuing currency",
        opt2: "Setting fiscal policy",
        opt3: "Regulating banks",
        opt4: "Conducting monetary policy",
        correctOPT: "Setting fiscal policy"
      },
      
    )
    
    console.log(this.questions);

    localStorage.setItem('Questions', JSON.stringify(this.questions));

    this.router.navigate(['/h2']);
  }

  BusinessQuestions() {
    localStorage.clear();

    const quiztitle={
      quizname : "Business"
    }
    this.Quiz.push(quiztitle);

    localStorage.setItem('QuizTypeName', JSON.stringify(this.Quiz));
    console.log(this.Quiz);

    this.questions.push({
      id: "1",
      quesTitle: "What does ROI stand for in business?",
      opt1: "Revenue of Interest",
      opt2: "Return of Investment",
      opt3: " Return on Investment",
      opt4: "Rate of Inflation",
      correctOPT: " Return on Investment"
    },
      {
        id: "2",
        quesTitle: "Which of the following is a characteristic of a sole proprietorship?",
        opt1: "Limited liability",
        opt2: "Separate legal entity",
        opt3: "Shared ownership",
        opt4: "Unlimited liability",
        correctOPT: "Unlimited liability"
      },
      {
        id: "3",
        quesTitle: "What is the term for the process of bringing goods into a country for sale?",
        opt1: "Export",
        opt2: "Import",
        opt3: "Trade surplus",
        opt4: "Trade deficit",
        correctOPT: "Import"
      },
      {
        id: "4",
        quesTitle: "What is the term for a document that outlines a company's goals and strategies for achieving them?",
        opt1: "Budget",
        opt2: "Financial statement",
        opt3: "Business plan",
        opt4: "Annual report",
        correctOPT: "Business plan"
      },
      {
        id: "5",
        quesTitle: "Which of the following is not a type of business organization?",
        opt1: "Corporation",
        opt2: "Partnership",
        opt3: "Cooperative",
        opt4: "Enterprise",
        correctOPT: "Enterprise"
      },
      {
        id: "6",
        quesTitle: "What is the term for the process of dividing a market into distinct groups of buyers with different needs, characteristics, or behaviors?",
        opt1: "Market segmentation",
        opt2: "Market penetration",
        opt3: "Market saturation",
        opt4: "Market positioning",
        correctOPT: "Market segmentation"
      },
      {
        id: "7",
        quesTitle: "Which of the following is not a factor of production?",
        opt1: "Labor",
        opt2: "Capital",
        opt3: "Goods",
        opt4: "Land",
        correctOPT: "Goods"
      },
      {
        id: "8",
        quesTitle: "What is the term for the total value of all goods and services produced by a country in a given period?",
        opt1: "GDP (Gross Domestic Product)",
        opt2: "GNP (Gross National Product)",
        opt3: "GNI (Gross National Income)",
        opt4: "GNH (Gross National Happiness)",
        correctOPT: "GDP (Gross Domestic Product)"
      },
      {
        id: "9",
        quesTitle: " What is the term for the amount of money a company brings in from its normal business activities?",
        opt1: "Revenue",
        opt2: "Profit",
        opt3: "Investment",
        opt4: "Capital",
        correctOPT: "Revenue"
      },
      {
        id: "10",
        quesTitle: "What is the primary goal of financial management in a business?",
        opt1: "Maximizing profits",
        opt2: "Minimizing costs",
        opt3: "Maximizing shareholder wealth",
        opt4: "Maximizing market share",
        correctOPT: "Maximizing shareholder wealth"
      },
      {
        id: "11",
        quesTitle: "What does SWOT analysis stand for?",
        opt1: "Strengths, Weaknesses, Opportunities, Threats",
        opt2: "Sales, Workforce, Organization, Technology",
        opt3: "Strategies, Workforce, Objectives, Targets",
        opt4: "Stakeholders, Workforce, Objectives, Trends",
        correctOPT: "Strengths, Weaknesses, Opportunities, Threats"
      },
      {
        id: "12",
        quesTitle: "Which of the following is a type of financial ratio used to measure a company's liquidity?",
        opt1: "Debt-to-Equity Ratio",
        opt2: "Current Ratio",
        opt3: "Return on Investment Ratio",
        opt4: "Price-to-Earnings Ratio",
        correctOPT: "Current Ratio"
      },
      {
        id: "13",
        quesTitle: "What is the term for a situation in which a company's liabilities exceed its assets?",
        opt1: "Solvency",
        opt2: "Insolvency",
        opt3: "Liquidity",
        opt4: "Profitability",
        correctOPT: "Insolvency"
      },
      {
        id: "14",
        quesTitle: "What is the term for the process of turning raw materials into finished goods?",
        opt1: "Production",
        opt2: "Manufacturing",
        opt3: "Distribution",
        opt4: "Procurement",
        correctOPT: "Manufacturing"
      },
      {
        id: "15",
        quesTitle: "What is the term for the financial gain made in a transaction?",
        opt1: "Revenue",
        opt2: "Profit",
        opt3: "Income",
        opt4: "Capital",
        correctOPT: "Profit"
      },
    )

    console.log(this.questions);

    localStorage.setItem('Questions', JSON.stringify(this.questions));

    this.router.navigate(['/h2']);

  }

  FinancieQuestions() {
    localStorage.clear();

    const quiztitle={
      quizname : "Financie"
    }
    this.Quiz.push(quiztitle);

    localStorage.setItem('QuizTypeName', JSON.stringify(this.Quiz));
    console.log(this.Quiz);

    this.questions.push({
      id: "1",
      quesTitle: "What does ROI stand for in finance ? ",
      opt1: "Return on Investment",
      opt2: "Rate of Interest",
      opt3: "Revenue of Income",
      opt4: "Risk of Inflation",
      correctOPT: "Return on Investment"
    },
      {
        id: "2",
        quesTitle: "What is the term for a financial market where securities are bought and sold after their initial issuance?",
        opt1: "Primary market",
        opt2: "Secondary market",
        opt3: "Money market",
        opt4: "Capital market",
        correctOPT: "Secondary market"
      },
      {
        id: "3",
        quesTitle: "What is the primary goal of financial management in a business?",
        opt1: "Maximizing profits",
        opt2: "Minimizing costs",
        opt3: "Maximizing shareholder wealth",
        opt4: "Maximizing market share",
        correctOPT: "Maximizing shareholder wealth"
      },
      {
        id: "4",
        quesTitle: "What is the term for a situation in which a company's liabilities exceed its assets?",
        opt1: "Solvency",
        opt2: "Insolvency",
        opt3: "Liqidty",
        opt4: "Proitability",
        corectOPT: "Insolvency"
      },
      {
        id: "5",
        uesTtle: "Which of the following is a characteristic of a bull market ? ",
        pt1: "Risig stock prices",
        opt2: "Falling stock prices",
        opt3: "Stagnant stock prices",
        opt4: "High unemployment rates",
        correctOPT: "Rising stock prices"
      },
      {
        id: "6",
        quesTitle: "What is the term for the interest rate at which banks lend money to each other overnight? ",
        opt1: "Federal Funds Rate",
        opt2: "Prime Rate",
        opt3: "Discount Rate",
        opt4: "LIBOR (London Interbank Offered Rate)",
        correctOPT: "Federal Funds Rate"
      },
      {
        id: "7",
        quesTitle: "Which of the following represents a measure of a company's liqidty?",
        opt1: "Debt-to-Equity Ratio",
        opt2: "Return on Investment Rtio",
        opt3: "Return on Investment Ratio",
        opt4: "Price-to-Earnings Ratio",
        correctOPT: "Current Ratio"
      },
      {
        id: "8",
        quesTitle: "What is the term for the total value of all goods and services produced by a country in a given period? ",
        opt1: "GDP (Gross Domestic Product)",
        opt2: "GNP (Gross National Product)",
        opt3: "GNI (Gross National Income)",
        opt4: "GNH (Gross National Happiness)",
        correctOPT: "GDP (Gross Domestic Product)"
      },
      {
        id: "9",
        quesTitle: "What is the primary purpose of diversification in investment? ",
        opt1: "Maximizing returns",
        opt2: "Minimizing risk",
        opt3: "Achieving tax benefits",
        opt4: "Increasing volatility",
        correctOPT: "Minimizing risk"
      },
      {
        id: "10",
        quesTitle: "Which of the following is not a type of financial ratio? ",
        opt1: "Debt Ratio",
        opt2: "Leverage Ratio",
        opt3: "Profit Ratio",
        opt4: "Risk Ratio",
        correctOPT: "Risk Ratio"
      },
      {
        id: "11",
        quesTitle: "What does the term 'bull market' refer to? ",
        opt1: "A period of rising stock prices",
        opt2: "A period of falling stock prices",
        opt3: "A period of economic recession",
        opt4: "A period of high inflation",
        correctOPT: "A period of rising stock prices"
      },
      {
        id: "12",
        quesTitle: "What is the primary purpose of a budget in financial management?",
        opt1: "To maximize profits",
        opt2: "To control costs",
        opt3: "To minimize risk",
        opt4: "To increase revenue",
        correctOPT: "To control costs"
      },
      {
        id: "13",
        quesTitle: "What is the term for a financial instrument that represents ownership in a company?",
        opt1: "Bond",
        opt2: "Stock",
        opt3: "Mutual Fund",
        opt4: "Option",
        correctOPT: "Stock",
      },
      {
        id: "14",
        quesTitle: "What is the term for the process of spreading investments across different assets to reduce risk?",
        opt1: "Diversification",
        opt2: "Leverage",
        opt3: "Hedging",
        opt4: "Speculation",
        correctOPT: "Diversification"
      },
      {
        id: "15",
        quesTitle: "Which of the following is a measure of a company's ability to meet its short-term obligations?",
        opt1: "Debt-to-Equity Ratio",
        opt2: "Current Ratio",
        opt3: "Return on Investment Ratio",
        opt4: "Price-to-Earnings Ratio",
        correctOPT: "Current Ratio"
      },)

      console.log(this.questions);

    localStorage.setItem('Questions', JSON.stringify(this.questions));

    this.router.navigate(['/h2']);
  }

  PoliticalQuestions() {
    localStorage.clear();

    const quiztitle={
      quizname : "Political"
    }
    this.Quiz.push(quiztitle);

    localStorage.setItem('QuizTypeName', JSON.stringify(this.Quiz));
    console.log(this.Quiz);

    this.questions.push({
      id: "1",
      quesTitle: "Who is the current president of the United States?",
      opt1: "Joe Biden",
      opt2: "Donald Trump",
      opt3: "Barack Obama",
      opt4: "George Bush",
      correctOPT: "Joe Biden"
    },
      {
        id: "2",
        quesTitle: "Who is the prime minister of the United Kingdom?",
        opt1: "Boris Johnson",
        opt2: "Theresa May",
        opt3: "David Cameron",
        opt4: "Tony Blair",
        correctOPT: "Boris Johnson"
      },
      {
        id: "3",
        quesTitle: "Who is the chancellor of Germany?",
        opt1: "Angela Merkel",
        opt2: "Olaf Scholz",
        opt3: "Gerhard Schröder",
        opt4: "Helmut Kohl",
        correctOPT: "Olaf Scholz"
      },
      {
        id: "4",
        quesTitle: "Who is the president of France?",
        opt1: "Emmanuel Macron",
        opt2: "François Hollande",
        opt3: "Jacques Chirac",
        opt4: "Nicolas Sarkozy",
        correctOPT: "Emmanuel Macron"
      },
      {
        id: 5,
        quesTitle: "Who is the prime minister of India?",
        opt1: "Narendra Modi",
        opt2: "Manmohan Singh",
        opt3: "Indira Gandhi",
        opt4: "Rajiv Gandhi",
        correctOPT: "Narendra Modi"
      },
      {
        id: 6,
        quesTitle: "Who is the president of Russia?",
        opt1: "Vladimir Putin",
        opt2: "Dmitry Medvedev",
        opt3: "Boris Yeltsin",
        opt4: "Mikhail Gorbachev",
        correctOPT: "Vladimir Putin"
      },
      {
        id: "7",
        quesTitle: "Who is the prime minister of Canada?",
        opt1: "Justin Trudeau",
        opt2: "Stephen Harper",
        opt3: "Jean Chrétien",
        opt4: "Paul Martin",
        correctOPT: "Justin Trudeau"
      },
      {
        id: "8",
        quesTitle: "Who is the president of Brazil?",
        opt1: "Jair Bolsonaro",
        opt2: "Luiz Inácio Lula da Silva",
        opt3: "Dilma Rousseff",
        opt4: "Fernando Henrique Cardoso",
        correctOPT: "Jair Bolsonaro"
      },
      {
        id: "9",
        quesTitle: "Who is the prime minister of Australia?",
        opt1: "Scott Morrison",
        opt2: "Malcolm Turnbull",
        opt3: "Tony Abbott",
        opt4: "Julia Gillard",
        correctOPT: "Scott Morrison"
      },
      {
        id: "10",
        quesTitle: "Who is the president of China?",
        opt1: "Xi Jinping",
        opt2: "Hu Jintao",
        opt3: "Jiang Zemin",
        opt4: "Deng Xiaoping",
        correctOPT: "Xi Jinping"
      },
      {
        id: "11",
        quesTitle: "Who is the prime minister of Japan?",
        opt1: "Fumio Kishida",
        opt2: "Shinzo Abe",
        opt3: "Yoshihide Suga",
        opt4: "Naoto Kan",
        correctOPT: "Fumio Kishida"
      },
      {
        id: "12",
        quesTitle: "Who is the president of South Africa?",
        opt1: "Cyril Ramaphosa",
        opt2: "Jacob Zuma",
        opt3: "Thabo Mbeki",
        opt4: "Nelson Mandela",
        correctOPT: "Cyril Ramaphosa"
      },
      {
        id: "13",
        quesTitle: "Who is the prime minister of Israel?",
        opt1: "Naftali Bennett",
        opt2: "Benjamin Netanyahu",
        opt3: "Ehud Olmert",
        opt4: "Ariel Sharon",
        correctOPT: "Naftali Bennett"
      },
      {
        id: "14",
        quesTitle: "Who is the president of Turkey?",
        opt1: "Recep Tayyip Erdoğan",
        opt2: "Abdullah Gül",
        opt3: "Ahmet Necdet Sezer",
        opt4: "Turgut Özal",
        correctOPT: "Recep Tayyip Erdoğan"
      },
      {
        id: "15",
        quesTitle: "Who is the prime minister of Pakistan?",
        opt1: "Imran Khan",
        opt2: "Nawaz Sharif",
        opt3: "Benazir Bhutto",
        opt4: "Pervez Musharraf",
        correctOPT: "Imran Khan"
      },
    )

    console.log(this.questions);

    localStorage.setItem('Questions', JSON.stringify(this.questions));

    this.router.navigate(['/h2']);
  }

  NutureQuestions() {
    localStorage.clear();

    const quiztitle={
      quizname : "Nuture"
    }
    this.Quiz.push(quiztitle);

    localStorage.setItem('QuizTypeName', JSON.stringify(this.Quiz));
    console.log(this.Quiz);

    this.questions.push({
      id: "1",
      quesTitle: "What is the tallest tree species in the world?",
      opt1: "Sequoia",
      opt2: "Oak",
      opt3: "Pine",
      opt4: "Birch",
      correctOPT: "Sequoia"
    },
      {
        id: "2",
        quesTitle: "Which animal is known as the 'king of the jungle'?",
        opt1: "Lion",
        opt2: "Tiger",
        opt3: "Leopard",
        opt4: "Elephant",
        correctOPT: "Lion"
      },
      {
        id: "3",
        quesTitle: "What is the fastest land animal?",
        opt1: "Cheetah",
        opt2: "Lion",
        opt3: "Gazelle",
        opt4: "Leopard",
        correctOPT: "Cheetah"
      },
      {
        id: "4",
        quesTitle: "What is the largest mammal in the world?",
        opt1: "Blue Whale",
        opt2: "Elephant",
        opt3: "Giraffe",
        opt4: "Hippo",
        correctOPT: "Blue Whale"
      },
      {
        id: "5",
        quesTitle: "What is the largest bird in the world?",
        opt1: "Ostrich",
        opt2: "Emu",
        opt3: "Albatross",
        opt4: "Pelican",
        correctOPT: "Ostrich"
      },
      {
        id: "6",
        quesTitle: "Which gas makes up the majority of Earth's atmosphere?",
        opt1: "Nitrogen",
        opt2: "Oxygen",
        opt3: "Carbon Dioxide",
        opt4: "Helium",
        correctOPT: "Nitrogen"
      },
      {
        id: "7",
        quesTitle: "Which planet is known as the 'Red Planet'?",
        opt1: "Mars",
        opt2: "Venus",
        opt3: "Jupiter",
        opt4: "Saturn",
        correctOPT: "Mars"
      },
      {
        id: "8",
        quesTitle: "What is the hardest natural substance on Earth?",
        opt1: "Diamond",
        opt2: "Quartz",
        opt3: "Topaz",
        opt4: "Corundum",
        correctOPT: "Diamond"
      },
      {
        id: "9",
        quesTitle: "What is the deepest part of the ocean?",
        opt1: "Mariana Trench",
        opt2: "Puerto Rico Trench",
        opt3: "Tonga Trench",
        opt4: "Java Trench",
        correctOPT: "Mariana Trench"
      },
      {
        id: "10",
        quesTitle: "What is the largest ocean on Earth?",
        opt1: "Pacific Ocean",
        opt2: "Atlantic Ocean",
        opt3: "Indian Ocean",
        opt4: "Arctic Ocean",
        correctOPT: "Pacific Ocean"
      },
      {
        id: "11",
        quesTitle: "Which animal is known as the 'Gentle Giant'?",
        opt1: "Elephant",
        opt2: "Giraffe",
        opt3: "Hippo",
        opt4: "Whale",
        correctOPT: "Elephant"
      },
      {
        id: "12",
        quesTitle: "What is the process by which plants make their food?",
        opt1: "Photosynthesis",
        opt2: "Respiration",
        opt3: "Transpiration",
        opt4: "Pollination",
        correctOPT: "Photosynthesis"
      },
      {
        id: "13",
        quesTitle: "What is the study of earthquakes called?",
        opt1: "Seismology",
        opt2: "Meteorology",
        opt3: "Geology",
        opt4: "Ecology",
        correctOPT: "Seismology"
      },
      {
        id: "14",
        quesTitle: "Which mammal can fly?",
        opt1: "Bat",
        opt2: "Bird",
        opt3: "Penguin",
        opt4: "Squirrel",
        correctOPT: "Bat"
      },
      {
        id: 15,
        quesTitle: "What is the largest species of cat?",
        opt1: "Tiger",
        opt2: "Lion",
        opt3: "Jaguar",
        opt4: "Leopard",
        correctOPT: "Tiger"
      },
    )

    console.log(this.questions);

    localStorage.setItem('Questions', JSON.stringify(this.questions));

    this.router.navigate(['/h2']);
  }

  EconomicsQuestions() {
    localStorage.clear();

    const quiztitle={
      quizname : "Economics"
    }
    this.Quiz.push(quiztitle);

    localStorage.setItem('QuizTypeName', JSON.stringify(this.Quiz));
    console.log(this.Quiz);

    this.questions.push({
      id: "1",
      quesTitle: "What is the term for a situation where the price level of goods and services rises steadily over time?",
      opt1: "Inflation",
      opt2: "Deflation",
      opt3: "Recession",
      opt4: "Depression",
      correctOPT: "Inflation"
    },
      {
        id: "2",
        quesTitle: "What is the term for the total value of all goods and services produced by a country in a given period?",
        opt1: "GDP (Gross Domestic Product)",
        opt2: "GNP (Gross National Product)",
        opt3: "GNI (Gross National Income)",
        opt4: "GNH (Gross National Happiness)",
        correctOPT: "GDP (Gross Domestic Product)"
      },
      {
        id: "3",
        quesTitle: "What is the primary goal of financial management in a business?",
        opt1: "Maximizing profits",
        opt2: "Minimizing costs",
        opt3: "Maximizing shareholder wealth",
        opt4: "Maximizing market share",
        correctOPT: "Maximizing shareholder wealth"
      },
      {
        id: "4",
        quesTitle: "What is the term for the amount of money a company brings in from its normal business activities?",
        opt1: "Revenue",
        opt2: "Profit",
        opt3: "Investment",
        opt4: "Capital",
        correctOPT: "Revenue"
      },
      {
        id: "5",
        quesTitle: "What is the term for a situation in which a company's liabilities exceed its assets?",
        opt1: "Solvency",
        opt2: "Insolvency",
        opt3: "Liquidity",
        opt4: "Profitability",
        correctOPT: "Insolvency"
      },
      {
        id: "6",
        quesTitle: "Which of the following is a measure of a company's liquidity?",
        opt1: "Debt-to-Equity Ratio",
        opt2: "Current Ratio",
        opt3: "Return on Investment Ratio",
        opt4: "Price-to-Earnings Ratio",
        correctOPT: "Current Ratio"
      },
      {
        id: "7",
        quesTitle: "What is the term for the financial gain made in a transaction?",
        opt1: "Revenue",
        opt2: "Profit",
        opt3: "Income",
        opt4: "Capital",
        correctOPT: "Profit"
      },
      {
        id: "8",
        quesTitle: "Which of the following is not a type of marketing strategy?",
        opt1: "Product differentiation",
        opt2: "Cost leadership",
        opt3: "Market penetration",
        opt4: "Operational excellence",
        correctOPT: "Operational excellence"
      },
      {
        id: "9",
        quesTitle: "What is the term for the process of reducing the number of employees in a company to cut costs?",
        opt1: "Outsourcing",
        opt2: "Downsizing",
        opt3: "Restructuring",
        opt4: "Diversification",
        correctOPT: "Downsizing"
      },
      {
        id: "10",
        quesTitle: "What is the term for a situation in which a country imports more goods and services than it exports?",
        opt1: "Trade surplus",
        opt2: "Trade deficit",
        opt3: "Trade equilibrium",
        opt4: "Trade offset",
        correctOPT: "Trade deficit"
      },
      {
        id: "11",
        quesTitle: "What is the term for a financial market where securities are bought and sold after their initial issuance?",
        opt1: "Primary market",
        opt2: "Secondary market",
        opt3: "Money market",
        opt4: "Capital market",
        correctOPT: "Secondary market"
      },
      {
        id: "12",
        quesTitle: "What is the term for the interest rate at which banks lend money to each other overnight?",
        opt1: "Federal Funds Rate",
        opt2: "Prime Rate",
        opt3: "Discount Rate",
        opt4: "LIBOR (London Interbank Offered Rate)",
       correctOPT: "Federal Funds Rate"
      },
      {
        id: "13",
        quesTitle: "What is the primary purpose of diversification in investment?",
        opt1: "Maximizing returns",
        opt2: "Minimizing risk",
        opt3: "Achieving tax benefits",
        opt4: "Increasing volatility",
        correctOPT: "Minimizing risk"
      },
      {
        id: "14",
        quesTitle: "What is the term for the process of spreading investments across different assets to reduce risk?",
        opt1: "Diversification",
        opt2: "Leverage",
        opt3: "Hedging",
        opt4: "Speculation",
        correctOPT: "Diversification"
      },
      {
        id: "15",
        quesTitle: "What is the term for the financial measure that represents the difference between a company's revenues and its expenses?",
        opt1: "Profit",
        opt2: "Revenue",
        opt3: "Loss",
        opt4: "Cost",
        correctOPT: "Profit"
      },
    )

    console.log(this.questions);

    localStorage.setItem('Questions', JSON.stringify(this.questions));

    this.router.navigate(['/h2']);

  }

}