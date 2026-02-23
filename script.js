const availableJobs = [
  {
    id: 1,
    companyName: "CloudNest Technologies",
    position: "Frontend Developer (React)",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳70,000 - ৳110,000",
    description:
      "Develop scalable web interfaces using React and TypeScript. Collaborate with backend teams to integrate REST APIs and improve UI performance in an agile environment.",
    status: "not-applied",
  },
  {
    id: 2,
    companyName: "ByteWave Solutions",
    position: "Node.js Backend Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description:
      "Design and maintain backend microservices using Node.js and Express. Implement authentication, optimize databases, and integrate third-party services.",
    status: "not-applied",
  },
  {
    id: 3,
    companyName: "AppForge Studio",
    position: "React Native Developer",
    location: "Sylhet, Bangladesh",
    type: "Contract",
    salary: "৳50,000 - ৳80,000",
    description:
      "Build cross-platform mobile apps with React Native and Expo. Integrate APIs, manage state, and optimize performance while working with designers.",
    status: "not-applied",
  },
  {
    id: 4,
    companyName: "DataSprint Analytics",
    position: "Junior Data Analyst",
    location: "Remote",
    type: "Part-time",
    salary: "$20 - $30 / hour",
    description:
      "Analyze datasets, clean data, and build dashboards using Excel and BI tools. Assist in reporting and visualization for business insights.",
    status: "not-applied",
  },
  {
    id: 5,
    companyName: "SecureStack Labs",
    position: "DevOps Engineer",
    location: "Singapore (Remote-friendly)",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Manage CI/CD pipelines and AWS infrastructure. Automate deployments, monitor reliability, and improve system scalability.",
    status: "not-applied",
  },
  {
    id: 6,
    companyName: "PixelCraft Agency",
    position: "UI/UX Designer",
    location: "Chattogram, Bangladesh",
    type: "Full-time",
    salary: "৳40,000 - ৳65,000",
    description:
      "Create wireframes, prototypes, and design systems in Figma. Deliver user-focused designs and collaborate with developers for implementation.",
    status: "not-applied",
  },
  {
    id: 7,
    companyName: "NextGen Softworks",
    position: "QA Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$60,000 - $85,000",
    description:
      "Write and execute test cases for web and mobile applications. Perform automation testing and work with developers to ensure product quality.",
    status: "not-applied",
  },
  {
    id: 8,
    companyName: "BrightAI Labs",
    position: "AI/ML Intern",
    location: "Bangalore, India (Hybrid)",
    type: "Internship",
    salary: "$800 - $1200 / month",
    description:
      "Assist in building machine learning models and data pipelines. Work with Python, TensorFlow, and real-world datasets under senior mentorship.",
    status: "not-applied",
  },
];
let totalJobsCount = 0;
let interviewJobsCount = 0;
let rejectedJobsCount = 0;
let activeTab = "all";

// Update Dashboard Status
function updateDashboardStatus(jobs) {
  totalJobsCount = jobs.length;
  interviewJobsCount = 0;
  rejectedJobsCount = 0;

  for (const job of jobs) {
    if (job.status === "interview") {
      interviewJobsCount++;
    } else if (job.status === "rejected") {
      rejectedJobsCount++;
    }
  }

  const totalJobsElement = document.getElementById("total-jobs");
  const interviewJobsElement = document.getElementById("interview-jobs");
  const rejectedJobsElement = document.getElementById("rejected-jobs");

  totalJobsElement.innerText = totalJobsCount;
  interviewJobsElement.innerText = interviewJobsCount;
  rejectedJobsElement.innerText = rejectedJobsCount;
}
updateDashboardStatus(availableJobs);

// Update Available Job Status
function updateAvailableJobStatus() {
  const status = document.getElementById("available-job-status");

  let content = "";
  if (activeTab === "all") {
    content = `${totalJobsCount} Jobs`;
  } else if (activeTab === "interview") {
    content = `${interviewJobsCount} of ${totalJobsCount}`;
  } else if (activeTab === "rejected") {
    content = `${rejectedJobsCount} of ${totalJobsCount}`;
  }
  status.innerText = content;
}
updateAvailableJobStatus();

// Toggling between tabs
const toggleTabsContainerElement = document.getElementById("toggle-tabs");
function updateToggleTabClasses(event) {
  event.target.classList.replace("bg-base-100", "btn-primary");
  Array.from(event.target.parentNode.children).forEach((c) => {
    if (c != event.target) {
      c.classList.replace("btn-primary", "bg-base-100");
    }
  });
}
function toggleTabs(jobs) {
  toggleTabsContainerElement.addEventListener("click", (event) => {
    const selectedElement = event.target.dataset.tab;

    if (selectedElement == "all") {
      updateToggleTabClasses(event);
      activeTab = "all";
    } else if (selectedElement == "interview") {
      updateToggleTabClasses(event);
      activeTab = "interview";
    } else if (selectedElement == "rejected") {
      updateToggleTabClasses(event);
      activeTab = "rejected";
    }
    renderJobs(jobs, activeTab);
  });
}
toggleTabs(availableJobs);

// Render Available Jobs
const jobContainer = document.getElementById("jobs-container");
const noJobsElement = document.getElementById("no-jobs-available");
function createJobElement(job) {
  const el = document.createElement("div");
  el.innerHTML = `<div id=${job.id} class="grow p-6 rounded-md bg-base-100 shadow-sm">
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

              ${
                job.status === "not-applied"
                  ? `<button class="bg-cyan-50 btn btn-sm border-none uppercase mb-3">Not Applied</button>`
                  : ""
              }

                ${
                  job.status === "interview"
                    ? `<button class="btn btn-sm btn-success uppercase mb-3">Interview</button>`
                    : ""
                }
                ${
                  job.status === "rejected"
                    ? `<button class="btn btn-sm btn-error uppercase mb-3">Rejected</button>`
                    : ""
                }

              <p class="text-sm mb-3">
                ${job.description}
              </p>

              <div class="space-x-1 space-y-1">
                <button data-action="interview" class="btn btn-outline uppercase btn-success">
                  Interview
                </button>
                <button data-action="rejected" class="btn btn-outline uppercase btn-error">
                  Rejected
                </button>
              </div>
            </div>`;
  return el.firstElementChild;
}
function renderJobs(jobs, selected) {
  jobContainer.innerHTML = "";

  let filteredJobs = [];
  if (selected === "all") {
    filteredJobs = jobs;
  } else {
    filteredJobs = jobs.filter((job) => job.status === selected);
  }

  if (filteredJobs.length > 0) {
    filteredJobs.forEach((job) => {
      noJobsElement.classList.add("hidden");

      jobContainer.appendChild(createJobElement(job));
    });
  } else {
    noJobsElement.classList.remove("hidden");
  }
  updateAvailableJobStatus();
}
renderJobs(availableJobs, activeTab);

// Handle Clicking on Interview and Rejected Button
jobContainer.addEventListener("click", (event) => {
  const action = event.target.dataset.action;
  const id = event.target.parentNode.parentNode.id;

  const job = availableJobs.find((j) => j.id == id);

  if (action === "interview") {
    job.status = "interview";
  }

  if (action === "rejected") {
    job.status = "rejected";
  }
  updateDashboardStatus(availableJobs);
  renderJobs(availableJobs, activeTab);
});
