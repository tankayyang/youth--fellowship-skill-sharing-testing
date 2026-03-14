const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

function changeDemoTheme() {
  const demoBox = document.getElementById("demoBox");
  if (!demoBox) return;

  const themes = [
    {
      background: "#eadfff",
      color: "#4b24b3",
      text: "Purple theme activated!"
    },
    {
      background: "#ffffff",
      color: "#6f3ff5",
      text: "Clean white theme activated!"
    },
    {
      background: "#d9c2ff",
      color: "#2b2142",
      text: "Soft youth fellowship theme activated!"
    }
  ];

  const theme = themes[Math.floor(Math.random() * themes.length)];
  demoBox.style.background = theme.background;
  demoBox.style.color = theme.color;
  demoBox.textContent = theme.text;
}

function toggleHtmlExplanation() {
  const box = document.getElementById("htmlExplanation");
  if (!box) return;
  box.classList.toggle("hidden");
}

function changeExampleTextStyle() {
  const text = document.getElementById("styleExample");
  if (!text) return;

  text.style.background = "#6f3ff5";
  text.style.color = "#ffffff";
  text.style.padding = "18px";
  text.style.borderRadius = "14px";
  text.style.fontWeight = "bold";
  text.textContent = "The style has changed using JavaScript!";
}

function submitForm(event) {
  event.preventDefault();
  const message = document.getElementById("formMessage");
  if (message) {
    message.classList.remove("hidden");
  }
  event.target.reset();
}
