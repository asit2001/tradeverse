import {Plugin } from "chart.js";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";


export default function AverageChart() {
    const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});
	const [plugins, setPlugins] = useState<Plugin[]>([]);

	useEffect(() => {
		const documentStyle = getComputedStyle(document.documentElement);
		const colorPrimary = documentStyle.getPropertyValue('--primary-600');
		const data = {
			datasets: [
				{
					label: 'average score',
					data: [70,30],
					backgroundColor:['cyan',colorPrimary],
				},
			],
		};

		const options = {
            cutout: 120,
			maintainAspectRatio: false,
			aspectRatio: 0.6,
			responsive: true,
            
			plugins: {
				legend: {
					display: false,
				},
			},
			
		};
		const doughnutLabel: Plugin = {
			id: 'doughnutLabel',
			afterDatasetsDraw: (chart) => {
				const {
					ctx,
                    data
				} = chart;
				ctx.save();

				const X = chart.getDatasetMeta(0).data[0].x;
				const Y = chart.getDatasetMeta(0).data[0].y;
                ctx.font = 'bold 32px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = 'gray'
				ctx.fillText(data.datasets[0].data[0]!.toString(),X,Y)
			},
		};
		setPlugins([doughnutLabel]);
		setChartData(data);
		setChartOptions(options);
	}, []);

    return (<Card className="col-span-1 xl:col-span-2 h-full flex flex-col justify-between items-center">
        <h1 className="text-2xl text-center font-bold">Average Score</h1>
        <div className="flex flex-col xl:flex-row items-center gap-6 ">
        <Chart className="xl:max-h-[470px] max-h-[300px]" type="doughnut" data={chartData} options={chartOptions} plugins={plugins} />
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold">75 %</h2>
                <p className="text-sm font-medium text-gray-600">About Graph</p>
                <p className="text-sm font-semibold text-cyan-500">See Details</p>
            </div>
        </div>
    </Card>)
}