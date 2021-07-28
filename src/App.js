import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import CheckOut from './Pages/CheckOut';
import Home from './Pages/Home';
import OrderPage from './Pages/OrderPage';

function App() {
	return (
		<MainConatianer>
			<SideBar />
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/checkOut' component={CheckOut} exact />
				<Route path='/Order' component={OrderPage} exact />
			</Switch>
		</MainConatianer>
	);
}

export default App;
const MainConatianer = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f6f6f6;
	display: flex;
`;
