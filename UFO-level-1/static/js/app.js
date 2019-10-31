// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

console.log(data);

data.forEach((sighting) => {
  const row = tbody.append("tr");
  for (key in sighting){
    const cell = row.append("td");
    cell.text(sighting[key]);
  }
});

//select the filter button
const filterTable = d3.select("#filter-btn");

filterTable.on("click", function() {
  
  //Prevent page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var dateInput = d3.select("#datetime").property("value");
  var cityInput = d3.select("#city").property("value");
  var stateInput = d3.select("#state").property("value");
  var countryInput = d3.select("#country").property("value");
  var shapeInput = d3.select("#shape").property("value");
  
  
  var filteredData = tableData;
  if (dateInput) {
    filteredData = filteredData.filter(data => data.datetime === dateInput);
  }

  if (cityInput) {
    filteredData = filteredData.filter(data => data.city === cityInput);
  }

  if (stateInput) {
    filteredData = filteredData.filter(data => data.state === stateInput);
  }

  if (countryInput) {
    filteredData = filteredData.filter(data => data.country === countryInput);
  }

  if (shapeInput) {
    filteredData = filteredData.filter(data => data.shape === shapeInput);
  }

  if (filteredData != tableData) {
    // Delete existing data
    tbody.selectAll('tr').remove();
    tbody.selectAll('td').remove();

    filteredData.forEach((searchDate) => {
      const newrow = tbody.append("tr");
      for (key in searchDate){
        const newcell = newrow.append("td");
        newcell.text(searchDate[key]);
      }
    })
  }
  else {
    data.forEach((sighting) => {
      const row = tbody.append("tr");
      for (key in sighting){
        const cell = row.append("td");
        cell.text(sighting[key]);
      }
    });
  }
});