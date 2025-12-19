
    Highcharts.chart('attendanceChart', {
    chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        animation: {
            duration: 800,
            easing: 'easeOutQuad'
        },
        events: {
            render: function () {
                const chart = this;
                const centerX = chart.plotLeft + chart.plotWidth / 2;
                const centerY = chart.plotTop + chart.plotHeight / 2;

                if (!chart.customLabel) {
                    chart.customLabel = chart.renderer
                        .text(
                            `<tspan style="font-size:24px;font-weight:500">72%</tspan>
                            <tspan x="${centerX}" dy="18"
                            style="font-size:14px;fill:#6B7280;font-weight:400">
                            Available</tspan>`,
                            centerX,
                            centerY
                        )
                        .attr({ align: 'center' })
                        .css({ textAlign: 'center' })
                        .add();
                } else {
                    chart.customLabel.attr({
                        x: centerX,
                        y: centerY
                    });
                }
            }
        }
    },

    title: { text: null },
    
    tooltip: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0,
        borderRadius: 6,
        shadow: true,
        useHTML: true,
         style: {
            color: '#F5F5F5'  // Off-white color for tooltip text
        },
        formatter: function () {
            return `
                <div style="font-size:13px;font-weight:500;">
                    <span style="color:${this.point.color}">●</span>
                    ${this.point.name} : <b>${this.y}</b>
                </div>
            `;
        }
    },

    plotOptions: {
        pie: {
            size: '100%',
            innerSize: '50%',
            borderWidth: 5.33,
            borderColor: '#FFFFFF',
            borderRadius: 5.33,
            startAngle: 0,
            allowPointSelect: true,
            cursor: 'pointer',

            states: {
                hover: {
                    enabled: true,
                    halo: {
                        size: 0
                    }
                }
            },

            point: {
                events: {
                    mouseOver: function () {
                        this.slice(true, true); // pop out
                    },
                    mouseOut: function () {
                        this.slice(false, true); // return
                    }
                }
            },

            dataLabels: { enabled: false }
        }
    },

    series: [{
        name: 'Attendance',
        animation: {
            duration: 1000
        },
        data: [
            {
                name: 'Present',
                y: 115,
                slicedOffset: 8,
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1   
                    },
                    stops: [
                        [0,   '#48b408'],   
                        [0.5, '#6cc339'],  
                        [1,   '#91d26a']    // Light green (bottom highlight)
                    ]
                }
            },
            { name: 'On Leave',y: 42,  color: '#7AD9FF', slicedOffset: 8 },
            { name: 'Late',    y: 38,  color: '#FF9A3E', slicedOffset: 8 },
            { name: 'Absent',  y: 20,  color: '#FF5A5A', slicedOffset: 8 },
            { name: 'Remote',  y: 18,  color: '#9C9EFF', slicedOffset: 8 }
           
            
            
        ]
    }],

    credits: { enabled: false }
});

// <!-- <script>
// Highcharts.chart('attendanceTrend', {
//     chart: {
//         type: 'line',
//         backgroundColor: '#ffffff',
//         spacing: [20, 20, 20, 20],
//         innerHeight:'220'
//     },

//     title: {
//         text: 'Attendance Trend',
//         align: 'left',
//         style: {
//             fontSize: '16px',
//             fontWeight: '600'
//         }
//     },
//     title: { text: null },
//     xAxis: {
//         categories: ['1 Oct', '3 Oct', '7 Oct', '10 Oct', '14 Oct', '20 Oct', '23 Oct', '27 Oct'],
//         tickLength: 0,
//         lineColor: '#E5E7EB',
//         labels: {
//             style: {
//                 color: '#6B7280'
//             }
//         }
//     },

//     yAxis: {
//         title: {
//             text: null
//         },
//         gridLineColor: '#EEF2FF',
//         labels: {
//             style: {
//                 color: '#6B7280'
//             }
//         }
//     },

//     legend: {
//         align: 'right',
//         verticalAlign: 'top',
//         layout: 'horizontal',
//         symbolRadius: 6,
//         itemStyle: {
//             fontWeight: '500'
//         }
//     },

//     tooltip: {
//         backgroundColor: '#111827',
//         borderRadius: 6,
//         borderWidth: 0,
//         style: {
//             color: '#ffffff'
//         }
//     },

//     plotOptions: {
//         series: {
//             lineWidth: 1,
//             marker: {
//                 radius: 5,
//                 lineWidth: 1
//             }
//         }
//     },

