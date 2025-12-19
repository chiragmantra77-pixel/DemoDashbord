document.addEventListener('DOMContentLoaded', function () {

    Highcharts.chart('employeeEfficiencyHeatmap', {

        chart: {
            type: 'heatmap',
            backgroundColor: 'transparent',
            spacing: [5, 5, 5, 5]
        },

        title: { text: null },
        accessibility: { enabled: false },

        xAxis: {
            visible: false
        },

        yAxis: {
            categories: ['WEEK 1', 'WEEK 2', 'WEEK 3', 'WEEK 4', 'WEEK 5'],
            reversed: true,
            title: null,
            gridLineWidth: 0
        },

       colorAxis: {
            min: 0,
            max: 1600,
            tickPositions: [0, 400, 800, 1200, 1600],
            stops: [
                [0, '#E6F4EA'],   // Least productive
                [0.4, '#8FCFAD'],
                [0.7, '#4AA16E'], // Your requested shadow/mid color
                [1, '#2E7D32']    // Most productive
            ],
            labels: {
                style: {
                    fontSize: '10px',
                    color: '#6B7280'
                }
            }
        },

        legend: {
            enabled: false
        },

        tooltip: {
            formatter: function () {
                return `<b>${this.series.yAxis.categories[this.point.y]}</b><br>
                        Value: <b>${this.point.value}</b> hrs`;
            }
        },

        series: [{
            borderWidth: 4,
            borderColor: '#FFFFFF',
            data: [
                [0,0,900],[1,0,700],[2,0,1100],[3,0,300],[4,0,1200],[5,0,400],[6,0,200],
                [0,1,1200],[1,1,200],[2,1,1300],[3,1,1400],[4,1,1250],[5,1,600],[6,1,1100],
                [0,2,300],[1,2,900],[2,2,1100],[3,2,700],[4,2,800],[5,2,300],[6,2,1300],
                [0,3,1000],[1,3,600],[2,3,900],[3,3,500],[4,3,700],[5,3,200],[6,3,600],
                [0,4,900],[1,4,400],[2,4,700],[3,4,300],[4,4,600],[5,4,100],[6,4,500]
            ],
            dataLabels: { enabled: false }
        }],

        credits: { enabled: false }
    });

});
