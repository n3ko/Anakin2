window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.intersectionRatio > 0) {
          document
            .querySelector(`nav li a[href="#${id}"]`)
            .parentElement.classList.add("actives");
        } else {
          document
            .querySelector(`nav li a[href="#${id}"]`)
            .parentElement.classList.remove("actives");
        }
      });
      const firstActive = document.querySelector(`nav li.actives a`);
      if (firstActive) {
        document.querySelectorAll(`nav li.active a`).forEach((link) => {
          link.parentElement.classList.remove("active");
        });
        firstActive.parentElement.classList.add("active");
      }
    },
    { threshold: null }
  );
  document.querySelectorAll("section[id]").forEach((section) => {
    const id = section.getAttribute("id");
    if (document.querySelector(`nav li a[href="#${id}"]`))
      observer.observe(section);
  });
});
