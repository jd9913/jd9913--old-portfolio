import logo from "./logo.svg";
import About from "./components/About";
import Header from "./components/Header";

function App() {
	return (
		<main>
			<Header />
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<About></About>
				</header>
			</div>
		</main>
	);
}

export default App;
