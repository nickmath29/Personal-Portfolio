document.addEventListener("DOMContentLoaded", () => {
    const projectSections = document.querySelectorAll(".section[data-progress]");
  
    projectSections.forEach((section) => {
      const progressValue = parseInt(section.getAttribute("data-progress"));
      const status = section.querySelector(".status");
  
      const progressBarContainer = document.createElement("div");
      progressBarContainer.classList.add("progress");
  
      const progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar");
      progressBar.style.width = `${progressValue}%`;
      progressBarContainer.appendChild(progressBar);
  
      section.insertBefore(progressBarContainer, status);
  
      if (progressValue === 100) {
        status.textContent = "Completed";
        status.style.color = "#4caf50";
      } else if (progressValue > 0) {
        status.textContent = "In Progress";
        status.style.color = "#ff9800";
      } else {
        status.textContent = "Not Started";
        status.style.color = "#f44336";
      }
    });
  });
  