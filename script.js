/* =========================================================================
   Jumma Mohammad Teli — Portfolio
   script.js  (vanilla JS, no dependencies)

   To add or edit a project, edit the PROJECTS object below — each entry
   becomes a card. The flagship work is written up separately in CASE_STUDIES,
   which carries its own narrative copy rather than referencing PROJECTS.

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
    { name: 'MLOps Portfolio — Overview', highlight: 'Umbrella repo for the MLOps project series and its delivery patterns.', tags: ['MLOps', 'CI/CD', 'Docker'], url: 'https://github.com/jumma786/mlops-portfolio' },
    { name: 'MLOps Knowledge-Graph Dashboard', highlight: 'Interactive knowledge-graph view of the MLOps portfolio.', tags: ['Dashboard', 'Knowledge graph'], url: 'https://github.com/jumma786/mlops-portfolio-dashboard' },
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
    { name: 'Marketing Attribution — 16.5M Events', highlight: 'Markov removal-effect and Shapley attribution solved exactly · 108s run.', tags: ['Markov chains', 'Shapley', 'dbt', '16.5M events'], url: 'https://github.com/jumma786/marketing-attribution-modelling' },
    { name: 'Wikipedia Pageviews Anomaly Detection', highlight: 'Robust rolling median/MAD spike detection on high-volume streams.', tags: ['Anomaly detection', 'MAD', 'Streamlit'], url: 'https://github.com/jumma786/wikipedia-pageviews-anomaly' },
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
    { name: 'Enterprise DWH Analytics', highlight: '6.36M financial transactions · fraud recall exposed at 0.19%.', tags: ['Kimball', 'Teradata', '6.36M rows'], url: 'https://github.com/jumma786/enterprise-dwh-analytics' },
    { name: 'Wealth KPI Engine', highlight: '20 tests · AUM, AUMA, NNM, fee yield and retention grounded in ONS + BoE public series.', tags: ['Wealth analytics', 'ONS', 'BoE', '20 tests'], url: 'https://github.com/jumma786/wealth-kpi-engine' },
    { name: 'UK BBSI Tax Reporting Pipeline', highlight: '34 tests · HMRC public statistics, exception queues and a £0.03 reconciliation residual.', tags: ['HMRC', 'Tax reporting', 'Reconciliation', '34 tests'], url: 'https://github.com/jumma786/uk-bbsi-tax-reporting-pipeline' },
    { name: 'SaaS Subscription Metrics', highlight: 'ARR, NRR and GRR retention analysis in Python and SQL.', tags: ['SaaS metrics', 'SQL', 'Retention'], url: 'https://github.com/jumma786/saas-subscription-metrics' },
    { name: 'GA4 Demo Account Analysis', highlight: 'BigQuery SQL against the public GA4 export schema (UNNEST event_params).', tags: ['GA4', 'BigQuery', 'SQL'], url: 'https://github.com/jumma786/ga4-demo-account-analysis' },
    { name: 'Market Sizing — TAM/SAM/SOM', highlight: 'Top-down and bottom-up sizing cross-checked against each other.', tags: ['Market sizing', 'Case study'], url: 'https://github.com/jumma786/market-sizing-tam-sam-som' },
    { name: 'BA Requirements — Fraud Scorecard', highlight: 'BRD, user stories, traceability matrix and DoD against a real model.', tags: ['Business analysis', 'BRD', 'Requirements'], url: 'https://github.com/jumma786/ba-requirements-fraud-scorecard-case-study' },
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
    { name: 'Looker Studio SaaS Dashboard', highlight: 'Build-ready dashboard spec, prepared data and calculated fields.', tags: ['Looker Studio', 'SaaS', 'Revenue'], url: 'https://github.com/jumma786/looker-studio-saas-dashboard' },
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
    { name: 'Teradata → Snowflake Rebuild', highlight: '6.36M-row warehouse migrated · DDL translation and load validation.', tags: ['Snowflake', 'Teradata', 'Migration'], url: 'https://github.com/jumma786/snowflake-dwh-rebuild' },
    { name: 'MLOps Infrastructure as Code', highlight: 'Terraform approval gate for Azure Container Apps with immutable image tags and OIDC.', tags: ['Terraform', 'Azure', 'GitHub Actions', 'IaC'], url: 'https://github.com/jumma786/mlops-iac-terraform' },
    { name: 'OpenMetadata Data Catalogue', highlight: 'Catalog and business glossary (MRR/ARR/NRR/GRR) over a real dataset.', tags: ['OpenMetadata', 'Governance', 'Lineage'], url: 'https://github.com/jumma786/data-cataloguing-openmetadata' },
    { name: 'PySpark Sales Analysis', highlight: '11 modules · 24-test pytest suite.', tags: ['PySpark', 'Databricks', 'pytest'], url: 'https://github.com/jumma786/pyspark-sales-analysis' },
    { name: 'PySpark UK Property Analytics', highlight: '5.5GB HM Land Registry pipeline · partitioned Parquet, window functions and benchmarks.', tags: ['PySpark', 'HM Land Registry', 'Parquet', 'Benchmarks'], url: 'https://github.com/jumma786/pyspark-uk-property-analytics' },
    { name: 'NYC Taxi dbt', highlight: 'dbt transformation project on NYC taxi data.', tags: ['dbt', 'SQL', 'Warehouse'], url: 'https://github.com/jumma786/nyc_taxi_dbt' },
    { name: 'Movie ETL — Talend', highlight: 'ETL pipeline built in Talend.', tags: ['Talend', 'ETL'], url: 'https://github.com/jumma786/movie-etl-talend' },
    { name: 'Cloud Weather Project', highlight: 'MSc group project (4 contributors) · cloud-based weather data app.', tags: ['Cloud', 'ETL'], url: 'https://github.com/jumma786/cloud-weather-project' },
  ],

  apps: [
    { name: 'AI Data Analysis Agent', highlight: 'NL → validated read-only SQL via LangGraph · JWT auth · 133 tests.', tags: ['LangGraph', 'FastAPI', 'RAG', '133 tests'], url: 'https://github.com/jumma786/ai-data-analysis-agent' },
    { name: 'DataVision Tech Solutions Web', highlight: 'Company website build.', tags: ['Web', 'Company'], url: 'https://github.com/jumma786/datavisiontechsolutions' },
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
  { group: 'Power BI', items: ['DAX', 'Power Query (M)', 'Semantic models', 'Deployment pipelines', 'Gateways', 'Row-Level Security', 'Dataflows', 'Shared datasets'] },
  { group: 'SQL & Warehouses', items: ['Advanced SQL', 'Snowflake', 'Teradata', 'Azure SQL', 'SQL Server / T-SQL', 'BigQuery', 'PostgreSQL', 'MySQL', 'DuckDB', 'SQLite', 'SQLAlchemy', 'CTEs & window functions', 'Stored procedures', 'Query tuning'] },
  { group: 'Transformation & Modelling', items: ['dbt', 'Dataform', 'Kimball star schemas', 'Fact/dimension grain', 'Incremental models', 'Data quality tests', 'PyArrow', 'Parquet'] },
  { group: 'Data Quality & Governance', items: ['Validation', 'Profiling', 'Reconciliation', 'Automated quality gates', 'Data dictionaries', 'Lineage', 'GDPR', 'FCA'] },
  { group: 'Other BI & Visualisation', items: ['Tableau', 'Streamlit', 'Plotly', 'Matplotlib', 'Seaborn', 'GeoPandas', 'Amazon QuickSight', 'Looker (LookML)', 'Omni', 'Qlik Sense', 'SSRS', 'Cognos', 'Excel (VBA, Power Pivot)'] },
  { group: 'Languages & Analysis', items: ['Python', 'pandas', 'NumPy', 'SciPy', 'scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost', 'PySpark', 'UMAP', 'HDBSCAN', 'NLP', 'pytest', 'R', 'Regression', 'Forecasting', 'A/B Testing'] },
  { group: 'ETL & Orchestration', items: ['Apache Airflow', 'Apache Kafka', 'Confluent Kafka', 'KRaft', 'Talend', 'SSIS', 'dlt', 'Databricks', 'OpenMetadata'] },
  { group: 'Automation & Delivery', items: ['Power Automate', 'UiPath RPA', 'Azure DevOps', 'Terraform', 'Azure Container Apps', 'Cloud Run', 'OIDC', 'Managed Identity', 'Helm', 'Prometheus', 'HPA', 'Docker Compose', 'Render', 'Scheduled jobs', 'Git', 'GitHub Actions CI/CD', 'Pull requests'] },
  { group: 'ML, AI & MLOps', items: ['MLflow', 'DVC', 'Optuna', 'SHAP', 'LightGBM', 'CatBoost', 'LangGraph', 'LangChain', 'RAG', 'ChromaDB', 'Redis', 'Docker', 'Kubernetes', 'FastAPI', 'Pydantic', 'Drift detection'] },
  { group: 'Web & Data Products', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Supabase', 'Framer Motion'] },
  { group: 'Business & Ways of Working', items: ['AUM/AUMA', 'Client retention', 'Cohort analysis', 'KPI frameworks', 'Requirements & UAT', 'Agile/Scrum', 'JIRA', 'Confluence', 'Salesforce', 'GA4', 'ONS', 'Bank of England', 'HMRC', 'HM Land Registry', 'BTS', 'Microsoft Fabric'] },
];

/* Skills — capability areas shown as cards above the tech stack.

   `level` is the label a reader sees; `pct` only drives the bar width, so keep
   the two consistent (Expert ≈ 90+, Advanced ≈ 75–89, Proficient ≈ 60–74).
   `proof` should stay tied to something verifiable elsewhere on the page —
   a repo count, a test count, or a line from the experience timeline. */