//     series: [
//         {
//             name: 'Present',
//             color: '#7AC943',
//             marker: {
//                 lineColor: '#7AC943',
//                 fillColor: '#ffffff'
//             },
//             data: [50, 150, 180, 100, 320, 410, 380, 240]
//         },
//         {
//             name: 'Absent',
//             color: '#FF4D4F',
//             marker: {
//                 lineColor: '#FF4D4F',
//                 fillColor: '#ffffff'
//             },
//             data: [210, 300, 240, 330, 190, 90, 210, 410]
//         }
//     ],

//     credits: {
//         enabled: false
//     }
// });
// </script> -->


Highcharts.chart('attendanceTrend', {
    chart: {
        type: 'line',
        backgroundColor: '#ffffff',
        height: 242,
        spacing: [16, 16, 16, 16]
    },

    title: { text: null },

    xAxis: {
        categories: ['1 Oct', '3 Oct', '7 Oct', '10 Oct', '14 Oct', '20 Oct', '23 Oct', '27 Oct'],
        tickLength: 0,
        lineColor: '#E5E7EB',
        labels: {
            style: {
                color: '#6B7280',
                fontSize: '12px'
            }
        }
    },

    yAxis: {
        min: 0,
        max: 490,
        tickInterval: 100,                   
        title: { text: null },
        gridLineColor: '#EEF2FF',
        labels: {
            style: {
                color: '#6B7280',
                fontSize: '12px'
            }
        }
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'horizontal',
        symbolRadius: 6,
        itemStyle: {
            fontWeight: '500',
            fontSize: '12px'
        }
    },

    tooltip: {
        backgroundColor: '#111827',
        borderRadius: 6,
        borderWidth: 0,
        style: {
            color: '#ffffff',
            fontSize: '12px'
        }
    },

    plotOptions: {
        series: {
            lineWidth: 1,
            marker: {
                enabled: true,
                symbol: 'circle',
                radius: 5,
                lineWidth: 1.5,
                fillColor: '#ffffff'      
            },
            states: {
                hover: {
                    lineWidth: 1
                }
            }
        }
    },

    series: [
        {
            name: 'Present',
            color: '#7AC943',
            marker: {
                lineColor: '#7AC943'
            },
            data: [50, 150, 180, 100, 420, 295, 380, 240]
        },
        {
            name: 'Absent',
            color: '#FF4D4F',
            marker: {
                lineColor: '#FF4D4F'
            },
            data: [210, 300, 240, 420, 190, 90, 210, 410]
        }
    ],

    credits: { enabled: false }
});

    Highcharts.chart('departmentAttendance', {
    chart: {
        type: 'column',
         height: 242,
        backgroundColor: '#ffffff',
        spacing: [30, 20, 20, 20]
    },

    /*  Title removed completely */
    title: {
        text: null
    },

    xAxis: {
        categories: [
            'Engg.', 'Sales', 'Account', 'Support',
            'Design', 'Marketing', 'IT', 'Operations',
            'HR', 'Finance'
        ],
        lineColor: '#E6E6EB',
        tickLength: 0,
        labels: {
            style: {
                fontSize: '11px',
                color: '#6B6B80'
            }
        }
    },

    yAxis: {
        min: 0,
        max: 500,
        tickInterval: 100,
        gridLineColor: '#EFEFF5',
        title: { text: null },
        labels: {
            style: {
                fontSize: '11px',
                color: '#6B6B80'
            }
        }
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        floating: true,
        y: -36,
        itemStyle: {
            fontSize: '11px',
            fontWeight: '500',
            color: '#4A4A4A'
        },
        symbolRadius: 6
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            borderWidth: 2,              
            borderColor: '#ffffff',       
            borderRadius: 6,
            pointPadding: 0.18,
            groupPadding: 0.12
        }
    },

    tooltip: {
        shared: true,
        backgroundColor: '#ffffff',
        borderColor: '#E6E6EB',
        borderRadius: 8,
        shadow: false,
        style: {
            fontSize: '12px'
        }
    },

    series: [
        {
            name: 'Present',
            color: '#6BCB2E',
            data: [280, 240, 260, 150, 220, 280, 240, 260, 150, 150]
        },
        {
            name: 'Absent',
            color: '#FF5B5B',
            data: [40, 45, 35, 80, 55, 40, 45, 35, 80, 70]
        },
        {
            name: 'Remote',
            color: '#9B9BFF',
            data: [35, 30, 40, 120, 50, 35, 30, 40, 190, 210]
        },
        {
            name: 'Late',
            color: '#FFA24C',
            data: [45, 35, 40, 20, 25, 45, 35, 40, 25, 30]
        },
        {
            name: 'On Leave',
            color: '#7AD9FF',
            data: [100, 150, 125, 130, 150, 100, 150, 125, 50, 40]
        }
    ],

    credits: {
        enabled: false
    }
});


    Highcharts.chart('headcount', {
        chart: {
            type: 'areaspline',
            height: 240,
            spacingBottom: 15,
            spacingTop: 10,
            spacingLeft: 10,
            spacingRight: 20
        },
        title: { text: null },
        credits: { enabled: false },
        xAxis: {
            categories: ['9 AM', '', '11 AM', '', '1 PM', '', '3 PM', '', '5 PM', '', '7 PM'],
            tickLength: 0,
            lineColor: '#e6e6e6',
            lineWidth: 1,
            gridLineWidth: 1, 
            gridLineColor: '#f0f0f0',
            // Ensures the line starts and ends exactly on the edge
            startOnTick: false,
            endOnTick: false,
            labels: {
                // This ensures ONLY your categories show up and nothing else
                step: 1, 
                style: { color: '#8e8e93', fontSize: '11px' }
            }
        },
        yAxis: {
            title: { text: null },
            gridLineColor: '#f0f0f0',
            lineColor: '#e6e6e6', // This adds the left-side vertical line
            lineWidth: 1,         // Ensures the y-axis line is visible
            labels: {
                style: { color: '#8e8e93', fontSize: '11px' }
            },
            max: 500,
            tickInterval: 100,
            // Removes the first grid line at the bottom for a cleaner look
            showFirstLabel: true 
        },
        tooltip: {
            backgroundColor: '#1c1c28',
            style: { color: '#ffffff', fontSize: '12px' },
            borderRadius: 4,
            borderWidth: 0,
            shadow: false,
            shared: false,
            positioner: function(labelWidth, labelHeight, point) {
                // Positions the tooltip exactly like the image (above the point)
                return { x: point.plotX + 15, y: point.plotY - 30 };
            },
            formatter: function () {
                return `<div style="padding: 4px 8px;">${this.y}</div>`;
            }
        },
        plotOptions: {
            areaspline: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, 'rgba(122, 147, 253, 0.45)'], // Top blue color
                        [1, 'rgba(122, 147, 253, 0.02)']  // Bottom fade
                    ]
                },
                lineColor: '#7a93fd',
                lineWidth: 2,
                marker: { 
                    enabled: false,
                    states: { hover: { enabled: true, radius: 4 } }
                },
                threshold: null
            }
        },
        series: [{
            showInLegend: false,
            name: 'Headcount',
            // Adjusted data points to better fill the gaps between your 2-hour labels
            data: [20, 160, 296, 380, 150, 360, 400, 280, 290, 80, 20]
        }]
    });


 Highcharts.chart('approvals', {
    chart: {
        type: 'pie',
        height: 258,
        backgroundColor: 'transparent',
        // Increased bottom spacing to ensure the second row of legends is visible
         
    },
    title: {
        text: null
    },
    credits: {
        enabled: false
    },
    colors: [
        '#FB923C', // Web Punch
        '#2563EB', // Attendance
        '#C084FC'  // Leave
    ],
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend: true,
            // Moves the pie up (30%) so the 2-row legend has plenty of room
            center: ['50%', '30%'], 
            size: '90%',
            borderWidth: 2,
            borderColor: '#ffffff',
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        enabled: true,
        layout: 'verticle',
        align: 'center',
        verticalAlign: 'bottom',
        floating:false,
        
        
        
        
        // --- SYMBOL STYLING ---
        symbolPadding: 6,
        symbolRadius: 6,      // Makes the legend markers perfectly round circles
        itemStyle: {
            fontWeight: '400',
            fontSize: '14px',
            color: '#000000'
        },
        labelFormatter: function() {
            let val = this.y < 10 ? '0' + this.y : this.y;
            return this.name + ' (' + val + ')';
        }
    },
    series: [{
        name: 'Approvals',
        colorByPoint: true,
        data: [
            { name: 'Web Punch', y: 9 },
            { name: 'Attendance', y: 21 },
            { name: 'Leave', y: 11 }
        ]
    }]
});






