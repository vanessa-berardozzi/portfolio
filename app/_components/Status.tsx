/* eslint-disable @next/next/no-img-element */

import { Card } from '@/components/ui/card';
import React from 'react';
import { Section } from './Section';
import { Projects, type ProjectsProps } from './Projects';
import {  Cat, FileQuestion, Trophy } from 'lucide-react';
import { Work, type WorkProps } from './Works';

export const Status = () => {
	return (
		<Section className='flex max-md:flex-col items-stretch gap-4'>
      <div className='flex-[3] w-full flex flex-col'>
        <Card className='w-full p-4 flex flex-col gap-2 flex-1'>
          <p className='text-lg text-muted-foreground'>Mes projets</p>
          <div className='flex flex-col gap-4'>
            {PROJECTS.map((project, index) => (
              <Projects key={index} {...project} />
            ))}
          </div>
        </Card>
      </div>
      <div className='flex-[2] w-full flex flex-col'>
        <Card className='p-4 flex-1 flex flex-col'>
          <p className='text-lg text-muted-foreground'>Expériences professionnelles</p>
          <div className='flex flex-col gap-4'>
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
      </div>
    </Section>
	);
};

const WORKS: WorkProps[] = [

	{

		image:"https://www.fourmislabs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6b9f00de.png&w=128&q=75",
		title: 'FourmisLabs',
		role: 'Full Stack Developer',
		date: ' aout 2024 - mai 2025',
		url: 'https://github.com/vanessa-berardozzi/projet-game-o-quiz-back',
	},
	{
		image:
			'https://media.licdn.com/dms/image/v2/D4E0BAQHNdtAE4wbNmA/company-logo_200_200/B4EZb7x1jsGQAM-/0/1747980868283/alteca_logo?e=1755734400&v=beta&t=gxHbh4WDqho_1_ff1CaoRo7z_VXX6kTr54lS7utqdn8', // Enlever "public" du chemin
		title: 'Alteca',
		role: 'Stagiaire',
		date: 'novembre 2024',
		url: 'https://www.alteca.fr/',
	},
	
	{
		image:
			'https://media.licdn.com/dms/image/v2/D4E0BAQF4CBVYUiBOtA/company-logo_200_200/company-logo_200_200/0/1709891850889/thinkproject_group_logo?e=1755734400&v=beta&t=rxdc1FctXX_faibZ3UxMAQbUjsA-DD5y_oOckNUh3O8',
		title: 'Kairnial (Thinkproject)',
		role: 'Stagiaire',
		date: 'novembre 2023',
		url: 'https://www.thinkproject.com/fr/products/thinkproject-kairnial/',
	},
	
];

const PROJECTS: ProjectsProps[] = [

	
	{
		Logo:  Trophy,
		title: 'Tennis Count',
		description: 'Back-End project',
		url: 'https://tennis-count.berardozzi.fr',
	},

	{
		Logo: Cat,
		title: 'Cafe Neko',
		description: 'React project',
		url: 'https://cafe-neko.berardozzi.fr',
	},
	{
		Logo: FileQuestion,
		title: 'Game-O-Quiz',
		description: 'Node/Express.js project',
		url: 'https://quiz.berardozzi.fr/api-docs/',
	},

];

const CONTACTS = [
	{
		url: 'https://www.linkedin.com/in/vanessa-berardozzi/',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png',
		mediumImage:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png',
		name: 'Vanessa-berardozzi',
		description: 'vanessa berardozzi contact image linkedin',
	},
	{
		url: 'mailto:ness.berardozzi@gmail.com',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Gmail_Logo.svg/240px-Gmail_Logo.svg.png',
		mediumImage:
			'https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI',
		name: 'Vanessa Berardozzi',
		description: 'vanessa berardozzi contact image gmail',
	},
];
