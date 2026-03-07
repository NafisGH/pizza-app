import { Link, Outlet } from 'react-router-dom';
import LeftPanel from '../../components/Left-panel/LeftPanel';
import styles from './MenuLayout.module.css';
import menulogo from '../../assets/menu.svg';
import cartlogo from '../../assets/cart.svg';
import avatarlogo from '../../assets/avatar.png';
import exitlogo from '../../assets/exitButton.svg';
import Button from '../../components/Button/Button';

export default function MenuLayout() {
	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img src={avatarlogo} className={styles['avatar']}/>
					<div className={styles['name']}>Ivan Ivanov</div>
					<div className={styles['email']}>example@mail.com</div>
				</div>
				<div className={styles['menu']}>
					<Link to='/' className={styles['link']}>
						<img src={menulogo}/>
						Меню</Link>
					<Link to='cart' className={styles['link']}>
						<img src={cartlogo}/>
						Корзина</Link>
				</div>
				<Button className={styles['exit']}>
					<img src={exitlogo}/>
					Выход
				</Button>
			</div>
			
			<div>
				<Outlet/>
			</div>
		</div>
		
	);
}
