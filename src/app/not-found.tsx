'use client';

import { useEffect } from 'react';

import EmptyState from '@/components/EmptyState';

interface NotFoundStateProps {
  error: Error;
}

const NotFound: React.FC<NotFoundStateProps> = ({ error }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <EmptyState
      title="Uh No"
      subtitle="Could not find requested resource"
      showReset
      label="Powrót"
    />
  );
};

export default NotFound;
