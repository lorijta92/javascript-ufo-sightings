// From data.js
var tableData = data;

// Select table body
var tbody = d3.select("tbody");

// APPEND TABLE
tableData.map(data => {
    
    // Make new row
    var row = tbody.append("tr");

    // Append each row with data
    row.append("td").text(data.datetime);
    row.append("td").text(data.city);
    row.append("td").text(data.state);
    row.append("td").text(data.country);
    row.append("td").text(data.shape);
    row.append("td").text(data.durationMinutes);
    row.append("td").text(data.comments);
});

// EVENT LISTENER: filter by date input
var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select user input
    var inputValue = d3.select("#datetime").property("value");

    console.log(inputValue);
    
    // Filter table based on user input
    test = tableData.filter(data => data.datetime === inputValue);
    console.log(test)

    // for each loop, remove original, write new
});