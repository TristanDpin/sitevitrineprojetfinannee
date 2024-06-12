let elem = document.getElementById("bar");
let rect = elem.getBoundingClientRect();
for (const key in rect) {
}


window.addEventListener("scroll", function () {
  const section = document.getElementById("bar");
  const greenDiv = document.getElementById("scrollingGreen");

  // Calculate the scroll position relative to the section's top
  const scrollPosition = window.scrollY - section.offsetTop;

  // Ensure the scroll position is at least 100px before starting to grow
  const minHeight = -250;

  // Determine the maximum height based on screen width
  const maxWidth = window.innerWidth < 800 ? 780 : 560;

  // Calculate the height based on the scroll position minus the minHeight
  const height = Math.min(Math.max(scrollPosition - minHeight, 0), maxWidth);

  // Set the height of the green div based on the calculated height
  greenDiv.style.height = `${height}px`;
});