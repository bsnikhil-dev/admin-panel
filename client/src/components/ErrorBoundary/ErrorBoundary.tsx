import type { ReactNode } from 'react';
import { useAppSelector } from '../../app/hooks';

interface ErrorBoundaryProps {
  children: ReactNode;
}

const GlobalErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const { errorMessage } = useAppSelector(state => state.errorBoundary);

  const clearErrorBoundary = () => {};
  if (errorMessage) {
    return (
      <>
        <h1>Error :{errorMessage}</h1>
        <button onClick={clearErrorBoundary}>Retry</button>
      </>
    );
  }
  return <>{children}</>;
};

export default GlobalErrorBoundary;
