import { Card } from 'primereact/card';
import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function TopicTable() {
	const [data, setData] = useState(Array.from({ length: 10 }));
	return (
		<Card className='col-span-1 xl:col-span-2'>
            <h1 className='font-bold text-2xl mb-3'>Top 10 Focus Topics</h1>
			<div className='flex flex-col gap-2'>
				{data.map((_, idx) => (
					<div key={idx} className='flex justify-between max-w-96'>
						<p className='text-sm text-gray-600 font-medium'>
							{idx + 1}. Focus Topic {idx + 1}
						</p>
						<p className='bg-blue-900 text-white px-2 py-[2px] text-sm rounded-md'>
							Score 1
						</p>
					</div>
				))}
			</div>
			<p  
            className='text-cyan-600 flex items-center gap-2 cursor-pointer'
				onClick={() => {
					if (data.length === 10) {
						setData(Array.from({ length: 15 }));
					} else {
						setData(Array.from({ length: 10 }));
					}
				}}
			>
				{data.length === 10 ? 'See All' : 'See Less'}
                <MdKeyboardArrowRight/>
			</p>
		</Card>
	);
}
