import { Badge } from '@/components/ui/badge';
import { Code } from './Code';
import { DockerIcon } from './icons/DockerIcon';
import { NodeIcon } from './icons/NodeIcon';
import { ReactIcon } from './icons/ReactIcon';
import { Section } from './Section';
import { TypescriptIcon } from './icons/TypescriptIcon';

export const Skills = () => {
	return (
		<Section className='flex flex-col items-start gap-4'>
			<Badge variant='outline'>Skills</Badge>
			<h2 className=' pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
				Outils de développement
			</h2>
			<div className='flex max-md:flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<ReactIcon size={42} />

					{/* React */}

					<h3 className='text-2xl font-semibold tracking-tight '>React</h3>
					<p className='text-sm text-muted-foreground'>
						J'aime coder en{' '}
						<Code className='inline-flex items-center  gap-1 '>
							React
							<ReactIcon
								size={14}
								className=' animate-spin '
								style={{ animationDuration: '4s' }}
							/>
						</Code>{' '}
						, c'est un framework qui me permet de créer des applications web
						modernes et performantes.
					</p>
				</div>

				{/* Node.js */}

				<div className='flex flex-col gap-1'>
					<NodeIcon size={42} />
					<h3 className='text-2xl font-semibold tracking-tight'>Node.js</h3>
					<p className='text-sm text-muted-foreground'>
						Je suis à l'aise avec{' '}
						<Code className='inline-flex items-center gap-1'>
							Node.js
							<NodeIcon size={14} />
						</Code>
						, j'utilise Node.js pour créer des applications web côté serveur.
					</p>
				</div>

				{/* TypeScript */}

				<div className='flex flex-col gap-1'>
					<TypescriptIcon size={42} />
					<h3 className='text-2xl font-semibold tracking-tight'>TypeScript</h3>
					<p className='text-sm text-muted-foreground'>
						Je code en{' '}
						<Code className='inline-flex items-center gap-1'>
							TypeScript
							<NodeIcon size={14} />
						</Code>{' '}
						pour améliorer la lisibilité de mon code et réduire les erreurs.
					</p>
				</div>

				{/* Docker */}
				<div className='flex flex-col gap-1'>
					<DockerIcon size={42} />
					<h3 className='text-2xl font-semibold tracking-tight'>Docker</h3>
					<p className='text-sm text-muted-foreground'>
						J'utilise{' '}
						<Code className='inline-flex items-center gap-1'>
							Docker
							<DockerIcon size={14} />
						</Code>{' '}
						pour créer des environnements de développement isolés et reproductibles.
					</p>
					</div>

			</div>
		</Section>
	);
};