Highcharts.chart('punctuality', {
    chart: {
        type: 'line',
        backgroundColor: '#ffffff',
        height: 260,
        spacing: [16, 16, 16, 16]
    },

    title: { text: null },

    xAxis: {
        categories: ['1 Oct', '3 Oct', '7 Oct', '10 Oct', '14 Oct', '20 Oct', '23 Oct', '27 Oct'],
        tickLength: 0,
        lineColor: '#E5E7EB',
        labels: {
            style: {
                color: '#6B7280',
                fontSize: '12px'
            }
        }
    },

    yAxis: {
        min: 0,
        max: 490,
        tickInterval: 100,                   
        title: { text: null },
        gridLineColor: '#EEF2FF',
        labels: {
            style: {
                color: '#6B7280',
                fontSize: '12px'
            }
        }
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'horizontal',
        symbolRadius: 6,
        itemStyle: {
            fontWeight: '500',
            fontSize: '12px'
        }
    },

    tooltip: {
        backgroundColor: '#111827',
        borderRadius: 6,
        borderWidth: 0,
        style: {
            color: '#ffffff',
            fontSize: '12px'
        }
    },

    plotOptions: {
        series: {
            lineWidth: 1,
            marker: {
                enabled: true,
                symbol: 'circle',
                radius: 5,
                lineWidth: 1.5,
                fillColor: '#ffffff'      
            },
            states: {
                hover: {
                    lineWidth: 1
                }
            }
        }
    },

    series: [
        {
            name: 'OnTime',
            color: '#758BFD',
            marker: {
                lineColor: '#758BFD'
            },
            data: [202, 300, 210, 410, 200, 100, 220, 401]
        },
        {
            name: 'Early',
            color: '#C084FC',
            marker: {
                lineColor: '#C084FC'
            },
            data: [11, 100, 102, 80, 190, 202, 180, 200]
        },
         {
            name: 'Late',
            color: '#FB923C',
            marker: {
                lineColor: '#FB923C'
            },
            data: [10, 150, 190, 101, 305, 401, 310, 400]
        }
    ],

    credits: { enabled: false }
});



