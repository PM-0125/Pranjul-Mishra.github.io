export const hero = {
  name: 'Pranjul Mishra',
  role: 'Research Software Engineer',
  location: 'Warsaw, Poland',
  focus: 'Credible AI / RAG / Research Software',
  bio: 'I turn research into reliable AI tools: tested Python libraries, CI/CD, reproducible ML, and clinical/BioXAI RAG utilities.',
  email: 'pranjulmishra228161@gmail.com',
  calendly: 'https://calendly.com/anjananandan0125',
  github: 'https://github.com/PM-0125',
  scholar: 'https://scholar.google.com/citations?user=MrgWFs8AAAAJ&hl=en&authuser=1',
  linkedin: 'https://www.linkedin.com/in/pranjul-mishra/',
  orcid: 'https://orcid.org/my-orcid?orcid=0009-0003-5503-1314',
  youtube: 'https://www.youtube.com/@AnjanaNandan0125'
};

export const research = [
  {
    title: 'INFERMed',
    summary: 'Clinical RAG assistant over DrugBank/FDA/PubChem RDF + SPARQL; retrieval reasoning & evaluation.',
    links: [
      { label: 'GitHub', href: 'https://github.com/PM-0125/INFERMed' }
    ],
    planet: 'earth',
    location: 'Clinical knowledge graphs · Earth',
    readme: 'Clinical RAG assistant over DrugBank/FDA/PubChem RDF + SPARQL; retrieval reasoning & evaluation. Next steps: function calling/tool use, structured outputs, eval harness.',
    tags: ['RAG', 'SPARQL', 'Clinical']
  },
  {
    title: 'SvPhaser',
    summary: 'Haplotype-aware SV genotyper for long-read data; CLI + Python API; GQ scoring and per-chrom parallelism.',
    links: [
      { label: 'GitHub', href: 'https://github.com/SFGLab/SvPhaser' },
      { label: 'PyPI', href: 'https://pypi.org/project/svphaser/' }
    ],
    planet: 'saturn',
    location: 'Long-read SVs · Saturn',
    readme: 'Haplotype-aware structural-variant genotyper for long-read data (HP-tagged BAM + VCF). Provides haplotype genotype calls (0|1,1|0,1|1,./.), GQ scoring, per-chrom multiprocessing, CLI and Python API; injects HP_GT/HP_GQ/HP_GQBIN into VCF.',
    tags: ['Genomics', 'Python', 'CLI']
  },
  {
    title: 'LOPHOS',
    summary: 'HiChIP allele-specific CTCF peak/loop phasing; BH-FDR bias calls; CLI, tests, CI.',
    links: [
      { label: 'GitHub', href: 'https://github.com/SFGLab/lophos' }
    ],
    planet: 'mars',
    location: 'HiChIP allele-specific phasing · Mars',
    readme: 'HiChIP allele-specific CTCF peak/loop phasing tool. Outputs BED/BEDPE with bias calls (BH-FDR), includes CLI, tests, CI, and docs for reproducible analysis.',
    tags: ['HiChIP', 'Bioinformatics']
  }
];

export const projects = [
  { title: 'Shopping Template', summary: 'Static HTML/CSS e-commerce shell; to reuse as UI for small AI utilities.', tags: ['Frontend', 'UI'] },
  { title: 'Advanced Breast Cancer Analysis', summary: 'METABRIC survival patterns with XGBoost, PCA, isolation forests.', tags: ['XGBoost', 'ML'] },
  { title: 'Adaptive Resonance Theory + Backprop', summary: 'Scratch implementation; compared vigilance parameters on MNIST/IRIS.', tags: ['ML', 'ART'] }
];