const SKILLS = [
  {
    area: 'Power BI & Reporting',
    icon: 'fa-solid fa-chart-column',
    level: 'Expert',
    pct: 94,
    blurb: 'DAX, Power Query with error handling that survives a refresh, and semantic models built from scratch — plus full Power BI Service administration.',
    tools: ['DAX', 'Power Query (M)', 'Semantic models', 'RLS', 'Deployment pipelines'],
    proof: '7+ years · dashboards used daily by 20+ stakeholders · 30% reporting-efficiency gain',
  },
  {
    area: 'Advanced SQL & Warehouses',
    icon: 'fa-solid fa-database',
    level: 'Expert',
    pct: 92,
    blurb: 'Query, tune and model relational data — CTEs and window functions over multi-million-row tables, plus views, stored procedures and star schemas.',
    tools: ['Snowflake', 'Teradata', 'Azure SQL', 'T-SQL', 'BigQuery'],
    proof: '50+ tuned queries at UBS · star schema over 6.36M transactions',
  },
  {
    area: 'Analytics Engineering',
    icon: 'fa-solid fa-diagram-project',
    level: 'Advanced',
    pct: 84,
    blurb: 'Build the transformation layer as tested code — staging, intermediate and mart models with data quality tests running inside the pipeline.',
    tools: ['dbt', 'Dataform', 'Airflow', 'PySpark', 'Parquet'],
    proof: '9.4M-row dbt project under 15 tests · 16.5M events in 108s · ~8 hours/week saved',
  },
  {
    area: 'Data Quality & Governance',
    icon: 'fa-solid fa-shield-halved',
    level: 'Advanced',
    pct: 82,
    blurb: 'Treat data quality as a deliverable rather than a preamble — profiling, reconciliation and automated gates that fail a build instead of a dashboard.',
    tools: ['Quality gates', 'Profiling', 'Data dictionaries', 'Lineage', 'GDPR'],
    proof: '296,834 corrupted records recovered · 9 automated gates over 6.36M records',
  },
  {
    area: 'Python & Statistics',
    icon: 'fa-solid fa-brain',
    level: 'Advanced',
    pct: 80,
    blurb: 'Automate the work and answer the harder questions — leakage-safe features, honest evaluation, regression, forecasting and experiment design.',
    tools: ['pandas', 'scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost', 'UMAP', 'HDBSCAN'],
    proof: 'AUC 0.907 readmission model · £1.26M revenue exposure sized · 3,653 postings clustered',
  },
  {
    area: 'Cloud, MLOps & Delivery',
    icon: 'fa-solid fa-cloud',
    level: 'Proficient',
    pct: 72,
    blurb: 'Ship and operate what I build — containerised services, managed runtimes, and Git-based delivery with reviewed pull requests and CI on every push.',
    tools: ['MLflow', 'Docker', 'FastAPI', 'Terraform', 'Azure', 'GitHub Actions'],
    proof: '11 MLOps repositories · 132+ tests · CI/CD across the portfolio',
  },
  {
    area: 'Data Apps & AI Interfaces',
    icon: 'fa-solid fa-window-maximize',
    level: 'Proficient',
    pct: 70,
    blurb: 'Turn analytical logic into usable products — Streamlit interfaces, FastAPI services and guarded natural-language access to data through LangGraph and RAG.',
    tools: ['Streamlit', 'FastAPI', 'LangGraph', 'RAG', 'React', 'Next.js'],
    proof: '133-test read-only SQL agent · deployed APIs · public web applications',
  },
];


