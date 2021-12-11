import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 1120px;
	height: 100vh;
	margin: 0 auto;
	background: red;
`

const App = () => {
	
	const [data, setData] = useState([])

	useEffect(()=>{
		fetch(`http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03`)
			.then(response => response.json())
				.then(result => setData(result.data))
				.catch(err => console.log('API fetching error => ', err))
	}, [])

	console.log(data)
	return (
		<Container>
			<table>
				<tr>
					<th>Date</th>
					<th>App</th>
					<th>Request</th>
					<th>Response</th>
					<th>Impression</th>
					<th>Clicks</th>
					<th>Revenue</th>
					<th>Fill Rate</th>
					<th>CTR</th>

				</tr>
				{data && data.map((item, index)=> 
					<tr key={item.app_id}>
						<td>{item.date}</td>
						<td>{item.date}</td>
						<td>{item.date}</td>
					</tr>
				)}
			</table>
		</Container>
	);
}
 
export default App;