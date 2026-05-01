import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Contact from './pages/Contact'
import Home from './pages/Home'

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/contact"
							element={<Contact />}
						/>
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	)
}

export default App
