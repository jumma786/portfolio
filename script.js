/* =========================================================================
   Jumma Mohammad Teli — Portfolio
   script.js  (vanilla JS, no dependencies)

   To add or edit a project, edit the PROJECTS object below — each entry
   becomes a card. Featured cards reference this same data by name (see
   FEATURED), so there is a single source of truth.

   Card shape:
     {
       name:      "Display name",
       highlight: "One-line highlight shown on the card",
       tags:      ["Tech", "Stack", "Tags"],   // also used for search
       url:       "https://github.com/…"        // omit / null => private repo
       private:   true                          // optional: force "Private repo" badge
     }
   ========================================================================= */

'use strict';

/* ---------------------------------------------------------------------------
   1. PROJECT DATA  — grouped by the section grids in index.html (data-grid="…")
--------------------------------------------------------------------------- */
const PROJECTS = {
  mlops: [
    { name: 'Multi-Model Tournament Pipeline', highlight: '13/13 tests · model tournament across gradient-boosting families.', tags: ['MLflow', 'XGBoost', 'LightGBM', 'CatBoost'], url: 'https://github.com/jumma786/mlops-model-tournament' },
    { name: 'Scheduled Retraining + DVC', highlight: '11/11 tests · champion gate on scheduled retraining runs.', tags: ['DVC', 'MLflow', 'Champion gate'], url: 'https://github.com/jumma786/mlops-retraining-pipeline' },
    { name: 'Feature Engineering Pipeline', highlight: '17/17 tests · custom sklearn transformers tracked in MLflow.', tags: ['sklearn', 'MLflow', 'Transformers'], url: 'https://github.com/jumma786/mlops-feature-pipeline' },
    { name: 'Hyperparameter Tuning (Optuna)', highlight: '10/10 tests · Bayesian search over the model space.', tags: ['Optuna', 'Bayesian search'], url: 'https://github.com/jumma786/mlops-hyperparameter-tuning' },
    { name: 'Model Serving — FastAPI + Docker', highlight: '11/11 tests · containerised inference on Cloud Run.', tags: ['FastAPI', 'Docker', 'Cloud Run'], url: 'https://github.com/jumma786/mlops-model-serving' },
    { name: 'Feature Store — Online Retail II', highlight: '14/14 tests · RFM segmentation served from a Parquet store.', tags: ['RFM', 'Parquet', 'Feature store'], url: 'https://github.com/jumma786/mlops-feature-store' },
    { name: 'Model Monitoring & Drift Detection', highlight: '16/16 tests · PSI, KS-test and Chi-squared drift signals.', tags: ['PSI', 'KS-test', 'Chi-squared'], url: 'https://github.com/jumma786/mlops-model-monitoring' },
    { name: 'A/B Testing Framework', highlight: '15/15 tests · Z-test and Cohen’s h behind a FastAPI router.', tags: ['Z-test', 'Cohen’s h', 'FastAPI'], url: 'https://github.com/jumma786/mlops-ab-testing' },
    { name: 'Airflow Pipeline Orchestration', highlight: '13/13 tests · Apache Airflow DAG passing state via XCom.', tags: ['Airflow', 'DAG', 'XCom'], url: 'https://github.com/jumma786/mlops-airflow-pipeline' },
    { name: 'Kubernetes ML Platform', highlight: '12/12 tests · Helm-packaged platform with Prometheus + HPA.', tags: ['Kubernetes', 'Helm', 'Prometheus', 'HPA'], url: 'https://github.com/jumma786/mlops-k8s-platform' },
    { name: 'Customer Churn MLOps', highlight: 'Production-style telecom churn workflow.', tags: ['Python', 'XGBoost', 'Churn'], url: 'https://github.com/jumma786/customer-churn-mlops' },
  ],

  ml: [
    { name: 'Workplace Churn Feature Engineering', highlight: 'Leakage-safe pipeline · AUC 0.820.', tags: ['sklearn', 'Feature engineering', 'AUC 0.820'], url: 'https://github.com/jumma786/workplace-churn-feature-engineering' },
    { name: 'GaitSync — Gait Analysis ML', highlight: 'MSc dissertation · rehabilitation-focused gait analysis.', tags: ['ML', 'Healthcare', 'Dissertation'], url: 'https://github.com/jumma786/gaitsync-gait-analysis-ml' },
    { name: 'Gait Speed Predictor', highlight: 'Gait-speed regression model.', tags: ['Regression', 'Biomechanics'], url: 'https://github.com/jumma786/gait-speed-predictor' },
    { name: 'Tesla Stock Prediction (TSLA)', highlight: 'XGBoost with lag features on TSLA.', tags: ['XGBoost', 'Time series', 'Finance'], url: 'https://github.com/jumma786/-Stock-Market-Analysis-Prediction-Tesla---TSLA-' },
    { name: 'Cancer Prediction ML', highlight: 'Diagnostic classification model.', tags: ['Classification', 'Healthcare'], url: 'https://github.com/jumma786/cancer-prediction-ml' },
    { name: 'Wine Quality Classification', highlight: 'Multiclass classification on wine quality.', tags: ['Classification', 'Multiclass'], url: 'https://github.com/jumma786/Wine-Quality-Classification-using-Machine-Learning' },
    { name: 'Bank Marketing Analysis', highlight: 'UCI Bank Marketing classification.', tags: ['Classification', 'UCI'], url: 'https://github.com/jumma786/bank-marketing-analysis' },
    { name: 'R — Bank Marketing EDA', highlight: 'Exploratory analysis in R.', tags: ['R', 'EDA'], url: 'https://github.com/jumma786/r-bank-marketing-eda' },
    { name: 'AI Customer Support Ticket Classifier', highlight: 'Automated ticket triage.', tags: ['NLP', 'Classification'], url: 'https://github.com/jumma786/AI-Customer-Support-Ticket-Classifier' },
    { name: 'AI Alloy Manufacturing Analytics', highlight: 'Manufacturing analytics system.', tags: ['Analytics', 'Manufacturing'], url: 'https://github.com/jumma786/AI-Based-Alloy-Manufacturing-Analytics-System' },
    { name: 'SLA Breach Prediction', highlight: 'Predicting support SLA breaches.', tags: ['Classification', 'Support'], url: 'https://github.com/jumma786/ai-support-sla-breach-prediction' },
    { name: 'SLA Breach Threshold Tuning', highlight: 'Precision/recall optimisation.', tags: ['Threshold tuning', 'Precision/Recall'], url: 'https://github.com/jumma786/Sla-breach-classification-threshold-tuning' },
    { name: 'Weather Prediction', highlight: 'Weather forecasting model.', tags: ['Regression', 'Forecasting'], url: 'https://github.com/jumma786/weather-prediction' },
  ],

  analytics: [
    { name: 'Hospital Analytics End-to-End', highlight: 'AUC 0.907 readmission prediction on a star schema.', tags: ['XGBoost', 'Star schema', 'AUC 0.907'], url: 'https://github.com/jumma786/hospital-analytics-end-to-end' },
    { name: 'Hospital Quality Intelligence', highlight: 'Hospital quality intelligence analytics.', tags: ['Analytics', 'Healthcare'], url: 'https://github.com/jumma786/hospital-quality-intelligence' },
    { name: 'Hospital Readmission API', highlight: 'Deployed live API with pytest coverage.', tags: ['FastAPI', 'pytest', 'Deployed'], url: 'https://github.com/jumma786/hospital-readmission-api' },
    { name: 'UK Data Analyst Job Market NLP', highlight: '3,653 postings → 17 role archetypes.', tags: ['NLP', 'UMAP', 'HDBSCAN'], url: 'https://github.com/jumma786/uk-data-analyst-job-market-nlp' },
    { name: 'UK Online Retail Analytics', highlight: '£1.26M at-risk revenue · RFM segmentation.', tags: ['RFM', 'Retail', 'Python'], url: 'https://github.com/jumma786/online-retail-analytics' },
    { name: 'UK Energy Forecasting', highlight: 'Energy demand forecasting.', tags: ['Forecasting', 'Time series'], url: 'https://github.com/jumma786/uk-energy-forecasting' },
    { name: 'UK Road Collision Intelligence', highlight: 'Road collision intelligence analytics.', tags: ['Analytics', 'Geospatial'], url: 'https://github.com/jumma786/uk-road-collision-intelligence' },
    { name: 'UK Road Traffic Analytics', highlight: 'Road traffic analytics.', tags: ['Analytics', 'Transport'], url: 'https://github.com/jumma786/uk-road-traffic-analytics' },
    { name: 'UK Salary Regression', highlight: 'Salary regression modelling.', tags: ['Regression', 'Labour market'], url: 'https://github.com/jumma786/uk-salary-regression' },
    { name: 'Airline Operations Analytics', highlight: '495K BTS flight records analysed.', tags: ['Analytics', 'Aviation', 'BTS'], url: 'https://github.com/jumma786/airline-operations-analytics' },
    { name: 'Investment Company Analysis', highlight: 'Investment company analysis.', tags: ['Finance', 'Analytics'], url: 'https://github.com/jumma786/investment-company-analysis' },
    { name: 'Invoice Finance Risk Monitor', highlight: 'Invoice-finance risk monitoring.', tags: ['Risk', 'Finance'], url: 'https://github.com/jumma786/invoice-finance-risk-monitor' },
    { name: 'Harbour Home Dispatch & Returns Analytics', highlight: 'Dispatch and returns analytics.', tags: ['Analytics', 'Operations'], url: 'https://github.com/jumma786/harbour-home-dispatch-returns-analysis' },
    { name: 'World Data Monitor', highlight: 'Global data monitoring.', tags: ['Analytics', 'Dashboard'], url: 'https://github.com/jumma786/world-data-monitor' },
    { name: 'COVID-19 EDA in R', highlight: 'Exploratory analysis of a COVID-19 dataset.', tags: ['R', 'EDA'], url: 'https://github.com/jumma786/Exploratory-Analysis-of-COVID-19-Dataset-in-R' },
  ],

  bi: [
    { name: 'NorthStar Living UK Retail Dashboard', highlight: 'UK retail performance dashboard.', tags: ['Power BI', 'DAX', 'Retail'], url: 'https://github.com/jumma786/-NorthStar-Living-UK-Retail-Performance-Dashboard' },
    { name: 'NHS RTT Dashboard', highlight: 'NHS referral-to-treatment waiting times.', tags: ['Power BI', 'Excel', 'NHS'], url: 'https://github.com/jumma786/NHS-RTT-Dashboard' },
    { name: 'HR Attrition Analysis', highlight: 'Workforce attrition analysis.', tags: ['Power BI', 'HR'], url: 'https://github.com/jumma786/hr-attrition-analysis-powerbi' },
    { name: 'Supply Chain Performance', highlight: 'Supply-chain performance dashboard.', tags: ['Power BI', 'Supply chain'], url: 'https://github.com/jumma786/supply-chain-performance-powerbi' },
    { name: 'Coffee Sales Dashboard', highlight: 'Coffee sales dashboard.', tags: ['Power BI', 'Sales'], url: 'https://github.com/jumma786/COFFEE_SALES_DASHBOARD' },
    { name: 'Superstore Sales Analysis', highlight: 'Superstore sales analysis.', tags: ['Power BI', 'Sales'], url: 'https://github.com/jumma786/superstore-sales-analysis-powerbi' },
    { name: 'Power BI Business Dashboard', highlight: 'Business KPI dashboard.', tags: ['Power BI', 'KPI'], url: 'https://github.com/jumma786/powerbi-business-dashboard' },
    { name: 'Employee Salary Analysis', highlight: 'Salary analysis dashboard.', tags: ['Tableau', 'HR'], url: 'https://github.com/jumma786/Employee-Salary-Analysis-Dashboard-Tableau-' },
    { name: 'House Price Analysis', highlight: 'House price analysis dashboard.', tags: ['Tableau', 'Real estate'], url: 'https://github.com/jumma786/house-price-analysis-tableau' },
    { name: 'Chocolate Sales — Valuation & Ops', highlight: 'Strategic valuation and operational analysis.', tags: ['Power BI', 'Valuation'], url: 'https://github.com/jumma786/Strategic-Valuation-Operational-Analysis-Chocolate-Sales-Co.-' },
    { name: 'Global Bicycle Sales', highlight: 'Global bicycle sales analysis in Excel.', tags: ['Excel', 'Sales'], url: 'https://github.com/jumma786/global-bicycle-sales-analysis-excel' },
    { name: 'Excel Mental Health Data Analysis', highlight: 'Mental-health data analysis in Excel.', tags: ['Excel', 'Analytics'], url: 'https://github.com/jumma786/excel-mental-health-data-analysis' },
  ],

  sql: [
    { name: 'SQL Retail Sales Analysis', highlight: 'Retail sales analysis in SQL.', tags: ['SQL', 'Retail'], url: 'https://github.com/jumma786/sql-retail-sales-analysis' },
    { name: 'Advanced SQL Sales Project', highlight: 'Advanced SQL sales analysis.', tags: ['SQL', 'CTEs', 'Windows'], url: 'https://github.com/jumma786/advanced-sql-sales-project' },
    { name: 'Online Retail SQL Server Analysis', highlight: 'Online Retail II on SQL Server.', tags: ['SQL Server', 'T-SQL'], url: 'https://github.com/jumma786/online-retail-sql-server-analysis' },
    { name: 'SQL Air Traffic Passenger Analysis', highlight: 'Air-traffic passenger analysis.', tags: ['SQL', 'Aviation'], url: 'https://github.com/jumma786/sql-air-traffic-passenger-analysis' },
    { name: 'SQL Data Analysis Project', highlight: 'General SQL data analysis.', tags: ['SQL', 'Analytics'], url: 'https://github.com/jumma786/sql-data-analysis-project' },
    { name: 'MySQL with Python', highlight: 'MySQL driven from Python.', tags: ['MySQL', 'Python'], url: 'https://github.com/jumma786/my-sql-with-python' },
  ],

  engineering: [
    { name: 'PySpark Sales Analysis', highlight: '11 modules · 24-test pytest suite.', tags: ['PySpark', 'Databricks', 'pytest'], url: 'https://github.com/jumma786/pyspark-sales-analysis' },
    { name: 'NYC Taxi dbt', highlight: 'dbt transformation project on NYC taxi data.', tags: ['dbt', 'SQL', 'Warehouse'], url: 'https://github.com/jumma786/nyc_taxi_dbt' },
    { name: 'Movie ETL — Talend', highlight: 'ETL pipeline built in Talend.', tags: ['Talend', 'ETL'], url: 'https://github.com/jumma786/movie-etl-talend' },
    { name: 'Cloud Weather Project', highlight: 'MSc group project (4 contributors) · cloud-based weather data app.', tags: ['Cloud', 'ETL'], url: 'https://github.com/jumma786/cloud-weather-project' },
  ],

  apps: [
    { name: 'DataVision Tech Solutions Web', highlight: 'Company website (private repo).', tags: ['Web', 'Company'], private: true },
    { name: 'DVTS Chatbot API', highlight: 'Chatbot API service.', tags: ['FastAPI', 'API'], url: 'https://github.com/jumma786/dvts-chatbot-api' },
    { name: 'Portfolio Risk Analyser', highlight: 'Portfolio risk analysis tool.', tags: ['Python', 'Finance'], url: 'https://github.com/jumma786/portfolio-risk-analyser' },
    { name: 'Portfolio Risk Web', highlight: 'Portfolio risk web app.', tags: ['Web', 'Finance'], url: 'https://github.com/jumma786/portfolio-risk-web' },
    { name: 'Analytics Portfolio App', highlight: 'Analytics portfolio application.', tags: ['Web', 'Portfolio'], url: 'https://github.com/jumma786/analytics-portfolio-app' },
    { name: 'Professional Data Portfolio', highlight: 'Professional data portfolio site.', tags: ['Web', 'Portfolio'], url: 'https://github.com/jumma786/professional-data-portfolio' },
    { name: 'Data Analyst Portfolio', highlight: 'Data analyst portfolio site.', tags: ['Web', 'Portfolio'], url: 'https://github.com/jumma786/data-analyst-portfolio' },
    { name: 'SP500 Stock Screener', highlight: 'S&P 500 stock screener.', tags: ['Python', 'Finance'], url: 'https://github.com/jumma786/sp500-stock-screener' },
    { name: 'MQ2 Gas Detection Dashboard', highlight: 'IoT gas-detection dashboard (Blynk).', tags: ['IoT', 'Dashboard'], url: 'https://github.com/jumma786/mq2-gas-detection-blynk-dashboard' },
    { name: 'SEO / AEO Playbook', highlight: '38 chapters · 21-command CLI · FastAPI service · 459 tests.', tags: ['FastAPI', 'CLI', '459 tests'], url: 'https://github.com/jumma786/seo-aeo-playbook' },
  ],

  utilities: [
    { name: 'Bulk File Renamer', highlight: 'Batch file renaming utility.', tags: ['Python', 'Utility'], url: 'https://github.com/jumma786/bulk-file-renamer-python' },
    { name: 'Python Email Sender', highlight: 'Programmatic email sender.', tags: ['Python', 'SMTP'], url: 'https://github.com/jumma786/python_email_sender' },
    { name: 'Python Application Form', highlight: 'Application form in Python.', tags: ['Python', 'Forms'], url: 'https://github.com/jumma786/python-application-form-' },
    { name: 'Wikipedia Company Web Scraping', highlight: 'Scraping company data from Wikipedia.', tags: ['Python', 'Scraping'], url: 'https://github.com/jumma786/wikipedia-company-web-scraping' },
    { name: 'Binary Search Algorithm', highlight: 'Binary search implementation.', tags: ['Python', 'Algorithms'], url: 'https://github.com/jumma786/binary_search_algorithm' },
    { name: 'Rock Paper Scissors Game', highlight: 'Rock–paper–scissors in Python.', tags: ['Python', 'Game'], url: 'https://github.com/jumma786/Rock-Paper-Scissors-Game-in-Python' },
    { name: 'Zodiac Sign Finder', highlight: 'Zodiac-sign finder utility.', tags: ['Python', 'Utility'], url: 'https://github.com/jumma786/zodiac-sign-finder-python' },
  ],

  learning: [
    { name: 'Data & GenAI Assignments', highlight: 'Course assignments in data and generative AI.', tags: ['Coursework', 'GenAI'], url: 'https://github.com/jumma786/data-genai-course-assignments' },
    { name: 'AI Engineering Landscape — S01', highlight: 'Session 01: AI engineering landscape.', tags: ['Coursework', 'AI'], url: 'https://github.com/jumma786/ai-engineering-landscape-session-01' },
    { name: 'S03 — Data Cleaning', highlight: 'Session 03: data cleaning & preprocessing.', tags: ['Coursework', 'Preprocessing'], url: 'https://github.com/jumma786/session03-data-cleaning-preprocessing' },
    { name: 'S04 — EDA & Visualisation', highlight: 'Session 04: EDA and visualisation.', tags: ['Coursework', 'EDA'], url: 'https://github.com/jumma786/session_04_eda_visualisation' },
    { name: 'S08 — Model Evaluation', highlight: 'Session 08: model evaluation & cross-validation.', tags: ['Coursework', 'Cross-validation'], url: 'https://github.com/jumma786/session-08-model-evaluation-cross-validation' },
    { name: 'Intro to GitHub', highlight: 'GitHub skills introduction.', tags: ['Coursework', 'Git'], url: 'https://github.com/jumma786/skills-introduction-to-github' },
    { name: 'S12 — Neural Networks', highlight: 'Session 12: neural networks (private repo).', tags: ['Coursework', 'Deep learning'], private: true },
    { name: 'S13 — Backpropagation', highlight: 'Session 13: backpropagation (private repo).', tags: ['Coursework', 'Deep learning'], private: true },
    { name: 'S14 — Loss & Optimisers', highlight: 'Session 14: loss functions & optimisers (private repo).', tags: ['Coursework', 'Optimisation'], private: true },
    { name: 'MSc Modules', highlight: 'MSc coursework modules (private repo).', tags: ['Coursework', 'MSc'], private: true },
  ],
};

