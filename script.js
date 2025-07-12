// Add parallax scroll effect on hero background
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.querySelector('.hero').style.backgroundPositionY = -(scrolled * 0.3) + 'px';
});
<script>
  const viewer = document.querySelector("model-viewer");
  viewer.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
  });
</script>
