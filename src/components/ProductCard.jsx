const ProductCard = ({ product }) => {
	return (
		<article className="product-card">
			<img
				src={product.thumbnail}
				alt={product.title}
			/>
			<div className="product-card-body">
				<h3>{product.title}</h3>
				<p>{product.description}</p>
				<strong>${product.price}</strong>
			</div>
		</article>
	)
}

export default ProductCard