/* Tech-stack groups */
const STACK = [
  { group: 'Languages', items: ['Python', 'SQL', 'T-SQL', 'R'] },
  { group: 'ML & Data Science', items: ['scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost', 'pandas', 'NumPy', 'SHAP', 'NLP', 'UMAP', 'HDBSCAN', 'A/B Testing', 'Forecasting'] },
  { group: 'MLOps', items: ['MLflow', 'DVC', 'Optuna', 'Airflow', 'Kubernetes', 'Helm', 'Prometheus', 'Docker'] },
  { group: 'BI & Visualisation', items: ['Power BI', 'DAX', 'Power Query', 'Row-Level Security', 'Tableau', 'Cognos', 'SSRS', 'Excel (VBA, Power Pivot)'] },
  { group: 'Databases', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'SSMS', 'Stored Procedures'] },
  { group: 'Data Engineering & ETL', items: ['Talend', 'SSIS', 'PySpark', 'Databricks', 'dbt', 'OpenRefine'] },
  { group: 'APIs & Apps', items: ['FastAPI', 'Flask', 'Streamlit', 'pytest'] },
  { group: 'Cloud', items: ['AWS (S3, Redshift, Lambda)', 'Google Cloud', 'Cloud Run', 'Render'] },
  { group: 'DevOps & Version Control', items: ['Git', 'GitHub', 'GitHub Actions CI/CD'] },
  { group: 'Ways of Working', items: ['Agile/Scrum', 'JIRA', 'Confluence', 'UiPath RPA'] },
];

