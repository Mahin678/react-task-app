import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Users from './Component/Users/Users';
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/users">
					<Users />
				</Route>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
