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
    title: 'Structural Variant Detection Algorithm',
    summary: 'Python pipeline detecting genomic deletions, inversions, duplications, and translocations in BAM files.',
    links: [
      { label: 'GitHub', href: 'https://github.com/PM-0125/Computational-Genomics/tree/main/Structural_Variant_Detection_Algorithm' }
    ],
    location: 'Computational Genomics',
    readme: 'Python algorithm for detecting structural variants in genomic alignment files (BAM format). Implements parallel processing for efficient analysis of large-scale datasets. Detects deletions, inversions, duplications, and translocations by analyzing paired-read patterns. Outputs results in standard VCF format.',
    tags: ['Python', 'Genomics', 'Parallel Processing', 'Bioinformatics'],
    year: '2024',
    visualType: 'neural'
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
  {
    degree: 'Master of Science (M.Sc.)',
    field: 'Computer Science and Information Systems',
    specialization: 'Artificial Intelligence',
    institution: 'Warsaw University of Technology',
    location: 'Warsaw, Poland',
    startDate: 'February 2024',
    endDate: 'January 2026',
    status: 'in-progress',
    gpa: '4.63',
    gpaScale: '5.0',
    grade: 'Excellent',
    coursework: [
      'Agents and Agentic Applications & Development',
      'Neural Networks',
      'High Performance Computing',
      'Knowledge Graphs',
      'Knowledge Representation and Reasoning',
      'Image Processing',
      'Non-Linear Mathematics',
      'Calculus',
      'Data Compression'
    ],
    thesis: {
      title: 'INFERMed: Intelligent Navigator for Evidence-based Retrieval in Medicine',
      status: 'Defense Pending'
    },
    honors: ['NAWA Scholar'],
    activities: ['Volunteer, PPRAI Conference 2024']
  },
  {
    degree: 'Bachelor of Technology (B.Tech.)',
    field: 'Computer Engineering',
    specialization: 'Artificial Intelligence',
    institution: 'Marwadi University',
    location: 'Rajkot, India',
    startDate: 'June 2019',
    endDate: 'May 2023',
    status: 'completed',
    gpa: '8.43',
    gpaScale: '10.0',
    grade: 'First Class',
    coursework: [
      'Data Structures',
      'Algorithms',
      'Artificial Intelligence',
      'Machine Learning',
      'Database Systems',
      'Software Engineering'
    ],
    achievements: [
      'Champion, Vodafone-Idea National Level Hackathon',
      'Best Conference Presentation Award, International Hackathon for Biomedical Applications, Anna University Chennai',
      'Erasmus+ Scholarship Recipient, University of Pitești, Romania'
    ]
  }
];

export const certifications = [
  {
    title: 'Erasmus+ Exchange Program',
    institution: 'University of Pitești',
    location: 'Romania',
    year: '2021',
    type: 'exchange'
  },
  {
    title: 'Microsoft AI-900',
    institution: 'Microsoft',
    year: 'Certified',
    type: 'certification'
  },
  {
    title: 'ML/DS/Python & Design Innovation',
    institution: 'Coursera',
    description: '10+ Certificates',
    type: 'certification'
  },
  {
    title: 'Oracle SQL Programming',
    institution: 'Oracle',
    type: 'certification'
  }
];