/* Featured work — references PROJECTS by exact `name` (single source of truth).
   `badge` is a presentational label only, not project data. */
const FEATURED = [
  { name: 'Hospital Analytics End-to-End', badge: 'Analytics · End-to-end' },
  { name: 'Model Serving — FastAPI + Docker', badge: 'MLOps · Serving' },
  { name: 'UK Data Analyst Job Market NLP', badge: 'NLP · Analytics' },
  { name: 'Kubernetes ML Platform', badge: 'MLOps · Platform' },
];

/* ---------------------------------------------------------------------------
   2. HELPERS
--------------------------------------------------------------------------- */

/** Escape text so project data can never inject markup. */
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/** Look up a single project across every group by its display name. */
function findProject(name) {
  for (const list of Object.values(PROJECTS)) {
    const hit = list.find((p) => p.name === name);
    if (hit) return hit;
  }
  return null;
}

/* ---------------------------------------------------------------------------
   3. RENDERING
--------------------------------------------------------------------------- */

/** Build one standard card element from a project object. */
function buildCard(p) {
  const isPrivate = p.private || !p.url;
  const article = document.createElement('article');
  article.className = 'card';

  // Searchable text lives on the element so filtering is a simple string test.
  article.dataset.search = [p.name, p.highlight, ...(p.tags || [])].join(' ').toLowerCase();

  const tags = (p.tags || []).map((t) => `<li>${esc(t)}</li>`).join('');
  const action = isPrivate
    ? `<span class="card__badge" aria-label="Private repository">
         <i class="fa-solid fa-lock" aria-hidden="true"></i> Private repo
       </span>`
    : `<a class="card__link" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">
         <i class="fa-brands fa-github" aria-hidden="true"></i> View on GitHub
       </a>`;

  article.innerHTML = `
    <h4 class="card__title">${esc(p.name)}</h4>
    <p class="card__highlight">${esc(p.highlight)}</p>
    <ul class="card__tags" aria-label="Tech stack">${tags}</ul>
    ${action}
  `;
  return article;
}

