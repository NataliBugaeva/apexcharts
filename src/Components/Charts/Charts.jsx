import React, {useState} from 'react';
import Chart from "react-apexcharts";

const MyChart = (props) => {

    let initialOptions = {
        options: {
            chart: {
                id: 'first_chart',
                foreColor: 'blue',
                //все настройки анимации вставляем именно в chart
                animations: {
                    enabled: true,
                    easing: 'linear',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                },
                toolbar: {
                    show: true,
                    tools: {
                        download: true,
                        selection: true,
                        zoom: true,
                        zoomin: true,
                        zoomout: true,
                        pan: true,
                        customIcons: []
                    },
                }

            },
            //это для оси по X

            xaxis: {
                categories: [2008, 2009, 2010, 2011],
                type: 'numeric',
            },

            //с позиционированием лэйбла нихоена не ясно и C offSet тоже!!!

            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top'
                    }
                },

            },

            dataLabels: {
                enabled: true,
                // offsetY: 0,
                style: {
                    colors: ['blue']
                },
                background: {
                    enabled: true,
                    foreColor: '#fff',
                    borderColor: '#123456',
                    borderWidth: 1
                },
                offsetX: 0
            },

            //цвет самой диаграммы
            fill: {
                colors: ['#567894']
            },



            //настраивавем заголовок для диаграммы
            title: {
                text: 'my first chart',
                align: 'center',
                margin: 20,
                offsetY: 20,
                style: {
                    fontSize: '25px'
                }

            },

            //Для ищменения вида диаграммы при изменении размера экрана (по брейкпоинтам, с моб на обычную, например)
            responsive: [
                {
                    breakpoint: 1000,
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                dataLabels: {
                                    position: 'bottom'
                                }
                            }
                        }
                    }
                }
            ],

            //это для аннотауий (минимальный пример, там куча туча всего)
            annotations: {
                yaxis: [
                    {
                        y: 40,
                        y2: 50,
                        borderColor: '#000',
                        fillColor: '#654789',
                        label: {
                            text: 'Y-axis range'
                        }
                    }
                ]
            }

        },

        series: [{
            name: 'my first series',
            data: [20, 45, 13, 57]
        }
        ]
    }

    let [options, setChart] = useState(initialOptions);

    let onButtonClick = () => {

        setChart({
            ...options,
            options: {...options.options,
                plotOptions: {
                    ...options.options.plotOptions,
                    bar: {...options.options.plotOptions.bar, horizontal: !options.options.plotOptions.bar.horizontal}
                }
            },
            series: options.series.map(el => el.data ? {...el, data: props.newData} : el)
        });
    }

    return (
        <div>
            <Chart
                options={options.options}
                series={options.series}
                type="bar"
                width="500"
            />
            <button onClick={onButtonClick}>Change Chart</button>
        </div>
    )
}

export default MyChart;
