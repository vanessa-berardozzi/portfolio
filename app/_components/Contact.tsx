import { Badge } from '@/components/ui/badge';
import { ContactCard } from './ContactCards';
import { Section } from './Section';

export const Contact = () => {
	return (
		<Section className='flex flex-col items-center justify-center gap-4'>
		
			<h2 className=' pb-2 text-3xl font-caption font-semibold tracking-tight first:mt-0'>
				Me contacter.
			</h2>
			<div className='flex max-md:flex-col gap-4 w-full justify-center'>
				<ContactCard
			url='https://www.linkedin.com/in/vanessa-berardozzi/'
					image='https://media.licdn.com/dms/image/D5603AQFI6NyTbI3G7Q/profile-displayphoto-shrink_800_800/0/1719497356684?e=1724889600&v=beta&t=lgplW5vMLqGf2RrU0NJJ3lBvxC_tJCtp2Ioc2wWhwrA'
					mediumImage={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png'}
					name='Vanessa-berardozzi'
					description=''
				/>
				<ContactCard
			url='mailto:nessb.webdev@gmail.com '
			name='nessb.webdev@gmail.com'
			image='https://media.licdn.com/dms/image/D5603AQFI6NyTbI3G7Q/profile-displayphoto-shrink_800_800/0/1719497356684?e=1724889600&v=beta&t=lgplW5vMLqGf2RrU0NJJ3lBvxC_tJCtp2Ioc2wWhwrA'
			mediumImage='https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI'
			description=''

				/>
			</div>
		</Section>
	);
};
