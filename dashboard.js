var app = angular.module('insuranceApp', [])

app.controller('dashboardCtrl', ['$scope', function ($scope) {


    Highcharts.chart('container', {
        chart: {
            type: 'column',
            backgroundColor:'rgba(255, 255, 255, 0.0)',
        },
        title: {
            text: 'Revenue per Branches(in million $)'
        },
        xAxis: {
            categories: ['Tokyo', 'San Francisco', 'London', 'Edinburgh', 'Sydney']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total revnue(in million $)'
            }
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: 'Total: ${point.stackTotal} mil'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black'
                }
            }
        },
        series: [{
            name: 'Branches',
            data: [5, 3, 4, 7, 2],
            color:'white'
        }]
    });


    // ------------Gauge chart----------------------
    var gaugeOptions = {
        
            chart: {
                type: 'solidgauge',
                backgroundColor:'rgba(255, 255, 255, 0.0)',
            },
        
            title: {
                text:"Profit %"
            },
        
            pane: {
                center: ['50%', '85%'],
                size: '100%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },
        
            tooltip: {
                enabled: false
            },
        
            // the value axis
            yAxis: {
                stops: [
                    [0.1, 'BLACK'], // green
                    [0.5, 'BLACK'], // yellow
                    [0.9, 'BLACK'] // red
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                }
            },
        
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            }
        };
        
        // The speed gauge
        var chartSpeed = Highcharts.chart('containerGauge', Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 100,
                title: {
                    text: ''
                }
            },
        
            credits: {
                enabled: false
            },
        
            series: [{
                name: 'Speed',
                data: [55],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:15px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                           '<span style="font-size:12px;color:silver">%</span></div>'
                },
                tooltip: {
                    valueSuffix: '%'
                }
            }]
        
        }));

    
}])


