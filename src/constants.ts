export interface News {
	type: string;
	color: string;
	news: string;
	score: string;
	impact: string;
	probability: string;
}
export const newsData:News[] = [
	{
		type: 'ERU',
		color: 'yellow',
		news: 'EU proposes payments sector shake-up, legal backing for digital euro.',
		score: '+1',
		impact: 'Neutral',
		probability: 'High',
	},
	{
		type: 'INR',
		color: 'blue',
		news: 'EU proposes payments sector shake-up, legal backing for digital euro.',
		score: '+1',
		impact: 'High',
		probability: 'High',
	},
	{
		type: 'CAD',
		color: 'brown',
		news: 'EU proposes payments sector shake-up, legal backing for digital euro.',
		score: '+1',
		impact: 'Medium',
		probability: 'High',
	},
	{
		type: 'CAD',
		color: 'brown',
		news: 'EU proposes payments sector shake-up, legal backing for digital euro.',
		score: '+1',
		impact: 'Low',
		probability: 'High',
	},
	{
		type: 'OIL',
		color: 'green',
		news: 'EU proposes payments sector shake-up, legal backing for digital euro.',
		score: '+1',
		impact: 'High',
		probability: 'High',
	},
];
