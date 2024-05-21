import Hero from '@/app/components/Home/Hero';
import IntroSteps from '@/app/components/Home/IntroSteps';
import IntroOwnDesigns from '@/app/components/Home/IntroOwnDesigns';
import IntroEstampas from '@/app/components/Home/IntroEstampas';
import IntroTelas from '@/app/components/Home/IntroTelas';
import IntroStock from '@/app/components/Home/IntroStock';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <IntroSteps />
      <IntroOwnDesigns />
      <IntroEstampas />
      <IntroTelas />
      <IntroStock />
    </main>
  );
}
