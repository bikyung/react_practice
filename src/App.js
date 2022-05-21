import './scss/style.scss';
import { useEffect, useState, useRef } from 'react';

function App() {
	console.log('app');
	let [num, setNum] = useState(0);
	// let [wid, setWid] = useState(null);
	const box = useRef(null);
	const wid = useRef(null);

	useEffect(() => {
		window.addEventListener('resize', () => {
			// setWid(window.innerWidth);
			wid.current = window.innerWidth;
			console.log(wid.current);
		});
	}, []);

	useEffect(() => {
		console.log(wid);
	}, [wid]);
	return (
		<section>
			<button
				onClick={() => {
					setNum(--num);
					box.current.style.transform = `rotate(${45 * num}deg)`;
				}}>
				prev
			</button>
			<button
				onClick={() => {
					setNum(++num);
					box.current.style.transform = `rotate(${45 * num}deg)`;
				}}>
				next
			</button>
			<div className='box' ref={box}></div>
		</section>
	);
}

export default App;
