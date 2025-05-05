import type React from 'react';
import { useState } from 'react';

import { boardInitialState, calculateBoardWinner } from '@/components/board/constants';
import { Square } from '@/components/square';
import type { TSquareValue } from '@/components/square/types';
import { tw } from '@/styles/twind';

export const Board: React.FC = () => {
	const [squares, setSquares] = useState<TSquareValue[]>(boardInitialState);
	const [xIsNext, setXIsNext] = useState(true);

	const winner = calculateBoardWinner(squares);
	const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

	const handleClick = (i: number) => {
		if (squares[i] || winner) return;
		const nextSquares = squares.slice();
		nextSquares[i] = xIsNext ? 'X' : 'O';
		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	};

	const renderSquare = (i: number) => <Square value={squares[i]} onClick={() => handleClick(i)} key={i} />;

	return (
		<div className={tw`flex flex-col items-center gap-8 min-h-[594px]`}>
			<div className={tw`grid grid-cols-3 gap-2`}>{Array.from({ length: 9 }, (_, i) => renderSquare(i))}</div>
			<div className={tw`text-lg`}>{status}</div>
			{squares !== boardInitialState && (
				<button
					className={tw`border rounded-full text-lg px-8 py-3 shadow-lg shadow-slate-400 
					bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-500
					hover:from-indigo-400 hover:via-sky-400 hover:to-emerald-400`}
					type='button'
					onClick={() => setSquares(boardInitialState)}
				>
					Reset game
				</button>
			)}
		</div>
	);
};
