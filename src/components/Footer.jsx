import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div>
					<h3 className="footer-brand">YouMarket</h3>
					<p className="footer-text">Fresh products and easy shopping for your everyday needs.</p>
				</div>

				<div className="footer-contact">
					<a href="tel:+998901234567">
						<FaPhoneAlt />
						<span>+998 90 123 45 67</span>
					</a>
					<a href="mailto:youmarket.uz@gmail.com">
						<MdEmail />
						<span>youmarket.uz@gmail.com</span>
					</a>
					<p>
						<FaMapMarkerAlt />
						<span>Tashkent, Yunusobod district</span>
					</p>
				</div>

			</div>
			<p className="footer-copy">2026 YouMarket. All rights reserved.</p>
		</footer>
	)
}

export default Footer
