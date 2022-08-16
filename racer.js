
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




const getDetailButton = document.querySelector('#submitDet');
getDetailButton.addEventListener('click', function(event){
   console.log('Button Clicked');
   req() // 
});

    </script>
  </body>
</html>