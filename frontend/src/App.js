import logo from "./logo.svg";
import About from "./components/About";
import "./App.css";

function App() {
	return (
		<main>
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
