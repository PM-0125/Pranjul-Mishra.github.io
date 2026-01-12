# Pranjul Mishra — Portfolio

**Research Software Engineer** specializing in AI, Knowledge Graphs, and Computational Genomics

Live Site: **[pm-0125.github.io](https://pm-0125.github.io/)**

---

## Overview

Professional portfolio showcasing research software engineering expertise in:
- **AI & RAG Systems**: Knowledge Graph-based retrieval, SPARQL integration, clinical NLP
- **Computational Genomics**: Structural variant detection, bioinformatics pipelines
- **Engineering Best Practices**: CI/CD, testing, reproducible ML, DVC/MLflow

Built with **Astro** for optimal performance and deployed via GitHub Pages.

---

## Tech Stack

- **Framework**: Astro (static site generation)
- **Styling**: Custom CSS with dark theme
- **3D Visualizations**: React Three Fiber (desktop only)
- **Responsive**: Mobile-optimized with adaptive layouts
- **PWA**: Manifest + Service Worker for app-like experience

---

## Portfolio Sections

1. **Hero** - Professional introduction with orbiting profile
2. **Research & Projects** - Clinical RAG, genomics algorithms, BioXAI tools
3. **Academic Projects** - Structural variant detection, breast cancer analysis, ART neural networks
4. **Experience** - Timeline visualization of research positions
5. **Publications** - Academic papers and presentations
6. **Education** - Degrees, certifications, coursework
7. **Skills** - Domain-organized technical expertise (no arbitrary percentages)
8. **Awards & Recognitions** - Competitive achievements and honors
9. **Public Engagement** - YouTube channel (AI Pathfinders) with educational content
10. **Contact** - Working Formspree integration + social links

---

## Project Structure

```
src/
├── pages/
│   └── index.astro          # Main portfolio page
├── components/              # React components for 3D visuals
│   ├── UniverseBackground.jsx
│   ├── HeroParticles.jsx
│   ├── Planet3D.jsx
│   ├── AcademicVisual.jsx
│   ├── AwardsVisual.jsx
│   ├── BlogVisual.jsx
│   ├── EducationVisual.jsx
│   ├── PublicationVisual.jsx
│   └── ExperienceTimeline.jsx
├── data/
│   └── content.js           # Portfolio data (projects, skills, awards, etc.)
└── styles/
    ├── global.css           # Main theme & responsive layout
    ├── timeline.css
    ├── publications.css
    ├── education.css
    ├── skills.css
    ├── awards.css
    ├── blog.css
    └── contact.css

public/
├── photo.jpg                # Profile image
├── PRANJULMISHRA_CV.pdf     # Resume
├── manifest.webmanifest     # PWA manifest
└── sw.js                    # Service worker
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Opens at http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment

Automatically deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`.

**Live URL**: [https://pm-0125.github.io/](https://pm-0125.github.io/)

---

## Key Features

### 🎨 Professional Design
- Dark theme with cyan/magenta accents
- Smooth animations and transitions
- Custom particle system background

### 📱 Mobile-Optimized
- Responsive breakpoints (1080px, 768px, 480px)
- 3D visualizations disabled on mobile for performance
- Touch-friendly navigation and buttons
- Scalable typography and layouts

### 🔗 Working Contact Form
- Formspree integration (configured)
- Email notifications on submission
- Form validation

### 🎓 Domain-Based Skills
- No arbitrary percentages
- Expert/Proficient/Learning proficiency system
- Grouped by technical domain (Core AI, Engineering, Data, Specialized)
- Proof links to relevant projects

### 🎥 YouTube Integration
- AI Pathfinders channel showcase
- Featured video + recent videos grid
- Education-focused content presentation

---

## Configuration Notes

### Contact Form
✅ **Already configured** with Formspree (ID: xkogkoeb)
- Submissions go to: pranjulmishra228161@gmail.com
- No additional setup needed

### Analytics (Optional)
To add Google Analytics:
1. Get GA4 Measurement ID
2. Add tracking script in `src/pages/index.astro` `<head>`

### Custom Preview Image
Replace `public/og-preview.png` with custom social media preview (1200x630px recommended)

---

## Data Updates

Edit `src/data/content.js` to update:
- Projects, research items, publications
- Skills, awards, certifications
- Experience timeline
- YouTube videos
- Contact information

---

## License

MIT License - See LICENSE file for details

---

## Author

**Pranjul Mishra**  
Research Software Engineer  
Warsaw, Poland

- GitHub: [@PM-0125](https://github.com/PM-0125)
- LinkedIn: [pranjul-mishra](https://www.linkedin.com/in/pranjul-mishra/)
- Email: pranjulmishra228161@gmail.com
