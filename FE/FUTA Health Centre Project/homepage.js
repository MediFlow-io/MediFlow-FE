document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".topbar").forEach((topbar) => {
    if (topbar.querySelector(".futa-header-logo")) return;

    const logo = document.createElement("img");
    logo.className = "futa-header-logo";
    logo.src = "futa logo.jpg";
    logo.alt = "Federal University of Technology Akure logo";
    topbar.appendChild(logo);
  });
});
