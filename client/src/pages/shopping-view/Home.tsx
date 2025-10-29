import { useQuery } from '@tanstack/react-query';
import { fetchProperties } from '../../api/queries/propertiesService';

const HomePage = () => {
  const {
    data: properties,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['properties'],
    queryFn: fetchProperties,
  });

  console.log({ properties, error, isLoading, isError });

  if (isLoading) {
    return <div>Loading properties...</div>;
  }

  if (isError) {
    return <div>Error loading properties: {error.message}</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
