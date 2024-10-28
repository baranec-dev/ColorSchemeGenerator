function getColorScheme() {
  const schemeBtn = document.getElementById("scheme-btn");
  schemeBtn.addEventListener("click", fetchColorScheme);
}

async function fetchColorScheme() {
  const seedColor = document.getElementById("seed-color").value.substring(1);
  const colorScheme = document.getElementById("color-scheme").value;
  const url = `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorScheme}&count=5`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    updateColorSchemeUI(data.colors);
  } catch (error) {
    console.log("Error fetching color scheme", error);
  }
}

function updateColorSchemeUI(colors) {
  const schemeColorsEl = document.getElementById("scheme-colors");
  schemeColorsEl.innerHTML = "";

  colors.forEach((color) => {
    const colorHtml = `
      <div>
        <img src="${color.image.bare}" class="color-image">
        <p class="color-text">${color.hex.value}</p>
      </div>
    `;
    schemeColorsEl.insertAdjacentHTML("beforeend", colorHtml);
  });
}

getColorScheme();
