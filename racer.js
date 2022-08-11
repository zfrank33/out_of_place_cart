<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <style>

body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}



.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}




        #drivers {
          font-family: Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        
        #drivers td, #drivers th {
          border: 1px solid #ddd;
          padding: 8px;
        }
        
        #drivers tr:nth-child(even){background-color: #f2f2f2;}
        
        #drivers tr:hover {background-color: #ddd;}
        
        #drivers th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #04AA6D;
          color: white;
        }



         #getDetailButton {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

  #getDetailButton:hover {
  background-color: #45a049;
}
        </style>
  </head>
  <body>
    <div class="container">
        <form id="seasonData">
            <label for="fname">Season</label>
            <input type="text" id="seasonId" name="season" placeholder="Enter season...">
        
            <label for="lname">Round</label>
            <input type="text" id="roundId" name="round" placeholder="Enter round...">
            <input type="button" id="submitDet" value="Submit">
        </form>
    </div>
    <h1> Fetched Detail</h1>

<table id="drivers">
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Date of Birth</th>
    <th>Position</th>
    <th>Wins</th>
    <th>Nationality</th>
    <th>Constructor</th>
  </tr>
 
  
</table>

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js">
    </script>
    <script>
// Using JavaScript(axios) and the DOM you are to create a table of data using the F1 racer API. 
// The table should have a total of 7 columns and dynamically populate the data when a "season" 
// and "round" are specified within your form.
// retrieve and show:
// first name
// last name
// date of birth
// position
// wins
// nationality
// Constructor
const req = async () => {

let season = document.getElementById("seasonId").value;
let round = document.getElementById("roundId").value;

//   const response = await axios.get('https://ergast.com/api/f1/2021/1/driverStandings.json')
// concatenation
const response = await axios.get('https://ergast.com/api/f1/'+ season +'/' +round+ '/driverStandings.json')
obj = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
// console.log(typeof obj)
console.log(obj.length);

for(let i = 0; i<obj.length; i++){
    temp_obj = obj[i]
    temp_obj_driver = temp_obj.Driver
    temp_obj_constructor = temp_obj.Constructors[0]
    console.log("My wins "+temp_obj.wins);
    Object.keys(temp_obj_driver).forEach(function(key) {
    console.log(key, temp_obj_driver[key]);
    let  table = document.getElementById("drivers");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);

    cell1.innerHTML = temp_obj_driver.givenName;
    cell2.innerHTML = temp_obj_driver.familyName;
    cell3.innerHTML = temp_obj_driver.dateOfBirth;
    cell4.innerHTML = temp_obj.position;
    cell5.innerHTML = temp_obj.wins;
    cell6.innerHTML = temp_obj_driver.nationality
    cell7.innerHTML = temp_obj_constructor.nationality
});
}


}

const getDetailButton = document.querySelector('#submitDet');
getDetailButton.addEventListener('click', function(event){
   console.log('Button Clicked');
   req() // 
});

    </script>
  </body>
</html>