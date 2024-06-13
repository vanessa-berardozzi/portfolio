/* eslint-disable @next/next/no-img-element */

import { Code, FileQuestion, Home, LucideIcon } from 'lucide-react';

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';
import { Section } from './Section';

export const Status = () => {
	return (
		<Section className='flex max-md:flex-col items-start gap-4'>
			<div className='flex-[3] w-full'>
				<Card className='w-full p-4 flex flex-col gap-2 w-full'>
					<p className='text-lg  text-muted-foreground'>Side projects </p>
					<div className='flex flex-col gap-4'>
						{SIDE_PROJECTS.map((project, index) => (
							<SideProjects
								key={index}
								Logo={project.Logo}
								title={project.title}
								description={project.description}
								url='/'
							/>
						))}
					</div>
				</Card>
			</div>
			<div className='flex-[2] w-full flex flex-col  gap-4 '>
				<Card className='p-4 flex-1'>
					<p className='text-lg  text-muted-foreground'>Work </p>
				</Card>
				<Card
					className='p-4'
					flex-1
				>
					Contact me
				</Card>
			</div>
		</Section>
	);
};

const SIDE_PROJECTS = [
	{
		Logo: FileQuestion,
		title: 'Game Quiz API',
		description: 'Quiz app fun and easy to use',
	},
	{
		Logo: Code,
		title: 'Game Quiz API',
		description: 'Quiz app fun and easy to use',
	},
];

type SideProjectsProps = {
	Logo: LucideIcon;
	title: string;
	description: string;
	url: string;
};

const SideProjects = (props: SideProjectsProps) => {
	return (
		<Link
			href={props.url}
			className='inline-flex items-center gap-4 hover:bg-accent/50 transtion-colors p-2 rounded'
		>
			<span className='bg-accent text-accent-foreground p-3 rounded-sm'>
				<props.Logo size={16} />
			</span>
			<div>
				<p className='text-lg font-semibold'>{props.title}</p>
				<p className='text-sm  text-muted-foreground'>{props.description} </p>
			</div>
		</Link>
	);
};