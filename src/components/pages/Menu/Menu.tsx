import Headling from '../../Headling/Headling';
import ProductCard from '../../ProductCard/ProductCard';
import Search from '../../Search/Search';
import styles from './Menu.module.css';


function Menu() {
	return (
		<>
			<div className={styles['head']}>
				<Headling>Меню</Headling>
				<Search placeholder='Введите блюдо или состав'></Search>
			</div>
			<div>
				<ProductCard
					id={1}
					title='Наслаждение'
					description='Салями, руккола, помидоры, оливки'
					price="300"
					rating={4.5}
					image='pizzaEnjoying'
				/>
			</div>
			
			
		</>
	);
}

export default Menu;