/** Populate every project grid from PROJECTS. */
function renderProjects() {
  Object.entries(PROJECTS).forEach(([key, list]) => {
    const grid = document.querySelector(`[data-grid="${key}"]`);
    if (!grid) return;
    const frag = document.createDocumentFragment();
    list.forEach((p) => frag.appendChild(buildCard(p)));
    grid.appendChild(frag);
  });
}

/** Render the "Featured work" highlight cards by referencing PROJECTS. */
function renderFeatured() {
  const host = document.getElementById('featuredGrid');
  if (!host) return;

  host.innerHTML = FEATURED.map((f, idx) => {
    const p = findProject(f.name);
    if (!p) return ''; // name changed in PROJECTS? skip rather than break.
    const isPrivate = p.private || !p.url;
    const num = String(idx + 1).padStart(2, '0');
    const tags = (p.tags || []).map((t) => `<li>${esc(t)}</li>`).join('');
    const action = isPrivate
      ? `<span class="card__badge" aria-label="Private repository">
           <i class="fa-solid fa-lock" aria-hidden="true"></i> Private repo
         </span>`
      : `<a class="featured-card__link" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">
           <i class="fa-brands fa-github" aria-hidden="true"></i> View on GitHub
           <i class="fa-solid fa-arrow-right featured-card__arrow" aria-hidden="true"></i>
         </a>`;
    return `
      <article class="featured-card">
        <span class="featured-card__num" aria-hidden="true">${num}</span>
        <span class="featured-card__badge">${esc(f.badge)}</span>
        <h3 class="featured-card__title">${esc(p.name)}</h3>
        <p class="featured-card__highlight">${esc(p.highlight)}</p>
        <ul class="featured-card__tags" aria-label="Tech stack">${tags}</ul>
        ${action}
      </article>
    `;
  }).join('');
}

