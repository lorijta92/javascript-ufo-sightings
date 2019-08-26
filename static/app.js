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
var button = d3.select(".btn btn-default");

button.on("click", function() {

    // Select user input
    var inputValue = d3.select(".form-control").property("value");
    
    // Filter table based on user input
    tableData.filter(data => data.datetime === inputValue);
});


// UNIQUE VALUES FOR FILTERS

// Grab unique cities
var cities = [];

tableData.forEach(function(data) {
    if (data.city in cities) {}
    else {
        cities.push(data.city);
    }
});
console.log(cities);

// Grab unique states
var states = [];

tableData.forEach(function(data) {
    if (data.state in states) {}
    else {
        states.push(data.state);
    }
});
console.log(states);