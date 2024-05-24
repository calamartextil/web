import CardTela from '@/app/components/CardTela';

export default function GridTelas() {
  return (
    <div className='grid w-full'>
      <div className='col_3'>
        <CardTela />
      </div>
      <div className='col_3'>
        <CardTela />
      </div>
      <div className='col_3'>
        <CardTela />
      </div>
      <div className='col_3'>
        <CardTela />
      </div>
    </div>
  );
}
