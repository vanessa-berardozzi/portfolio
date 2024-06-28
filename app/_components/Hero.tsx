/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { Code } from './Code';
import { ComponentPropsWithoutRef } from 'react';
import { GithubIcon } from './icons/githubIcon';
import Link from 'next/link'; // Import the Link component from the 'next/link' library
import { LinkedinIcon } from './icons/linkedinIcon';
import { Section } from './Section';

export const Hero = () => {
	return (
		<Section className='flex max-md:flex-col items-start gap-4'>
			<div className='flex-[3] flex flex-col gap-2'>
				<h1 className='font-caption font-bold text-5xl text-primary '>
					{' '}
					Vanessa Berardozzi
				</h1>
				<h2 className='text-4xl font-caption'> Conceptrice développeuse d'applications </h2>
				<p className='text-base mt-4'>
					Développeuse investie, passionnée et curieuse, j'aime apprendre de
					nouvelles choses et surtout trouver des solutions pour chaque projet.
					Vous pouvez consulter mon travail sur{' '}
					<Link
						href='https://github.com/vanessa-berardozzi'
						target='_blank'
					>
						<Code className='inline-flex items-baseline gap-2 hover:bg-accent '>
							{' '}
							<GithubIcon
								size={16}
								className='inline-flex '
							/>
							Github{' '}
						</Code>{' '}
					</Link>
					, mon parcours sur{' '}
					<Link
						href='https://cv.berardozzi.fr/cv.pdf/'
						target='_blank'
					>
						<Code className='inline-flex items-baseline gap-2 hover:bg-accent '>
							{' '}
							mon CV{' '}
						</Code>{' '}
					</Link>
					et connectons nous sur{' '}
					<Link
						href='https://www.linkedin.com/in/vanessa-berardozzi/'
						target='_blank'
					>
						<Code className='inline-flex items-baseline gap-1 hover:bg-accent '>
							<LinkedinIcon size={16} /> Linkedin
						</Code>
					</Link>
					.
				</p>
			</div>

			<div className='flex-[1] max-md m-auto ml-auto'>
				<img
					src='https://media.licdn.com/dms/image/D5603AQFI6NyTbI3G7Q/profile-displayphoto-shrink_800_800/0/1719497356684?e=1724889600&v=beta&t=lgplW5vMLqGf2RrU0NJJ3lBvxC_tJCtp2Ioc2wWhwrA'
					height={250}
					width={250}
					className='w-full h-auto max-w-ws ma-md:w-56 rounded-full shadow-[0_0_1px_#fff,inset_0_0_2px_#fff,0_0_2px_#fff,0_0_2px_#fff,0_0_12px_#fff] '
					alt='Photo de Vanessa Berardozzi'
				/>
			</div>
		</Section>
	);
};
