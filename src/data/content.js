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
    summary: 'Biomedical drug interaction checker using RAG architecture with SPARQL knowledge graphs and local LLM.',
    links: [
      { label: 'GitHub', href: 'https://github.com/PM-0125/INFERMed' }
    ],
    planet: 'earth',
    location: 'Clinical knowledge graphs',
    readme: 'Drug interaction checker using RAG architecture. Combines PubChem RDF (SPARQL), clinical datasets (TwoSides, DILIrank, DrugBank), and OpenFDA data. Local LLM synthesis via Ollama with modes for Doctor (mechanistic), Patient (simplified), and Pharma (regulatory).',
    tags: ['RAG', 'SPARQL', 'Clinical', 'LLM']
  },
  {
    title: 'SvPhaser',
    summary: 'Haplotype-aware SV genotyper for long-read data; CLI + Python API; GQ scoring and per-chrom parallelism.',
    links: [
      { label: 'GitHub', href: 'https://github.com/SFGLab/SvPhaser' },
      { label: 'PyPI', href: 'https://pypi.org/project/svphaser/' }
    ],
    planet: 'jupiter',
    location: 'Long-read SVs',
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
    location: 'HiChIP allele-specific phasing',
    readme: 'HiChIP allele-specific CTCF peak/loop phasing tool. Outputs BED/BEDPE with bias calls (BH-FDR), includes CLI, tests, CI, and docs for reproducible analysis.',
    tags: ['HiChIP', 'Bioinformatics']
  }
];


export const projects = [
  {
    title: 'Shopping Template',
    summary: 'Static HTML/CSS e-commerce shell; reusable UI for small AI utilities.',
    links: [
      { label: 'GitHub', href: 'https://github.com/PM-0125/ShoppingTemplate.github.io' },
      { label: 'Live Demo', href: 'https://pm-0125.github.io/ShoppingTemplate.github.io/' }
    ],
    location: 'Frontend Development',
    readme: 'Responsive e-commerce template built with vanilla HTML/CSS/JavaScript. Features product grid, cart functionality, and checkout flow. Designed as a reusable UI shell for integrating AI utilities and small-scale applications with minimal dependencies.',
    tags: ['Frontend', 'UI', 'HTML/CSS'],
    year: '2023',
    visualType: 'ui'
  },
  {
    title: 'Advanced Breast Cancer Analysis',
    summary: 'METABRIC survival patterns with XGBoost, PCA, isolation forests.',
    links: [
      { label: 'GitHub', href: 'https://github.com/PM-0125/AI_ML_Projects/tree/main/Advanced%20Breast%20Cancer%20Analysis' }
    ],
    location: 'Machine Learning Research',
    readme: 'Comprehensive analysis of METABRIC breast cancer dataset using ensemble methods. Implemented XGBoost for survival prediction, PCA for dimensionality reduction, and isolation forests for anomaly detection. Achieved improved classification accuracy through feature engineering and hyperparameter tuning.',
    tags: ['XGBoost', 'ML', 'Bioinformatics'],
    year: '2023',
    visualType: 'neural'
  },
  {
    title: 'Adaptive Resonance Theory + Backprop',
    summary: 'Scratch ART1 implementation; vigilance parameter comparison on MNIST/IRIS.',
    links: [
      { label: 'GitHub', href: 'https://github.com/PM-0125/AI_ML_Projects/tree/main/Adaptive_Ressonance_Theory(ART1)' }
    ],
    location: 'Neural Networks',
    readme: 'From-scratch implementation of Adaptive Resonance Theory (ART1) neural network combined with backpropagation. Conducted comparative study of vigilance parameter effects on clustering performance across MNIST and IRIS datasets. Demonstrated plasticity-stability balance in unsupervised learning.',
    tags: ['ML', 'ART', 'Neural Networks'],
    year: '2022',
    visualType: 'brain'
  }
];