export const skills = {
  coreAI: {
    title: 'Core AI & Research',
    description: 'Technologies for AI/ML research and implementation',
    skills: [
      { name: 'PyTorch', level: 'expert', proof: '#projects' },
      { name: 'RAG Architectures', level: 'expert', proof: '#publications' },
      { name: 'Knowledge Graphs (SPARQL/RDF)', level: 'expert', proof: '#research' },
      { name: 'Prompt Engineering', level: 'expert' },
      { name: 'TensorFlow', level: 'proficient' },
      { name: 'scikit-learn', level: 'proficient' },
      { name: 'Evaluation & Testing', level: 'proficient' },
      { name: 'Agent/Tool Use', level: 'learning' }
    ]
  },
  engineering: {
    title: 'Engineering & Reproducibility',
    description: 'Production-grade software engineering practices',
    skills: [
      { name: 'Python (Testing/Type Hints/pylint)', level: 'expert', proof: '#research' },
      { name: 'CI/CD (GitHub Actions)', level: 'expert', proof: '#experience' },
      { name: 'Git/Version Control', level: 'expert' },
      { name: 'pytest', level: 'expert' },
      { name: 'DVC', level: 'proficient' },
      { name: 'MLflow', level: 'proficient' },
      { name: 'Docker', level: 'proficient' },
      { name: 'Conda', level: 'proficient' },
      { name: 'Linux', level: 'proficient' },
      { name: 'Kubernetes', level: 'learning' }
    ]
  },
  data: {
    title: 'Data & Backend',
    description: 'Data infrastructure and backend systems',
    skills: [
      { name: 'SPARQL', level: 'expert', proof: '#research' },
      { name: 'Apache Jena', level: 'expert', proof: '#publications' },
      { name: 'PostgreSQL', level: 'proficient' },
      { name: 'SQL', level: 'proficient' },
      { name: 'QLever', level: 'proficient' },
      { name: 'NumPy/Pandas', level: 'proficient' },
      { name: 'Neo4j', level: 'learning' }
    ]
  },
  specialized: {
    title: 'Specialized Domains',
    description: 'Domain-specific research expertise',
    skills: [
      { name: 'Computational Genomics', level: 'expert', proof: '#projects' },
      { name: 'BioXAI', level: 'expert', proof: '#research' },
      { name: 'Clinical NLP', level: 'expert', proof: '#publications' },
      { name: 'RDF/Knowledge Graph Retrieval', level: 'expert', proof: '#research' },
      { name: 'High-Dimensional Data Analysis', level: 'proficient' },
      { name: 'Bioinformatics Pipelines', level: 'proficient' }
    ]
  }
};

export const additionalSkills = {
  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Hindi', level: 'Native' },
    { name: 'Polish', level: 'Basic' }
  ],
  soft: [
    'Technical Documentation',
    'Research Collaboration',
    'Public Speaking'
  ]
};


export const awards = [
  {
    title: 'Vodafone-Idea National Level Hackathon',
    award: 'Champion',
    category: 'hackathon',
    organization: 'Vodafone-Idea',
    date: 'October 2022',
    description: 'Won first place in national-level innovation marathon',
    icon: '🏆'
  },
  {
    title: 'Best Conference Presentation Award',
    award: 'Best Presentation',
    category: 'research',
    organization: 'International Hackathon for Biomedical Applications, Anna University Chennai',
    date: 'September 2022',
    description: 'Recognized for outstanding research presentation on AI in Bioinformatics & Precision Medicine',
    icon: '🎤'
  },
  {
    title: 'NAWA Scholarship',
    award: 'Scholar',
    category: 'academic',
    organization: 'Polish National Agency for Academic Exchange (NAWA)',
    date: '2024-2025',
    description: 'Prestigious scholarship for M.Sc. studies in Poland',
    icon: '🎓'
  },
  {
    title: 'Erasmus+ Scholarship',
    award: 'Exchange Program',
    category: 'academic',
    organization: 'European Union',
    date: '2021',
    description: 'Selected for semester exchange program at University of Pitești, Romania',
    icon: '🌍'
  },
  {
    title: 'PPRAI Conference 2024',
    award: 'Volunteer',
    category: 'service',
    organization: 'Warsaw University of Technology',
    date: '2024',
    description: 'Contributed to organizing prestigious AI conference',
    icon: '🤝'
  }
];


export const youtubeChannel = {
  name: 'AI Pathfinders',
  handle: '@AnjanaNandan0125',
  url: 'https://www.youtube.com/@AnjanaNandan0125',
  description: 'Exploring AI, Machine Learning, and Deep Learning - Education for All',
  featuredVideo: {
    id: 'eoLJAQLUXbM',
    title: 'Introduction | Artificial Intelligence | Education for All | New Course',
    description: 'Welcome to AI Pathfinders! Journey through Machine Learning, Deep Learning, and AI. Demystifying complex concepts with theory and hands-on coding.',
  },
  videos: [
    {
      id: 'DIkAd3aBpg4',
      title: 'AI vs ML vs Deep Learning - Understanding the Differences',
      description: 'Exploring the distinctions between AI, Machine Learning, and Deep Learning. Understanding how these technologies relate and build upon each other.',
    },
    {
      id: 'RYoy9R-GkUQ',
      title: 'Machine Learning Fundamentals - Complete Introduction',
      description: 'Comprehensive introduction to Machine Learning: definitions, types of algorithms, supervised/unsupervised learning, and key concepts.',
    }
  ]
};

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
  { id: 'blog', label: 'Public Engagement' },
  { id: 'contact', label: 'Contact' }
];

