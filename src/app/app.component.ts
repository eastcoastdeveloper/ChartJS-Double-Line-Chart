import { Component, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  // If ctx does not work, get canvas via ViewChild()
  
  ngAfterViewInit(){
    let data:any,
        options:any,
        chart:any,
        ctx:any = document.getElementById('areaChart') as HTMLElement;

        data = {
          labels: ["Apples", "Oranges", "Mixed Fruit"],
          datasets: [
            {
              label:"Apples",
              data: [0,50,45,100],
              backgroundColor: "rgba(40,125,200,.5)",
              borderColor: "rgb(40,100,200)",
              fill: true,
              lineTension: 0,
              radius: 5
            },
            {
              label:"Oranges",
              data: [30,90,111,20],
              backgroundColor: "rgba(75,10,125,.5)",
              borderColor: "rgb(75,10,125)",
              fill: true,
              lineTension: .2,
              radius: 5
            }
          ]
        }

        options = {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            position: "top",
            text:"Apples to Oranges",
            fontSize:12,
            fontColor: "#666"
          },
          legend: {
            display: true,
            position: "bottom",
            labels: {
              fontColor: "#999",
              fontSize: 14
            }
          }
        }

        chart  = new Chart(ctx, {
          type: "line",
          data: data,
          options: options
        })
  }

}
