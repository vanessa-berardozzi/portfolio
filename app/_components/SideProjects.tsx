import { Code, FileQuestion, LucideIcon } from 'lucide-react';

import Link from 'next/link';

export type SideProjectsProps = {
	Logo: LucideIcon;
	title: string;
	description: string;
	url: string;
};

export const SideProjects = (props: SideProjectsProps) => {
	return (
		<Link
			href={props.url}
			className='inline-flex items-center gap-4 hover:bg-accent/50 transtion-colors p-2 rounded'
		>
			<props.Logo size={16} />
			<div>
				<p className='text-lg font-semibold'>{props.title}</p>
				<p className='text-sm  text-muted-foreground'>{props.description} </p>
			</div>
		</Link>
	);
};
export const SIDE_PROJECTS: SideProjectsProps[] = [
	{
		Logo: FileQuestion,
		title: 'Game Quiz API',
		description: 'Quiz app fun and easy to use',
		url: '/',
	},
	{
		Logo: Code,
		title: 'Game Quiz API',
		description: 'Quiz app fun and easy to use',
		url: '/',
	},
];
