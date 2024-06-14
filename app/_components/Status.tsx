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
				<Card className='w-full p-4 flex flex-col gap-2'>
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
					<div className='flex flex-col gap-4'>
						{WORKS.map((work, index) => (
							<Work
								key={index}
								{...work}
							/>
						))}
					</div>
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

// Side projects data
const SIDE_PROJECTS: SideProjectsProps[] = [
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
			<props.Logo size={16} />
			<div>
				<p className='text-lg font-semibold'>{props.title}</p>
				<p className='text-sm  text-muted-foreground'>{props.description} </p>
			</div>
		</Link>
	);
};

// Work data

//TODO : Add work experience
const WORKS: WorkProps[] = [
	{
		image: '/images/nextjs.svg',
		title: 'Next.js',
		role: 'Frontend Developer',
		date: '2021 - Present',
		url: '/',
	},
	{
		image: '/images/nextjs.svg',
		title: 'Next.js',
		role: 'Frontend Developer',
		date: '2021 - Present',
		url: '/',
	},
];

type WorkProps = {
	image: string;
	title: string;
	role: string;
	date: string;
	url: string;
};

const Work = (props: WorkProps) => {
	return (
		<Link
			href={props.url}
			className='inline-flex items-center gap-4 hover:bg-accent/50 transtion-colors p-2 rounded'
		>
			<img
				src={props.image}
				alt={props.title}
				className='w-10 h-10 object-contain rounded-md '
			/>

			<div className='mr-auto'>
				<p className='text-lg font-semibold'>{props.title}</p>
				<p className='text-xs  text-muted-foreground'>{props.role} </p>
			</div>

			<div className=''>
				<p className='text-xs text-end text-muted-foreground'>{props.date} </p>
			</div>
		</Link>
	);
};
