export const experiences = [
  {
    id: 'invite', title: 'INVITE AI Institute', role: 'AI Researcher', dateStr: 'Jun 2026 - Present',
    logo: '/images/experience/invite.jpg',
    startM: 6, startY: 2026, endM: 8, endY: 2026, side: 'left', expandedHeight: 180,
    shortDesc: 'Architecting intelligent RAG systems and full-stack applications to empower educators with data-driven insights.',
    bullets: [
      'Developed the Keating Framework, a full-stack AI web application using FastAPI and Python to assist educators in identifying at-risk students by synthesizing academic and behavioral data.',
      'Architected a Retrieval-Augmented Generation (RAG) system utilizing a DuckDB backend and ChromaDB, optimizing query routing and reducing LLM dependency.',
      'Engineered a local machine learning inference pipeline deploying quantized LLMs (Ollama Gemma) and semantic embeddings, ensuring data privacy while eliminating API latency.'
    ]
  },
  {
    id: 'mathnasium', title: 'Mathnasium', role: 'Mathematics Instructor', dateStr: 'Jan 2024 - Aug 2025',
    logo: '/images/experience/mathnasium.jpg',
    startM: 1, startY: 2024, endM: 8, endY: 2025, side: 'right', expandedHeight: 150,
    shortDesc: 'Provided tailored mathematical instruction and competition coaching for K-12 students of all learning abilities.',
    bullets: [
      'Provided 1-on-1 to 1-on-4 tutoring to 300+ students (K–12), from arithmetic to SAT Math and pre-calculus.',
      'Coached 10+ Math Kangaroo International medalists for competitions.',
      'Created tailored lesson plans for students with dyscalculia, dyslexia, autism, and ADHD.'
    ]
  },
  {
    id: 'techknowhow_lead', title: 'TechKnowHow Franchises', role: 'Lead Instructor', dateStr: 'May 2024 - Aug 2024',
    logo: '/images/experience/techknowhow.jpg',
    startM: 5, startY: 2024, endM: 8, endY: 2024, side: 'right', overlapOffset: 1, expandedHeight: 90,
    shortDesc: 'Led robotics and coding classes of 20+ students, ensuring individualized instruction in Python and Roblox.',
    bullets: [
      'Mentored 250+ students in robotics and coding using Scratch, Roblox, and Minecraft.',
      'Managed classroom dynamics and taught fundamental computer science concepts.'
    ]
  },
  {
    id: 'thecoderschool', title: 'theCoderSchool', role: 'Code Coach', dateStr: 'Aug 2023 - Jan 2024',
    logo: '/images/experience/thecoderschool.jpg',
    startM: 8, startY: 2023, endM: 1, endY: 2024, side: 'right', expandedHeight: 90,
    shortDesc: 'Mentored students in foundational computer science logic through custom game development in Python and Scratch.',
    bullets: [
      'Coached 30+ students (ages 8–12) in Scratch, Python, and PixelPad.',
      'Guided students in building games and solving coding challenges.'
    ]
  },
  {
    id: 'techknowhow_asst', title: 'TechKnowHow Franchises', role: 'Assistant Lead Instructor', dateStr: 'May 2023 - Aug 2023',
    logo: '/images/experience/techknowhow.jpg',
    startM: 5, startY: 2023, endM: 8, endY: 2023, side: 'left', overlapOffset: 1, expandedHeight: 90,
    shortDesc: 'Guided young learners through engaging robotics and coding camps, fostering early technical interest.',
    bullets: [
      'Assisted in mentoring students (ages 5–12) in introductory robotics and block-based coding.',
      'Supported lead instructors in executing lesson plans and facilitating hands-on STEM activities.'
    ]
  },
  {
    id: 'kesselworks', title: 'KesselWorks, LLC', role: 'Software Developer & UI/UX Intern', dateStr: 'Jun 2022 - Aug 2024',
    logo: '/images/experience/kesselworks.jpg',
    startM: 6, startY: 2022, endM: 8, endY: 2024, side: 'left', expandedHeight: 195,
    shortDesc: 'Engineered full-stack organizational tools, optimized cloud infrastructure, and redesigned mission-critical user interfaces.',
    bullets: [
      'Engineered a cloud-based calendar system using React and JavaScript, enabling internal teams to track project timelines and coordinate contractor availability.',
      'Optimized MySQL database queries and refactored AWS-hosted REST APIs, reducing page load latency and improving system throughput.',
      'Deployed and managed containerized microservices via Docker and Kubernetes on AWS, establishing CI/CD workflows and cloud infrastructure best practices.'
    ]
  }
];

// Timeline Constraints
export const TIMELINE_END_YEAR = 2026;
export const TIMELINE_END_MONTH = 8;
export const TIMELINE_START_YEAR = 2022;
export const TIMELINE_START_MONTH = 1;
