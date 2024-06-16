document.addEventListener('mousemove', (e) => {
  const dot = document.getElementById('dot');
  const circle = document.getElementById('circle');

  // Update dot position
  dot.style.left = `${e.clientX}px`;
  dot.style.top = `${e.clientY}px`;

  // Update circle position relative to the mouse
  if (circle) {
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
  }
});

// Intersection Observer for fade-in-out effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const projectId = entry.target.getAttribute('data-project-id');
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      entry.target.classList.remove('fade-out');
    } else {
      entry.target.classList.add('fade-out');
      entry.target.classList.remove('fade-in');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.fade-in-out').forEach(project => {
  observer.observe(project);
});
