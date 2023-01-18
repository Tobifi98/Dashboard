import { OnInit, Component, ElementRef, ViewChild  } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: 'app-doughnut-chart-component',
  templateUrl: './doughnut-chart-component.component.html',
  styleUrls: ['./doughnut-chart-component.component.scss'],
})
export class DoughnutChartComponentComponent implements OnInit {

  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;

  public technologies              : any = {
    "technologies" : [
      {
         'technology' : 'Mobile: Ionic/Angular',
         'time'       : 50,
      },
      {
         'technology' : 'Front-end: Sass/CSS',
         'time'       : 15,
         'color'      : 'rgba(83, 131, 185, 0.5)',
         'hover'      : 'rgba(122, 160, 202, 0.5)'
      },
      {
         'technology' : 'Server: PHP/MySQL',
         'time'       : 10,
         'color'      : 'rgba(198, 147, 194, 0.5)',
         'hover'      : 'rgba(200, 166, 197, 0.5)'
      },
      {
         'technology' : 'Code Documentation',
         'time'       : 5,
         'color'      : 'rgba(54, 116, 152, 0.5)',
         'hover'      : 'rgba(103, 139, 160, 0.5)'
      },
      {
         'technology' : 'Knowledge: Blogging',
         'time'       : 10,
         'color'      : 'rgba(152, 54, 145, 0.5)',
         'hover'      : 'rgba(152, 89, 149, 0.5)',
      },
      {
         'technology' : 'SEO/Online Marketing',
         'time'       : 10,
         'color'      : 'rgba(192, 192, 192, 0.5)',
         'hover'      : 'rgba(220, 220, 220, 0.5)'
      }
   ]
};

  private doughnutChart: any;
  public chartLabels               : any    = [];
  public chartValues               : any    = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

  constructor() {

  }

  defineChartData()
   {
      let k : any;

      for(k in this.technologies.technologies)
      {
         var tech  =      this.technologies.technologies[k];

         this.chartLabels.push(tech.technology);
         this.chartValues.push(tech.time);
      }
   }

   ngOnInit() {

    this.defineChartData();

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: this.chartLabels,
             datasets: [{
                 label                 : 'Daily Technology usage',
                 data                  : this.chartValues,
                 backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)"
                ],
                 hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
             }]
      }
    });
  }
}
