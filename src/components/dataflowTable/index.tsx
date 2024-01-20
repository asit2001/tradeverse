import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { News, newsData } from '../../constants';
import { Column } from 'primereact/column';

export default function DataflowTable() {
	return (
		<Card className='col-span-1 xl:col-span-5'>
			<h1 className='font-bold text-2xl '>Refined News & Data Flow</h1>
			<DataTable value={newsData}>
				<Column
					header='Type'
					body={(data: News) => (
						<div className='flex items-center gap-2'>
							<div
								className='w-4 h-4 rounded-sm'
								style={{
									backgroundColor: data.color,
								}}
							></div>
							<p className='font-semibold text-gray-600'>{data.type}</p>
						</div>
					)}
				></Column>
                <Column field='news' header='News'></Column>
                <Column field='score' header='Score'></Column>
                <Column field='impact' header='Impact'></Column>
                <Column header='Probability' body={(data:News)=><span className='bg-blue-300 text-blue-700 text-center p-1 rounded-sm'>{data.probability}</span>}></Column>
			</DataTable>
		</Card>
	);
}
