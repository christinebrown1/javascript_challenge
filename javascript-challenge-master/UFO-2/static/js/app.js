// from data.js
var tableData = data;

//populate data information into the HTML table
var tbody = d3.select("tbody");

//UF sighting vlues for each column
var displayAll = tableData.forEach((alienData) => {
    console.log(alienData);
    //append on table row 'tr' fpr each UF sighting object
    var row = tbody.append("tr");
    //use object entries to show each UFO sighting 
    Object.entries(alienData).forEach(([key, value]) => {
        //append the cell of for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


//select the button 
var button = d3.select("#filter-btn");
button.on("click", function() {
    //clear out the html when the function is run????
    tbody.html("");

    //select the input date
    var inputElement = d3.select("#input");
    //get the value of th input date state
    var inputValue = inputElement.property("value");
    //filter the data that is equal to the date and time
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
      sighting.city === inputValue ||
      sighting.state === inputValue ||
      sighting.country === inputValue ||
      sighting.shape === inputValue);

    filteredData.forEach(function(selections) {
        //append one table row 'tr' for each ufo sighting for the specific date
        var row = tbody.append("tr");
        //use 'object.entries'
        Object.entries(selections).forEach(function([key,value]){
            //append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);

        });


    });
});