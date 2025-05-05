// Define types for the board squares
export const SquareValue = {
	X: 'X',
	O: 'O'
};

export type TSquareValue = keyof typeof SquareValue | null;
