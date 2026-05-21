const projects = [
  {
    title: "NYC Food Safety Dashboard",
    repo: "nyfs-dashboard",
    category: "Data Visualization",
    language: "Python",
    updated: "May 2026",
    url: "https://github.com/ShahbazShaikh96/nyfs-dashboard",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Analyzes restaurant inspection records to help users compare borough, cuisine, risk, and location patterns before making dining or operating decisions.",
    businessQuestion: "Where are food-safety risks concentrated, and which inspection patterns should decision-makers monitor?",
    decisionValue: "Turns public health records into KPIs, maps, and safer-choice views for fast comparison.",
    tags: ["KPI Dashboard", "Risk Analysis", "Public Data", "Maps"],
    featured: true,
  },
  {
    title: "Hybrid Indexing for Big Data",
    repo: "hybrid-indexing-big-data",
    category: "Data Engineering",
    language: "Python",
    updated: "May 2026",
    url: "https://github.com/ShahbazShaikh96/hybrid-indexing-big-data",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Frames a data-engineering problem as a business performance issue: routing queries more intelligently to reduce wasted retrieval time.",
    businessQuestion: "How can large datasets be searched more efficiently when metadata can guide the query path?",
    decisionValue: "Shows how indexing strategy can improve scalability, cost control, and analytical responsiveness.",
    tags: ["Data Strategy", "Query Routing", "Scalability", "Python"],
    featured: true,
  },
  {
    title: "Loan Default & Loss Prediction",
    repo: "loan-default-loss-prediction",
    category: "Machine Learning",
    language: "Jupyter Notebook",
    updated: "Apr 2026",
    url: "https://github.com/ShahbazShaikh96/loan-default-loss-prediction",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Uses a two-stage predictive workflow to estimate both default likelihood and potential loss severity for lending-risk decisions.",
    businessQuestion: "Which borrowers are most likely to default, and how severe could the expected loss be?",
    decisionValue: "Supports credit-risk prioritization, portfolio monitoring, and model-based risk segmentation.",
    tags: ["Credit Risk", "Loss Severity", "XGBoost", "Segmentation"],
    featured: true,
  },
  {
    title: "Contextual Ad Network",
    repo: "contextual-ad-network",
    category: "Product",
    language: "JavaScript",
    updated: "Aug 2025",
    url: "https://github.com/ShahbazShaikh96/contextual-ad-network",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Explores a privacy-first advertising model where page context, not personal tracking, drives ad relevance.",
    businessQuestion: "Can ad targeting remain relevant without collecting user-level tracking data?",
    decisionValue: "Connects privacy constraints to product strategy, contextual content signals, and monetization design.",
    tags: ["Product Analysis", "Privacy", "Contextual Signals", "MVP"],
    featured: false,
  },
  {
    title: "Interactive Data Projects",
    repo: "Interactive_Data_Projects",
    category: "Data Visualization",
    language: "Jupyter Notebook",
    updated: "May 2026",
    url: "https://github.com/ShahbazShaikh96/Interactive_Data_Projects",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A collection of exploratory notebooks and visuals focused on finding patterns, shaping questions, and communicating insights.",
    businessQuestion: "What does the data suggest before a formal dashboard, model, or business recommendation is built?",
    decisionValue: "Demonstrates discovery analysis, visual reasoning, and early-stage stakeholder exploration.",
    tags: ["EDA", "Visualization", "Insight Discovery", "Jupyter"],
    featured: false,
  },
  {
    title: "Customer Churn Analysis",
    repo: "Customer-Churn-Analysis",
    category: "Analytics",
    language: "HTML / R",
    updated: "Dec 2025",
    url: "https://github.com/ShahbazShaikh96/Customer-Churn-Analysis",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Identifies churn drivers and customer risk patterns so retention teams can focus on the accounts most likely to leave.",
    businessQuestion: "Which customer behaviors or attributes signal churn risk?",
    decisionValue: "Supports retention prioritization, customer segmentation, and targeted intervention planning.",
    tags: ["Retention", "Customer Risk", "R", "Classification"],
    featured: false,
  },
  {
    title: "E-Commerce Customer Analysis",
    repo: "E-Commerce-Customer-Analysis",
    category: "Analytics",
    language: "Jupyter Notebook",
    updated: "Jan 2026",
    url: "https://github.com/ShahbazShaikh96/E-Commerce-Customer-Analysis",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Examines e-commerce behavior to uncover customer segments, purchase patterns, and opportunities for growth decisions.",
    businessQuestion: "What customer patterns can inform segmentation, marketing, and conversion strategy?",
    decisionValue: "Translates behavioral data into audience insights and business recommendations.",
    tags: ["Customer Analytics", "Segmentation", "Growth", "E-Commerce"],
    featured: false,
  },
  {
    title: "Machine Learning Projects",
    repo: "-Machine-Learning-ML-Projects",
    category: "Machine Learning",
    language: "HTML",
    updated: "Dec 2025",
    url: "https://github.com/ShahbazShaikh96/-Machine-Learning-ML-Projects",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Consolidates applied ML work into a broader modeling portfolio, showing experimentation across prediction problems.",
    businessQuestion: "How can model selection and experimentation be used to solve different business prediction tasks?",
    decisionValue: "Shows breadth across modeling workflows, evaluation thinking, and applied analytical problem solving.",
    tags: ["Modeling", "Experimentation", "Evaluation", "Prediction"],
    featured: false,
  },
  {
    title: "Advanced Machine Learning",
    repo: "sshaikh7_AdvanceMachineLearning",
    category: "Machine Learning",
    language: "Jupyter Notebook",
    updated: "May 2026",
    url: "https://github.com/ShahbazShaikh96/sshaikh7_AdvanceMachineLearning",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Advanced machine learning coursework covering sentiment analysis, CNN transfer learning, time-series forecasting, embeddings, and efficient classification workflows.",
    businessQuestion: "How can different deep learning approaches be compared before they are trusted for prediction or decision support?",
    decisionValue: "Demonstrates model comparison, validation discipline, and clear documentation across multiple predictive tasks.",
    tags: ["Model Evaluation", "Advanced ML", "Validation", "Jupyter"],
    featured: false,
  },
  {
    title: "Quantitative Management Modeling",
    repo: "Quantitaive-Management-Modelling-Projects",
    category: "Analytics",
    language: "HTML",
    updated: "Dec 2025",
    url: "https://github.com/ShahbazShaikh96/Quantitaive-Management-Modelling-Projects",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Applies quantitative modeling to management-style decisions where tradeoffs, constraints, and measurable outcomes matter.",
    businessQuestion: "How can quantitative models support better resource, operations, or planning decisions?",
    decisionValue: "Shows structured decision analysis, optimization thinking, and business tradeoff communication.",
    tags: ["Decision Models", "Optimization", "Planning", "Tradeoffs"],
    featured: false,
  },
];

