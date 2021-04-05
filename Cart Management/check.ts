let details = JSON.parse(sessionStorage.getItem('details'));

var table :HTMLTableElement = <HTMLTableElement>document.getElementById("myTable");

var qty:number = 0;

for(let i=0; i<details.length; i++)
    {
        
        var row = table.insertRow(i);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML= details[i].name;
        cell2.innerHTML= details[i].amount;
        cell3.innerHTML= details[i].quantity+"";

        qty += +details[i].amount;
    }

    var total = document.getElementById('total');
    total.innerHTML = "Total: "+qty;