/** Render the tech-stack section. */
function renderStack() {
  const host = document.getElementById('stackGroups');
  if (!host) return;
  host.innerHTML = STACK.map((g) => `
    <div class="stack__group">
      <h3>${esc(g.group)}</h3>
      <ul class="stack__pills">
        ${g.items.map((i) => `<li>${esc(i)}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/* ---------------------------------------------------------------------------
   4. SEARCH / FILTER  (project sections only)
--------------------------------------------------------------------------- */
function initFilter() {
  const input = document.getElementById('projectSearch');
  const clearBtn = document.getElementById('filterClear');
  const count = document.getElementById('filterCount');
  const noResults = document.getElementById('noResults');
  const noResultsClear = document.getElementById('noResultsClear');
  const cards = Array.from(document.querySelectorAll('.card-grid .card'));
  const sections = Array.from(document.querySelectorAll('[data-project-section]'));

  function apply(term) {
    const q = term.trim().toLowerCase();
    let visible = 0;

    cards.forEach((card) => {
      const match = !q || card.dataset.search.includes(q);
      card.classList.toggle('is-hidden', !match);
      if (match) visible += 1;
    });

    // Hide a whole group when none of its cards are showing.
    sections.forEach((section) => {
      const anyVisible = section.querySelector('.card:not(.is-hidden)');
      section.classList.toggle('is-empty', !anyVisible);
    });

    count.textContent = q ? `${visible} match${visible === 1 ? '' : 'es'}` : `${cards.length} projects`;
    clearBtn.hidden = !q;
    noResults.hidden = visible !== 0;
  }

  function reset() {
    input.value = '';
    apply('');
    input.focus();
  }

  input.addEventListener('input', () => apply(input.value));
  clearBtn.addEventListener('click', reset);
  noResultsClear.addEventListener('click', reset);

  apply(''); // set the initial count
}

/* ---------------------------------------------------------------------------
   5. THEME TOGGLE  (persists to localStorage; light is the default)
--------------------------------------------------------------------------- */
function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = toggle.querySelector('i');
  const STORAGE_KEY = 'jt-theme';

  function reflect(theme) {
    const isDark = theme === 'dark';
    icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // The no-flash script in <head> already set data-theme; just mirror it here.
  reflect(root.getAttribute('data-theme') || 'light');

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    reflect(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* storage blocked; ignore */ }
  });
}

