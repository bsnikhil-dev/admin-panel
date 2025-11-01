import { destinations } from '../../constants/data';
export const filterDestinations = (value: string) => {
  return destinations.filter(destinaton => destinaton.title.toLowerCase().includes(value));
};
