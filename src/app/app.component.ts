import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import * as chartData from './data.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // If ctx does not work, get canvas via ViewChild()

  dataArray: any = [];

  ngOnInit() {}

  ngAfterViewInit() {
    let data: any,
      options: any,
      chart: any,
      ctx: any = document.getElementById('areaChart') as HTMLElement;

    for (let key in chartData.items) {
      if (chartData.items.hasOwnProperty(key)) {
        this.dataArray.push(chartData.items[key]);
      }
    } // Stackblitz errors. Don't get these in VS Code

    data = {
      labels: ['Apples', 'Oranges', 'Mixed Fruit'],
      datasets: this.dataArray,
    };

    options = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: 'top',
        text: 'Apples to Oranges',
        fontSize: 12,
        fontColor: '#666',
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#999',
          fontSize: 14,
        },
      },
    };

    chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }
}
