import type { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearErrorBoundary } from '../../features/errorBoundary';
interface ErrorBoundaryProps {
  children: ReactNode;
}

const GlobalErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const { errorMessage, retryAction } = useAppSelector(state => state.errorBoundary);

  const dispatch = useAppDispatch();

  const handleRetry = () => {
    dispatch(clearErrorBoundary());
    if (retryAction) retryAction();
  };
  if (errorMessage) {
    return (
      <>
        <h1>Error :{errorMessage}</h1>
        <button onClick={handleRetry}>Retry</button>
      </>
    );
  }
  return <>{children}</>;
};

export default GlobalErrorBoundary;
