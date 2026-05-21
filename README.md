# Shahbaz Shaikh Business Analytics Portfolio

Static, LinkedIn-ready business analytics portfolio generated from selected public GitHub repositories and supporting case-study evidence for `ShahbazShaikh96`.

The site is written for recruiters and hiring managers who want to quickly understand:

- programmatic advertising and AdTech operations experience
- AI/ML coursework, neural-network practice, predictive analytics, and optimization evidence
- the business question behind each project
- the analytical approach used
- the decision value of the output
- the GitHub evidence behind the work

## Included Project Sources

- `nyfs-dashboard`
- `NYC-Restaurant-Food-Safety-Dashboard`
- `Interactive_Data_Projects`
- `Advance-Data-Mining-Predictive-Analytics`
- `hybrid-indexing-big-data`
- `loan-default-loss-prediction`
- `E-Commerce-Customer-Analysis`
- `-Machine-Learning-ML-Projects`
- `Quantitaive-Management-Modelling-Projects`
- `Customer-Churn-Analysis`
- `contextual-ad-network`
- `sshaikh7_AdvanceMachineLearning`

The portfolio intentionally curates selected repositories into employer-ready project stories. Coursework repositories are included when they show relevant analytics, AI/ML modeling, neural-network practice, automation-ready workflows, or dashboard-building skills.

The NYFS live dashboard is linked at `https://nyfs-web.onrender.com/`. `NYC-Restaurant-Food-Safety-Dashboard` is treated as an earlier prototype; `nyfs-dashboard` is the maintained dashboard project.

## Case Studies

The `case-studies/` folder adds supporting context for recruiter review:

- `case-studies/nyfs-dashboard.html` explains the maintained NYFS dashboard.
- `case-studies/qmm-production-optimization.html` explains the production-mix optimization model.
- `case-studies/qmm-distribution-optimization.html` explains the distribution-cost optimization model.

## Run Locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 5173
```

Then open `http://127.0.0.1:5173/`.

## How To Edit

Most edits happen in three files:

- `index.html` controls the page sections, hero text, navigation, and contact copy.
- `script.js` controls the project list, project summaries, business questions, decision value, tags, links, and images.
- `styles.css` controls layout, colors, spacing, fonts, and responsive design.
- `case-studies/` contains supporting project pages for selected work.

For project updates, edit the `projects` array in `script.js`. Projects are grouped by employer-facing capability:

- `BI & Dashboards`
- `Data Engineering`
- `ML & Predictive Analytics`
- `Business Analytics`
- `Optimization`
- `Product Strategy`

Each project has:

- `title`
- `repo`
- `category`
- `language`
- `updated`
- `links`
- `image`
- `summary`
- `businessQuestion`
- `decisionValue`
- `tags`
- `featured`

After editing locally:

```bash
git status
git add README.md index.html script.js styles.css case-studies
git commit -m "Update portfolio"
git push
```

GitHub Pages will redeploy automatically after each push to `main`.

## Deploy

This can be deployed directly with GitHub Pages from the repository root.

After deployment, add the live URL to LinkedIn under **Featured**, **Contact Info**, and the top of your **About** section.
