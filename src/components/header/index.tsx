import { MdSearch, MdMic } from 'react-icons/md';

import { speechRecognition } from '../../utils/speechRecognition';
import { IoIosNotifications, IoMdArrowDropdown } from 'react-icons/io';
import { Avatar } from 'primereact/avatar';

interface HeaderProps {
	value?: string | number | readonly string[];
	onChange: (value: string) => void;
}

export default function Header({ onChange, value }: HeaderProps) {
	const { start } = speechRecognition(
		(val) => {
			onChange(val);
		},
		(err) => {
			console.log(err.message);
		}
	);

	return (
		<>
			<div className='col-span-1 xl:col-span-5'>
				<div className='flex items-center p-2 border border-gray-400 rounded-md '>
					<MdSearch size='24' className='cursor-pointer' />
					<div className='relative w-full text-gray-600 text-xl font-medium'>
						<input
							value={value}
							placeholder='Search Your Question here or Ask TiiA'
							type='text'
							className='w-full py-1 border-transparent focus:border-transparent focus:ring-0'
							onChange={(e) => onChange(e.target.value)}
							id='search'
						/>
						
					</div>
					<MdMic
						size='24'
						className='text-[--primary-600] cursor-pointer'
						onClick={start}
					/>
				</div>
				<div className='flex gap-3 items-center p-2 '>
					<p className='font-semibold text-[--cyan-500]'>Current Licence:</p>
					<p className='uppercase font-semibold text-gray-500 text-sm'>USD/CAD</p>
					<p className='uppercase font-semibold text-gray-500 text-sm'>AUD/USD</p>
				</div>
			</div>

			<div className='col-span-2 pt-2 xl:block hidden'>
				<div className='flex justify-end gap-2 md:gap-4'>
					<div className='relative cursor-pointer'>
						<IoIosNotifications size='32' className='text-gray-500' />
						<span className='absolute bg-[--primary-600] text-white rounded-full text-center top-0 right-0 h-4 w-4 min-h-4 leading-4 text-sm'>
							2
						</span>
					</div>
					<div className='relative cursor-pointer'>
						<Avatar
							image='https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png'
							shape='circle'
						/>
						{/* active icon */}
						<div className='bg-green-700 w-3 h-3 rounded-full  border-white border-2 absolute bottom-1 right-1'></div>
					</div>
					<div className='flex gap-1 items-center cursor-pointer'>
						<p className='font-bold text-gray-800'>Username</p>
						<IoMdArrowDropdown size='20' />
					</div>
				</div>
				<h1 className='pt-2 font-bold text-xl text-gray-800 leading-none text-right'>
					Welcome, Username
				</h1>
				<p className='text-gray-400 font-medium text-sm  text-right'>
					Good to see you again!
				</p>
			</div>
		</>
	);
}
