import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './components/pages/Menu/Menu.tsx';
import Cart from './components/pages/Cart/Cart.tsx';
import Error from './components/pages/Error/Error.tsx';
import MenuLayout from './layout/Menu/MenuLayout.tsx';



const router = createBrowserRouter([
	{
		path: '/',
		element: <MenuLayout/>,
		children: [
			{
				index: true,
				element: <Menu/>
			},
			{
				path: 'cart',
				element: <Cart/>
			}

		]
	},
	
	{
		path: '*',
		element: <Error/>
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
