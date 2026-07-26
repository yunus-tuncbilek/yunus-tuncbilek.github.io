export const siteConfig = {
  name: "Yunus Tuncbilek",
  title: "Software Engineer",
  description: "Portfolio website of Yunus Tuncbilek",
  accentColor: "#1d4ed8",
  accentColorDark: "#60a5fa",
  social: {
    email: "yunust418@gmail.com",
    linkedin: "https://www.linkedin.com/in/yunus-tuncbilek-5ab13a318/",
    github: "https://github.com/yunus-tuncbilek",
  },
  aboutMe:
    "Yale CS & Math grad who recognized that a long-standing problem in US Census employment data was really a linear program — the Gurobi solver I built cut per-year runtime from over two days to twenty minutes, replaced an approximate method with exact solutions, and produced a dataset now used across spatial economics. Also shipped an open-source C++/ROS computer-vision wrapper on pre-release social robotics hardware, and spent two years teaching competition-level algorithms after graduate work in analytic number theory. Currently building RAG-powered tutoring tools; looking for backend or optimization-heavy engineering.",
  skills: [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "SQL",
    "Node.js",
    "Google Cloud Platform",
    "MySQL",
    "ROS",
    "OpenCV",
    "Gurobi",
    "Data Structures & Algorithms",
    "Retrieval-Augmented Generation (RAG)",
  ],
  projects: [
    {
      name: "US Census Employment Data Recovery Solver",
      description:
        "Linear programming solver in Python/Gurobi recovering the ~60% of US Census county-industry employment cells suppressed for confidentiality, using the data's nested geographic and industry hierarchies as constraints. Cut per-year runtime from two days to twenty minutes; underpins a public 1975-2016 county panel used in spatial economics.",
      note: "In support of the research of Eckert, Fort, Schott & Yang (Yale, Dartmouth, Columbia)",
      link: "https://www.nber.org/papers/w26632",
      skills: ["Python", "Gurobi", "Linear Programming", "HPC"],
    },
    {
      name: "Math-Mate",
      description:
        "AI tutoring assistant leveraging Retrieval-Augmented Generation (RAG) to give students context-aware, step-by-step explanations for their homework, plus a 'Teacher Review' module for auditing interactions and surfacing common learning roadblocks.",
      link: "",
      skills: ["Python", "RAG", "AI System Architecture"],
    },
    {
      name: "Glasshopper",
      description:
        "Co-founded online knowledge market for university extracurriculars. Architected and deployed a full-stack web app on Google Cloud Platform end-to-end, with a jQuery-based interactive front-end and a Node.js/MySQL backend.",
      link: "",
      skills: ["Node.js", "MySQL", "jQuery", "Google Cloud Platform"],
    },
    {
      name: "CLM ROS Wrapper",
      description:
        "Open-source ROS wrapper in C++ integrating a legacy computer-vision face-tracker into pre-release social robotics hardware (Jibo), translating raw spatial coordinates into real-time face orientation and attention metrics.",
      link: "https://github.com/sociallyassistiverobotics/clm_ros_wrapper",
      skills: ["C++", "ROS", "OpenCV"],
    },
  ],
  experience: [
    {
      company: "Zhuge Academy Education",
      title: "Competitive Programming Coach",
      dateRange: "Sep 2024 - Jun 2026",
      bullets: [
        "Promoted to Head of Computer Science; established code review standards, led architecture discussions, and delivered 12 weekly technical knowledge-sharing sessions",
        "Architected technical modules covering advanced Data Structures and Algorithms for competitions like the Canadian Computing Competition (CCC) Senior Level",
        "Taught 12 concurrent technical courses as sole instructor, achieving a 100% retention rate in Fall 2025",
      ],
    },
    {
      company: "Department of Economics, Yale University",
      title: "Research Consultant (Software & Systems Engineering)",
      dateRange: "May 2016 - Jul 2019",
      bullets: [
        "Architected a high-performance linear programming solver in Python, migrating a legacy optimization framework to a 100% complete solution across all historical data",
        "Engineered a 1000x+ runtime optimization by rewriting the legacy solver to leverage Gurobi on Yale's HPC clusters",
        "Designed and published a generalized combinatorial optimization package used for large-scale geographic simulations in spatial economics",
        "Authored core algorithmic systems for peer-reviewed research generating 200+ citations to date (NBER Working Paper w26632)",
      ],
    },
    {
      company: "Department of Computer Science, Yale University",
      title: "Research Assistant (Software Engineering)",
      dateRange: "May 2016 - Aug 2016",
      bullets: [
        "Engineered a high-performance, open-source ROS wrapper in C++ integrating a legacy computer-vision face-tracker into pre-release social robotics hardware (Jibo)",
        "Optimized multi-modal data pipelines using linear algebra to translate raw spatial coordinates into real-time face orientation and attention metrics",
        "Architected low-latency software components for interactive games supporting cognitive development milestones for children with ADHD",
      ],
    },
  ],
  education: [
    {
      school: "University of Wisconsin-Madison",
      degree: "Graduate Studies in Mathematics (PhD Program), Analytic Number Theory",
      dateRange: "Aug 2019 - Jul 2023",
      achievements: [
        "Passed all doctoral qualifying examinations required for PhD Candidacy",
        "Completed 64 credits (22 courses) of advanced graduate coursework",
        "Master of Arts in Mathematics, GPA 3.625 (Dec 2022)",
        "Earned the Exceptional Teaching Award as Graduate Teaching Assistant",
      ],
    },
    {
      school: "Yale University",
      degree: "B.S. in Computer Science and Mathematics",
      dateRange: "2014 - May 2018",
      achievements: [
        "GPA 3.83",
        "Distinction in the Major",
        "Cum Laude (Top 30 percent of the graduating class in GPA)",
      ],
    },
  ],
};
