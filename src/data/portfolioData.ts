export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Banking' | 'Statistics' | 'E-Commerce';
  summary: string;
  image: string;
  tools: string[];
  metrics: { label: string; value: string }[];
  problemStatement: string;
  methodology: string[];
  findings: string[];
  businessImpact: string;
}

export interface SkillItem {
  name: string;
  category: 'Analytics' | 'Modeling' | 'Tools' | 'Programming';
  level: 'Advanced' | 'Intermediate' | 'Foundational';
  iconName: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Aleeha Azfar Haroon",
    shortName: "Aleeha Azfar",
    headline: "Mathematics Student at BZU | Aspiring Data Analyst",
    location: "Multan, Pakistan",
    email: "aleehaazfarharoon@gmail.com",
    phone: "03154758281",
    linkedin: "https://www.linkedin.com/in/aleeha-azfar-haroon-1b52923b4",
    github: "https://github.com/AleehaAzfar",
    rollNo: "Bsmathsm-25-01",
    university: "Bahauddin Zakariya University (BZU)",
    degree: "B.Sc. Mathematics (Final Year)",
    tagline: "Bridging pure mathematical logic, statistical modeling, and advanced spreadsheet analytics to transform raw, intricate numbers into actionable business intelligence.",
    bio: "I am a final-year B.Sc. Mathematics student at Bahauddin Zakariya University (BZU) with Roll No. Bsmathsm-25-01. My academic focus combines rigorous analytical skills with statistical analysis and modern computational tools. With hands-on internship experience in banking data analytics at Universal Bank Limited (UBL), I aim to build an impactful career as a Data Analyst and Data Science professional."
  },

  keyStats: [
    { label: "Academic Standing", value: "B.Sc. Mathematics", sub: "BZU Multan · Roll Bsmathsm-25-01" },
    { label: "Industry Experience", value: "UBL Banking", sub: "Data & Operations Intern" },
    { label: "Core Competencies", value: "7+ Methods", sub: "Excel, Statistics & SQL" },
    { label: "Analytical Focus", value: "Data Science", sub: "Predictive & Business Intelligence" },
  ],

  education: {
    degree: "B.Sc. Mathematics",
    institution: "Bahauddin Zakariya University (BZU)",
    location: "Multan, Pakistan",
    period: "2021 – 2025 (Final Year)",
    rollNo: "Bsmathsm-25-01",
    overview: "Focused on mathematical modeling, statistical theory, probability, advanced calculus, linear algebra, and data interpretation techniques.",
    courses: [
      "Probability & Mathematical Statistics",
      "Differential Equations & Modeling",
      "Linear Algebra & Matrix Decompositions",
      "Advanced Multivariable Calculus",
      "Numerical Analysis & Computing",
      "Statistical Inference & Hypothesis Testing"
    ]
  },

  experience: {
    role: "Data & Operations Intern",
    company: "Universal Bank Limited (UBL)",
    period: "Internship",
    location: "Multan, Pakistan",
    overview: "Gained practical exposure in financial record management, spreadsheet automation using Advanced Excel, and data analysis for financial decision support.",
    bulletPoints: [
      "Audited and cleaned customer transaction records across branch operations, identifying variance discrepancies and ensuring data integrity.",
      "Engineered automated spreadsheet models utilizing advanced Excel formulas (XLOOKUP, nested IFs, dynamic pivot tables) to streamline recurring weekly reconciliations.",
      "Synthesized operational throughput data into concise summary reports for branch managers to identify customer wait-time trends and cash handling peaks.",
      "Maintained strict compliance with banking confidentiality and financial documentation protocols."
    ]
  },

  skills: [
    {
      name: "Advanced Microsoft Excel",
      category: "Tools",
      level: "Advanced",
      iconName: "FileSpreadsheet",
      description: "Complex formulas, XLOOKUP, dynamic arrays, nested logic, Pivot Tables, conditional formatting, and executive financial dashboarding.",
      highlights: ["Pivot Tables & Slicers", "XLOOKUP & Nested Logic", "Data Validation & Cleansing", "Financial Modeling"]
    },
    {
      name: "Data Analysis",
      category: "Analytics",
      level: "Advanced",
      iconName: "BarChart3",
      description: "Exploratory data analysis (EDA), anomaly identification, metric calculation, trend extrapolation, and actionable insights reporting.",
      highlights: ["Exploratory Data Analysis", "KPI Synthesis", "Cohort & Trend Analysis", "Data Cleansing"]
    },
    {
      name: "Mathematical Modeling",
      category: "Modeling",
      level: "Advanced",
      iconName: "Calculator",
      description: "Translating abstract physical and financial relationships into formal mathematical formulations, optimization problems, and linear systems.",
      highlights: ["Optimization Formulations", "Matrix Operations", "Differential Formulations", "Algorithmic Logic"]
    },
    {
      name: "Statistical Analysis",
      category: "Analytics",
      level: "Advanced",
      iconName: "PieChart",
      description: "Hypothesis testing, descriptive statistics, probability distributions (Normal, Poisson, Binomial), variance analysis, and confidence intervals.",
      highlights: ["Hypothesis Testing", "Probability Distributions", "Variance (ANOVA) & Covariance", "Confidence Bounds"]
    },
    {
      name: "SQL (Basic)",
      category: "Programming",
      level: "Intermediate",
      iconName: "Database",
      description: "Querying relational tables, filtering datasets using WHERE/HAVING, multi-table JOINS, aggregation functions, and grouping.",
      highlights: ["SELECT, WHERE, ORDER BY", "INNER & LEFT JOINS", "GROUP BY & HAVING", "Aggregations (SUM, AVG)"]
    },
    {
      name: "Python (Basic)",
      category: "Programming",
      level: "Intermediate",
      iconName: "Code2",
      description: "Scripting basics, data structures (lists, dicts, arrays), introductory Pandas data frames, NumPy operations, and algorithmic routines.",
      highlights: ["Fundamental Syntax", "Data Structures", "Pandas Dataframes", "Basic Mathematical Scripting"]
    },
    {
      name: "Problem Solving",
      category: "Modeling",
      level: "Advanced",
      iconName: "BrainCircuit",
      description: "Deconstructing ambiguous business hurdles into structured analytical questions, validating assumptions, and formulating empirical solutions.",
      highlights: ["Quantitative Decomposition", "Root-Cause Analysis", "Assumption Validation", "Actionable Deliverables"]
    }
  ] as SkillItem[],

  projects: [
    {
      id: "bank-customer-analytics",
      title: "Bank Customer Analytics",
      subtitle: "Excel & Dashboarding",
      category: "Banking",
      summary: "Analyzed financial transactional datasets to discover customer behavior patterns and build interactive Excel summary dashboards.",
      image: "/src/assets/images/project_bank_analytics_1791518610664.jpg",
      tools: ["Advanced Excel", "Pivot Tables", "Cohort Retention", "Financial Metrics", "KPI Dashboards"],
      metrics: [
        { label: "Active Customers", value: "14,215" },
        { label: "MoM Volume Growth", value: "+8.5%" },
        { label: "Cohort Retention Rate", value: "74.2%" },
        { label: "Avg Account Balance", value: "$164,810" }
      ],
      problemStatement: "Universal bank branches required consolidated visibility into customer transaction frequencies, deposit balances, and cohort churn rates without relying on complex, inaccessible mainframe queries.",
      methodology: [
        "Extracted 12-month transactional ledgers and standardized timestamps, currency fields, and transaction types (ACH, Card, Wire).",
        "Structured a relational spreadsheet data model using dynamic lookup keys and automated validation rules.",
        "Built multi-tier customer segmentation buckets based on average deposit balance: >$250k, $100k-$250k, $50k-$100k, and <$50k.",
        "Synthesized monthly cohort retention matrices tracking month-over-month engagement over 12 consecutive cycles.",
        "Developed interactive visual dashboard panels featuring sliced transaction volumes, account types, and Net Promoter Score indicators."
      ],
      findings: [
        "Premium tier accounts (representing 38% of accounts) contributed to over 64% of total transaction liquidity.",
        "Cohort retention stabilized at 74.2% by Month 4, highlighting that onboarding interventions in Months 1-3 yield the highest retention ROI.",
        "Automating weekly reporting reduced manual aggregation time by ~85%."
      ],
      businessImpact: "Equipped branch leadership with intuitive daily dashboards that flagged retention risks and empowered proactive account manager outreach."
    },
    {
      id: "statistical-data-modeling",
      title: "Statistical Data Modeling",
      subtitle: "Regression & Probability Distributions",
      category: "Statistics",
      summary: "Applied regression models and probability distributions to real-world datasets to derive predictive analytical insights.",
      image: "/src/assets/images/project_statistical_modeling_1791518620290.jpg",
      tools: ["Mathematical Statistics", "Nonlinear Regression", "Probability Distributions", "Residual Diagnostics", "Confidence Intervals"],
      metrics: [
        { label: "Model Goodness-of-Fit", value: "R² = 0.912" },
        { label: "Dataset Observations", value: "5,400 pts" },
        { label: "Mean Squared Error", value: "1.23 MSE" },
        { label: "Credible Interval", value: "95% HDI" }
      ],
      problemStatement: "Empirical business processes often exhibit non-linear behavior with heteroscedastic variance. Standard linear approximations fail to capture underlying inflection points, leading to skewed forecasts.",
      methodology: [
        "Formulated mathematical probability distribution models (Gaussian, Gamma, and Bimodal mixtures) to evaluate skewness and kurtosis.",
        "Estimated correlation heatmaps across candidate variables to detect multicollinearity and eliminate redundant predictors.",
        "Fitted polynomial and spline regression models with 95% confidence intervals against 5,400 data points.",
        "Conducted thorough residual diagnostics (Residuals vs. Fitted) to confirm homoscedasticity and zero-mean normality.",
        "Calculated posterior Bayesian distributions with Highest Density Intervals (HDI) for parameter stability."
      ],
      findings: [
        "Achieved an R² goodness-of-fit score of 0.912 with a low Mean Squared Error of 1.23.",
        "Identified critical inflection points where marginal returns on input variables plateaued, preventing over-capitalization.",
        "Verified predictive stability across both dense clusters and boundary tails."
      ],
      businessImpact: "Demonstrated the practical power of applied mathematical modeling to generate reliable forecasts with quantified certainty bounds."
    },
    {
      id: "ecommerce-sales-insights",
      title: "E-Commerce Sales Insights",
      subtitle: "Revenue Trends & Performance Distribution",
      category: "E-Commerce",
      summary: "Cleaned, structured, and visualized monthly business sales data to evaluate performance trends and revenue distribution.",
      image: "/src/assets/images/project_ecommerce_insights_1791518631288.jpg",
      tools: ["Sales Analytics", "Pareto Analysis", "Channel Attribution", "Category Decomposition", "KPI Tracking"],
      metrics: [
        { label: "Total Revenue Analyzed", value: "$3.8M" },
        { label: "Total Units Sold", value: "15.4K" },
        { label: "Avg Order Value (AOV)", value: "$487" },
        { label: "Conversion Rate", value: "3.6%" }
      ],
      problemStatement: "Multi-channel retail operations generated thousands of fragmented order logs across disparate product categories, obscuring which categories and acquisition channels drove true bottom-line profitability.",
      methodology: [
        "Cleaned and reconciled messy raw CSV datasets, treating missing values, duplicated order IDs, and localized currency formatting.",
        "Segmented performance across primary merchandise categories: Electronics (38%), Apparel (24%), Home Goods (19%), Health & Beauty (11%).",
        "Conducted channel attribution analysis (Direct, Organic Search, Paid Social, Referral, Email) to measure conversion efficiency.",
        "Calculated customer demographics and order velocity distributions across age brackets and geographic regions.",
        "Built executive dashboard wireframes illustrating 6-month growth trajectories with MoM comparison markers."
      ],
      findings: [
        "Electronics and Apparel accounted for 62% of gross revenue, with Electronics delivering the highest average order value ($487).",
        "Direct and Organic Search channels generated the highest quality leads (59% combined share) with superior repeat purchase rates.",
        "Quarterly growth sustained an upward trajectory, expanding from $3.1M to $4.1M annualized run-rate."
      ],
      businessImpact: "Provided actionable merchandising recommendations to reallocate inventory capital toward high-margin electronic lines and optimize marketing budget allocation."
    }
  ] as Project[]
};
