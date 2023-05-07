$(document).ready(function() {
    var spreadsheetId = "1Wl2oF5Gz-R-TnUhEUN696cujTchiw6gBuKRBt-2D1C0";
    var apiKey = "AIzaSyA7eYEdYdJc2PYib3CdyZNs8UyLU2QqnEs";
    var sheetName = "Ensaios";

    $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/" + spreadsheetId + "/values/" + sheetName + "?key=" + apiKey,
        success: function(response) {
            var rows = response.values;
            var table = $("#sheetTable");

            for (var i = 0; i < rows.length; i++) {
                var row = $("<tr>");
                for (var j = 0; j < rows[i].length; j++) {
                    var cell = $("<td>");
                    cell.text(rows[i][j]);
                    row.append(cell);
                }
                table.append(row);
            }
        },
        error: function(response) {
            console.log(response);
        }
    });
});