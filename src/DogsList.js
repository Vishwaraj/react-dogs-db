import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export function DogsList({data, singleDogInfo}) {
  
  return (

    <div className='dogs-list'>

     {data.map((dog, index) => {
       return (<div key={index}>
         <Card elevation={3} className='dog-card'>
        <img  src={dog.image.url} alt='some-dog' />
        <CardContent className='dog-info'>
          <h3>{dog.name}</h3>
          <p>For: {dog.bred_for}</p>
        </CardContent>
        <CardActions className='dog-info-button'>
        <Link to='/single-dog'><Button onClick={() => {singleDogInfo(dog.id)}} size='small' variant="outlined">Learn More</Button></Link>
        </CardActions>
      </Card>
      </div>
      );
     })}

    </div>
  );
}
