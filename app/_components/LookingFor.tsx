import { Card } from '@/components/ui/card';
import { Section } from './Section';
import type style from 'styled-jsx/style';

export const LookingFor = () => {
  return (
    <Section className=' flex max-md:flex-col items-start'>
      <div className=' flex flex-col gap-4'></div>

      <Card className='w-full p-4 flex flex-col gap-2'>
        <div className='flex flex-col gap-4'>
          <h2 className='pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Ma recherche
          </h2>
          <div className='text-base '>
            <p>
              👀 Contrat d'<span className=' bg-gradient-to-r from-[#ddee65] to-[#f4dba7] 7 inline-block text-transparent bg-clip-text '>
                apprentissage✨
              </span>
            </p>
            <p>⏱️Durée: entre 15 et 23 mois</p>
            <p>
              📍 Localité : Région Lyonnaise, Rhône-Alpes , France entière
              possible selon opportunité
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
};
