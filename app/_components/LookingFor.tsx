import { Card } from '@/components/ui/card';
import { Section } from './Section';
import type style from 'styled-jsx/style';

export const LookingFor = () => {
  return (
    <Section className='flex max-md:flex-col justify-center items-center'>
      <div className='flex flex-col '></div>

      <Card className='w-full p-4 flex flex-col gap-1 items-center'>
        <div className='flex flex-col gap-3'>
          <h2 className='pb-2 text-3xl font-caption font-semibold tracking-tight first:mt-0 text-center'>
            Ma recherche
          </h2>
          <div className='text-base text-center'>
            <p className='mb-1'>
              👀 Contrat d'<span className='bg-gradient-to-r from-[#ddee65] to-[#f1dba7] 7 inline-block text-transparent bg-clip-text'>
                apprentissage✨
              </span>
            </p>
            <p className='mb-1'>⏱️Durée: entre 15 et 23 mois</p>
            <p className='mb-1'>
              📍 Localité : Région Lyonnaise, Rhône-Alpes , France entière
              possible selon opportunité
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
};
