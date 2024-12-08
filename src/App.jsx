import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./pages/Sidebar";

function App() {
	return (
		<Router>
			<main className="flex min-w-screen h-screen bg-gray-950 bg-white">
				<Sidebar />
				<div className="p-md w-full h-full">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</main>
		</Router>
	);
}

export default App;
