import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
@Component({
  selector: 'skills-component',
  templateUrl: './skills-component.component.html',
  styleUrls: ['./skills-component.component.css']
})
export class SkillsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var ctx = document.getElementById("myChart");
    var colours = [];
    var chart = new Chart('lineChart', {
      type: 'horizontalBar',
      data: {
        labels: ["C#", "C", "C++", "Python", "Java", "Swift", "Javascript", "HTML-5", "CSS"],
        datasets: [
          { 
            data: [90, 80, 95, 60, 70, 50, 40, 80, 75],
            backgroundColor: ["rgba(197, 32, 32, 0.74)","rgba(0, 0, 0, 0.74)","rgba(197, 32, 32, 0.74)","rgba(0, 0, 0, 0.74)","rgba(197, 32, 32, 0.74)","rgba(0, 0, 0, 0.74)","rgba(197, 32, 32, 0.74)","rgba(0, 0, 0, 0.74)","rgba(197, 32, 32, 0.74)"],
            borderColor: "#3cba9f"
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
          },
            display: true,
            gridLines: {
              display:false
          }
          }],
          yAxes: [{
            display: true,
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

