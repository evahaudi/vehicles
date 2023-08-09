import { Component, Input, OnInit } from '@angular/core';

import { RevenueChartData } from '../../models';
import {colors} from '../../../../consts';

@Component({
  selector: 'app-revenue-chart',
  templateUrl: './revenue-chart.component.html',
  styleUrls: ['./revenue-chart.component.scss']
})
export class RevenueChartComponent implements OnInit {
  @Input() revenueCharData: RevenueChartData;
  public revenueChart: any;
  public colors: typeof colors = colors;

  public ngOnInit(): void {
    this.initChart();
  }

  public initChart(): void {
    this.revenueChart = {
      color: [colors.GREEN, colors.PINK, colors.YELLOW, colors.BLUE],
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: 'center',
        right: 'right',
        data: ['On-Going', 'Completed', 'Cancelled', 'Unspecified'],
        textStyle: {
          color: '#6E6E6E'
        }
      },
      series: [{
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['24%', '50%'],
        label: {
          show: false
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        hoverAnimation: false,
        avoidLabelOverlap: false,
        data: [
          {
            name: 'On-Going',
            value: this.revenueCharData.groupA
          },
          {
            name: 'Completed',
            value: this.revenueCharData.groupB
          },
          {
            name: 'Cancelled',
            value: this.revenueCharData.groupC
          },
          {
            name: 'Unspecified',
            value: this.revenueCharData.groupD
          },
        ]
      }]
    };
  }
}
