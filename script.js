/* =========================================
   Interactive Service Section — Script
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  initBlobAnimation();
  initServiceHoverEffects();
  initSmoothScroll();
});

/* -----------------------------------------------
   1. Enhanced Blob Animation (requestAnimationFrame)
   Background color blobs move continuously with
   smooth position and rotation changes.
   ----------------------------------------------- */
function initBlobAnimation() {
  const blobs = document.querySelectorAll(".blob");
  const blobData = [];

  blobs.forEach((blob, index) => {
    blobData.push({
      el: blob,
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      rotation: 0,
      rotationSpeed: (0.1 + Math.random() * 0.15) * (index % 2 === 0 ? 1 : -1),
      scale: 1,
      targetScale: 1,
      speed: 0.003 + Math.random() * 0.004, // Slow, smooth interpolation
      time: Math.random() * 1000,
      rangeX: 100 + Math.random() * 150,
      rangeY: 80 + Math.random() * 120,
    });
  });

  function animate() {
    blobData.forEach((data) => {
      data.time += 0.005;

      // Smooth sinusoidal movement
      data.targetX =
        Math.sin(data.time * 0.7) * data.rangeX +
        Math.cos(data.time * 0.3) * (data.rangeX * 0.5);
      data.targetY =
        Math.cos(data.time * 0.5) * data.rangeY +
        Math.sin(data.time * 0.4) * (data.rangeY * 0.4);
      data.targetScale = 0.9 + Math.sin(data.time * 0.3) * 0.15;

      // Lerp for smoothness
      data.x += (data.targetX - data.x) * data.speed;
      data.y += (data.targetY - data.y) * data.speed;
      data.scale += (data.targetScale - data.scale) * data.speed;
      data.rotation += data.rotationSpeed;

      data.el.style.transform = `translate(${data.x}px, ${data.y}px) rotate(${data.rotation}deg) scale(${data.scale})`;
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* -----------------------------------------------
   2. Service Hover Effects
   Adds interactive hover behaviors with smooth
   transitions using event delegation.
   ----------------------------------------------- */
function initServiceHoverEffects() {
  const serviceItems = document.querySelectorAll(".service-item");

  // Array of distinct gradient colors for each service item's hover bg
  const hoverColors = [
    "linear-gradient(135deg, #e84393, #d63384)",
    "linear-gradient(135deg, #a855f7, #7c3aed)",
    "linear-gradient(135deg, #ec4899, #be185d)",
    "linear-gradient(135deg, #c084fc, #9333ea)",
    "linear-gradient(135deg, #f472b6, #db2777)",
  ];

  serviceItems.forEach((item, index) => {
    const hoverBg = item.querySelector(".service-hover-bg");

    // Assign a unique gradient to each item
    if (hoverBg) {
      hoverBg.style.background = hoverColors[index % hoverColors.length];
    }

    // Mouse enter — add a slight parallax tilt to the hover image
    item.addEventListener("mouseenter", () => {
      item.style.zIndex = "10";
    });

    // Mouse leave — reset
    item.addEventListener("mouseleave", () => {
      item.style.zIndex = "1";
    });

    // Mouse move — subtle parallax on the hover image
    item.addEventListener("mousemove", (e) => {
      const hoverImage = item.querySelector(".service-hover-image");
      if (!hoverImage) return;

      const rect = item.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      // Subtle image shift based on cursor position
      const offsetX = (x - 0.5) * 20;
      const offsetY = (y - 0.5) * 20;

      hoverImage.style.transform = `translateY(-50%) scale(1) translate(${offsetX}px, ${offsetY}px)`;
    });

    // Reset hover image position on mouse leave
    item.addEventListener("mouseleave", () => {
      const hoverImage = item.querySelector(".service-hover-image");
      if (hoverImage) {
        hoverImage.style.transform = "translateY(-50%) scale(0)";
      }
    });
  });
}

/* -----------------------------------------------
   3. Smooth Scroll Behaviour
   Implements smooth scrolling with eased dynamics.
   ----------------------------------------------- */
function initSmoothScroll() {
  // Enable smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Scroll-triggered entrance animation for service items
  const serviceItems = document.querySelectorAll(".service-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.index * 100;
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  serviceItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition =
      "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
    observer.observe(item);
  });

  // Description text fade-in
  const description = document.querySelector(".description");
  if (description) {
    description.style.opacity = "0";
    description.style.transform = "translateY(20px)";
    description.style.transition =
      "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";

    const descObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            descObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    descObserver.observe(description);
  }

  // Section label fade-in
  const label = document.querySelector(".section-label");
  if (label) {
    label.style.opacity = "0";
    label.style.transition = "opacity 1s ease 0.2s";

    const labelObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            labelObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    labelObserver.observe(label);
  }
}
