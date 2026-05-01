import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
	return (
		<section className="products-grid">
			{products.map(item => (
				<ProductCard
					key={item.id}
					product={item}
				/>
			))}
		</section>
	)
}

export default ProductList
