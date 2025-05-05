import type React from 'react';

import type { TSquareValue } from '@/components/square/types';
import { tw } from '@/styles/twind';

export type TSquareProps = {
	/**
	 * The value of the square.
	 * @required
	 * @default null
	 */
	value: TSquareValue;

	/**
	 * Square on click event handler.
	 * @required
	 */
	onClick: () => void;
};

export const Square: React.FC<TSquareProps> = ({ value = null, onClick }) => (
	<button
		className={tw`w-36 h-36 border rounded-lg shadow-lg shadow-slate-400 
			bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-500
			hover:from-indigo-400 hover:via-sky-400 hover:to-emerald-400
			`}
		type='button'
		onClick={onClick}
	>
		<span className={tw`[text-shadow:_2px_2px_9px_black] text-7xl font-bold`}>{value}</span>
	</button>
);
