const projects = [
  {
    title: "NYFS Digital Dashboard",
    repo: "nyfs-dashboard",
    category: "BI & Dashboards",
    language: "Python / React",
    updated: "May 2026",
    url: "https://github.com/ShahbazShaikh96/nyfs-dashboard",
    links: [
      { label: "Case Study", url: "case-studies/nyfs-dashboard.html" },
      { label: "GitHub", url: "https://github.com/ShahbazShaikh96/nyfs-dashboard" },
      { label: "Live Dashboard", url: "https://nyfs-web.onrender.com/" },
    ],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Maintained NYC food-safety dashboard with scheduled data refresh, FastAPI backend, React frontend, and MapLibre location views.",
    businessQuestion: "How can inspection records become a practical dashboard for comparing restaurant safety, location, and risk patterns?",
    decisionValue: "Shows an end-to-end analytics product: data refresh pipeline, API layer, frontend experience, and recruiter-verifiable deployment.",
    tags: ["FastAPI", "React", "MapLibre", "Public Data", "Dashboard"],
    featured: true,
  },
  {
    title: "NYC Restaurant Food Safety Dashboard",
    repo: "NYC-Restaurant-Food-Safety-Dashboard",
    category: "BI & Dashboards",
    language: "Prototype",
    updated: "Mar 2026",
    url: "https://github.com/ShahbazShaikh96/NYC-Restaurant-Food-Safety-Dashboard",
    links: [
      { label: "GitHub", url: "https://github.com/ShahbazShaikh96/NYC-Restaurant-Food-Safety-Dashboard" },
    ],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Earlier food-safety visualization prototype that informed the maintained NYFS dashboard project.",
    businessQuestion: "What dashboard patterns make NYC inspection data easier to explore before building a maintained product?",
    decisionValue: "Shows the progression from prototype exploration to a cleaner deployed dashboard architecture.",
    tags: ["Prototype", "Public Data", "Dashboard", "Visualization"],
    featured: false,
  },
  {
    title: "Hybrid Indexing for Big Data",
    repo: "hybrid-indexing-big-data",
    category: "Data Engineering",
    language: "Python",
    updated: "May 2026",
    url: "https://github.com/ShahbazShaikh96/hybrid-indexing-big-data",
    links: [
      { label: "GitHub", url: "https://github.com/ShahbazShaikh96/hybrid-indexing-big-data" },
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Metadata-guided indexing prototype that routes large-data queries more intelligently to improve retrieval efficiency.",
    businessQuestion: "How can large datasets be searched more efficiently when metadata can guide the query path?",
    decisionValue: "Connects data-engineering design to business outcomes: faster search, lower wasted retrieval effort, and better analytical responsiveness.",
    tags: ["Python", "Indexing", "Query Routing", "Scalability"],
    featured: true,
  },
  {
    title: "Loan Default & Loss Prediction",
    repo: "loan-default-loss-prediction",
    category: "ML & Predictive Analytics",
    language: "Jupyter Notebook",
    updated: "Apr 2026",
    url: "https://github.com/ShahbazShaikh96/loan-default-loss-prediction",
    links: [
      { label: "GitHub", url: "https://github.com/ShahbazShaikh96/loan-default-loss-prediction" },
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Two-stage risk modeling workflow for loan default classification and loss severity prediction using multiple modeling approaches.",
    businessQuestion: "Which borrowers are most likely to default, and how severe could the expected loss be?",
    decisionValue: "Demonstrates predictive framing, model comparison, and risk segmentation for financial decision support.",
    tags: ["Credit Risk", "Loss Severity", "XGBoost", "Random Forest"],
    featured: true,
  },
  {
    title: "Contextual Ad Network",
    repo: "contextual-ad-network",
    category: "Product Strategy",
    language: "JavaScript",
    updated: "Aug 2025",
    url: "https://github.com/ShahbazShaikh96/contextual-ad-network",
    links: [
      { label: "GitHub", url: "https://github.com/ShahbazShaikh96/contextual-ad-network" },
    ],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Contextual advertising prototype exploring privacy-first ad relevance without relying on user-level tracking.",
    businessQuestion: "Can ad targeting remain relevant without collecting user-level tracking data?",
    decisionValue: "Connects privacy constraints to product strategy, contextual content signals, and monetization design.",
    tags: ["AdTech", "Privacy", "Contextual Signals", "Prototype"],
    featured: false,
  },
  {
    title: "Interactive Data Projects",
    repo: "Interactive_Data_Projects",
    category: "BI & Dashboards",
    language: "Jupyter Notebook",
    updated: "May 2026",
    url: "https://github.com/ShahbazShaikh96/Interactive_Data_Projects",
    links: [
      { label: "GitHub", url: "https://github.com/ShahbazShaikh96/Interactive_Data_Projects" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Interactive-data coursework and visualization notebooks focused on exploration, cleaning, visual reasoning, and communication.",
    businessQuestion: "How can exploratory visuals help stakeholders understand patterns before a formal product or model is built?",
    decisionValue: "Shows dashboard thinking, visual hierarchy, and audience-aware analytics communication.",
    tags: ["Pandas", "Plotly", "Matplotlib", "Seaborn", "Jupyter"],
    featured: true,
  },
  {
    title: "Customer Churn Analysis",
    repo: "Customer-Churn-Analysis",
    category: "Business Analytics",
    language: "HTML / R",
    updated: "Dec 2025",
    url: "https://github.com/ShahbazShaikh96/Customer-Churn-Analysis",
    links: [
      { label: "GitHub", url: "https://github.com/ShahbazShaikh96/Customer-Churn-Analysis" },
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Customer analytics project using R to identify churn drivers, risk patterns, and retention opportunities.",
    businessQuestion: "Which customer behaviors or attributes signal churn risk?",
    decisionValue: "Supports retention prioritization, customer segmentation, and stakeholder-ready intervention planning.",
    tags: ["R", "Retention", "Customer Risk", "Classification"],
    featured: true,
  },
  {
    title: "E-Commerce Customer Analysis",
    repo: "E-Commerce-Customer-Analysis",
    category: "Business Analytics",
    language: "Jupyter Notebook",
    updated: "Jan 2026",
    url: "https://github.com/ShahbazShaikh96/E-Commerce-Customer-Analysis",
    links: [
      { label: "GitHub", url: "https://github.com/ShahbazShaikh96/E-Commerce-Customer-Analysis" },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Examines e-commerce behavior and spending patterns through regression analysis and customer-focused business recommendations.",
    businessQuestion: "What customer patterns can inform segmentation, marketing, and conversion strategy?",
    decisionValue: "Translates behavioral data into audience insights and business recommendations.",
    tags: ["Customer Analytics", "Regression", "Business Recommendations", "E-Commerce"],
    featured: false,
  },
  {
    title: "Machine Learning Projects",
    repo: "-Machine-Learning-ML-Projects",
    category: "ML & Predictive Analytics",
    language: "HTML",
    updated: "Dec 2025",
    url: "https://github.com/ShahbazShaikh96/-Machine-Learning-ML-Projects",
    links: [
      { label: "GitHub", url: "https://github.com/ShahbazShaikh96/-Machine-Learning-ML-Projects" },
    ],
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
    category: "ML & Predictive Analytics",
    language: "Jupyter Notebook",
    updated: "May 2026",
    url: "https://github.com/ShahbazShaikh96/sshaikh7_AdvanceMachineLearning",
    links: [
      { label: "GitHub", url: "https://github.com/ShahbazShaikh96/sshaikh7_AdvanceMachineLearning" },
    ],
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Advanced machine learning coursework covering sentiment analysis, CNN transfer learning, time-series forecasting, embeddings, and efficient classification workflows.",
    businessQuestion: "How can different deep learning approaches be compared before they are trusted for prediction or decision support?",
    decisionValue: "Demonstrates model comparison, validation discipline, and clear documentation across multiple predictive tasks.",
    tags: ["Jupyter", "Deep Learning", "Forecasting", "Validation"],
    featured: true,
  },
  {
    title: "Advanced Data Mining & Predictive Analytics",
    repo: "Advance-Data-Mining-Predictive-Analytics",
    category: "ML & Predictive Analytics",
    language: "HTML / R",
    updated: "May 2026",
    url: "https://github.com/ShahbazShaikh96/Advance-Data-Mining-Predictive-Analytics",
    links: [
      { label: "GitHub", url: "https://github.com/ShahbazShaikh96/Advance-Data-Mining-Predictive-Analytics" },
    ],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Coursework repository covering data preprocessing, predictive modeling, neural-network practice, SVM work, and model evaluation using real-world datasets.",
    businessQuestion: "How can messy real-world data be prepared, modeled, and evaluated before being used for decision support?",
    decisionValue: "Shows applied data-mining practice across preprocessing, model comparison, evaluation, and prediction-oriented reporting.",
    tags: ["Data Mining", "SVM", "Neural Networks", "Model Evaluation"],
    featured: true,
  },
  {
    title: "Production Mix Profit Optimization",
    repo: "Quantitaive-Management-Modelling-Projects",
    category: "Optimization",
    language: "R / Linear Programming",
    updated: "Dec 2025",
    url: "https://github.com/ShahbazShaikh96/Quantitaive-Management-Modelling-Projects",
    links: [
      { label: "Case Study", url: "case-studies/qmm-production-optimization.html" },
      { label: "GitHub", url: "https://github.com/ShahbazShaikh96/Quantitaive-Management-Modelling-Projects/tree/main/Assignment%204%20-%20QMM" },
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Linear programming model for Weigelt Corporation that allocates production of large, medium, and small air conditioners across three plants.",
    businessQuestion: "How should production be allocated across plants to maximize profit while respecting capacity, storage, demand, and utilization constraints?",
    decisionValue: "Identifies a profit-maximizing production plan, binding storage constraints, and product tradeoffs for operations planning.",
    tags: ["lpSolve", "Profit Maximization", "Capacity Planning", "Operations"],
    featured: false,
  },
  {
    title: "AED Distribution Cost Optimization",
    repo: "Quantitaive-Management-Modelling-Projects",
    category: "Optimization",
    language: "R / Linear Programming",
    updated: "Dec 2025",
    url: "https://github.com/ShahbazShaikh96/Quantitaive-Management-Modelling-Projects",
    links: [
      { label: "Case Study", url: "case-studies/qmm-distribution-optimization.html" },
      { label: "GitHub", url: "https://github.com/ShahbazShaikh96/Quantitaive-Management-Modelling-Projects/tree/main/Assignment%206%20-%20QMM" },
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Transportation optimization model for Heart Start that determines the lowest-cost AED shipment plan from plants to wholesalers.",
    businessQuestion: "How should shipments be routed from production plants to wholesalers to minimize total production and shipping cost?",
    decisionValue: "Creates a cost-minimizing allocation plan that satisfies customer demand while respecting plant capacity.",
    tags: ["Transportation Model", "Cost Minimization", "Supply Chain", "R"],
    featured: false,
  },
];

const featuredProjects = document.querySelector("#featuredProjects");
const projectGrid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const focusCards = document.querySelectorAll("[data-focus-filter]");
const typedRole = document.querySelector("#typedRole");
const heroCanvas = document.querySelector("#heroCanvas");

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
      <h3><a class="project-title-link" href="${project.url}" target="_blank" rel="noreferrer">${project.title}</a></h3>
      <p>${project.summary}</p>
      <div class="impact-list">
        <p><strong>Business question:</strong> ${project.businessQuestion}</p>
        <p><strong>Decision value:</strong> ${project.decisionValue}</p>
      </div>
      <div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <div class="card-actions">
        ${(project.links || [{ label: "View Evidence", url: project.url }])
          .map((link) => `<a class="card-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
          .join("")}
      </div>
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

focusCards.forEach((card) => {
  card.addEventListener("click", () => {
    const targetFilter = card.dataset.focusFilter;
    const matchingButton = [...filterButtons].find((button) => button.dataset.filter === targetFilter);

    if (matchingButton) {
      filterButtons.forEach((item) => item.classList.remove("active"));
      matchingButton.classList.add("active");
      renderProjects(targetFilter);
    }
  });
});

const roles = [
  "Programmatic & Analytics Professional",
  "Business Analytics Graduate Student",
  "Predictive Analytics Builder",
  "BI Dashboard Builder",
  "AI-Driven AdTech Thinker",
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  if (!typedRole) return;

  const currentRole = roles[roleIndex];
  typedRole.textContent = currentRole.slice(0, charIndex);

  if (!deleting && charIndex < currentRole.length) {
    charIndex += 1;
    window.setTimeout(typeRole, 75);
    return;
  }

  if (!deleting && charIndex === currentRole.length) {
    deleting = true;
    window.setTimeout(typeRole, 1300);
    return;
  }

  if (deleting && charIndex > 0) {
    charIndex -= 1;
    window.setTimeout(typeRole, 34);
    return;
  }

  deleting = false;
  roleIndex = (roleIndex + 1) % roles.length;
  window.setTimeout(typeRole, 240);
}

function animateHeroCanvas() {
  if (!heroCanvas) return;

  const context = heroCanvas.getContext("2d");
  const particles = Array.from({ length: 58 }, () => ({
    x: Math.random(),
    y: Math.random(),
    radius: Math.random() * 2.2 + 0.6,
    speed: Math.random() * 0.18 + 0.05,
    alpha: Math.random() * 0.4 + 0.25,
  }));

  function resize() {
    heroCanvas.width = heroCanvas.offsetWidth * window.devicePixelRatio;
    heroCanvas.height = heroCanvas.offsetHeight * window.devicePixelRatio;
  }

  function draw() {
    const width = heroCanvas.width;
    const height = heroCanvas.height;
    context.clearRect(0, 0, width, height);

    particles.forEach((particle, index) => {
      particle.x += particle.speed / 1000;
      particle.y -= particle.speed / 1600;

      if (particle.x > 1.05) particle.x = -0.05;
      if (particle.y < -0.05) particle.y = 1.05;

      const x = particle.x * width;
      const y = particle.y * height;
      context.beginPath();
      context.arc(x, y, particle.radius * window.devicePixelRatio, 0, Math.PI * 2);
      context.fillStyle = `rgba(78, 224, 193, ${particle.alpha})`;
      context.fill();

      const nextParticle = particles[(index + 7) % particles.length];
      const nextX = nextParticle.x * width;
      const nextY = nextParticle.y * height;
      const distance = Math.hypot(x - nextX, y - nextY);

      if (distance < 170 * window.devicePixelRatio) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(nextX, nextY);
        context.strokeStyle = `rgba(117, 183, 255, ${0.12 * (1 - distance / (170 * window.devicePixelRatio))})`;
        context.stroke();
      }
    });

    window.requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
}

typeRole();
animateHeroCanvas();
