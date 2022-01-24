import React, {useState} from 'react';
import Chart from 'react-apexcharts'

const RadialBar = () => {
    let initialOptions = {
        options: {
            plotOptions: {
                radialBar: {
                    inverseOrder: true,
                    // startAngle: -90,
                    // endAngle: 270
                    // startAngle: -20,
                    // endAngle: 340
                    startAngle: -180,
                    endAngle: 180,
                    //это для области внутри
                    hollow: {
                        background: '#FFFBCC',
                        margin: 5
                    },
                    //это для линии, по которой бегает наш график (на ней видим не закрашенную область)
                    track: {
                        show: true,
                        background: '#CFFBFC',
                        opacity: .5,
                        dropShadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            blur: 4,
                            opacity: 0.15
                        }
                    },
                    dataLabels: {
                        name: {
                            show: true,
                            fontSize: '16px',
                            color: 'blue',
                            offsetY: -10
                        },
                        value: {
                            show: true,
                            fontSize: '20px',
                            fontWeight: 400,
                            color: 'green',
                            offsetY: 16,
                            formatter: function (val) {
                                return val + '%'
                            }
                        },
                        total: {
                            show: false,
                            label: 'Total',
                            color: '#373d3f',
                            fontSize: '16px',
                            fontFamily: undefined,
                            fontWeight: 600,
                            // formatter: function (w) {
                            //     return w.globals.seriesTotals.reduce((a, b) => {
                            //         return a + b
                            //     }, 0) / w.globals.series.length + '%'
                            // }
                        }

                    }

                },



            },
            colors: ["#20E647"],

            stroke: {
                lineCap: 'butt'
            },

            labels: ['agree'],

            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "vertical",
                    gradientToColors: ["#87D4F9"],
                    stops: [0, 450]
                }
            },

        },

        // series: [50]
        // series: [20]
        series: [75]
    }

    let [values, setValues] = useState(initialOptions);

    return (
        <div>
            <Chart type='radialBar'
                   options={values.options}
                   series={values.series}
                   width='100%'/>
        </div>
    )
}

export default RadialBar;
