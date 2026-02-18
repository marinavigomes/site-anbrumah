document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion-header");
  
    accordions.forEach((header) => {
      header.addEventListener("click", () => {
        const currentBody = header.nextElementSibling;
        const currentlyActiveHeader = document.querySelector(
          ".accordion-header.active"
        );
  
        // Close currently active accordion
        if (currentlyActiveHeader && currentlyActiveHeader !== header) {
          currentlyActiveHeader.classList.remove("active");
          currentlyActiveHeader.nextElementSibling.classList.remove("active");
        }
  
        // Toggle current accordion
        header.classList.toggle("active");
        currentBody.classList.toggle("active");
      });
    });
  });