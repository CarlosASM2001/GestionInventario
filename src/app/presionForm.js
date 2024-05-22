import { getDatabase, ref, set, child, get} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js"
import { app } from "./firebase.js";

const inputPresionForm = document.querySelector('#pressure-form');
const idPresionForm = document.querySelector('#charts-form-pressure');

inputPresionForm.addEventListener('submit' , e => {

    e.preventDefault(); //no reinicia la pagina
    const id = inputPresionForm['id-pressure'].value;
    const actual = inputPresionForm['actual-pressure'].value;
    const minimo= inputPresionForm['min-pressure'].value;
    const date = inputPresionForm['date-pressure'].value;



    console.log(actual);
    console.log(minimo);
    console.log(date);
    writeUserData(id,actual,minimo,date);

});

function writeUserData(id,actual,minimo,date) {
    const db = getDatabase(app);
    set(ref(db, 'Pressure/' + id), {
      actualdb: actual,
      minimodb: minimo,
      datedb: date
    });
}

idPresionForm.addEventListener('submit', e =>{

    e.preventDefault();

    const userId = idPresionForm['id-visual-pressure'].value;

    google.charts.load('current', {'packages':['gauge']});
    google.charts.setOnLoadCallback(drawChart);



    function drawChart() {

        const dbRef = ref(getDatabase(app));
        get(child(dbRef, `Pressure/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          // Create the data table.
          var data = google.visualization.arrayToDataTable([
            ['Label', 'Data'],
            ['Presion', parseInt(snapshot.val().actualdb)],                    
          ]);
  
          var options = {
            width: 450, height: 135,
            redFrom: 0, redTo: parseInt(snapshot.val().minimodb),
            minorTicks: 10, max: 1000
          };
  
  
  
  
          // Instantiate and draw our chart, passing in some options.
          var chart = new google.visualization.Gauge(document.getElementById('chart-pressure'));
          chart.draw(data, options);
  
        } else {
          alert("No data available");
        }
        }).catch((error) => {
            console.error(error);
        });


    }





});