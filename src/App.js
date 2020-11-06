import React from 'react'
import ListScreen from './pages/ListScreen/ListScreen'
import './App.css'
import Button from  '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch';
import DetailScreen from './pages/DetailScreen/DetailScreen'

const App = () => {   
  //  console.log(pokemon)

    return (
        <div>
          <div className="header"> 
            <div className="img">
              <img src="Logo-Pokebola-Pokémon-PNG-1200x1200.png" width="50" height="50" margin="0"></img>
            </div>
            <div className="button">
              <b> <Button size="small"  color="secundary">Geração</Button></b>
              <b> <Button size="small"  color="secundary">Modo Escuro</Button></b>
            </div>
          </div>
          <div className="items">
            <div className="onoff"> 
              <Switch defaultChecked color="default" inputProps={{ 'aria-label': 'checkbox with default color' }}/>
            </div> 
            <div>
                <DetailScreen /> 
            </div>
          </div>
        </div>
    )
}

export default App;