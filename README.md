# Shahbaz Shaikh Business Analytics Portfolio

Static, LinkedIn-ready business analytics portfolio generated from public GitHub repository metadata for `ShahbazShaikh96`.

The site is written for recruiters and hiring managers who want to quickly understand:

- the business question behind each project
- the analytical approach used
- the decision value of the output
- the GitHub evidence behind the work

## Included Project Sources

- `nyfs-dashboard`
- `Interactive_Data_Projects`
- `hybrid-indexing-big-data`
- `loan-default-loss-prediction`
- `E-Commerce-Customer-Analysis`
- `-Machine-Learning-ML-Projects`
- `Quantitaive-Management-Modelling-Projects`
- `Customer-Churn-Analysis`
- `contextual-ad-network`
- `sshaikh7_AdvanceMachineLearning`

The portfolio intentionally avoids the H1B sponsor workbook, USCIS visa-pathways workbook, and assignment/report-generation items.

## Run Locally

Open `index.html` in a browser, or serve the folder with any static server.

## How To Edit

Most edits happen in three files:

- `index.html` controls the page sections, hero text, navigation, and contact copy.
- `script.js` controls the project list, project summaries, business questions, decision value, tags, links, and images.
- `styles.css` controls layout, colors, spacing, fonts, and responsive design.

For project updates, edit the `projects` array in `script.js`. Each project has:

- `title`
- `repo`
- `category`
- `language`
- `updated`
- `url`
- `image`
- `summary`
- `businessQuestion`
- `decisionValue`
- `tags`
- `featured`

After editing locally:

```bash
git status
git add README.md index.html script.js styles.css
git commit -m "Update portfolio"
git push
```

GitHub Pages will redeploy automatically after each push to `main`.

## Deploy

This can be deployed directly with GitHub Pages from the repository root.

After deployment, add the live URL to LinkedIn under **Featured**, **Contact Info**, and the top of your **About** section.
