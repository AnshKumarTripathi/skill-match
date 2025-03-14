// data-mockup.js

const jobDatabase = [
  {
    skill: "html",
    jobs: ["Frontend Developer", "Web Designer", "Email Developer"],
  },
  {
    skill: "css",
    jobs: ["Frontend Developer", "UI/UX Designer", "Web Designer"],
  },
  {
    skill: "javascript",
    jobs: [
      "Frontend Developer",
      "Full Stack Developer",
      "JavaScript Developer",
    ],
  },
  {
    skill: "react",
    jobs: ["React Developer", "Frontend Developer", "Full Stack Developer"],
  },
  {
    skill: "angular",
    jobs: ["Angular Developer", "Frontend Developer", "Full Stack Developer"],
  },
  {
    skill: "vue.js",
    jobs: ["Vue.js Developer", "Frontend Developer", "Full Stack Developer"],
  },
  {
    skill: "node.js",
    jobs: ["Backend Developer", "Full Stack Developer", "Node.js Developer"],
  },
  {
    skill: "express.js",
    jobs: ["Backend Developer", "Full Stack Developer", "Node.js Developer"],
  },
  {
    skill: "python",
    jobs: ["Backend Developer", "Data Scientist", "Machine Learning Engineer"],
  },
  {
    skill: "django",
    jobs: ["Backend Developer", "Full Stack Developer", "Django Developer"],
  },
  {
    skill: "flask",
    jobs: ["Backend Developer", "Full Stack Developer", "Flask Developer"],
  },
  {
    skill: "java",
    jobs: ["Backend Developer", "Android Developer", "Software Engineer"],
  },
  {
    skill: "spring boot",
    jobs: ["Backend Developer", "Full Stack Developer", "Java Developer"],
  },
  {
    skill: "kotlin",
    jobs: ["Android Developer", "Backend Developer", "Full Stack Developer"],
  },
  {
    skill: "swift",
    jobs: ["iOS Developer", "Mobile App Developer", "Full Stack Developer"],
  },
  {
    skill: "objective-c",
    jobs: ["iOS Developer", "Mobile App Developer", "Full Stack Developer"],
  },
  {
    skill: "php",
    jobs: ["Backend Developer", "Full Stack Developer", "PHP Developer"],
  },
  {
    skill: "laravel",
    jobs: ["Backend Developer", "Full Stack Developer", "Laravel Developer"],
  },
  {
    skill: "ruby",
    jobs: ["Backend Developer", "Full Stack Developer", "Ruby Developer"],
  },
  {
    skill: "ruby on rails",
    jobs: [
      "Backend Developer",
      "Full Stack Developer",
      "Ruby on Rails Developer",
    ],
  },
  {
    skill: "c#",
    jobs: ["Backend Developer", "Game Developer", "Software Engineer"],
  },
  {
    skill: "asp.net",
    jobs: ["Backend Developer", "Full Stack Developer", "ASP.NET Developer"],
  },
  {
    skill: "c++",
    jobs: ["Software Engineer", "Game Developer", "Embedded Systems Engineer"],
  },
  {
    skill: "go",
    jobs: ["Backend Developer", "DevOps Engineer", "Full Stack Developer"],
  },
  {
    skill: "sql",
    jobs: ["Database Administrator", "Backend Developer", "Data Analyst"],
  },
  {
    skill: "nosql",
    jobs: ["Database Administrator", "Backend Developer", "Data Engineer"],
  },
  {
    skill: "mongodb",
    jobs: [
      "Database Administrator",
      "Backend Developer",
      "Full Stack Developer",
    ],
  },
  {
    skill: "graphql",
    jobs: ["Backend Developer", "Full Stack Developer", "API Developer"],
  },
  {
    skill: "restful apis",
    jobs: ["Backend Developer", "Full Stack Developer", "API Developer"],
  },
  {
    skill: "docker",
    jobs: ["DevOps Engineer", "Cloud Engineer", "Backend Developer"],
  },
  {
    skill: "kubernetes",
    jobs: ["DevOps Engineer", "Cloud Engineer", "Backend Developer"],
  },
  {
    skill: "aws",
    jobs: ["Cloud Solutions Architect", "DevOps Engineer", "Cloud Engineer"],
  },
  {
    skill: "azure",
    jobs: ["Cloud Solutions Architect", "DevOps Engineer", "Cloud Engineer"],
  },
  {
    skill: "google cloud platform (gcp)",
    jobs: ["Cloud Solutions Architect", "DevOps Engineer", "Cloud Engineer"],
  },
  {
    skill: "linux",
    jobs: ["System Administrator", "DevOps Engineer", "Cloud Engineer"],
  },
  {
    skill: "unix",
    jobs: ["System Administrator", "DevOps Engineer", "Cloud Engineer"],
  },
  {
    skill: "cybersecurity",
    jobs: ["Cybersecurity Analyst", "Penetration Tester", "Security Engineer"],
  },
  {
    skill: "penetration testing",
    jobs: [
      "Penetration Tester",
      "Cybersecurity Analyst",
      "Security Consultant",
    ],
  },
  {
    skill: "blockchain",
    jobs: ["Blockchain Developer", "Full Stack Developer", "Backend Developer"],
  },
  {
    skill: "rust",
    jobs: ["Rust Developer", "Systems Programmer", "Backend Developer"],
  },
  {
    skill: "scala",
    jobs: ["Scala Developer", "Backend Developer", "Data Engineer"],
  },
  {
    skill: "perl",
    jobs: ["Perl Developer", "Backend Developer", "Systems Administrator"],
  },
  {
    skill: "shell scripting",
    jobs: ["Automation Engineer", "System Administrator", "DevOps Engineer"],
  },
  {
    skill: "tensorflow",
    jobs: ["Machine Learning Engineer", "Data Scientist", "AI Researcher"],
  },
  {
    skill: "pytorch",
    jobs: ["Machine Learning Engineer", "Data Scientist", "AI Researcher"],
  },
  { skill: "r", jobs: ["Data Analyst", "Data Scientist", "Statistician"] },
  { skill: "matlab", jobs: ["Research Scientist", "Data Analyst", "Engineer"] },
  { skill: "sas", jobs: ["Data Analyst", "Statistician", "Data Scientist"] },
  { skill: "spss", jobs: ["Data Analyst", "Statistician", "Data Scientist"] },
  {
    skill: "tableau",
    jobs: [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Data Visualization Specialist",
    ],
  },
  {
    skill: "power bi",
    jobs: [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Data Visualization Specialist",
    ],
  },
  {
    skill: "hadoop",
    jobs: ["Data Engineer", "Big Data Developer", "Data Analyst"],
  },
  {
    skill: "spark",
    jobs: ["Data Engineer", "Big Data Developer", "Data Analyst"],
  },
  {
    skill: "apache kafka",
    jobs: ["Data Engineer", "Backend Developer", "Big Data Developer"],
  },
  {
    skill: "pig",
    jobs: ["Data Engineer", "Big Data Developer", "Data Analyst"],
  },
  {
    skill: "hive",
    jobs: ["Data Engineer", "Big Data Developer", "Data Analyst"],
  },
  {
    skill: "bigquery",
    jobs: ["Data Engineer", "Big Data Developer", "Data Analyst"],
  },
  {
    skill: "data mining",
    jobs: ["Data Scientist", "Data Analyst", "Machine Learning Engineer"],
  },
  {
    skill: "nlp",
    jobs: ["AI Researcher", "Machine Learning Engineer", "Data Scientist"],
  },
  {
    skill: "computer vision",
    jobs: ["AI Researcher", "Machine Learning Engineer", "Data Scientist"],
  },
  {
    skill: "reinforcement learning",
    jobs: ["AI Researcher", "Machine Learning Engineer", "Data Scientist"],
  },
  {
    skill: "gan",
    jobs: ["AI Researcher", "Machine Learning Engineer", "Data Scientist"],
  },
  {
    skill: "robotics",
    jobs: ["Robotics Engineer", "Automation Engineer", "AI Researcher"],
  },
  {
    skill: "iot",
    jobs: ["IoT Developer", "Embedded Systems Engineer", "Cloud Engineer"],
  },
  {
    skill: "edge computing",
    jobs: ["IoT Developer", "Cloud Engineer", "Systems Engineer"],
  },
  {
    skill: "5g",
    jobs: ["Telecommunications Engineer", "Network Engineer", "IoT Developer"],
  },
  {
    skill: "devsecops",
    jobs: ["DevSecOps Engineer", "DevOps Engineer", "Security Engineer"],
  },
  {
    skill: "sre",
    jobs: ["Site Reliability Engineer", "DevOps Engineer", "Systems Engineer"],
  },
  { skill: "agile", jobs: ["Agile Coach", "Scrum Master", "Project Manager"] },
  { skill: "scrum", jobs: ["Scrum Master", "Agile Coach", "Project Manager"] },
  {
    skill: "kanban",
    jobs: ["Agile Coach", "Project Manager", "Product Manager"],
  },
  {
    skill: "ux research",
    jobs: ["UX Researcher", "UI/UX Designer", "Product Designer"],
  },
  {
    skill: "usability testing",
    jobs: ["UX Researcher", "UI/UX Designer", "Product Designer"],
  },
  {
    skill: "wireframing",
    jobs: ["UI/UX Designer", "Product Designer", "Web Designer"],
  },
  {
    skill: "prototyping",
    jobs: ["UI/UX Designer", "Product Designer", "Web Designer"],
  },
  {
    skill: "figma",
    jobs: ["UI/UX Designer", "Product Designer", "Web Designer"],
  },
  {
    skill: "adobe xd",
    jobs: ["UI/UX Designer", "Product Designer", "Web Designer"],
  },
  {
    skill: "sketch",
    jobs: ["UI/UX Designer", "Product Designer", "Web Designer"],
  },
  {
    skill: "invision",
    jobs: ["UI/UX Designer", "Product Designer", "Web Designer"],
  },
  {
    skill: "zeplin",
    jobs: ["UI/UX Designer", "Product Designer", "Web Designer"],
  },
  {
    skill: "microsoft office",
    jobs: ["Administrative Assistant", "Office Manager", "Executive Assistant"],
  },
  { skill: "excel", jobs: ["Data Analyst", "Financial Analyst", "Accountant"] },
  {
    skill: "word",
    jobs: ["Administrative Assistant", "Office Manager", "Executive Assistant"],
  },
  {
    skill: "powerpoint",
    jobs: ["Administrative Assistant", "Office Manager", "Executive Assistant"],
  },
  {
    skill: "outlook",
    jobs: ["Administrative Assistant", "Office Manager", "Executive Assistant"],
  },
  {
    skill: "access",
    jobs: ["Database Administrator", "Data Analyst", "Data Scientist"],
  },
  {
    skill: "visio",
    jobs: ["Business Analyst", "Project Manager", "System Analyst"],
  },
  {
    skill: "sharepoint",
    jobs: [
      "SharePoint Administrator",
      "SharePoint Developer",
      "Collaboration Specialist",
    ],
  },
  {
    skill: "salesforce",
    jobs: [
      "Salesforce Developer",
      "Salesforce Administrator",
      "CRM Specialist",
    ],
  },
  { skill: "sap", jobs: ["SAP Consultant", "SAP Developer", "ERP Specialist"] },
  {
    skill: "oracle",
    jobs: ["Oracle Developer", "Oracle DBA", "ERP Specialist"],
  },
  {
    skill: "netflix",
    jobs: ["Media Specialist", "Content Manager", "Streaming Engineer"],
  },
  {
    skill: "tensorflow",
    jobs: ["Machine Learning Engineer", "Data Scientist", "AI Researcher"],
  },
  {
    skill: "bigquery",
    jobs: ["Data Engineer", "Big Data Developer", "Data Analyst"],
  },
  {
    skill: "quickbooks",
    jobs: ["Accountant", "Bookkeeper", "Financial Analyst"],
  },
  {
    skill: "mysql",
    jobs: [
      "Database Administrator",
      "Backend Developer",
      "Full Stack Developer",
    ],
  },
  {
    skill: "mariadb",
    jobs: [
      "Database Administrator",
      "Backend Developer",
      "Full Stack Developer",
    ],
  },
  {
    skill: "postgresql",
    jobs: [
      "Database Administrator",
      "Backend Developer",
      "Full Stack Developer",
    ],
  },
  {
    skill: "sqlite",
    jobs: [
      "Database Administrator",
      "Backend Developer",
      "Full Stack Developer",
    ],
  },
  {
    skill: "nginx",
    jobs: ["Backend Developer", "DevOps Engineer", "System Administrator"],
  },
  {
    skill: "apache",
    jobs: ["Backend Developer", "DevOps Engineer", "System Administrator"],
  },
  {
    skill: "ansible",
    jobs: ["DevOps Engineer", "System Administrator", "Automation Engineer"],
  },
  {
    skill: "chef",
    jobs: ["DevOps Engineer", "System Administrator", "Automation Engineer"],
  },
  {
    skill: "puppet",
    jobs: ["DevOps Engineer", "System Administrator", "Automation Engineer"],
  },
  {
    skill: "terraform",
    jobs: ["DevOps Engineer", "Cloud Engineer", "Infrastructure Engineer"],
  },
  {
    skill: "packer",
    jobs: ["DevOps Engineer", "Cloud Engineer", "Infrastructure Engineer"],
  },
  {
    skill: "jenkins",
    jobs: ["DevOps Engineer", "CI/CD Engineer", "Automation Engineer"],
  },
  {
    skill: "git",
    jobs: ["Developer", "DevOps Engineer", "Version Control Specialist"],
  },
  {
    skill: "github",
    jobs: ["Developer", "DevOps Engineer", "Version Control Specialist"],
  },
  {
    skill: "gitlab",
    jobs: ["Developer", "DevOps Engineer", "Version Control Specialist"],
  },
  {
    skill: "bitbucket",
    jobs: ["Developer", "DevOps Engineer", "Version Control Specialist"],
  },
  { skill: "jira", jobs: ["Project Manager", "Scrum Master", "Agile Coach"] },
  {
    skill: "confluence",
    jobs: ["Project Manager", "Scrum Master", "Agile Coach"],
  },
  { skill: "slack", jobs: ["Project Manager", "Team Lead", "Remote Worker"] },
  { skill: "zoom", jobs: ["Project Manager", "Team Lead", "Remote Worker"] },
  { skill: "trello", jobs: ["Project Manager", "Scrum Master", "Agile Coach"] },
  {
    skill: "monday.com",
    jobs: ["Project Manager", "Scrum Master", "Agile Coach"],
  },
  {
    skill: "notion",
    jobs: ["Project Manager", "Content Creator", "Remote Worker"],
  },
  {
    skill: "microsoft office",
    jobs: ["Administrative Assistant", "Office Manager", "Executive Assistant"],
  },
  { skill: "excel", jobs: ["Data Analyst", "Financial Analyst", "Accountant"] },
  {
    skill: "word",
    jobs: ["Administrative Assistant", "Office Manager", "Executive Assistant"],
  },
  {
    skill: "powerpoint",
    jobs: ["Administrative Assistant", "Office Manager", "Executive Assistant"],
  },
  {
    skill: "outlook",
    jobs: ["Administrative Assistant", "Office Manager", "Executive Assistant"],
  },
  {
    skill: "access",
    jobs: ["Database Administrator", "Data Analyst", "Data Scientist"],
  },
  {
    skill: "visio",
    jobs: ["Business Analyst", "Project Manager", "System Analyst"],
  },
  {
    skill: "sharepoint",
    jobs: [
      "SharePoint Administrator",
      "SharePoint Developer",
      "Collaboration Specialist",
    ],
  },
  {
    skill: "salesforce",
    jobs: [
      "Salesforce Developer",
      "Salesforce Administrator",
      "CRM Specialist",
    ],
  },
  { skill: "sap", jobs: ["SAP Consultant", "SAP Developer", "ERP Specialist"] },
  {
    skill: "oracle",
    jobs: ["Oracle Developer", "Oracle DBA", "ERP Specialist"],
  },
  {
    skill: "quickbooks",
    jobs: ["Accountant", "Bookkeeper", "Financial Analyst"],
  },
  {
    skill: "figma",
    jobs: ["UI/UX Designer", "Product Designer", "Web Designer"],
  },
  {
    skill: "adobe xd",
    jobs: ["UI/UX Designer", "Product Designer", "Web Designer"],
  },
  {
    skill: "sketch",
    jobs: ["UI/UX Designer", "Product Designer", "Web Designer"],
  },
  {
    skill: "invision",
    jobs: ["UI/UX Designer", "Product Designer", "Web Designer"],
  },
  {
    skill: "zeplin",
    jobs: ["UI/UX Designer", "Product Designer", "Web Designer"],
  },
  {
    skill: "wireframing",
    jobs: ["UI/UX Designer", "Product Designer", "Web Designer"],
  },
  {
    skill: "prototyping",
    jobs: ["UI/UX Designer", "Product Designer", "Web Designer"],
  },
  {
    skill: "ux research",
    jobs: ["UX Researcher", "UI/UX Designer", "Product Designer"],
  },
  {
    skill: "usability testing",
    jobs: ["UX Researcher", "UI/UX Designer", "Product Designer"],
  },
  {
    skill: "microsoft project",
    jobs: ["Project Manager", "Project Coordinator", "Program Manager"],
  },
  {
    skill: "basecamp",
    jobs: ["Project Manager", "Scrum Master", "Agile Coach"],
  },
  { skill: "asana", jobs: ["Project Manager", "Scrum Master", "Agile Coach"] },
  {
    skill: "clickup",
    jobs: ["Project Manager", "Scrum Master", "Agile Coach"],
  },
  { skill: "wrike", jobs: ["Project Manager", "Scrum Master", "Agile Coach"] },
  {
    skill: "netbeans",
    jobs: ["Java Developer", "Software Engineer", "Full Stack Developer"],
  },
  {
    skill: "eclipse",
    jobs: ["Java Developer", "Software Engineer", "Full Stack Developer"],
  },
  {
    skill: "intellij idea",
    jobs: ["Java Developer", "Software Engineer", "Full Stack Developer"],
  },
  {
    skill: "pycharm",
    jobs: ["Python Developer", "Software Engineer", "Full Stack Developer"],
  },
  {
    skill: "visual studio",
    jobs: ["C# Developer", "Software Engineer", "Full Stack Developer"],
  },
];

window.jobDatabase = jobDatabase;
