import { Contact } from './_components/Contact';
import { Footer } from './_components/footer';
import { Header } from './_components/Header';
import { Hero } from './_components/Hero';
import { LookingFor } from './_components/LookingFor';
import { Skills } from './_components/Skills';
import { Spacing } from './_components/Spacing';
import { Status } from './_components/Status';

export default function Home() {
	return (
		<main>
			<Header />
			<Spacing size='md' />
			<Hero />
			<Spacing size='md' />
			<LookingFor />
			<Spacing size='md' />
			<Status />
      <Spacing size='md' />
			<Skills />
			<Spacing size='md' />
			<Contact />
			<Spacing size='md' />
			<Footer />
			<Spacing size='xs' />
		</main>
	);
}
