/* eslint-disable @next/next/no-img-element */

import { SIDE_PROJECTS, SideProjects } from './SideProjects';
import { WORKS, Work } from './Works';

import { Card } from '@/components/ui/card';
import { ContactCard } from './ContactCards';
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
					className='p-4 flex-1 flex flex-col gap-2'
					flex-1
				>
					<p className='text-lg  text-muted-foreground'>Contact </p>
					<ContactCard
						image='https://media.licdn.com/dms/image/C5603AQFHZV4aKgBRDg/profile-displayphoto-shrink_800_800/0/1569423474257?e=1723680000&v=beta&t=Dks0V7bDJzRhEIFomStGZo8uSCnKGG4cPz9S45UnERE'
						mediumImage='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png'
						name='Vanessa-berardozzi'
						description=''
					/>
				</Card>
			</div>
		</Section>
	);
};

