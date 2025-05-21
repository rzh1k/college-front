
import { Course, Module, Staff } from "@/types";

export const staffMembers: Staff[] = [
  { id: 1, name: "Dr. Jane Smith", title: "Professor", email: "j.smith@academica.edu" },
  { id: 2, name: "Dr. John Davis", title: "Associate Professor", email: "j.davis@academica.edu" },
  { id: 3, name: "Prof. Sarah Wilson", title: "Senior Lecturer", email: "s.wilson@academica.edu" },
  { id: 4, name: "Dr. Michael Chen", title: "Lecturer", email: "m.chen@academica.edu" },
  { id: 5, name: "Dr. Rachel Patel", title: "Assistant Professor", email: "r.patel@academica.edu" },
  { id: 6, name: "Prof. Thomas Brown", title: "Professor", email: "t.brown@academica.edu" },
];

export const modules: Module[] = [
  {
    id: 1,
    code: "COS1903",
    title: "Scala Programming",
    description: "Introduction to functional programming using Scala language",
    contents: [
      "Scala basics and syntax",
      "Functional programming concepts",
      "Pattern matching",
      "Collections and higher-order functions",
      "Concurrency in Scala"
    ],
    staffMembers: [staffMembers[0], staffMembers[2]]
  },
  {
    id: 2,
    code: "COS1920",
    title: "Database Management",
    description: "Fundamentals of database design, implementation and management",
    contents: [
      "Database models and architecture",
      "Entity-Relationship modeling",
      "SQL fundamentals",
      "Database normalization",
      "Transaction processing"
    ],
    staffMembers: [staffMembers[1], staffMembers[4]]
  },
  {
    id: 3,
    code: "COS2905",
    title: "Object Oriented Programming (Java)",
    description: "Advanced concepts in object-oriented programming using Java",
    contents: [
      "OOP principles and design",
      "Inheritance and polymorphism",
      "Exception handling",
      "Collections framework",
      "GUI programming with JavaFX"
    ],
    staffMembers: [staffMembers[0], staffMembers[3]]
  },
  {
    id: 4,
    code: "COS2910",
    title: "Database Management",
    description: "Advanced database concepts and distributed systems",
    contents: [
      "Advanced SQL",
      "Database performance tuning",
      "Distributed databases",
      "NoSQL databases",
      "Big data technologies"
    ],
    staffMembers: [staffMembers[1], staffMembers[5]]
  },
  {
    id: 5,
    code: "SE3906",
    title: "Interaction Design",
    description: "Principles and practices of designing interactive systems",
    contents: [
      "User experience fundamentals",
      "User research methods",
      "Prototyping techniques",
      "Usability testing",
      "Design patterns for interaction"
    ],
    staffMembers: [staffMembers[2], staffMembers[4]]
  },
  {
    id: 6,
    code: "SE3410",
    title: "Web Application Penetration Testing",
    description: "Security assessment techniques for web applications",
    contents: [
      "Web security fundamentals",
      "OWASP Top 10 vulnerabilities",
      "Testing methodologies",
      "Exploitation techniques",
      "Security tools and frameworks"
    ],
    staffMembers: [staffMembers[3], staffMembers[5]]
  },
  {
    id: 7,
    code: "SE3406",
    title: "Fuzzy Logic & Knowledge Based Systems",
    description: "Theory and applications of fuzzy logic in AI and knowledge systems",
    contents: [
      "Fuzzy set theory",
      "Fuzzy logic operations",
      "Knowledge representation",
      "Inference systems",
      "Applications in decision support systems"
    ],
    staffMembers: [staffMembers[0], staffMembers[5]]
  },
  {
    id: 8,
    code: "SE3613",
    title: "Data Mining",
    description: "Techniques for discovering patterns in large datasets",
    contents: [
      "Data preprocessing",
      "Classification algorithms",
      "Clustering techniques",
      "Association rule mining",
      "Machine learning applications"
    ],
    staffMembers: [staffMembers[2], staffMembers[4]]
  },
  {
    id: 9,
    code: "SE3901",
    title: "C Programming",
    description: "Low-level programming with C language",
    contents: [
      "C syntax and memory management",
      "Pointers and memory allocation",
      "Data structures in C",
      "File I/O operations",
      "System programming concepts"
    ],
    staffMembers: [staffMembers[1], staffMembers[3]]
  },
  {
    id: 10,
    code: "SE3902",
    title: "Computer Law and Cyber Security Management",
    description: "Legal frameworks and management practices in cybersecurity",
    contents: [
      "Digital laws and regulations",
      "Privacy and data protection",
      "Security governance",
      "Risk assessment frameworks",
      "Incident response procedures"
    ],
    staffMembers: [staffMembers[0], staffMembers[5]]
  },
  {
    id: 11,
    code: "SE3903",
    title: "Linux Security",
    description: "Security hardening and practices for Linux systems",
    contents: [
      "Linux security architecture",
      "User and permission management",
      "System hardening techniques",
      "Network security in Linux",
      "Security monitoring and auditing"
    ],
    staffMembers: [staffMembers[3], staffMembers[4]]
  },
  {
    id: 12,
    code: "SE3904",
    title: "Cyber Threat Intelligence and Incident Response",
    description: "Methods for threat detection, analysis and incident management",
    contents: [
      "Threat intelligence sources",
      "Threat hunting techniques",
      "Incident response procedures",
      "Digital forensics methods",
      "Reporting and documentation"
    ],
    staffMembers: [staffMembers[1], staffMembers[5]]
  }
];

export const courses: Course[] = [
  {
    id: 1,
    title: "Computer Science",
    description: "Learn the core principles of computer science, programming, algorithms, and data structures. This course provides a strong foundation in computing principles and their practical applications.",
    modules: [modules[0], modules[1], modules[2], modules[3]]
  },
  {
    id: 2,
    title: "Software Engineering",
    description: "Focus on the practical aspects of designing, building, and maintaining complex software systems. This course emphasizes best practices in software development methodologies.",
    modules: [modules[4], modules[5], modules[6], modules[7]]
  },
  {
    id: 3,
    title: "Cyber Security",
    description: "Develop expertise in protecting systems, networks, and programs from digital attacks. This course covers both defensive and offensive security techniques.",
    modules: [modules[8], modules[9], modules[10], modules[11]]
  }
];
