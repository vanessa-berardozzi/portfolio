/* eslint-disable @next/next/no-img-element */


import { Card } from '@/components/ui/card';
import { ContactCard } from './ContactCards';
import React from 'react';
import { Section } from './Section';
import { Projects, type ProjectsProps } from './Projects';
import { Code, FileQuestion } from 'lucide-react';
import { Work, type WorkProps } from './Works';



export const Status = () => {
	return (
		<Section className='flex max-md:flex-col items-start gap-4'>
			<div className='flex-[3] w-full'>
				<Card className='w-full p-4 flex flex-col gap-2'>
					<p className='text-lg  text-muted-foreground'>Mes projets </p>
					<div className='flex flex-col gap-4'>
						{PROJECTS.map((project, index) => (
							<Projects
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
					className='p-4 flex-1 flex flex-col gap-2'
					flex-1
				>
					<p className='text-lg  text-muted-foreground'>Contact </p>
					<ContactCard
						image='https://media.licdn.com/dms/image/C5603AQFHZV4aKgBRDg/profile-displayphoto-shrink_800_800/0/1569423474257?e=1723680000&v=beta&t=Dks0V7bDJzRhEIFomStGZo8uSCnKGG4cPz9S45UnERE'
						mediumImage='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png'
						name='Vanessa-berardozzi'
						description=''
						url='https://www.linkedin.com/in/vanessa-berardozzi/'
					/>
				</Card>
			</div>
		</Section>
	);
};

//TODO : Add work experience
const WORKS: WorkProps[] = [
	{
		image:
			'https://media.licdn.com/dms/image/C5603AQFHZV4aKgBRDg/profile-displayphoto-shrink_800_800/0/1569423474257?e=1723680000&v=beta&t=Dks0V7bDJzRhEIFomStGZo8uSCnKGG4cPz9S45UnERE',
		title: 'Next.js',
		role: 'Frontend Developer',
		date: '2021 - Present',
		url: '/',
	},
	{
		image:
			'https://media.licdn.com/dms/image/C5603AQFHZV4aKgBRDg/profile-displayphoto-shrink_800_800/0/1569423474257?e=1723680000&v=beta&t=Dks0V7bDJzRhEIFomStGZo8uSCnKGG4cPz9S45UnERE',
		title: 'Next.js',
		role: 'Frontend Developer',
		date: '2021 - Present',
		url: '/',
		freelance: true,
	},
];

const PROJECTS: ProjectsProps[] = [
	{
		Logo: Code,
		title: 'Next.js',
		description: 'Frontend Developer',
		url: '/',
	},
	{
		Logo: FileQuestion,
		title: 'Next.js',
		description: 'Frontend Developer',
		url: '/',
	},
];

const CONTACTS = [
	{
		url: 'https://www.linkedin.com/in/vanessa-berardozzi/',
		image:
			'https://media.licdn.com/dms/image/C5603AQFHZV4aKgBRDg/profile-displayphoto-shrink_800_800/0/1569423474257?e=1723680000&v=beta&t=Dks0V7bDJzRhEIFomStGZo8uSCnKGG4cPz9S45UnERE',
		mediumImage:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png',
		name: 'Vanessa-berardozzi',
		description: '',
	},
	{
		url: 'mailto:ness.berardozzi@gmail.com',
		image:
			'https://media.licdn.com/dms/image/C5603AQFHZV4aKgBRDg/profile-displayphoto-shrink_800_800/0/1569423474257?e=1723680000&v=beta&t=Dks0V7bDJzRhEIFomStGZo8uSCnKGG4cPz9S45UnERE',
		mediumImage:
			'https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI',
		name: "bla"
	},
];