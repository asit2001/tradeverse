import { useState } from 'react';
import Header from './components/header';
import AverageChart from './components/averageChart';
import DataflowChart from './components/dataflowChart';
import DataflowTable from './components/dataflowTable';
import TopicTable from './components/topicTable';
import SideBarPanel from './components/SideBarPanel';

export default function App() {
	const [search, setSearch] = useState('');
	return (
		<div className='p-2 flex gap-2'>
			<SideBarPanel/>
			
			<div className='grid xl:grid-cols-7 items-center gap-4 grid-cols-1'>
				<Header value={search} onChange={(val) => setSearch(val)} />
				<DataflowChart />
				<AverageChart />
				<DataflowTable />
				<TopicTable />
			</div>
		</div>
	);
}