Highcharts.chart('overtimeChart', {
    chart: {
        type: 'column',
        height:236,
        with:'100%',
        backgroundColor: 'transparent',
        spacing: [8, 6, 0, 6]
    },

    title: { text: null },

    xAxis: {
    categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T'],
    lineWidth: 0,
     tickmarkPlacement: 'on',
    minPadding: 0,
    maxPadding: 0,
    tickLength: 0,
    labels: {
        step: 1,              // 🔥 FORCE ALL LABELS
        autoRotation: false,  // 🔥 PREVENT ROTATION
        style: {
            color: '#6B7280',
            fontSize: '11px',
            fontWeight: '500'
        }
    }
},

    yAxis: {
        visible: false,
        min: 0,
        max: 50
    },

    tooltip: {
        backgroundColor: '#111827',
        borderRadius: 6,
        borderWidth: 0,
        shadow: false,
        style: {
            color: '#fff',
            fontSize: '12px',
            fontWeight: '600'
        },
        formatter() {
            return this.point.value + ' H';
        }
    },

    legend: { enabled: false },

    plotOptions: {
        column: {
            grouping: false,
            pointWidth: 12
        }
    },

    series: [
        /* Background Track (FULL HEIGHT) */
        {
            data: Array(11).fill(50),
            color: '#3844550A',
            pointPlacement: 0,
            enableMouseTracking: false,
            borderRadius: 6
        },

        /* Filled Value */
        {
            data: [
                { y: 28, value: 28 },
                { y: 40, value: 40 },
                { y: 34, value: 34 },
                { y: 22, value: 22 },
                { y: 18, value: 18 },
                { y: 30, value: 30 },
                { y: 35, value: 35 },
                { y: 26, value: 26 },
                { y: 20, value: 20 },
                { y: 24, value: 24 },
                { y: 30, value: 30 }
            ],
            color: '#9B9DFF',
            pointPlacement: 0,
            borderRadiusTopLeft: 6,
            borderRadiusTopRight: 6,
            borderRadiusBottomLeft: 0,
            borderRadiusBottomRight: 0
        }
    ],

    credits: { enabled: false }
});



