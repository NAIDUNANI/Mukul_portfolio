document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutSection.classList.add("animate");
            observer.unobserve(aboutSection);
          }
        });
      },
      { threshold: 0.4 }
    );
  
    observer.observe(aboutSection);
  });
