// document.getElementById("box1").style.backgroundColor = "#e6e2d3"
// document.getElementById("box1").style.color = "#dcc48e"
// document.getElementById("box2").style.backgroundColor = "#b3975f"
// document.getElementById("box2").style.color = "#8f713c"
// document.getElementById("box3").style.backgroundColor = "#6a4f20"
// document.getElementById("box3").style.color = "#f5f5f5"
// document.getElementById("box4").style.backgroundColor = "#e0e0e0"
// document.getElementById("box4").style.color = "#bdbdbd"
// document.getElementById("box5").style.backgroundColor = "#9e9e9e"
// document.getElementById("box5").style.color = "#757575"



// This function determines if a color is light or dark.
// It returns 'black' for light colors and 'white' for dark colors.
function getContrastColor(hexColor) {
    // Remove the '#' from the beginning of the hex code
    const hex = hexColor.replace('#', '');
    
    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Calculate the perceptive luminance (YIQ formula)
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    
    // Return black for light colors, white for dark colors
    return (yiq >= 128) ? '#000000' : '#FFFFFF';
}

// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to set the color of a single box
function setBoxColor(box) {
    const randomBgColor = getRandomColor();
    box.style.backgroundColor = randomBgColor;
    box.style.color = getContrastColor(randomBgColor); // Set text color based on contrast
}

// --- Main execution ---
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        // Set initial colors
        setBoxColor(box);

        // Add an event listener to change color on click
        box.addEventListener('click', () => {
            setBoxColor(box);
        });
    });
});