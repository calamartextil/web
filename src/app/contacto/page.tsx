import Inner from '@/app/components/Inner';
import ContactForm from '@/app/components/Contact/ContactForm';

export default function Contact() {
  return (
    <div className='pt-40 lg:pt-48 px-5 pb-40'>
      <Inner>
        <div className='w-full'>
          <h1 className='text-5xl font-display mb-5 text-center lg:text-left'>
            Contacto
          </h1>
          <p className='mb-10 text-xl text-center lg:text-left'>
            Envianos tu consulta y te respondemos a la brevedad
          </p>
          <div className='p-0 lg:px-32'>
            <ContactForm />
          </div>
        </div>
      </Inner>
    </div>
  );
}