const featuredProjects = document.querySelector("#featuredProjects");
const projectGrid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll(".filter-button");

function projectCard(project, featured = false) {
  const card = document.createElement("article");
  card.className = featured ? "featured-card" : "project-card";
  card.dataset.category = project.category;

  card.innerHTML = `
    <div class="project-image" style="background-image: linear-gradient(rgba(7, 16, 19, 0.08), rgba(7, 16, 19, 0.36)), url('${project.image}')"></div>
    <div class="card-body">
      <div class="project-meta">
        <span>${project.category}</span>
        <span>${project.language}</span>
        <span>${project.updated}</span>
      </div>
      <h3><a href="${project.url}" target="_blank" rel="noreferrer">${project.title}</a></h3>
      <p>${project.summary}</p>
      <div class="impact-list">
        <p><strong>Business question:</strong> ${project.businessQuestion}</p>
        <p><strong>Decision value:</strong> ${project.decisionValue}</p>
      </div>
      <div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <a class="card-link" href="${project.url}" target="_blank" rel="noreferrer">Open repository on GitHub</a>
    </div>
  `;

  return card;
}

function renderProjects(filter = "all") {
  projectGrid.innerHTML = "";
  projects
    .filter((project) => filter === "all" || project.category === filter)
    .forEach((project) => projectGrid.appendChild(projectCard(project)));
}

projects
  .filter((project) => project.featured)
  .forEach((project) => featuredProjects.appendChild(projectCard(project, true)));

renderProjects();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});
