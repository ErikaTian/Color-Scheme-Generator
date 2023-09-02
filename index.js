const getColorButton = document.querySelector('button');
let colors = []

function displayColors(colors) {
  const colorBoxes = document.querySelectorAll('.color-box');
  const colorHexElements = document.querySelectorAll('.color-hex');

  for (let i = 0; i < colors.length; i++) {
    colorBoxes[i].style.backgroundColor = colors[i];
    colorHexElements[i].textContent = colors[i];
  }
}


function getColorScheme() {
  const selectedColor = document.querySelector('input[type="color"]').value;
  const colorHex = selectedColor.substring(1);
  const selectedMode = document.querySelector('#colors').value;
  const apiUrl = `https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${selectedMode}&count=6&format=json`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log("API Response Data:", data);
        colors = data.colors.map((color) => color.hex.value);
        console.log("Updated Colors:", colors);
        displayColors(colors);
    })
    .catch((error) => {
      console.error('Error fetching color scheme:', error);
		});
}

getColorButton.addEventListener('click', getColorScheme); // test