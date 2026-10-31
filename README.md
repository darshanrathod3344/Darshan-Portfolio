# 🚀 Modern React Portfolio Website

A fast, responsive, and customizable personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed to be 100% free to build, customize, and host online (via **GitHub Pages**, **Vercel**, or **Netlify**).

---

## ✨ Features

- **⚡ Lightning Fast:** Powered by Vite & modern React.
- **🎨 Modern Aesthetic:** Dark & Light mode toggle with persistent local storage.
- **📱 100% Responsive:** Optimized for desktops, tablets, and mobile phones.
- **🧩 Centralized Data:** Edit your name, bio, skills, projects, and contact info in a single file (`src/data/portfolioData.js`).
- **🔍 Filterable Showcases:** Interactive filtering for Skills and Projects.
- **📬 Functional Contact Form:** Direct mail trigger + 1-click email copy button with visual feedback.
- **🌐 100% Free Hosting Ready:** Preconfigured for GitHub Pages (via GitHub Actions & `gh-pages`).

---

## 🛠️ Quick Start (Run Locally)

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the site live!

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## ✏️ How to Customize Your Portfolio

All your portfolio content is centralized in **`src/data/portfolioData.js`**. You don't need to dig through complex JSX code!

Simply open [portfolioData.js](file:///c:/Users/VIVEK/Downloads/Website/src/data/portfolioData.js) and update:

- **Personal Info:** Name, title, short bio, location, email, and resume link.
- **Social Links:** Your GitHub, LinkedIn, Twitter/X, and Email URLs.
- **Key Stats:** Years of experience, projects completed, repositories.
- **Skills:** Add, remove, or customize skill tags and proficiency levels.
- **Projects:** Add your project titles, descriptions, preview image URLs, tech tags, and live/GitHub links.
- **Timeline:** Add your education, work experience, or internships.

---

## 🌐 How to Upload to GitHub and Host for FREE

### Step 1: Create a New GitHub Repository
1. Log in to your [GitHub account](https://github.com/).
2. Click the **`+`** icon in the top right and select **New repository**.
3. Name it (e.g., `portfolio` or `my-portfolio`).
4. Keep it **Public** (required for free GitHub Pages).
5. Do **not** check "Initialize with a README" (we already have one).
6. Click **Create repository**.

---

### Step 2: Push Your Local Code to GitHub
Open your terminal in this project folder and run:

```bash
# Add your GitHub remote repository (replace USERNAME and REPO_NAME with yours)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push code to the main branch
git branch -M main
git push -u origin main
```

---

### Step 3: Enable Free GitHub Pages

We have already included an automated GitHub Action workflow (`.github/workflows/deploy.yml`) for you!

1. Go to your repository on GitHub.
2. Click **Settings** (gear icon) > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. That's it! GitHub will automatically build and publish your site at:
   `https://<your-username>.github.io/<repo-name>/`

*(Alternative Option with `npm run deploy`)*:
If you prefer running a command from your terminal:
```bash
npm run deploy
```
Then under **Settings** > **Pages**, choose deploy from **Branch: `gh-pages` / (root)**.

---

## 🚀 Alternative 1-Click Free Hosting

- **[Vercel](https://vercel.com/):** Sign in with GitHub, click *Import Repository*, and click *Deploy*. (Takes ~30 seconds)
- **[Netlify](https://www.netlify.com/):** Sign in with GitHub, click *Add new site*, select your repo, and deploy.

---

## 📁 Project Structure

```
├── .github/workflows/deploy.yml   # Automatic GitHub Pages CI/CD workflow
├── public/                        # Static assets (favicons, icons)
├── src/
│   ├── components/                # Modular UI components
│   │   ├── Navbar.jsx             # Sticky navigation & theme toggle
│   │   ├── Hero.jsx               # Hero section, greeting & CTAs
│   │   ├── About.jsx              # About story & core strengths
│   │   ├── Skills.jsx             # Categorized skills with filters
│   │   ├── Projects.jsx           # Featured project cards
│   │   ├── Experience.jsx         # Career & education timeline
│   │   ├── Contact.jsx            # Contact cards & interactive form
│   │   ├── Footer.jsx             # Footer with copyright & links
│   │   └── Icons.jsx              # Brand SVGs (GitHub, LinkedIn, Twitter)
│   ├── context/
│   │   └── ThemeContext.jsx       # Dark / Light theme provider
│   ├── data/
│   │   └── portfolioData.js       # Central data file for all personal info
│   ├── App.jsx                    # Root layout
│   ├── index.css                  # Tailwind CSS configuration
│   └── main.jsx                   # React DOM entry point
├── package.json                   # Dependencies and scripts
└── vite.config.js                 # Vite & Tailwind configuration
```
