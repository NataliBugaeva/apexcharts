import React, {useState} from 'react';
import Chart from "react-apexcharts";

const Bar = (props) => {

    let initialOptions = {
        options: {
            chart: {
                stacked: true,
              //  stackType: '100%',
                foreColor: '#373d3f',
                background: '#dd0'
            },

            plotOptions: {
                bar: {
                    //  horizontal: true,
                    //    barHeight: '200px',
                    borderRadius: 10,
                    columnWidth: 50,
                    dataLabels: {
                        orientation: 'ho'
                    }
                },
            },

            noData: {
                text: 'Empty chart',
                style: {
                    fontSize: 30,
                    color: 'red'
                }
            },

            grid: {
                xaxis: {
                    lines: {
                        show: false
                    }
                },
            },

            xaxis: {
                //tickPlacement черточка появилась
                tickPlacement: 'on',
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                //title - добавили наименование оси
                title: {
                    text: 'Month',
                    style: {
                        color: 'red'
                    }
                }
            },

            yaxis: {
                show: true,
                tickAmount: 10,
                //форматируем наименование по оси Y
                labels: {
                    formatter: (val) => `$${val}`,
                    style: {
                        colors: 'blue'
                    }
                },
                title: {
                    text: 'Money',
                    style: {
                        color: 'red'
                    }
                }
            },

            //tooltip здесь тултип двигается за курсором
            tooltip: {
                followCursor: true,
            },

            dataLabels: {
                formatter: (val) => `$${val}`,
                style: {
                    colors: ['blue', 'white'],
                    fontSize: 16
                }
            },

            legend: {
                show: true,
                position: 'right'
            },

            title: {
                text: 'TEST CHART',
                style: {
                    fontSize: 20
                }
            },
            subtitle: {
                text: 'i just try new library',
                style: {
                    fontSize: 10
                },
                offsetX: 20
            },

            //таким способом тоже могу менять цвета каждой серии
            fill: {
                colors: ['#94EEDF', '#94A9EE', '#4E63DA']
            }

            //таким способом тоже могу менять цвета каждой серии
            //colors: ['#94EEDF', '#94A9EE', '#4E63DA']
        },


        series: [
            {
                name: 'agree',
                data: [30,35,48,57,65],
                // color: '#94EEDF'
            },
            {
                name: 'neutral',
                data: [40,25,38,50,55],
                // color: '#94A9EE'
            },
            {
                name: 'desagree',
                data: [50,23,42,37,56],
                // color: '#4E63DA'
            }

        ]
    }

    let [options, setChart] = useState(initialOptions);

    return (
        <div>
            <Chart
                options={options.options}
                series={options.series}
                type="bar"
                width='100%'
            />
        </div>
    )
}

export default Bar;
