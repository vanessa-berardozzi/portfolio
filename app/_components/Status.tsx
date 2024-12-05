/* eslint-disable @next/next/no-img-element */

import { Card } from '@/components/ui/card';
import React from 'react';
import { Section } from './Section';
import { Projects, type ProjectsProps } from './Projects';
import { Code, FileQuestion, Leaf, MusicIcon } from 'lucide-react';
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
		image:
			'https://www.alteca.fr/wp-content/uploads/2020/10/alteca_footer-1.png',
		title: 'Aleca',
		role: 'Stagiaire',
		date: 'novembre 2024',
		url: 'https://www.alteca.fr/',
	},
	
	{
		image:
			'https://media.licdn.com/dms/image/v2/D4E0BAQF4CBVYUiBOtA/company-logo_100_100/company-logo_100_100/0/1709891850889/thinkproject_group_logo?e=1733961600&v=beta&t=0cZHlYcFtk_gKrBb8POAKBbwT3qmt-bG5IXDZJHGhOc',
		title: 'Thinkproject',
		role: 'Stagiaire',
		date: 'novembre 2023',
		url: 'https://thinkproject.com',
	},
	{

		image:"https://media.istockphoto.com/id/1023347350/fr/photo/point-dinterrogation-3d-point-rouge-dinterrogation-demandant-signe-de-ponctuation-isol%C3%A9e.jpg?s=1024x1024&w=is&k=20&c=ZzyH2ismL2Ovs2mHO_g1O_llKtSkwpNfdTySYLi2_2c=",
		title: 'Game-O-Quiz',
		role: 'Back-Developer',
		date: '2023',
		url: 'https://github.com/vanessa-berardozzi/projet-game-o-quiz-back',
	},
];

const PROJECTS: ProjectsProps[] = [

	
	{
		Logo: Leaf,
		title: 'FourmisLabs',
		description: 'Fullstack Developer',
		url: 'https://fourmislabs.vercel.app/fr',
	},
	{
		Logo: FileQuestion,
		title: 'Game-O-Quiz',
		description: 'Back-End Developer',
		url: 'https://quiz.berardozzi.fr/api-docs/',
	},

	{
		Logo: MusicIcon,
		title: 'Spotify Playlist ( coming soon ... )',
		description: 'Frontend Developer',
		url: '/',
	},


];

const CONTACTS = [
	{
		url: 'https://www.linkedin.com/in/vanessa-berardozzi/',
		image:
			'https://media.licdn.com/dms/image/v2/D5603AQFI6NyTbI3G7Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719497356641?e=1731542400&v=beta&t=1SsK24RA6a6kpBZaIQ4DZfU6XLv6NT-Je7D_KDdD4EQ',
		mediumImage:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png',
		name: 'Vanessa-berardozzi',
		description: '',
	},
	{
		url: 'mailto:ness.berardozzi@gmail.com',
		image:
			'https://media.licdn.com/dms/image/v2/D5603AQFI6NyTbI3G7Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719497356641?e=1731542400&v=beta&t=1SsK24RA6a6kpBZaIQ4DZfU6XLv6NT-Je7D_KDdD4EQ',
		mediumImage:
			'https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI',
		name: 'bla',
	},
];
