import type React from 'react';

import { Board } from '@/components/board';
import { tw } from '@/styles/twind';

import '@/styles/index.css';

export const App: React.FC = () => {
	return (
		<div className={tw`flex items-center justify-center min-h-screen`}>
			<Board />
		</div>
	);
};
