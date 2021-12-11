import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from './components/table';

const Container = styled.div`
	width: 1120px;
	height: 100vh;
	margin: 0 auto;
	background: #fff;
	padding: 30px;
`

const MainCta = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;
  margin-bottom: 10px;
	.main-cta-buttons{
    border: 1px solid #959595;
    padding: 5px;
    border-radius: 4px;
    font-size: 14px;
	}
`

const TableColumnList = styled.div`
	border: 1px solid #959595;
	padding: 20px;
	border-radius: 10px;
	.col-list-title{
    font-size: 14px;
	}
	.list-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 10px;
		margin-top: 10px;
		.pills {
			border: 1px solid #959595;
			padding: 5px;
			border-radius: 4px;
			font-size: 14px;
			font-family: 'Open Sans', sans-serif;
		}
	}
	.ctas{
		text-align: right;
		margin-top: 20px;
		button{
			border: none;
			font-size: 14px;
			border-radius: 2px;
			padding: 10px 15px;
		}
		.secondary{
			color: #136fed;
			border: 1px solid #959595;
			background: none;
			margin-right: 20px;
		}
		.primary{
			color: #fff;
			background: #136fed;
		}
	}
`

const colListData = [
	"Date",
	"App",
	"Clicks",
	"Ad Requests",
	"Ad Response",
	"Impression",
	"Revenue",
	"Fill Rate",
	"CTR"
]

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
			<p className="title">Analytics</p>

			<MainCta className="main-cta">
				<div className="main-cta-buttons">
					July 08 - July 14, 2021
				</div>

				<div className="main-cta-buttons">
					Settings
				</div>
			</MainCta>

			<TableColumnList className="table-column-list">
				<p className="col-list-title">Dimensions and Metrics</p>
				<div className="list-grid">
					{colListData.map((item, index)=>
						<div key={index} className="pills">
							{item}
						</div>
					)}
				</div>

				<div className="ctas">
					<button className="secondary">
						Close
					</button>
					<button className="primary">
						Apply Changes
					</button>
				</div>
			</TableColumnList>


			<Table />
		</Container>
	);
}
 
export default App;