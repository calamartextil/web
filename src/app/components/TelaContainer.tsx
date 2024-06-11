import { Tela } from '@/types';
import TelaSingle from '@/app/components/TelaSingle';

interface TelaProps {
  tela: Tela;
}

export default function TelaContainer({ tela }: TelaProps) {
  return (
    <div className='relative'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-center items-center gap-5'>
          <h1 className='text-5xl font-display mb-5'>{tela?.title}</h1>
          <p className='text-lg'>(Paso 1: Elegí la tela)</p>
        </div>
      </div>
      <div className='bg-primary-bg-color p-10 rounded-2xl'>
        <TelaSingle tela={tela} />
      </div>
    </div>
  );
}
