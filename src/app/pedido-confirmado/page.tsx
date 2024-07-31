import type { Metadata } from 'next';

import CartComfirmation from '@/app/components/Cart/CartComfirmation';

export const metadata: Metadata = {
  title: `Pedido confirmado`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function FileSend() {
  return <CartComfirmation />;
}
