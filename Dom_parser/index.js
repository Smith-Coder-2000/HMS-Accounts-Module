
if(window.XMLHttpRequest)
{
    xhttp=new XMLHttpRequest();
}
else{
    xhttp=new ActiveXObject("Microsoft.XMLHTTP")
}
xhttp.open("GET","/hms_account.xml",false);
xhttp.send();
var xmlDoc=xhttp.responseXML;





function display() {
    var i;
    var table =
        `<thead class="thead-dark"><tr><th>bill_id</th><th>Patient_name</th><th>Patient_type</th>
            <th>Bill_amount</th><th>Status</th>
            <th>Action</th>
        </tr></thead>`;
        
    var x = xmlDoc.getElementsByTagName("patient");
    

    // Start to fetch the data by using TagName 
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("bill_id")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Name")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("type")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("bill_amount")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("status")[0]
            .childNodes[0].nodeValue + "</td><td>"+
            `<a onclick='javascript:remove(${i})'><i class='fas fa-trash'></i></a></td></tr>`;
    }
    // Print the xml data in table form
    document.getElementById("id").innerHTML = table;
}
function remove(node){
    y=xmlDoc.getElementsByTagName("patient")[node];
    xmlDoc.documentElement.removeChild(y);
    show(xmlDoc);
    console.log(y);
}

function show(xmlDoc){
    var i;
    var table =
    `<thead class="thead-dark"><tr><th>bill_id</th><th>Patient_name</th><th>Patient_type</th>
    <th>Bill_amount</th><th>Status</th>
    <th>Action</th>
    </tr></thead>`;
        
    var x = xmlDoc.getElementsByTagName("patient");

    // Start to fetch the data by using TagName 
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("bill_id")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Name")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("type")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("bill_amount")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("status")[0]
            .childNodes[0].nodeValue + "</td><td>"+
            `<a onclick='javascript:remove(${i})'><i class='fas fa-trash'></i></a></td></tr>`;
    }
    // Print the xml data in table form
    document.getElementById("id").innerHTML = table;
}

function add(){
    var bill=document.getElementById('bill_id').value;
    var name=document.getElementById('Name').value;
    var type=document.getElementById('type').value;
    var bill_amt=document.getElementById('bill').value;
    var status=document.getElementById('status').value;

    var patient = xmlDoc.createElement('patient');

    var bill_id = xmlDoc.createElement('bill_id');
    newText1=xmlDoc.createTextNode(bill);
    bill_id.appendChild(newText1);
    var pname = xmlDoc.createElement('Name');
    newText2=xmlDoc.createTextNode(name);
    pname.appendChild(newText2);
    var ptype = xmlDoc.createElement('type');
    newText3=xmlDoc.createTextNode(type);
    ptype.appendChild(newText3);
    var bill_amount = xmlDoc.createElement('bill_amount');
    newText4=xmlDoc.createTextNode(bill_amt);
    bill_amount.appendChild(newText4);
    var pstatus = xmlDoc.createElement('status');
    newText5=xmlDoc.createTextNode(status);
    pstatus.appendChild(newText5);

    patient.appendChild(bill_id);
    patient.appendChild(pname);
    patient.appendChild(ptype);
    patient.appendChild(bill_amount);
    patient.appendChild(pstatus);

    var y = xmlDoc.getElementsByTagName("hospital");
    y[0].appendChild(patient);

    show(xmlDoc);
    $('#new').modal('hide')
}