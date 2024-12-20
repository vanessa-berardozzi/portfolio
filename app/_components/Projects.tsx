import Link from "next/link";
import { LucideIcon } from 'lucide-react';


export type ProjectsProps = {
	Logo: LucideIcon;
	title: string;
	description: string;
	url: string;
};
export const Projects = (props: ProjectsProps) => {
	return (
		<Link
			href={props.url}
			target="_blank"
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
