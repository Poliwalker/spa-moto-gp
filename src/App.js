import Routers from './Routers/Routers';
import { GlobalStyles } from './Styles/GlobalStyles';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
	return (
		<>
			<Routers />
			<ReactQueryDevtools />
			<GlobalStyles />
		</>
	);
}

export default App;
