// script.js

document
  .getElementById("profile-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const profileLink = document.getElementById("profile-link").value;
    const manualSkills = document.getElementById("manual-skills").value;

    let skills = [];

    if (profileLink) {
      // Simulate scraping skills from the profile link
      skills = await scrapeSkills(profileLink);
    } else if (manualSkills) {
      // Parse manual skills input
      skills = manualSkills
        .split(",")
        .map((skill) => skill.trim().toLowerCase());
    }

    const jobs = matchJobs(skills);

    // Display skills and job recommendations
    displaySkills(skills);
    displayJobs(jobs);
  });

async function scrapeSkills(profileLink) {
  // Mock scraping skills from the profile link
  console.log(`Simulating scraping skills from: ${profileLink}`);
  return ["JavaScript", "Python", "React"].map((skill) => skill.toLowerCase());
}

function matchJobs(skills) {
  const matchedJobs = [];
  skills.forEach((skill) => {
    const job = window.jobDatabase.find(
      (item) => item.skill.toLowerCase() === skill
    );
    if (job) {
      matchedJobs.push(...job.jobs);
    }
  });

  return matchedJobs;
}

function displaySkills(skills) {
  const skillsList = document.getElementById("skills-list");
  const skillsResults = document.getElementById("skills-results");

  skillsResults.innerHTML = "";
  skills.forEach((skill) => {
    const div = document.createElement("div");
    div.textContent = skill.charAt(0).toUpperCase() + skill.slice(1);
    div.className =
      "bg-gray-700 text-white px-3 py-1 rounded-full border border-blue-500";
    skillsResults.appendChild(div);
  });

  skillsList.classList.remove("hidden");
}

function displayJobs(jobs) {
  const jobList = document.getElementById("job-list");
  const jobResults = document.getElementById("job-results");

  jobResults.innerHTML = "";
  jobs.forEach((job) => {
    const div = document.createElement("div");
    div.textContent = job;
    div.className =
      "bg-gray-700 text-white px-3 py-1 rounded-full border border-green-500";
    jobResults.appendChild(div);
  });

  jobList.classList.remove("hidden");
}

// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
});
