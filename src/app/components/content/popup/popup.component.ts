import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GenerateUrlImageService } from 'src/shared/services/generate-url-image.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  defaultDescription: string;
  arrLabels = ['Comics', 'Series', 'Stories', 'Events'];
  constructor(
    public generateUrlImageService: GenerateUrlImageService,
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public hero: any
  ) {
    this.defaultDescription =
      'This hero\'s story was lost when Thanos attacked Xandar';
  }
  ngOnInit() {
    const statistics = this.getStatistics(this.hero);
    const ctx = document.getElementById('chart');
    this.configChart(statistics, ctx);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getStatistics(hero) {
    const h = Object.entries(hero);
    const arrSt = new Array<number>();
    h.map((x: any) => {
      if (this.arrLabels.toString().toLowerCase().includes(x[0])) {
        arrSt.push(x[1].available);
      }
    });

    return arrSt;
  }

  configChart(statistics, ctx) {
    // tslint:disable-next-line: no-unused-expression
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.arrLabels,
        datasets: [
          {
            label: 'Statistic',
            data: statistics,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
