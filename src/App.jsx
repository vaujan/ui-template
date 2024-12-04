import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import DesignSystem from "./pages/DesignSystem";

function App() {
	return (
		<Router>
			<div className="min-h-screen w-screen bg-white">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/design-system" element={<DesignSystem />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;