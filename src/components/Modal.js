import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <article 
      onClick={props.onDismiss} 
      className="ui dimmer modals visible active"
    >
      {/* prevent bubbling up to history onClick */}
      <div
        onClick={(event) => event.stopPropagation()} 
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">
          {props.content}
        </div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </article>,
    document.getElementById('modal')
  );
};

export default Modal;