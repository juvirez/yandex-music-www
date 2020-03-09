const mainImage = document.getElementById("main-image");
const matchDark = window.matchMedia("(prefers-color-scheme: dark)");

const setScreenshot = isDark => (mainImage.src = `assets/${isDark ? "dark" : "light"}-screenshot.png`);

setScreenshot(matchDark.matches);
matchDark.addListener(e => {
  setScreenshot(e.matches);
});
