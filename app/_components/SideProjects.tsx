import Link from "next/link";
import { LucideIcon } from 'lucide-react';

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
}
