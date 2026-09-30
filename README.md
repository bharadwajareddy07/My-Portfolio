# Bharadwaj Reddy — Developer Portfolio

A modern, responsive, and developer-tailored portfolio website built for internship and software engineering applications.

![Portfolio Profile](/profile.jpg)

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler / Tooling:** Vite
- **Styling:** Tailwind CSS (Dark professional aesthetic)
- **Icons:** Lucide React
- **Hosting:** Ready for 1-click deployment on [Vercel](https://vercel.com)

---

## 🎨 Design System & Palette

- **Background:** `#070B14` (Deep navy / near-black)
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
│   ├── Hero.tsx        # Hero section with headline, status badge, & CTAs
│   ├── About.tsx       # About Me, focus domains, and verified statistics
│   ├── Skills.tsx      # Categorized skill badges (Languages, Frontend, Backend, AI/ML, Data, DB/Tools)
│   ├── Experience.tsx  # Practical engineering & hackathon experience timeline
│   ├── Projects.tsx    # Case-study style showcase with architecture diagrams
│   ├── Education.tsx   # B.Tech CSE SRKR Engineering College (2024-2028)
│   ├── Certifications.tsx # Extensible coursework & technical certificates
│   ├── GitHub.tsx      # Building in public hub with live repo links
│   ├── ResumeCTA.tsx   # High-converting recruiter CTA for internships
│   ├── Contact.tsx     # Direct channels & message form with mailto fallback
│   └── Footer.tsx      # Clean footer with author info and copyright
├── data/               # Decoupled data models
│   ├── projects.ts     # Project details, problem statements, and pipeline steps
│   ├── skills.ts       # Skills catalog
│   ├── experience.ts   # Practical experience records
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
   git commit -m "feat: complete modern developer portfolio redesign"
   git branch -M main
   git remote add origin https://github.com/bharadwajareddy07/My-Portfolio.git
   git push -u origin main
   ```

2. Import the repository into [Vercel](https://vercel.com).
3. Vercel will auto-detect Vite and deploy with zero configuration.
