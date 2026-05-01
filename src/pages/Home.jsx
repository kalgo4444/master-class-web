import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'

const Home = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		axios.get('https://dummyjson.com/products')
		.then((response) => response.data)
		.then((data) => setProducts(data.products || []))
	}, [])

	return (
		<main className="landing">
			<section className="hero">
				<p className="hero-tag">Simple Market</p>
				<h2>Fresh products for your home</h2>
				<p>Daily essentials with clean and simple shopping experience.</p>
			</section>

			<ProductList products={products} />
		</main>
	)
}

export default Home
