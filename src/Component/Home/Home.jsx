import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Home = () => {
	const [id, setId] = useState('');
	useEffect(() => {
		fetch('https://examplebd.com/api/get-csrf-token')
			.then((res) => res.json())
			.then((info) => setId(info));
	}, []);


	
	return (
		<div>
			<h1 className="text-center  pt-5">Add Friend App</h1>
			<div className="container">
				<div
					className="d-flex "
					style={{ justifyContent: 'space-between' }}
				>
					<div className="d-block">
						<h4>Mahin</h4>
						<p>id : {id.csrf_token}</p>
					</div>
					<Link to="/users">
						<button className="btn btn-danger d-block">Add me</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
