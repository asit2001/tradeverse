import { ChartOptions, Plugin } from 'chart.js';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import { useEffect, useState } from 'react';
import 'chartjs-adapter-date-fns';
import '../../utils/dataflowDate';
import { getDateData, getRandomColors } from '../../utils/dataflowDate';
import classNames from 'classnames';
import { SplitButton } from 'primereact/splitbutton';

export default function DataflowChart() {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});
	const [plugins, setPlugins] = useState<Plugin[]>([]);
	const [steps, setSteps] = useState(5);

	useEffect(() => {
		const documentStyle = getComputedStyle(document.documentElement);
		const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
		const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
		const data = {
			datasets: [
				{
					label: 'First Dataset',
					data: getDateData(5, 6),
					backgroundColor: getRandomColors(11),
				},
			],
		};

		const options: ChartOptions = {
			maintainAspectRatio: false,
			aspectRatio: 0.6,
			responsive: true,
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				x: {
					ticks: {
						color: textColorSecondary,
						major: {
							enabled: true,
						},
						stepSize: steps,
					},
					type: 'time',
					time: {
						unit: 'minute',
						displayFormats: {
							minute: 'hh:mm a',
						},
					},
					grid: {
						color: surfaceBorder,
					},
				},
				y: {
					ticks: {
						color: textColorSecondary,

					},
					grid: {
						display: false,
					},
					beginAtZero: true,
				},
			},
		};
		const CurrentTimeTick: Plugin = {
			id: 'CurrentTimeTick',
			afterDatasetsDraw: (chart) => {
				const {
					ctx,
					chartArea: { bottom, top },
					scales: { x },
				} = chart;
				ctx.save();

				ctx.beginPath();
				ctx.lineWidth = 1;
				ctx.strokeStyle = '#00827f';
				ctx.moveTo(x.getPixelForValue(new Date().getTime()), top);
				ctx.lineTo(x.getPixelForValue(new Date().getTime()), bottom);
				ctx.stroke();
			},
		};
		setPlugins([CurrentTimeTick]);
		setChartData(data);
		setChartOptions(options);
	}, [steps]);

	return (
		<Card className='relative col-span-1 xl:col-span-5'>
			<Chart type='bubble' data={chartData} options={chartOptions} plugins={plugins} />
			<div className='flex gap-2 absolute top-1 right-2'>
				<div className='flex gap-2 border p-2 rounded-md'>
					<OptionsItem onClick={setSteps} steps={steps} value={5}>
						5M
					</OptionsItem>
					<OptionsItem onClick={setSteps} steps={steps} value={10}>
						10M
					</OptionsItem>
					<OptionsItem onClick={setSteps} steps={steps} value={30}>
						30M
					</OptionsItem>
					<OptionsItem onClick={setSteps} steps={steps} value={60}>
						1H
					</OptionsItem>
					<OptionsItem onClick={setSteps} steps={steps} value={120}>
						2H
					</OptionsItem>
					<OptionsItem onClick={setSteps} steps={steps} value={240}>
						4H
					</OptionsItem>
					<OptionsItem onClick={setSteps} steps={steps} value={360}>
						ALL
					</OptionsItem>
				</div>
                <SplitButton severity='info' label="Filter" icon="pi pi-sort-amount-down"   />
			</div>
		</Card>
	);
}

interface OptionsItemProps {
	value: number;
	children: React.ReactNode;
	onClick: (value: number) => void;
	steps: number;
}
function OptionsItem({ onClick, children, value, steps }: OptionsItemProps) {
	return (
		<p
			className={classNames({
				'text-gray-600': steps !== value,
				'text-[--primary-600]': steps === value,
				'text-sm font-bold cursor-pointer': true,
			})}
			onClick={() => {
				onClick(value);
			}}
		>
			{children}
		</p>
	);
}
