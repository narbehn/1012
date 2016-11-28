var ROWS = 13;
var COLS = 2;
var UNICODE = 97;

function go() {
	var out = document.getElementsByClassName("funky")[0];//KEEP THIS FUCKING [0]
	var table = document.createElement("table");
  //table.setAttribute("id", "myTable");
	table.border = 1;
  //alert(String.fromCharCode(97));
	for (var i=0; i < ROWS; i+=1) {
		var row = document.createElement("tr");
    //row.setAttribute("id", "myTR");
    //document.getElementById("myTable").appendChild(row);
		for (var j=0; j < COLS; j+=1) {
			var col = document.createElement("td");
			//var data = document.createTextNode("cell");
      //col.appendChild(data);
      col.innerHTML = String.fromCharCode(i + j + UNICODE);
			if ((i+j) % 3 == 0) {
				col.style.color = "red";
			} else if ((i+j) % 3 == 1) {
				col.style.color = "green";
			} else if ((i+j) % 3 == 2) {
				col.style.color = "blue";
			}
      row.appendChild(col);
		}
		//document.getElementById("myTable").appendChild(row);
    //document.getElementById("myTR").appendChild(col);
    table.appendChild(row);
    UNICODE++;
	}
  out.appendChild(table);
}
onload = go
