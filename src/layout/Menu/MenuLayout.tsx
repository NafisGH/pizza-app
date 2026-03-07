import { Link, Outlet } from 'react-router-dom';

export default function MenuLayout() {
	return (
		<div>
			<div>
				<Link to='/' >Меню</Link>
				<Link to='cart' >Корзина</Link>
			</div>
			<div>
				<Outlet/>
			</div>
		</div>
		
	);
}