/* Selected case studies — the flagship work, shown with the problem, the
   decision that mattered, and the outcome. These are deliberately richer than
   a project card: a recruiter skimming for 30 seconds should still land on a
   number. Self-contained (not looked up in PROJECTS) because the narrative is
   case-study copy, not card copy; the same repos also appear in the grids below.

   Shape:
     {
       name, badge,            // title + category label
       metric, metricLabel,    // the one number a skim-reader takes away
       problem, approach, result,
       stack: [...],           // technologies, also fed to search
       url                     // repo (omit => private)
     } */
const CASE_STUDIES = [
  {
    name: 'Fraud Control Audit on a 6.36M-Transaction Warehouse',
    badge: 'Data warehousing · Financial data',
    metric: '$11.98B',
    metricLabel: 'unflagged exposure surfaced',
    problem: 'A fraud-detection control reported healthy metrics. Nobody had checked those metrics against the source data.',
    approach: 'Built a Kimball star schema over 6.36M financial transactions with automated data-quality gates, then reconstructed the control’s real behaviour from the facts rather than from its own reporting.',
    result: 'True recall came out at 0.19% — against $11.98B of exposure the control never flagged. Verifying what a system actually does, instead of trusting what it claims.',
    stack: ['SQL', 'Kimball star schema', 'Teradata', 'Quality gates'],
    url: 'https://github.com/jumma786/enterprise-dwh-analytics',
  },
  {
    name: 'Attribution Across 16.5M Events, Solved Exactly',
    badge: 'Quantitative modelling · Scale',
    metric: '108s',
    metricLabel: 'full pipeline run',
    problem: 'Multi-touch attribution over 16,468,027 events and 6.1M users. The default answer is Monte Carlo simulation, which is slow and only ever approximate.',
    approach: 'Solved the Markov absorption probabilities exactly via the fundamental matrix — trading a single linear solve for orders of magnitude fewer iterations — with Shapley and rule-based models alongside for comparison.',
    result: 'The whole pipeline runs in 108 seconds under 30 tests, and the answer is exact rather than sampled. The method was chosen deliberately and the tradeoff stated, not hidden.',
    stack: ['Python', 'Markov chains', 'Linear algebra', 'dbt', 'Shapley'],
    url: 'https://github.com/jumma786/marketing-attribution-modelling',
  },
  {
    name: 'Orchestrated Pipeline with In-Build Quality Gates',
    badge: 'Data engineering · Reliability',
    metric: '9.4M',
    metricLabel: 'rows, tested inside the pipeline',
    problem: 'A broken upstream assumption normally reaches a dashboard before anyone notices — by which point someone has already made a decision on it.',
    approach: 'Raw data through modular, tested dbt transformations to a consumable dataset, orchestrated in Airflow on BigQuery, with data-quality tests running inside the pipeline rather than after it.',
    result: 'A bad assumption fails the build instead of quietly reaching a consumer. Reliability designed in at the transformation layer, not bolted on downstream.',
    stack: ['dbt', 'Airflow', 'BigQuery', 'SQL'],
    url: 'https://github.com/jumma786/nyc_taxi_dbt',
  },
  {
    name: 'Self-Service Analytics Agent with Enforced Guardrails',
    badge: 'AI engineering · Tooling',
    metric: '133',
    metricLabel: 'tests covering the guardrails',
    problem: 'Routine database questions bottleneck on an analyst. Handing a language model a live database connection solves that and creates a much worse problem.',
    approach: 'A LangGraph pipeline that converts a plain-English question to SQL, refuses to execute anything that is not read-only, runs it and explains the result — behind JWT auth, with RAG over the documentation.',
    result: 'A working tool rather than a one-off analysis, with 133 passing tests aimed specifically at the guardrails: the refusal path is the part that has to be right.',
    stack: ['Python', 'LangGraph', 'FastAPI', 'PostgreSQL', 'RAG'],
    url: 'https://github.com/jumma786/ai-data-analysis-agent',
  },
  {
    name: 'UK Electricity Demand Forecasting',
    badge: 'Machine learning · Time series',
    metric: '94.86%',
    metricLabel: 'accuracy, held-out',
    problem: 'National electricity demand is volatile and externally driven. Being confidently wrong is the expensive failure mode.',
    approach: 'XGBoost with seasonality, calendar effects and weather-driven features engineered explicitly, served behind FastAPI with CI over a tested codebase.',
    result: '94.86% accuracy validated on held-out periods rather than in-sample — the distinction that decides whether a forecast survives contact with next week.',
    stack: ['Python', 'XGBoost', 'FastAPI', 'Feature engineering', 'CI'],
    url: 'https://github.com/jumma786/uk-energy-forecasting',
  },
  {
    name: 'Production ML Tournament with Deployment Gates',
    badge: 'MLOps · Model lifecycle',
    metric: '0.8174',
    metricLabel: 'champion AUC, auto-selected',
    problem: 'Picking a model by eye and promoting it by hand is how an unreproducible champion ends up in production.',
    approach: 'A five-algorithm tournament — LogReg, Random Forest, XGBoost, LightGBM, CatBoost — auto-selecting a champion by AUC with the leakage-prone field removed, tracked in MLflow and gated in CI on a metric threshold.',
    result: '0.8174 AUC at 86.66% accuracy, promoted only when the gate passes. Sits inside the MLOps portfolio covering feature stores, drift detection, A/B routing and Kubernetes serving.',
    stack: ['MLflow', 'XGBoost', 'LightGBM', 'CatBoost', 'GitHub Actions'],
    url: 'https://github.com/jumma786/mlops-model-tournament',
  },
  {
    name: 'Retail Revenue Exposure Quantified',
    badge: 'Analytics · Business impact',
    metric: '£1.26M',
    metricLabel: 'revenue exposure sized',
    problem: 'Churn analysis that ends at a probability score gives a business nothing to prioritise against competing investments.',
    approach: 'End-to-end analysis of 1.07M transactions — dimensional modelling, RFM behavioural segmentation, a four-page Power BI dashboard, and a churn model built on leakage-safe, time-based features.',
    result: 'Risk expressed in currency: £1.26M of revenue exposure, sized so it could be ranked against other calls on the budget.',
    stack: ['Python', 'SQL Server', 'Power BI', 'RFM', 'Dimensional modelling'],
    url: 'https://github.com/jumma786/online-retail-analytics',
  },
  {
    name: 'Teradata → Snowflake Warehouse Migration',
    badge: 'Data platform · Migration',
    metric: '6.36M',
    metricLabel: 'rows migrated and validated',
    problem: 'A platform migration is only finished when you can prove the target holds the same data as the source — not when the load script exits zero.',
    approach: 'Rebuilt a 6.36M-row Teradata/DuckDB fraud-analytics warehouse on Snowflake: DDL translation across dialects, real data export, and load validation against the source.',
    result: 'A migration with the verification step treated as part of the work rather than as an afterthought.',
    stack: ['Snowflake', 'Teradata', 'DuckDB', 'Python', 'SQL'],
    url: 'https://github.com/jumma786/snowflake-dwh-rebuild',
  },
  {
    name: 'Anomaly Detection on High-Volume Streams',
    badge: 'Monitoring · Statistics',
    metric: 'Median/MAD',
    metricLabel: 'outlier-resistant baseline',
    problem: 'Mean and standard deviation are the obvious choice for spike detection, and the wrong one: a single extreme datapoint drags the baseline it is supposed to be measured against.',
    approach: 'Robust rolling median and MAD statistics over high-volume Wikimedia pageview time series, surfaced through Streamlit.',
    result: 'Detection that holds its baseline under exactly the conditions it exists to catch — the same problem as spotting a bad tick or a broken feed and deciding whether it is signal or noise.',
    stack: ['Python', 'Rolling median/MAD', 'Streamlit', 'Time series'],
    url: 'https://github.com/jumma786/wikipedia-pageviews-anomaly',
  },
];

