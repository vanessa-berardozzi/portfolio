import { DockerIcon } from './icons/DockerIcon';
import { MongoIcon } from './icons/MongoIcon';
import { NodeIcon } from './icons/NodeIcon';
import { PostgreIcon } from './icons/PostgresIcon';
import { ReactIcon } from './icons/ReactIcon';
import { Section } from './Section';
import { TailwindIcon } from './icons/TailwindIcon';
import { TypescriptIcon } from './icons/TypescriptIcon';

export const Skills = () => {
	return (
		<Section className='flex flex-col gap-4 items-center'>
			<h2 className='font-caption pb-2 text-3xl font-semibold tracking-tight first:mt -'>
				Ma Stack
			</h2>

			<div className='flex max-md:flex-col gap-1 w-full '>
				<div className='p-4 flex-1 flex flex-col items-center'>
					<p className='text-xl text-muted-foreground mb-6 '>Front-end</p>

					<div className='flex flex-wrap justify-between gap-2'>
						<div className='flex items-center flex-col  gap-3 justify-center'>
							<ReactIcon
								size={42}
								className='animate-spin '
								style={{ animationDuration: '4s' }}
							/>
							<p className='text-xs'>React</p>
						</div>

						<div className='flex items-center flex-col  gap-3 justify-center'>
							<TypescriptIcon size={42} />
							<p className='text-xs'>TypeScript</p>
						</div>

						<div className='flex items-center flex-col  gap-3 justify-center'>
							<TailwindIcon size={42} />
							<p className='text-xs'>Tailwind</p>
						</div>
					</div>
				</div>

				<div className='p-4 flex-1 flex flex-col items-center'>
					<p className='text-xl text-muted-foreground mb-3 '>Back-end</p>

					<div className='flex flex-wrap justify-between gap-2'>
						<div className='flex items-center flex-col  gap-3 justify-center'>
							<NodeIcon size={42} />
							<p className='text-xs'>Node.js</p>
						</div>

						<div className='flex items-center flex-col  gap-3 justify-center'>
							<PostgreIcon size={42} />
							<p className='text-xs'>PostgreSQL</p>
						</div>

						<div className='flex items-center flex-col  gap-3 justify-center'>
							<MongoIcon size={42} />
							<p className='text-xs'>MongoDb</p>
						</div>

						<div className='flex items-center flex-col  gap-3 justify-center'>
							<DockerIcon size={42} />
							<p className='text-xs'>Docker</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};
