import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DesignSystemHeader from "./components/DesignSystemHeader";

function App() {
	return (
		<Router>
			<div className="min-h-screen w-screen bg-white">
				<DesignSystemHeader
					supportingText={"Buttons communicate actions that users can take."}
				>
					Buttons
				</DesignSystemHeader>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
