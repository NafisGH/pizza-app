import { Link } from 'react-router-dom';
import pizzaEnjoying from '../../assets/enjoying.png';
import korzina from '../../assets/Korzina.svg';
import star from '../../assets/star.svg';
import styles from './ProductCard.module.css';
import type { ProductCardProps } from './ProductCard.props';

export default function ProductCard(props: ProductCardProps) {
	const imageSrc =
		props.image.startsWith('http') || props.image.includes('/')
			? props.image
			: pizzaEnjoying;

	return (
		<article className={styles.card}>
			<Link to={'/'} className={styles.link}>
				<div className={styles.head}>
					<div className={styles.rating}>
						<span>{props.rating}</span>
						<img src={star} alt='' aria-hidden='true' />
					</div>
					<img className={styles.imagePizza} src={imageSrc} alt={props.title} />
				</div>

				<div className={styles.footer}>
					<div className={styles.info}>
						<h3 className={styles.title}>{props.title}</h3>
						<p className={styles.description}>{props.description}</p>
					</div>

					<div className={styles.actions}>
						<div className={styles.price}>{props.price} ₽</div>
						<button className={styles.addToCart} type='button' aria-label={`Добавить ${props.title} в корзину`}>
							<img className={styles.imageKorzina} src={korzina} alt='' aria-hidden='true' />
						</button>
					</div>
				</div>
			</Link>
			
		</article>
	);
}