/* ---------------------------------------------------------------------------
   1c. WRITING  — articles published on Medium

   Newest first, which is also the order the section renders. Only the first
   ARTICLES_VISIBLE rows show until the reader asks for the rest.

   Entry shape:
     {
       title: "Display title",
       date:  "2026-08-04",       // ISO; the row prints "04 Aug 2026"
       mins:  13,                 // Medium's own read-time estimate
       topic: "AI engineering",   // one short label, shown as the row tag
       slug:  "medium-url-slug"   // appended to MEDIUM_PROFILE
     }
--------------------------------------------------------------------------- */
const MEDIUM_PROFILE = 'https://medium.com/@jummamohammad477';
const ARTICLES_VISIBLE = 10;

const ARTICLES = [
  {
    title: 'Building a UK BBSI Reporting Pipeline That Refuses to Plug the Difference',
    date: '2026-09-05', mins: 8, topic: 'Regulatory reporting',
    slug: 'building-a-uk-bbsi-reporting-pipeline-that-refuses-to-plug-the-difference-5f92b86e6946',
  },
  {
    title: 'Building a Wealth KPI Engine That Explains Growth Instead of Just Reporting It',
    date: '2026-09-05', mins: 7, topic: 'Wealth analytics',
    slug: 'building-a-wealth-kpi-engine-that-explains-growth-instead-of-just-reporting-it-782a6c7ca375',
  },
  {
    title: 'Infrastructure as Code',
    date: '2026-09-02', mins: 7, topic: 'MLOps infrastructure',
    slug: 'infrastructure-as-code-583bd28b92bf',
  },
  {
    title: 'I Gave an AI Access to a Real Database. Then I Spent Weeks Making Sure It Couldn’t Do Any Damage.',
    date: '2026-08-04', mins: 13, topic: 'AI engineering',
    slug: 'i-gave-an-ai-access-to-a-real-database-then-i-spent-weeks-making-sure-it-couldnt-do-any-damage-06cb7a73dbb5',
  },
  {
    title: 'What the World Suddenly Cares About: Detecting Attention Spikes from Wikipedia Traffic',
    date: '2026-07-30', mins: 8, topic: 'Analytics',
    slug: 'what-the-world-suddenly-cares-about-detecting-attention-spikes-from-wikipedia-traffic-82b5f3870ed1',
  },
  {
    title: 'I Built an Invoice-Finance Risk Monitor From a Public Retail Dataset — Here’s What I Learned About Exposure, Dilution, and Honest Prediction',
    date: '2026-07-15', mins: 10, topic: 'Risk analytics',
    slug: 'i-built-an-invoice-finance-risk-monitor-from-a-public-retail-dataset-heres-what-i-learned-about-08657f9142ea',
  },
  {
    title: 'I Deliberately Shipped a Worse Model. Here’s Why It Made the Project.',
    date: '2026-07-13', mins: 5, topic: 'Machine learning',
    slug: 'i-deliberately-shipped-a-worse-model-heres-why-it-made-the-project-edb29497506b',
  },
  {
    title: 'What 9.4 Million Taxi Trips Taught Me About Building a Pipeline That Won’t Lie to You',
    date: '2026-07-13', mins: 6, topic: 'Data engineering',
    slug: 'what-9-4-million-taxi-trips-taught-me-about-building-a-pipeline-that-wont-lie-to-you-3e07b7adf362',
  },
  {
    title: 'What 41 Months of NHS Waiting-List Data Actually Tells Us',
    date: '2026-06-26', mins: 5, topic: 'Public-sector data',
    slug: 'what-41-months-of-nhs-waiting-list-data-actually-tells-us-b89c5021d7c1',
  },
  {
    title: 'How AI Can Predict Road Collision Severity — And Why It Matters for UK Road Safety',
    date: '2026-06-22', mins: 9, topic: 'Machine learning',
    slug: 'how-ai-can-predict-road-collision-severity-and-why-it-matters-for-uk-road-safety-b6b2fcba2191',
  },
  {
    title: 'Building a Complete End-to-End MLOps Platform Across 10 Production Projects',
    date: '2026-06-16', mins: 5, topic: 'MLOps',
    slug: 'building-a-complete-end-to-end-mlops-platform-across-10-production-projects-8df3d35fad93',
  },
  {
    title: 'What 504 S&P 500 Stocks Taught Me About Analyst Ratings',
    date: '2026-06-16', mins: 5, topic: 'Financial analysis',
    slug: 'what-504-s-p-500-stocks-taught-me-about-analyst-ratings-4ddac48d1f97',
  },
  {
    title: 'What 2,835 UK Data Job Postings Taught Me — About the Market, and About Doing Analysis Honestly',
    date: '2026-06-15', mins: 6, topic: 'Analytics',
    slug: 'what-2-835-uk-data-job-postings-taught-me-about-the-market-and-about-doing-analysis-honestly-8290f5079989',
  },
  {
    title: 'Is the U.S. Investment Fund Industry Becoming More Concentrated? Insights from 17 Years of SEC Data',
    date: '2026-06-15', mins: 5, topic: 'Financial analysis',
    slug: 'is-the-u-s-investment-fund-industry-becoming-more-concentrated-insights-from-17-years-of-sec-data-877e13b08396',
  },
  {
    title: 'Predicting Walking Speed Without a Camera — What Force Plates Reveal About Human Gait',
    date: '2026-06-12', mins: 6, topic: 'Machine learning',
    slug: 'predicting-walking-speed-without-a-camera-what-force-plates-reveal-about-human-gait-364e0c2052c0',
  },
  {
    title: 'From Data Analyst to ML Engineer: How I Built a Production MLOps Portfolio in 10 Projects',
    date: '2026-06-09', mins: 8, topic: 'MLOps',
    slug: 'from-data-analyst-to-ml-engineer-how-i-built-a-production-mlops-portfolio-in-10-projects-92e042da5ade',
  },
  {
    title: 'What I Learned Scraping 2,800 UK Data Job Postings (And Why the API Lied to Me)',
    date: '2026-06-05', mins: 20, topic: 'Data engineering',
    slug: 'what-i-learned-scraping-2-800-uk-data-job-postings-and-why-the-api-lied-to-me-b94ec1638450',
  },
  {
    title: 'Transforming Energy Decision-Making Through Data: Building an End-to-End UK Electricity Demand Forecasting and Business Intelligence Solution',
    date: '2026-06-05', mins: 6, topic: 'Machine learning',
    slug: 'transforming-energy-decision-making-through-data-building-an-end-to-end-uk-electricity-demand-70219b63a481',
  },
  {
    title: '10 Practical Data Science Skills I Built — And What They Actually Mean in the Real World',
    date: '2026-06-02', mins: 7, topic: 'Craft',
    slug: '10-practical-data-science-skills-i-built-and-what-they-actually-mean-in-the-real-world-0a3702b0cc74',
  },
  {
    title: 'Building an Airline Operations Analytics Stack — and the Audit That Made It Necessary',
    date: '2026-06-02', mins: 13, topic: 'Analytics',
    slug: 'building-an-airline-operations-analytics-stack-and-the-audit-that-made-it-necessary-3abc792aa9ad',
  },
  {
    title: 'The Silent Bug Hiding in Most ML APIs',
    date: '2026-06-01', mins: 9, topic: 'MLOps',
    slug: 'the-silent-bug-hiding-in-most-ml-apis-a812a844fa46',
  },
  {
    title: 'I Built an End-to-End Hospital Analytics Project (SQL → Power BI → XGBoost)',
    date: '2026-05-26', mins: 10, topic: 'Power BI',
    slug: 'i-built-an-end-to-end-hospital-analytics-project-sql-power-bi-xgboost-6156aec27298',
  },
  {
    title: 'The Dummy Classifier Beat My Random Forest. Here’s What I Learned.',
    date: '2026-05-24', mins: 11, topic: 'Machine learning',
    slug: 'the-dummy-classifier-beat-my-random-forest-heres-what-i-learned-426622f11f96',
  },
  {
    title: 'How I Found a £3.7M Re-engagement Opportunity Hidden in 1 Million Retail Transactions',
    date: '2026-05-23', mins: 5, topic: 'Analytics',
    slug: 'how-i-found-a-3-7m-re-engagement-opportunity-hidden-in-1-million-retail-transactions-ca14bb92097a',
  },
  {
    title: 'Building a Production-Grade PySpark Pipeline: A Practical Guide for Data Analysts',
    date: '2026-05-19', mins: 15, topic: 'Data engineering',
    slug: 'building-a-production-grade-pyspark-pipeline-a-practical-guide-for-data-analysts-9186dd67291b',
  },
  {
    title: 'How I Built a Self-Updating Cloud Data Lake for $0 Using Python and GitHub Actions',
    date: '2026-05-19', mins: 5, topic: 'Data engineering',
    slug: 'how-i-built-a-self-updating-cloud-data-lake-for-0-using-python-and-github-actions-c5451301eacc',
  },
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

/** Render the "Selected case studies" section from CASE_STUDIES.

    Each card leads with the metric so the page still communicates at a skim,
    then gives problem / approach / result for a reader who slows down. */
function renderCaseStudies() {
  const host = document.getElementById('caseGrid');
  if (!host) return;

  host.innerHTML = CASE_STUDIES.map((c, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const stack = (c.stack || []).map((t) => `<li>${esc(t)}</li>`).join('');
    const action = c.url
      ? `<a class="case-card__link" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">
           <i class="fa-brands fa-github" aria-hidden="true"></i> Read the code
           <i class="fa-solid fa-arrow-right case-card__arrow" aria-hidden="true"></i>
         </a>`
      : `<span class="card__badge" aria-label="Private repository">
           <i class="fa-solid fa-lock" aria-hidden="true"></i> Private repo
         </span>`;

    return `
      <article class="case-card">
        <div class="case-card__head">
          <span class="case-card__num" aria-hidden="true">${num}</span>
          <span class="case-card__badge">${esc(c.badge)}</span>
        </div>

        <p class="case-card__metric">
          <span class="case-card__metric-value">${esc(c.metric)}</span>
          <span class="case-card__metric-label">${esc(c.metricLabel)}</span>
        </p>

        <h3 class="case-card__title">${esc(c.name)}</h3>

        <dl class="case-card__body">
          <dt>Problem</dt><dd>${esc(c.problem)}</dd>
          <dt>Approach</dt><dd>${esc(c.approach)}</dd>
          <dt>Result</dt><dd>${esc(c.result)}</dd>
        </dl>

        <ul class="case-card__tags" aria-label="Tech stack">${stack}</ul>
        ${action}
      </article>
    `;
  }).join('');
}

/** Render the skills section.

    The bar is decorative (aria-hidden): the level is already stated in text
    next to it, so screen readers get the value without reading a widget. */
function renderSkills() {
  const host = document.getElementById('skillsGrid');
  if (!host) return;
  host.innerHTML = SKILLS.map((s) => `
    <article class="skill-card">
      <div class="skill-card__head">
        <span class="skill-card__icon" aria-hidden="true"><i class="${esc(s.icon)}"></i></span>
        <h3 class="skill-card__title">${esc(s.area)}</h3>
      </div>
      <p class="skill-card__blurb">${esc(s.blurb)}</p>
      <p class="skill-card__meter">
        <span class="skill-card__level">${esc(s.level)}</span>
        <span class="skill-card__bar" aria-hidden="true">
          <span class="skill-card__fill" style="--fill:${Number(s.pct)}%"></span>
        </span>
      </p>
      <ul class="skill-card__tools" aria-label="Key tools">
        ${s.tools.map((t) => `<li>${esc(t)}</li>`).join('')}
      </ul>
      <p class="skill-card__proof">${esc(s.proof)}</p>
    </article>
  `).join('');
}

/** Render the writing index from ARTICLES.

    An index, not a card grid: 25 rows of cards would swamp the projects above
    them, and an article has no metric to lead with. Each row is a single link
    — date, title, read time — so the eye can run down the titles alone.

    Rows past ARTICLES_VISIBLE are rendered but hidden, so the "show all"
    toggle is a class change rather than a re-render, and a browser find
    (Ctrl+F) still misses them the same way it misses a filtered project. */
function renderArticles() {
  const host = document.getElementById('writingList');
  if (!host) return;

  const fmt = (iso) => {
    const d = new Date(`${iso}T00:00:00Z`);
    return {
      label: d.toLocaleDateString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC',
      }),
      attr: iso,
    };
  };

  host.innerHTML = ARTICLES.map((a, idx) => {
    const when = fmt(a.date);
    const extra = idx >= ARTICLES_VISIBLE ? ' writing-item--overflow' : '';
    return `
      <li class="writing-item${extra}">
        <a class="writing-item__link" href="${esc(MEDIUM_PROFILE)}/${esc(a.slug)}"
           target="_blank" rel="noopener noreferrer">
          <time class="writing-item__date" datetime="${esc(when.attr)}">${esc(when.label)}</time>
          <span class="writing-item__title">${esc(a.title)}</span>
          <span class="writing-item__meta">
            <span class="writing-item__topic">${esc(a.topic)}</span>
            <span class="writing-item__mins">${Number(a.mins)} min</span>
            <i class="fa-solid fa-arrow-up-right-from-square writing-item__icon" aria-hidden="true"></i>
          </span>
        </a>
      </li>
    `;
  }).join('');

  initArticlesToggle(host);
}

