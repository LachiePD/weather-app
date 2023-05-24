import React, {useEffect} from 'react';
import Sidebar from '../components/sideContent/Sidebar.jsx'
const Root = () =>{
	useEffect(()=>
		{
			const check =async()=>{
			const response = await fetch('https://ipapi.co/json');
				const data = await response.json();
				console.log(data)
			}
			check();


		},[])
	return(
		<div id="root-root">
		Root, yo
		<Sidebar/>
		</div>
	);

}

export default Root;
