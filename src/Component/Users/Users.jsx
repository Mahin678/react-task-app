import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
	const [data, setData] = useState([]);
	const handleSubmit = (event) => {
		fetch(`https://examplebd.com/api/live-classes?user_id=10089`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(event.target.value),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result) {
					setData(result);
				}
			});
	};
	console.log(data);



	return (
		<div className="container">
			<h1>Users</h1>
			<input
				type="text"
				onChange={(e) => handleSubmit(e)}
				className="form-control mb-5"
				placeholder="write something"
			/>

			<div>
				{data?.map((data) => (
					<div
						key={data.id}
						style={{
							border: '1px solid black',
							margin: '10px 0px',
							padding: '10px 10px',
						}}
					>
						<h4> Course title : {data.course_title}</h4>
						<h5>Ending Time : {data.ending_time}</h5>
						<h6> Title : {data.title}</h6>
						<p className="m-0">User Name : {data.user_name}</p>
						<p className="m-0">id : {data.id}</p>
						<p className="m-0">userid : {data.user_id}</p>
					</div>
				))}
			</div>
			<Link to="/home">
				<button className="btn btn-danger">back home</button>
			</Link>
		</div>
	);
};

export default Users;
