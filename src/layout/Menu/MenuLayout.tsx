import { NavLink, Outlet } from 'react-router-dom';
import styles from './MenuLayout.module.css';
import menulogo from '../../assets/menu.svg';
import cartlogo from '../../assets/cart.svg';
import avatarlogo from '../../assets/avatar.png';
import exitlogo from '../../assets/exitButton.svg';
import Button from '../../components/Button/Button';
import cn from 'classnames';


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
					<NavLink to='/' className={({ isActive }) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src={menulogo}/>
						Меню</NavLink>
					<NavLink to='cart' className={({ isActive }) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src={cartlogo}/>
						Корзина</NavLink>
				</div>
				<Button className={styles['exit']}>
					<img src={exitlogo}/>
					Выход
				</Button>
			</div>
			
			<div className={styles['content']}>
				<Outlet/>
			</div>
		</div>
		
	);
}
