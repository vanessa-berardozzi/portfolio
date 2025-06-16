/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { Code } from './Code';
import { ComponentPropsWithoutRef } from 'react';
import { GithubIcon } from './icons/githubIcon';
import { GitlabIcon } from './icons/gitlabIcon';	
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

					ou Gitlab 
					<Link
						href='https://gitlab.com/vanessa-berardozzi'
						target='_blank'
					>
						<Code className='inline-flex items-baseline gap-2 hover:bg-accent '>
							{' '}
							<GitlabIcon
								size={16}
								className='inline-flex '
							/>
							Gitlab{' '}
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
				<div className='relative w-[250px] h-[250px] rounded-full shadow-[0_0_1px_#fff,inset_0_0_2px_#fff,0_0_2px_#fff,0_0_2px_#fff,0_0_15px_#fff] overflow-hidden'>
					<img
						src='https://res.cloudinary.com/dfhozyxyz/image/upload/v1732377749/ai5fudtvqym5pkv6ddem.png'
						className='absolute w-[110%] h-[110%] object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
						alt='Photo de Vanessa Berardozzi'
					/>
				</div>
			</div>
		</Section>
	);
};
