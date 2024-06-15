
import Chart from "chart.js";


import React, { useEffect, useRef } from 'react';


const LineChart = () => {
  
  const chartRef = useRef(null);

  useEffect(() => {
   
    const ctx = chartRef.current.getContext("2d");
   
    const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)');

    const data = {
      labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: "#1f8ef1",
        borderWidth: 4,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: "#1f8ef1",
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: "#1f8ef1",
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 6,
        data: [100,70, 90, 70, 85, 60, 75, 60, 90, 80,110, 100],
      }]
    };

    const gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: '#fff',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        fontSize:20,
        bodySpacing: 6,
        xPadding: 30,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 130,
            padding: 20,
            fontColor: "rgb(82, 95, 127)",
            fontSize: 19 
          }
        }],
        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 50,
            fontColor: "rgb(82, 95, 127)",
            fontSize: 19 
          }
        }]
      }
    };
   
    new Chart(ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfiguration
    });
  }, []);

  return <canvas ref={chartRef} />;
 
};

export default LineChart;
