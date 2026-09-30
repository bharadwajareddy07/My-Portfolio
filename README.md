# Bharadwaj — Developer Portfolio

A modern, responsive, and developer-tailored portfolio website built for internship and software engineering applications.

![Portfolio Preview](/profile.jpg)

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler / Tooling:** Vite
- **Styling:** Tailwind CSS (Dark theme aesthetic)
- **Icons:** Lucide React
- **Animations:** Lightweight transitions & CSS / Framer Motion
- **Hosting:** Ready for 1-click deployment on [Vercel](https://vercel.com)

---

## 🎨 Design System & Palette

- **Background:** `#070B14`
- **Secondary Background:** `#0D1321`
- **Primary Text:** `#F8FAFC`
- **Secondary Text:** `#94A3B8`
- **Accent Blue:** `#2F6BFF`
- **Cyan Accent:** `#00D4FF`
- **Borders:** `#1E293B`

---

## 📂 Project Structure

```
src/
├── assets/             # Assets and images
├── components/         # Modular UI Components
│   ├── Navbar.tsx      # Sticky navigation with mobile drawer & active spy
│   ├── Hero.tsx        # Hero section with avatar, status badge, & CTAs
│   ├── About.tsx       # About Me, focus areas, and verified statistics
│   ├── Skills.tsx      # Categorized skill badges (Languages, Frontend, Backend, AI/ML, DB, Tools)
│   ├── Projects.tsx    # Centerpiece showcase with interactive UI & RAG pipeline
│   ├── Experience.tsx  # Practical engineering & hackathon experience timeline
│   ├── Education.tsx   # B.Tech CSE SRKR Engineering College (2024-2028)
│   ├── Certifications.tsx # Extensible coursework & technical certificates
│   ├── GitHub.tsx      # Building in public hub with live repo links
│   ├── ResumeCTA.tsx   # High-converting recruiter CTA for internships
│   ├── Contact.tsx     # Direct channels & message form with mailto fallback
│   └── Footer.tsx      # Clean footer with author info and copyright
├── data/               # Decoupled data models
│   ├── projects.ts     # Project details, problem statements, and pipeline steps
│   ├── skills.ts       # Categorized technical competencies
│   ├── experience.ts   # Project and hackathon timeline records
│   ├── education.ts    # Academic records
│   └── certifications.ts # Certifications data
├── App.tsx             # Root layout assembler
├── main.tsx            # React root entry
└── index.css           # Tailwind directives & custom utilities
```

---

## 💻 Getting Started Locally

1. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 📄 Updating Resume and Photos

- **Resume:** Replace `public/resume.pdf` with your latest PDF file. All download buttons link to `/resume.pdf`.
- **Profile Image:** Replace `public/profile.jpg` with any new headshot.

---

## 🚀 Deploying to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Bharadwaj developer portfolio"
   git branch -M main
   git remote add origin https://github.com/Bharadwaj-source/portfolio.git
   git push -u origin main
   ```

2. Import the repository into [Vercel](https://vercel.com).
3. Vercel will auto-detect Vite and deploy with zero configuration.
