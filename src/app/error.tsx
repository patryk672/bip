'use client';

import EmptyState from '@/components/EmptyState';

interface ErrorStateProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorStateProps> = ({ error, reset }) => {
  return (
    <EmptyState
      title="Strona nie została odnaleziona."
      subtitle={error.message || 'Coś poszło nie tak. Spróbuj ponownie.'}
      showReset
      label="Spróbuj ponownie"
      reset={reset}
    />
  );
};

export default Error;

// import ErrorLayout from '@/layouts/ErrorLayout/ErrorLayout';

// function ErrorPage() {
//   return <h1>There was an error, let me check on that</h1>;
// }

// ErrorPage.getLayout = (page: any) => <ErrorLayout>{page}</ErrorLayout>;

// export const getStaticProps = () => ({
//   props: {
//     title: '🕵🏼 - error',
//   },
// });

// export default ErrorPage;
