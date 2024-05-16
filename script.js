// Select the Submit button
var submitBtn = document.querySelector('#submitBtn');

// Select the Reset button
var resetBtn = document.querySelector('#resetBtn');

// Select the Random Color button
var randomColorBtn = document.querySelector('#randomColorBtn');

// Select the Color Picker input
var colorPickerInput = document.querySelector('#colorPickerInput');

// Initial value
var initialRowCountAndColumnCount = 16;

// Select the container div
var container = document.querySelector('.container');

// Get the container size
var containerWidth = container.clientWidth;
var containerHeight = container.clientHeight;

// Create a 16x16 grid on initial load
createGrid(initialRowCountAndColumnCount);

// Flag to toggle random color feature
var isRandomColorEnabled = false;

// Selected color
var selectedColor = '#fff'; // Initially white color

// Define function to execute when Submit button is clicked
submitBtn.addEventListener('click', function() {
    // Get the value entered by the user using prompt
    var userInput = prompt("Please enter a number between 1 and 100:");

    // Check the entered value
    var totalCount = parseInt(userInput);

    // If user didn't enter a value or the entered value is invalid
    if (!totalCount || totalCount < 1) {
        alert("Please enter a number greater than or equal to 1.");
        return; // Don't execute the code below
    } else if (totalCount > 100) { // If it's greater than 100, show a warning message
        alert("Please enter a number less than or equal to 100.");
        return; // Don't execute the code below
    }

    // Create the grid
    createGrid(totalCount);

    // Show the value entered by the user
    var savedValue = document.getElementById('savedValue');
    savedValue.textContent = "Entered Value: " + userInput;
});

// Define function to execute when Reset button is clicked
resetBtn.addEventListener('click', function() {
    createGrid(initialRowCountAndColumnCount);
    var savedValue = document.getElementById('savedValue');
    savedValue.textContent = "Entered Value: " + initialRowCountAndColumnCount;
});

// Define function to execute when Random Color button is clicked
randomColorBtn.addEventListener('click', function() {
    isRandomColorEnabled = !isRandomColorEnabled;
    randomColorBtn.textContent = isRandomColorEnabled ? "Random Color: On" : "Random Color: Off";

    // Change the background color of the button
    if (isRandomColorEnabled) {
        randomColorBtn.style.backgroundColor = getRandomColor();
    } else {
        randomColorBtn.style.backgroundColor = ''; // Use default color
    }
});

// Define function to execute when Color Picker input value changes
colorPickerInput.addEventListener('change', function() {
    selectedColor = this.value;
    isRandomColorEnabled = false; // Disable random color feature when a color is selected
    randomColorBtn.textContent = "Random Color: Off";
});

// Function to generate random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create the grid
function createGrid(count) {
    // Clear the container content
    container.innerHTML = '';

    // Calculate cell size for the grid
    var cellWidth = containerWidth / count;
    var cellHeight = containerHeight / count;

    // Loop for rows
    for (var i = 0; i < count; i++) {
        // Create a row
        var row = document.createElement('div');
        row.classList.add('row');

        // Nested loop for columns
        for (var j = 0; j < count; j++) {
            // Create a column
            var column = document.createElement('div');
            column.classList.add('column');
            column.style.width = cellWidth + 'px';
            column.style.height = cellHeight + 'px';

            // Add event listeners to change color on mouseover
            column.addEventListener('mouseover', function() {
                if (isRandomColorEnabled) {
                    this.style.backgroundColor = getRandomColor();
                } else {
                    this.style.backgroundColor = selectedColor;
                }
            });

            // Append column to the row
            row.appendChild(column);
        }

        // Append row to the container
        container.appendChild(row);
    }
}
