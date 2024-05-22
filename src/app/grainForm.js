import { getDatabase, ref, set, child, get} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js"
import { app } from "./firebase.js";

const inputGrainForm = document.querySelector('#beans-form');
const idGrainForm = document.querySelector('#charts-form-beans');

inputGrainForm.addEventListener('submit' , e => {

    e.preventDefault(); //no reinicia la pagina
    const id = inputGrainForm['id-beans'].value;
    const stock = inputGrainForm['stock-beans'].value;
    const demand = inputGrainForm['demand-beans'].value;
    const date = inputGrainForm['date-beans'].value;



    console.log(stock);
    console.log(demand);
    console.log(date);

    writeUserData(id,stock,demand,date);

});

function writeUserData(id,stock,demand,date) {
    const db = getDatabase(app);
    set(ref(db, 'Grains/' + id), {
      stockdb: stock,
      demanddb: demand,
      datedb: date
    });
}


idCornForm.addEventListener('submit', e =>{

    e.preventDefault();
    const userId = idCornForm['id-visual-beans'].value;
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
  
  
    function drawChart() {
      
  
      const dbRef = ref(getDatabase(app));
      get(child(dbRef, `Grains/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          // Create the data table.
          var data = google.visualization.arrayToDataTable([
            ['Element', 'Data'],
            ['Stock', parseInt(snapshot.val().stockdb)],            
            ['Demanda', parseInt(snapshot.val().demanddb)],          
          ]);
  
          var options = {'title':'Grain Data '+ snapshot.val().datedb,
          'width':500,
          'height':400};
  
  
  
  
          // Instantiate and draw our chart, passing in some options.
          var chart = new google.visualization.ColumnChart(document.getElementById('chart-beans'));
          chart.draw(data, options);
  
        } else {
          alert("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
  
     
  
      
    }
  
  
  
  })



































































