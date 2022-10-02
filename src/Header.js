import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


export function Header({getDogs}) {

  return (
    <div>
      <AppBar>
        <Toolbar>
          <div className="header-button">
            <Link to='/'><Button color='inherit' variant="text">Home</Button></Link>
            <Link to='/all-dogs'><Button onClick={getDogs} color='inherit' variant="text">All Dogs</Button></Link>
          </div>
          <h1 id='header-title'>DogsPedia</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
}


