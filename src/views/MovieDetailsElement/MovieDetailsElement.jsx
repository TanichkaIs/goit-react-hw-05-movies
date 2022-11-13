import PageHeading from 'components/PageHeading/PageHeading';
import { Section, InfoContainer } from './MovieDetailsElement.styled';

const BASE_URL_PICTURE = 'https://image.tmdb.org/t/p/original';

export default function MovieDetailsElement({ movie, onClick }) {
  
  const { title, poster_path, overview, vote_average } = movie;
  return (
    <>
      <button type="button" onClick={onClick}>
        Go back
      </button>
      <PageHeading>{`${title}`}</PageHeading>
      <Section>
        <img src={`${BASE_URL_PICTURE}${poster_path}`} alt={title} />
        <InfoContainer>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Vote</h3>
          <p>{vote_average}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(({ name }) => `${name} `)}</p>
        </InfoContainer>
      </Section>
    </>
  );
}