import styled from 'styled-components';

import AssetList from './components/AssetList.js';
import AssetDetail from './components/AssetDetail.js';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

function App() {
	return (
		<Container>
			<Router>
				<Switch>
					<Route path="/assetList">
						<AssetList />
					</Route>
					<Route path="/assetDetail/:address/:token">
						<AssetDetail />
					</Route>
					<Redirect exact from="*" to="/assetList" />
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