export const experience = [
  { role: 'Research Software Developer Intern', org: 'Center of New Technologies (CeNT)', location: 'On-site', dates: 'Jun 2025 – Ongoing', bullets: [
    'Productized BioXAI research into Python libraries with tests, typing, docs; CI (GitHub Actions).',
    'Introduced MLflow & DVC for tracking and lineage; deterministic Conda envs.',
    'Integrated hybrid BioXAI models with deterministic data pipelines.'
  ]},
  { role: 'Research Intern', org: 'Marwadi University', location: 'On-site', dates: 'Jan 2023 – May 2023', bullets: [
    'Built automated trading strategy (Python + Pine Script); modular indicators/backtests.'
  ]},
  { role: 'Research Intern', org: 'TSS Consultancy Pvt. Ltd.', location: 'Hybrid', dates: 'Nov 2022 – Dec 2022', bullets: [
    'Contributed to financial risk analysis pipeline (scraping → NLP → ML) for national banks.'
  ]},
  { role: 'DevOps Intern', org: 'University of Pitești, Romania', location: 'Remote', dates: 'Aug 2021 – Sep 2021', bullets: [
    'Practiced GitLab/Git workflows and basic DevOps; standardized branching and reviews.'
  ]}
];

export const publications = [
  'SvPhaser: A tool to phase unphased Structural Variants (manuscript-in-prep).',
  'Breast Cancer Survival Analysis (Biomedical Journal of Scientific & Technical Research).',
  'Academic Journal (University of Pitești, Erasmus+ article).',
  'Book Chapter: Harnessing Machine Intelligence and Big Data for Diabetes Management.'
];

export const education = [
  'M.Sc. Computer Science & Information Systems (AI), Warsaw University of Technology — GPA 4.63 (Feb 2024 – Dec 2025).',
  'B.Tech. Computer Engineering (AI), Marwadi University — GPA 8.43 (Jun 2019 – May 2023).'
];

export const skills = [
  { title: 'AI App Dev', items: ['RAG', 'RDF/SPARQL retrieval', 'Prompt engineering', 'Evaluation', 'Agent/tool use (in progress)'] },
  { title: 'Python & Testing', items: ['Packaging', 'CLI tools', 'pytest', 'mypy', 'ruff/black', 'MkDocs/Sphinx'] },
  { title: 'MLOps & Repro', items: ['MLflow', 'DVC', 'Docker', 'Conda', 'GitHub Actions', 'Deterministic envs'] },
  { title: 'ML/DS', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV', 'NLTK', 'spaCy'] },
  { title: 'Data/DB', items: ['SQL (PostgreSQL/MySQL)', 'SPARQL', 'Apache Jena', 'QLever'] },
  { title: 'Frontend', items: ['HTML/CSS', 'React/Next.js (learning)'] },
  { title: 'Cloud', items: ['GCP target', 'Cloud Run', 'Vertex AI (learning)'] },
  { title: 'Soft', items: ['Partnering with researchers/ops', 'Documentation', 'Public speaking'] },
  { title: 'Languages', items: ['English – Fluent', 'Polish – Basic', 'Hindi – Native'] }
];

export const achievements = [
  'Winner, Vodafone Idea Innovation Marathon (Oct 2022).',
  'Best Research Poster – Impact of AI in Bioinformatics & Precision Medicine (Sep 2022).',
  'NVIDIA Fundamentals of Deep Learning.',
  'Microsoft Azure AI-900.',
  'Oracle SQL Programming.',
  '10+ Coursera certificates (ML/DS/Python).'
];

export const blogPosts = [
  { title: 'Credible AI pipelines: from notebooks to CI', date: '2025-02-01', tags: ['CI', 'AI Reliability'], summary: 'Notes on taking research code to production-ready Python packages.' },
  { title: 'Clinical RAG with RDF/SPARQL', date: '2025-01-15', tags: ['RAG', 'RDF'], summary: 'Designing retrieval over knowledge graphs for drug–drug interactions.' },
  { title: 'Reproducibility with MLflow + DVC', date: '2024-12-10', tags: ['MLOps', 'Repro'], summary: 'Tracking experiments and artifacts with deterministic environments.' }
];

export const navSections = [
  { id: 'hero', label: 'Home' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' }
];

