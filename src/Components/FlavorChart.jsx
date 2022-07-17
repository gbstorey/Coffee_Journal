import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react.js';
const CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
CanvasJS.addColorSet("Coffee Set", [
 "#1C0A00",
 "#361500",
 "#603601",
 "#B3541E"
])
class FlavorChart extends Component {	
 render() {
   const options = {
     colorSet: "Coffee Set",
     backgroundColor: "#E5890A",
     axisY: {
      minimum: 0,
      maximum:4,
      gridThickness: 0
     },
     data: [{				
               type: "column",
               dataPoints: [
                   { label: "Acidity",  y: 2  },
                   { label: "Body", y: 3  },
                   { label: "Sweetness", y: 2  },
                   { label: "Smoothness",  y: 3  },
               ]
      }]
  }
 
  return (
     <div>
       <CanvasJSChart className="remove" options = {options}
           onRef = {ref => this.chart = ref}
       />
     </div>
   );
 }
}
export default FlavorChart;    