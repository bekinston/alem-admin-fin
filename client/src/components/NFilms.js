import React, { Component } from "react"
import M from "materialize-css"
import "materialize-css/dist/css/materialize.min.css"
import MaterialIcon, {colorPalette} from 'material-icons-react';
import {FilmAdd} from "../components/FilmAdd"



class NFilms extends Component {

  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250
    };
    M.Collapsible.init(this.Collapsible, options);
  }

  render() {
    return (
      <>
      <div className = "row">
      <div className = "col s10 offset-s1">
      <ul className ="collapsible" ref={Collapsible => {
      this.Collapsible = Collapsible;}}>
        <li>
            <div className ="center collapsible-header"><center><p>Выложить фильм</p></center></div>
            <div className ="collapsible-body">
              <FilmAdd/>

            </div>
        </li>
      </ul>
      </div>
      </div>

      </>
    );
  }
}

export default NFilms;
