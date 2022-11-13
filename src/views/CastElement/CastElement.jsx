import { CreditsPicture } from './CastElement.styled';

const BASE_URL_PICTURE = 'https://image.tmdb.org/t/p/original';
const DEFAULT_FOTO ='https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar-300x300.png';

export default function CastElement({ cast }) {
  return (
    <ul>
      {cast.map(el => {
        const { id, profile_path, original_name, character } = el;
        return (
          <li key={id}>
            <CreditsPicture
              src={
                profile_path !== null
                  ? `${BASE_URL_PICTURE}${profile_path}`
                  : DEFAULT_FOTO
              }
              alt={original_name}
            />
            <p>{original_name}</p>
            <p> Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}