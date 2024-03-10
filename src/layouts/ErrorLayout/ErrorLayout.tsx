import Link from 'next/link';

import type { ChildrenProps } from '@/types';

export const metadata = {
  title: 'Something is wrong',
  description: 'Something is wrong',
};

export default function ErrorLayout({ children }: ChildrenProps) {
  return (
    <div>
      {children}
      <Link href="/">Powrót</Link>
    </div>
  );
}