export const experience = [
  {
    role: 'Research Software Developer', org: 'Center of New Technologies (CeNT)', location: 'On-site', dates: 'Jun 2025 – Ongoing', bullets: [
      'Productized BioXAI research into Python libraries with tests, typing, docs; CI (GitHub Actions).',
      'Introduced MLflow & DVC for tracking and lineage; deterministic Conda envs.',
      'Integrated hybrid BioXAI models with deterministic data pipelines.'
    ]
  },
  {
    role: 'Research Intern', org: 'Marwadi University', location: 'On-site', dates: 'Jan 2023 – May 2023', bullets: [
      'Built automated trading strategy (Python + Pine Script); modular indicators/backtests.'
    ]
  },
  {
    role: 'Research Intern', org: 'TSS Consultancy Pvt. Ltd.', location: 'Hybrid', dates: 'Nov 2022 – Dec 2022', bullets: [
      'Contributed to financial risk analysis pipeline (scraping → NLP → ML) for national banks.'
    ]
  },
  {
    role: 'DevOps Intern', org: 'University of Pitești, Romania', location: 'Remote', dates: 'Aug 2021 – Sep 2021', bullets: [
      'Practiced GitLab/Git workflows and basic DevOps; standardized branching and reviews.'
    ]
  }
];


export const publications = [
  {
    title: 'AI for Computational Biology: Highlights from the first BioAI Hackathon at University of Warsaw',
    authors: 'P. Mishra, et al.',
    venue: 'Center of New Technologies, University of Warsaw',
    type: 'preprint',
    status: 'preprint',
    year: '2025',
    date: 'July 2, 2025',
    doi: 'https://doi.org/10.37044/osf.io/vbw4t_v1',
    pdf: 'https://doi.org/10.37044/osf.io/vbw4t_v1',
    scholar: 'https://europepmc.org/article/ppr/ppr1046013',
    abstract: 'The BioAI Hackathon convened 43 international researchers to collaboratively explore AI approaches for solving complex challenges in computational biology, addressing disease-gene prioritization, microbiome analysis, drug-protein interactions, and more.',
    tags: ['Bioinformatics', 'Deep Learning', 'Graph Neural Networks', 'Multi-omics']
  },
  {
    title: 'Breast Cancer Survival Analysis (ML Multimodal Comparative Study)',
    authors: 'P. Mishra, M. Shukla',
    venue: 'Biomedical Journal of Scientific & Technical Research',
    type: 'journal',
    status: 'published',
    year: '2024',
    doi: 'http://dx.doi.org/10.26717/BJSTR.2024.58.009130',
    pdf: 'https://biomedres.us/pdfs/BJSTR.MS.ID.009130.pdf',
    scholar: 'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&authuser=1&q=Breast+Cancer+Survival+Analysis+%28ML+Multimodal+Comparative+Study%29&btnG=',
    abstract: 'Predicting breast cancer patient survival using ML classification techniques on the Metabric RNA mutation dataset, comparing Random Forest, SVM, Logistic Regression, and KNN algorithms.',
    tags: ['Machine Learning', 'Breast Cancer', 'Classification', 'Survival Analysis']
  },
  {
    title: 'Implementation of Local Computer Networking Laboratory During Erasmus+ Mobility',
    authors: 'P. Mishra, N. P. Doshi',
    venue: 'University of Pitești, Romania',
    type: 'journal',
    status: 'published',
    year: '2021',
    pdf: 'https://bulletin.feccupit.ro/archive/pdf/2021_1_3.pdf',
    scholar: 'https://scholar.google.com/scholar?oi=bibs&hl=en&authuser=1&q=related:Ba1J8ijs2t4J:scholar.google.com/',
    abstract: 'Erasmus+ mobility experience describing practical aspects of implementing Local Computer Networking labs during the COVID-19 pandemic in Romania.',
    tags: ['Education', 'Networking', 'Erasmus+', 'COVID-19']
  },
  {
    title: 'Harnessing Machine Intelligence and Big Data for Diabetes Management',
    authors: 'P. Mishra, N. Jadeja, M. Shukla',
    venue: 'Decision Support System for Diabetes Healthcare: Advancements and Applications',
    type: 'book-chapter',
    status: 'published',
    year: '2025',
    doi: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9788770046886-4/harnessing-machine-intelligence-big-data-diabetes-management-pranjul-mishra-nancy-jadeja-madhu-shukla',
    scholar: 'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&authuser=1&q=%09+Harnessing+Machine+Intelligence+and+Big+Data+for+Diabetes+Management&btnG=',
    abstract: 'Overview of machine learning methods for intelligent diagnosis support systems in diabetes screening, exploring AI integration with electronic health records and mobile data aggregation.',
    tags: ['Machine Learning', 'Healthcare', 'Diabetes', 'Big Data']
  }
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