/** Wire the "show all" toggle beneath the writing index.

    Hidden when every article already fits, so the button never appears with
    nothing to reveal. */
function initArticlesToggle(host) {
  const btn = document.getElementById('writingMore');
  if (!btn) return;

  const hiddenCount = ARTICLES.length - ARTICLES_VISIBLE;
  if (hiddenCount <= 0) {
    btn.hidden = true;
    return;
  }

  const label = btn.querySelector('[data-writing-more-label]') || btn;
  label.textContent = `Show all ${ARTICLES.length} articles`;

  btn.addEventListener('click', () => {
    const expanded = host.classList.toggle('is-expanded');
    btn.setAttribute('aria-expanded', String(expanded));
    label.textContent = expanded
      ? 'Show fewer'
      : `Show all ${ARTICLES.length} articles`;

    // Collapsing from below the fold would otherwise leave the reader
    // stranded in whitespace where the rows used to be.
    if (!expanded) {
      const top = host.getBoundingClientRect().top + window.scrollY;
      const header = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--header-h'), 10) || 66;
      if (window.scrollY > top) window.scrollTo({ top: top - header - 24 });
    }
  });
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

    // Hide a whole group when none of its cards are showing, and state how
    // many it holds — the count answers "how much is behind this heading?"
    // before the reader scrolls, and follows the filter rather than sitting
    // as a stale number in the markup.
    sections.forEach((section) => {
      const shown = section.querySelectorAll('.card:not(.is-hidden)').length;
      section.classList.toggle('is-empty', shown === 0);
      const badge = section.querySelector('[data-group-count]');
      if (badge) badge.textContent = String(shown).padStart(2, '0');
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

  // Swap the theme with colour transitions suppressed for the frame in which
  // it lands. Without this, any element that is off-screen when the attribute
  // flips never receives the frames its background/border transition needs and
  // keeps the old theme's colour until it is hovered or repainted — the case
  // study, skill and project cards all stayed white on the dark page.
  function setTheme(theme) {
    root.setAttribute('data-theme-switching', '');
    root.setAttribute('data-theme', theme);
    void root.offsetWidth; // flush styles so the suppression rule takes effect
    requestAnimationFrame(() => {
      requestAnimationFrame(() => root.removeAttribute('data-theme-switching'));
    });
    reflect(theme);
  }

  // The no-flash script in <head> already set data-theme; just mirror it here.
  reflect(root.getAttribute('data-theme') || 'light');

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* storage blocked; ignore */ }
  });

  // Follow the OS switching light/dark mid-visit — but only until the visitor
  // has made a choice of their own, which stays authoritative.
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const onSystemChange = (e) => {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (_) { /* storage blocked */ }
    if (saved) return;
    setTheme(e.matches ? 'dark' : 'light');
  };
  if (mq.addEventListener) mq.addEventListener('change', onSystemChange);
  else if (mq.addListener) mq.addListener(onSystemChange); // older Safari
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
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !menu.classList.contains('is-open')) return;
    close();
    toggle.focus(); // don't strand focus inside the menu we just hid
  });
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
  renderCaseStudies();
  renderProjects();
  renderSkills();
  renderArticles();
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
