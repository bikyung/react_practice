import React from 'react';
import { useEffect, useState } from 'react';

function Counter() {
	let [num, setNum] = useState(0);
	useEffect(() => {
		console.log('numState 변경');
	}, [num]);
	return (
		<article className='counter'>
			<h1>{num}</h1>
			<button
				onClick={() => {
					setNum(num - 1);
				}}>
				감소
			</button>
			<button
				onClick={() => {
					setNum(num + 1);
				}}>
				증가
			</button>
		</article>
	);
}

export default Counter;
