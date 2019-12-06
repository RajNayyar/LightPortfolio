import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'framework-experience',
  templateUrl: './framework-experience.component.html',
  styleUrls: ['./framework-experience.component.css']
})
export class FrameworkExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var ctx = document.getElementById("myChart");
    var colours = [];
    var chart = new Chart('piechart', {
      type: 'doughnut',
      data: {
        labels: [".NetCore","iOSdevelopment(swift)", "Angular"],
        datasets: [
          { 
            data: [50, 30, 20],
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)'
          ],
            borderColor: "#ffffff"
          }
        ]
      },
      options: {
        legend: {
          display: true
        }
        ,
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
          },
            display: false,
            gridLines: {
              display:false
          }
          }],
          yAxes: [{
            display: false,
            gridLines: {
              display:false
          }
          },
        ],
        }
      }
    });

  }

}
