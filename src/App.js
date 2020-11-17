import React from 'react'
import ListScreen from './pages/ListScreen/ListScreen'
import './App.css'
import { Button, CssBaseline } from  '@material-ui/core'
import DetailScreen from './pages/DetailScreen/DetailScreen'
import Error from './components/ErrorPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 

const App = () => {   

  return (
    <>
    <CssBaseline />
    <Router>
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

        <Switch>
          <Route path="/moreInfo">
            <DetailScreen />
          </Route>
          <Route path="/error404">
            <Error />
          </Route>
          <Route path="/">
            <ListScreen/>
          </Route>
        </Switch>
      </div> 
    </Router>  
    </>
  )
}

export default App;