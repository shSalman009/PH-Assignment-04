const availableJobs = [
  {
    companyName: "CloudNest Technologies",
    position: "Frontend Developer (React)",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳70,000 - ৳110,000",
    description:
      "Develop scalable web interfaces using React and TypeScript. Collaborate with backend teams to integrate REST APIs and improve UI performance in an agile environment.",
  },
  {
    companyName: "ByteWave Solutions",
    position: "Node.js Backend Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description:
      "Design and maintain backend microservices using Node.js and Express. Implement authentication, optimize databases, and integrate third-party services.",
  },
  {
    companyName: "AppForge Studio",
    position: "React Native Developer",
    location: "Sylhet, Bangladesh",
    type: "Contract",
    salary: "৳50,000 - ৳80,000",
    description:
      "Build cross-platform mobile apps with React Native and Expo. Integrate APIs, manage state, and optimize performance while working with designers.",
  },
  {
    companyName: "DataSprint Analytics",
    position: "Junior Data Analyst",
    location: "Remote",
    type: "Part-time",
    salary: "$20 - $30 / hour",
    description:
      "Analyze datasets, clean data, and build dashboards using Excel and BI tools. Assist in reporting and visualization for business insights.",
  },
  {
    companyName: "SecureStack Labs",
    position: "DevOps Engineer",
    location: "Singapore (Remote-friendly)",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Manage CI/CD pipelines and AWS infrastructure. Automate deployments, monitor reliability, and improve system scalability.",
  },
  {
    companyName: "PixelCraft Agency",
    position: "UI/UX Designer",
    location: "Chattogram, Bangladesh",
    type: "Full-time",
    salary: "৳40,000 - ৳65,000",
    description:
      "Create wireframes, prototypes, and design systems in Figma. Deliver user-focused designs and collaborate with developers for implementation.",
  },
  {
    companyName: "NextGen Softworks",
    position: "QA Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$60,000 - $85,000",
    description:
      "Write and execute test cases for web and mobile applications. Perform automation testing and work with developers to ensure product quality.",
  },
  {
    companyName: "BrightAI Labs",
    position: "AI/ML Intern",
    location: "Bangalore, India (Hybrid)",
    type: "Internship",
    salary: "$800 - $1200 / month",
    description:
      "Assist in building machine learning models and data pipelines. Work with Python, TensorFlow, and real-world datasets under senior mentorship.",
  },
];

// Render Available Jobs initially

const jobContainer = document.getElementById("jobs-container");

availableJobs.forEach((job) => {
  let jobCardUI = document.createElement("div");
  jobCardUI.innerHTML = `<div class="grow p-6 rounded-md bg-base-100 shadow-sm">
              <div class="flex justify-between items-center mb-4">
                <div>
                  <h4 class="text-lg font-semibold">${job.companyName}</h4>
                  <p class="opacity-70">${job.position}</p>
                </div>
                <button class="btn btn-circle">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
              <p class="text-sm opacity-70 mb-4">
                ${job.location} • ${job.type} • ${job.salary}
              </p>

              <button class="bg-cyan-50 btn border-none uppercase mb-3">
                Not Applied
              </button>

              <p class="text-sm mb-3">
                ${job.description}
              </p>

              <div class="space-x-1 space-y-1">
                <button class="btn btn-outline uppercase btn-success">
                  Interview
                </button>
                <button class="btn btn-outline uppercase btn-error">
                  Rejected
                </button>
              </div>
            </div>`;

  jobContainer.appendChild(jobCardUI.firstElementChild);
});
