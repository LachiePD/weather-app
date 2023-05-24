import React, {useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField'
const Sidebar = () =>{
	const [townList, setTownList] = useState([])	
	const [timeoutId, setTimeoutId] = useState(null);
	const handleChange = (value) =>{
	if(value == ""){return;}

		if(timeoutId){clearTimeout(timeoutId)}
		console.log(value);
		const newTimeoutId = setTimeout(()=>{



		},2000);
		setTimeoutId(newTimeoutId);
	}
	return(
		<div id="sidebarContainer">
		<Autocomplete
		disablePortal
		options={[{label: "yo"},{label:"hey"}]}
		sx={{ width: 200 }}
		onInputChange={(event, value)=> handleChange(value)}
		renderInput={(params) => <TextField {...params} label="Enter town name..." />}
		/>
		</div>

	);


}

export default Sidebar;
