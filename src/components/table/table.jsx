import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
	width: 100%;
	margin-top: 20px;
	table{
		width: 100%;
		thead{
			tr{
				th{
					text-align: left;
					color: #707070;
					font-size: 14px;
					padding-bottom: 10px;
				}
			}
		}
		tbody{
			tr{
				td{
					font-family: 'Open Sans', sans-serif;
					font-size: 15px;
				}
			}
		}
	}
`

const data = [
	{
		date: "14 July 2021",
		app_name: "ShareChat", 
		clicks: 1003200,
		requests: 1004212,
		app_id: "123456",
		impressions: 1003934,
		responses: 1004162,
		revenue: 130.98563305583622,
	},
	{
		date: "14 July 2021",
		app_name: "Callbreak Menu", 
		clicks: 1003200,
		requests: 1004212,
		app_id: "123456",
		impressions: 1003934,
		responses: 1004162,
		revenue: 130.98563305583622,
	},
	{
		date: "14 July 2021",
		app_name: "ShareChat", 
		clicks: 1003200,
		requests: 1004212,
		app_id: "123456",
		impressions: 1003934,
		responses: 1004162,
		revenue: 130.98563305583622,
	},
	{
		date: "14 July 2021",
		app_name: "Callbreak Menu", 
		clicks: 1003200,
		requests: 1004212,
		app_id: "123456",
		impressions: 1003934,
		responses: 1004162,
		revenue: 130.98563305583622,
	},
	{
		date: "14 July 2021",
		app_name: "ShareChat", 
		clicks: 1003200,
		requests: 1004212,
		app_id: "123456",
		impressions: 1003934,
		responses: 1004162,
		revenue: 130.98563305583622,
	},
	{
		date: "14 July 2021",
		app_name: "Callbreak Menu", 
		clicks: 1003200,
		requests: 1004212,
		app_id: "123456",
		impressions: 1003934,
		responses: 1004162,
		revenue: 130.98563305583622,
	},
	{
		date: "14 July 2021",
		app_name: "ShareChat", 
		clicks: 1003200,
		requests: 1004212,
		app_id: "123456",
		impressions: 1003934,
		responses: 1004162,
		revenue: 130.98563305583622,
	},
	{
		date: "14 July 2021",
		app_name: "Callbreak Menu", 
		clicks: 1003200,
		requests: 1004212,
		app_id: "123456",
		impressions: 1003934,
		responses: 1004162,
		revenue: 130.98563305583622,
	},
]

const Table = () => {
	return (
		<>
			{/* TABLE STARTS HERE */}
			<TableContainer className="table-container">
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>App</th>
							<th>Clicks</th>
							<th>Request</th>
							<th>Revenue</th>
							<th>Impression</th>
						</tr>
					</thead>
					<tbody>
						{data && data.map((item, index)=> 
							<tr key={index}>
								<td className="date">{item.date}</td>
								<td className="app">{item.app_name}</td>
								<td className="clicks">{item.clicks}</td>
								<td className="request">{item.requests}</td>
								<td className="revenue">${item.revenue}</td>
								<td className="impression">{item.impressions}</td>
							</tr>
						)}
					</tbody>
				</table>
			</TableContainer>
		</>
	);
}
 
export default Table;