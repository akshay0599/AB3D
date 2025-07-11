// Add parallax scroll effect on hero background
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.querySelector('.hero').style.backgroundPositionY = -(scrolled * 0.3) + 'px';
});
