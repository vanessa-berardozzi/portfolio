/* eslint-disable @next/next/no-img-element */


import { Card } from '@/components/ui/card';
import { ContactCard } from './ContactCards';
import React from 'react';
import { Section } from './Section';
import { Projects, type ProjectsProps } from './Projects';
import { Code, FileQuestion, MusicIcon } from 'lucide-react';
import { Work, type WorkProps } from './Works';


import type { url } from 'inspector';
import type image from 'next/image';
import type { title } from 'process';

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
								{...project}
							/>
						))}
					</div>
				</Card>
			</div>
			<div className='flex-[2] w-full flex flex-col  gap-4 '>
				<Card className='p-4 flex-1'>
					<p className='text-lg  text-muted-foreground'>Expériences professionnelles </p>
					<div className='flex flex-col gap-4' >
						{WORKS.map((work, index) => (
							<Work
								key={index}
								{...work}
							/>
						))}
					</div>
				</Card>

				
					{/*
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
					*/}
					
			</div>
		</Section>
	);
};

const WORKS: WorkProps[] = [
	{
		image:
			'https://media.licdn.com/dms/image/C4E0BAQGCzzlB-E4l6A/company-logo_200_200/0/1642408026401/kairnial_logo?e=2147483647&v=beta&t=6ghIneZ8m3qRxazndOG32LdRjGPnNYxLgVjB26yRzaA',
		title: 'Kairnial',
		role: 'Stagiaire',
		date: 'novembre 2023',
		url: 'https://kairnial.com',
	},
	{
		image:
			'https://media.licdn.com/dms/image/C5603AQFHZV4aKgBRDg/profile-displayphoto-shrink_800_800/0/1569423474257?e=1723680000&v=beta&t=Dks0V7bDJzRhEIFomStGZo8uSCnKGG4cPz9S45UnERE',
		title: 'Game-O-Quiz',
		role: 'Back-Developer',
		date: '2023',
		url: '/',
	},
];

const PROJECTS: ProjectsProps[] = [

{
		Logo: FileQuestion,
		title: 'Game-O-Quiz',
		description: 'Back-End Developer',
		url: 'https://quiz.berardozzi.fr/api-docs/',
	},

	{
		Logo: MusicIcon,
		title: 'Spotify Playlist ( comming soon ... )',
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