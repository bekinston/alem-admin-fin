import React, { Component } from "react"
import M from "materialize-css"
import "materialize-css/dist/css/materialize.min.css"
import {Auth} from '../components/Auth'



class Modal extends Component {

  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "35%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <>
        <button
          className="login-btn z-depth-1 modal-trigger"
          data-target="modal1"
        >
          Войти
        </button>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content black-text">
            <Auth/>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
