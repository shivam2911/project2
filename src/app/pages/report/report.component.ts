
import { Component, OnInit, NgZone } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { EnrollmentService} from './report.service';
import { User } from './user';
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  //styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  private chart: am4charts.XYChart;
  userModel: Array<any>=[];
 // userModel= new User("delhi",2000)
  constructor(private zone: NgZone,private _enrollmentService:EnrollmentService) {}

  new(data) {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      chart.data = data;
     /*   {
          country: "India",
          visits: 2300
        },
        {
          country: "China",
          visits: 1000
        },
        {
          country: "Japan",
          visits: 500
        },
        {
          country: "Germany",
          visits: 2000
        },
        {
          country: "UK",
          visits: 22222
        },
        {
          country: "France",
          visits: 1114
        },
        {
          country: "India",
          visits: 984
        },
        {
          country: "Spain",
          visits: 711
        },
        {
          country: "Netherlands",
          visits: 665
        },
        {
          country: "Russia",
          visits: 580
        },
        {
          country: "South Korea",
          visits: 443
        },
        {
          country: "Canada",
          visits: 441
        }
      ];*/

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "username";
      categoryAxis.renderer.minGridDistance = 40;
      categoryAxis.fontSize = 11;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.max = 300;
      valueAxis.strictMinMax = true;
      valueAxis.renderer.minGridDistance = 30;
// axis break
      let axisBreak = valueAxis.axisBreaks.create();
      axisBreak.startValue = 2100;
      axisBreak.endValue = 22900;
//axisBreak.breakSize = 0.005;

// fixed axis break
      let d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
      axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break will take 5% of the total value axis height

// make break expand on hover
      let hoverState = axisBreak.states.create("hover");
      hoverState.properties.breakSize = 1;
      hoverState.properties.opacity = 0.1;
      hoverState.transitionDuration = 1500;

      axisBreak.defaultState.transitionDuration = 1000;
      /*
      // this is exactly the same, but with events
      axisBreak.events.on("over", function() {
        axisBreak.animate(
          [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
          1500,
          am4core.ease.sinOut
        );
      });
      axisBreak.events.on("out", function() {
        axisBreak.animate(
          [{ property: "breakSize", to: 0.005 }, { property: "opacity", to: 1 }],
          1000,
          am4core.ease.quadOut
        );
      });*/

      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryX = "username";
      series.dataFields.valueY = "score";
      series.columns.template.tooltipText = "{valueY.value}";
      series.columns.template.tooltipY = 0;
      series.columns.template.strokeOpacity = 0;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

    });
  };

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
  ngOnInit() { this. _enrollmentService.get()
    .subscribe(
      data =>{//this.userModel=data;
      //  console.log(this.userModel)
        this.new(data);
      }
    )
  }
}
