import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

export function SingleDog({ dogData }) {

  let imgSrc = `https://cdn2.thedogapi.com/images/${dogData.reference_image_id}.jpg`;
  let height = dogData.height.metric;
  let weight = dogData.weight.metric;

  const navigate = useNavigate();

  return (
    <div className="single-dog-page">
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIcon color='primary' className='back-button' />
      </IconButton>
      <div className='single-dog-info'>
        <img src={imgSrc} alt='some-dog'></img>
        <div className='dog-info-single'>
          <h2>Name: {dogData.name}</h2>
          <p><strong>For:</strong> {dogData.bred_for}</p>
          <p><strong>Height:</strong> {height} cm</p>
          <p><strong>Weight:</strong> {weight} kg</p>
          <p><strong>Temperament:</strong> {dogData.temperament}</p>
          <p><strong>Life Span:</strong> {dogData.life_span} years</p>
        </div>
      </div>
    </div>

  );
}
