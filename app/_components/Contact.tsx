import { Badge } from '@/components/ui/badge';
import { ContactCard } from './ContactCards';
import { Section } from './Section';

export const Contact = () => {
	return (
        <Section className='flex flex-col items-start gap-4'>
			<Badge variant='outline'>Contactez-moi</Badge>
			<h2 className=' pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
				N'hésitez pas à me contacter pour discuter opportunités professionnelles.
			</h2>
			<div className='flex max-md:flex-col gap-4 w-full'>
				<ContactCard
          url='https://www.linkedin.com/in/vanessa-berardozzi/'
					image='https://media.licdn.com/dms/image/C5603AQFHZV4aKgBRDg/profile-displayphoto-shrink_800_800/0/1569423474257?e=1723680000&v=beta&t=Dks0V7bDJzRhEIFomStGZo8uSCnKGG4cPz9S45UnERE'
					mediumImage={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png'}
					name='Vanessa-berardozzi'
					description=''
				/>
				<ContactCard
          url='mailto:nessb.webdev@gmail.com '
          name='nessb.webdev@gmail.com'
          image='https://media.licdn.com/dms/image/C5603AQFHZV4aKgBRDg/profile-displayphoto-shrink_800_800/0/1569423474257?e=1723680000&v=beta&t=Dks0V7bDJzRhEIFomStGZo8uSCnKGG4cPz9S45UnERE'
          mediumImage='https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI'
          description=''

				/>
			</div>
		</Section>
    );
};
