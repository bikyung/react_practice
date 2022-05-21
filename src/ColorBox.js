import React from 'react';
import { useState, useEffect } from 'react';

function ColorBox() {
	const [bg, setBg] = useState('gray');

	useEffect(() => {
		console.log('bgState 변경');
	}, [bg]);

	return (
		<article className='colorBox'>
			<div className='box' style={{ backgroundColor: bg }}></div>
			<button
				onClick={(e) => {
					setBg(e.target.innerText);
				}}>
				red
			</button>
			<button
				onClick={(e) => {
					setBg(e.target.innerText);
				}}>
				green
			</button>
			<button
				onClick={(e) => {
					setBg(e.target.innerText);
				}}>
				blue
			</button>
		</article>
	);
}

export default ColorBox;
