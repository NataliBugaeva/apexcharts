import React, {useState} from 'react';
import Chart from 'react-apexcharts';

const DonatChart = () => {
    let v = 75;
    let initialValues = {
        options: {

            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 90,
                    dataLabels: {
                        minAngleToShowLabel: 0
                    },
                    donut: {
                        size: '70%',
                        labels: {
                            show: true,
                            name: {
                                // show: true,
                                // fontSize: '40px',
                                // fontFamily: 'cursive',
                                // color: 'pink',
                            },
                            value: {
                                // show: true,
                                // fontSize: '40px',
                                // fontWeight: 'bold',
                                // offsetX: -100,
                                // formatter: (w) => {
                                //     debugger
                                //     return w
                                // }
                            },
                            total: {
                                show: true,
                                shawAlways: true,
                                fontSize: '40px',
                                showAlways: true,
                                label: 75
                            }
                        }
                    },
                    value: {},
                    total: {}
                },
            },

            dataLabels: {
                enabled: true,
                distributed: true,
                style: {
                    colors: ['red', 'green', 'blue', 'yellow'],
                    fontSize: [20, 40]
                },

                formatter: (val, obj) => {
                    let seriesIndex = obj.seriesIndex;
                    let value = Math.floor(val);
                    //let indexVal = obj.w.globals.series.indexOf(value);
                   // let labelName = obj.w.globals.labels[indexVal];
                    let itogValue = value * (seriesIndex + 1);
                    //.map((el, ind) => ({'ind': ind, 'val': el[ind]}))



                    // return labelName + ': ' + value
                     return itogValue
                }
            },

            states: {
                active: {
                    //allowMultipleDataPointsSelection: true,
                    filter: {
                        type: 'darken',
                        value: .7
                    }
                }
            },

            stroke: {
                show: true,
                lineCap: 'round',
                colors: ['yellow'],
                width: 5,
                dashArray: 20
            },


             labels: []

        },

        yaxis: {
            show: true,
        },

        series: [25, 25, 25, 25]
    }

    let [values, setValues] = useState(initialValues);

    return (
        <div>
            <Chart type='donut'
                   width='100%'
                   options={values.options}
                   series={values.series}/>
        </div>
    )
}

export default DonatChart;
