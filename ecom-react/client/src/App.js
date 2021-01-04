import Footer from './Components/Footer';
import Header from './Components/Header';
import { Container } from 'react-bootstrap';

import HomePage from './Pages/HomePage';

const App = () => {
	return (
		<>
			<Header />
			<main className='py-3'>
				<Container>
					<HomePage />
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default App;