/* ---------------------------------------------------------------------------
   6. MOBILE NAV
--------------------------------------------------------------------------- */
function initNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  function close() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  // Close after picking a destination, and on Escape.
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* ---------------------------------------------------------------------------
   7. SCROLL-REVEAL  (understated)
--------------------------------------------------------------------------- */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  items.forEach((el) => io.observe(el));
}

/* ---------------------------------------------------------------------------
   8. COPY EMAIL
--------------------------------------------------------------------------- */
function initCopyEmail() {
  const btn = document.getElementById('copyEmail');
  const label = document.getElementById('copyEmailText');
  if (!btn) return;
  const original = label.textContent;

  btn.addEventListener('click', async () => {
    const email = btn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
    } catch (e) {
      // Fallback for browsers without the async clipboard API.
      const t = document.createElement('textarea');
      t.value = email; t.style.position = 'fixed'; t.style.opacity = '0';
      document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); } catch (_) { /* ignore */ }
      document.body.removeChild(t);
    }
    label.textContent = 'Copied!';
    btn.classList.add('is-copied');
    setTimeout(() => { label.textContent = original; btn.classList.remove('is-copied'); }, 1800);
  });
}

/* ---------------------------------------------------------------------------
   9. CONTACT FORM  (Formspree + client-side validation)
--------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const status = document.getElementById('cfStatus');
  const submit = document.getElementById('cfSubmit');
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Reference inputs by id — note: `form.name` would return the form's own
  // name property (""), not the name input, so we look them up explicitly.
  const fields = {
    name: { el: document.getElementById('cfName'), msg: 'Please enter your name.' },
    email: { el: document.getElementById('cfEmail'), msg: 'Please enter a valid email address.', test: (v) => EMAIL_RE.test(v) },
    message: { el: document.getElementById('cfMessage'), msg: 'Please enter a message.' },
  };

  function setError(el, text) {
    const slot = form.querySelector(`[data-error-for="${el.id}"]`);
    if (slot) slot.textContent = text || '';
    el.setAttribute('aria-invalid', text ? 'true' : 'false');
  }

  function validate() {
    let ok = true;
    Object.values(fields).forEach(({ el, msg, test }) => {
      const v = el.value.trim();
      const valid = v && (test ? test(v) : true);
      setError(el, valid ? '' : msg);
      if (!valid && ok) el.focus();
      ok = ok && valid;
    });
    return ok;
  }

  // Clear a field's error as the user corrects it.
  Object.values(fields).forEach(({ el }) => {
    el.addEventListener('input', () => { if (el.getAttribute('aria-invalid') === 'true') setError(el, ''); });
  });

  function showStatus(text, kind) {
    status.textContent = text;
    status.hidden = false;
    status.classList.toggle('is-success', kind === 'success');
    status.classList.toggle('is-error', kind === 'error');
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Guard: remind me to configure Formspree before the form can work.
    if (form.action.includes('YOUR_FORM_ID')) {
      showStatus('Form not configured yet — set your Formspree form ID in index.html.', 'error');
      return;
    }

    submit.disabled = true;
    const original = submit.innerHTML;
    submit.innerHTML = 'Sending…';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        showStatus('Thanks — your message has been sent. I’ll be in touch soon.', 'success');
      } else {
        showStatus('Something went wrong sending your message. Please email me directly instead.', 'error');
      }
    } catch (err) {
      showStatus('Network error — please check your connection or email me directly.', 'error');
    } finally {
      submit.disabled = false;
      submit.innerHTML = original;
    }
  });
}

/* ---------------------------------------------------------------------------
   10. LIVE REPO COUNT  (GitHub API; falls back to the static number in the HTML)
--------------------------------------------------------------------------- */
function initRepoCount() {
  const el = document.getElementById('repoCount');
  if (!el) return;

  // Unauthenticated GitHub API: 60 req/hour per IP. On any failure we keep the
  // number already rendered in the HTML, so the stat is never blank.
  fetch('https://api.github.com/users/jumma786')
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .then((data) => {
      if (typeof data.public_repos === 'number') el.textContent = String(data.public_repos);
    })
    .catch(() => { /* offline or rate-limited; keep the static fallback */ });
}

/* ---------------------------------------------------------------------------
   11. INIT
--------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderProjects();
  renderStack();
  initFilter();
  initTheme();
  initNav();
  initReveal();
  initCopyEmail();
  initContactForm();
  initRepoCount();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
