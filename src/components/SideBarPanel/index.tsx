import { Sidebar } from 'flowbite-react';
import { Image } from 'primereact/image';
import logo from '../../assets/logo.png';
import { TbWorldWww } from 'react-icons/tb';
import { GoGraph } from 'react-icons/go';
import { GrScorecard } from 'react-icons/gr';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoCallOutline } from 'react-icons/io5';
import { CiMenuBurger } from 'react-icons/ci';
import { Sidebar as PrimeSideBar } from 'primereact/sidebar';
import { useState } from 'react';

export default function SideBarPanel() {
	const [show,setShow] = useState(false);
	return (
		<div>
			<CiMenuBurger className='xl:hidden mt-4' onClick={()=>{setShow(true)}}/>
			<Sidebar aria-label='sidebar' className='hidden xl:block'>
				<SideBarItems/>
			</Sidebar>
			<PrimeSideBar onHide={()=>setShow(false)} visible={show}>
				<Sidebar>
					<SideBarItems/>
				</Sidebar>
			</PrimeSideBar>
		</div>
	);
}

function ActiveIcon() {
	return <TbWorldWww className='text-blue-700 hover:text-blue-700' />;
}

function SideBarItems(){
	return <>
	<Image src={logo} />
				<Sidebar.Items>
					<Sidebar.ItemGroup>
						<Sidebar.Item
							href='#'
							className='bg-blue-400 bg-opacity-30 hover:bg-blue-400 hover:bg-opacity-30'
							icon={ActiveIcon}
						>
							News Quant
						</Sidebar.Item>
						<Sidebar.Item href='#' icon={GoGraph}>
							Real Economic Indicator
						</Sidebar.Item>
						<Sidebar.Item href='#' icon={GrScorecard}>
							One Score
						</Sidebar.Item>
						<Sidebar.Item href='#' icon={IoIosNotificationsOutline}>
							Alert Center
						</Sidebar.Item>
						<Sidebar.Item href='#' icon={IoCallOutline}>
							Customer Support
						</Sidebar.Item>
					</Sidebar.ItemGroup>
				</Sidebar.Items>
	</>
}