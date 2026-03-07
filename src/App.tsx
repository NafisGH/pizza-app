import { useState, type MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import './index.css';



function App() {

	const [counter, setCounter] = useState<string | number>(0);

	const addCounter = (e: MouseEvent ) => {
		console.log(e);
	};

	return (
		<>
			<form className='form'>
			
				
				<Button onClick={addCounter} >Применить</Button>
				<Button appearence='big' onClick={addCounter}>Оформить</Button>
				<Input placeholder='eamil'/>
		
				
			
			</form>
			
		</>
	);
}

export default App;
