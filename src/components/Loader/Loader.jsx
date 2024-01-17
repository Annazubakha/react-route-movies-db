import { CircleLoader } from 'react-spinners';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <CircleLoader color="#032010" size={150} />
    </LoaderWrapper>
  );
};
