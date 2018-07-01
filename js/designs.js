// Select color input
// Select size input


// Create function for the zoom slider 
function updateZoom(e) {

	/* Get the value of the zoom slider and 
	change the zoom property of the pixel canvas to the 
	zoom value */
	document.getElementById("pixel-canvas").style.zoom = e.target.value;
}


// Write function to create grid 
function makeGrid(e) {
	// Prevent the page from reloading
	e.preventDefault();

	// Store grid data in table
	const table = document.getElementById("pixel-canvas");
	// Clear the html inside the table element
	table.innerHTML = "";

	// Get and store user inputs for rows and columns
	const gridRows = document.getElementById("input-height").value;
	const gridCols = document.getElementById("input-width").value;

	// Create the table; rows, and columns
	// Use a loop to count from 0 to number specified by the user
	for (let i = 0; i < gridRows; i++) {
		// Insert a row
		const theRow = table.insertRow(i);
		// Set the class of the row to predefined 'row'
		theRow.setAttribute("class", "row");
		// Loop to create cells
		for (let j = 0; j < gridCols; j++) {
			// Insert the cell
			theRow.insertCell(j);
		}
	}

}


// Write function to clear all colors on grid
function clearColor() {
	
	// Select the cells
	$("#pixel-canvas tr td").each(function () {
		// Change the background colors of all cells to white
		this.style.backgroundColor = "#fff"
		// Return border color to previous
		this.style.borderColor = "#c0c0c0";
	});
}



// Reset Button 
function deleteGrid(e) {
	// Prevent page from reloading for optimization
	e.preventDefault();

	// Set the grid to blank
	document.getElementById("pixel-canvas").innerHTML = "";

	// set the values of the user inputs to 1
	document.getElementById("input-height").value = 1;
	document.getElementById("input-width").value = 1;

}

// Set event Listeners for buttons 
document.getElementById("zoom").addEventListener("change", updateZoom);

document.getElementById("size-picker").addEventListener("submit", makeGrid);

document.getElementById("size-picker").addEventListener("reset", deleteGrid);

document.getElementById("clear-color-button").addEventListener("click", clearColor);

/* Color Picker
Listen for user click on any cell and call colorCell function.	
No need to explicitly define function */
// "mousedown" does the same as "click". The first works for me since I want "mousemove"
$(document).on("mousedown", "tr td", function () {

	// Set background color of current element to color-picker value 
	this.style.backgroundColor = document.getElementById("color-picker").value;
	this.style.borderColor = "#696969"; // Change border color to Dim grey

	// On mouse move change the color of the cell to color-picker value
	$("tr td").bind("mousemove", function () {
		this.style.backgroundColor = document.getElementById("color-picker").value;
		this.style.borderColor = "#696969";
		// On mouse release stop changing color
	}).mouseup(function () { 
		$("tr td").unbind("mousemove");
	});
});