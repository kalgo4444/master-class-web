import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
	return (
		<main className="contact-page">
			<section className="contact-grid">
				<article className="contact-card">
					<h3>
						<FaPhoneAlt />
						Phone
					</h3>
					<a href="tel:+998901234567">+998 90 123 45 67</a>
				</article>

				<article className="contact-card">
					<h3>
						<MdEmail />
						Gmail
					</h3>
					<a href="mailto:youmarket.uz@gmail.com">youmarket.uz@gmail.com</a>
				</article>

				<article className="contact-card">
					<h3>
						<FaMapMarkerAlt />
						Address
					</h3>
					<p>Tashkent city, Yunusobod district, Amir Temur avenue 108</p>
				</article>
			</section>

			<section className="map-wrapper">
				<iframe
					title="YouMarket Location"
					src="https://www.google.com/maps?q=Tashkent%20Yunusobod&output=embed"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</section>
		</main>
	)
}

export default Contact
