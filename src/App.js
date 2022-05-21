import './scss/style.scss';
import { useEffect, useState } from 'react';
import ColorBox from './ColorBox';
import Counter from './Counter';
import Popup from './Popup';

function App() {
	const [open, setOpen] = useState(false);
	console.log('app');

	useEffect(() => {
		console.log('처음컴포넌트생성');
	}, []);

	return (
		<>
			<button
				onClick={() => {
					setOpen(!open);
				}}>
				{open ? '팝업 닫기' : '팝업 열기'}
			</button>
			<Counter />
			<ColorBox />
			{open ? <Popup /> : null}
		</>
	);
}

export default App;
