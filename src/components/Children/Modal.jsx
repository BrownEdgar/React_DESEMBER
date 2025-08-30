import { useEffect, useRef, useState } from 'react';
import "./Modal.scss";

function Modal({ children, toggleModal, variant = "info", duration = 5 }) {
  // modalRef =  { current: <div class="Modal"></div> }
  // update ❌
  const modalRef = useRef(null)

  useEffect(() => {

    const current = modalRef?.current
    const handleClick = (event) => {
      if (event.target === modalRef?.current) {
        toggleModal()
      }
    }
    const interval = setTimeout(() => {
      toggleModal()
    }, duration * 1000);


    current.addEventListener('click', handleClick)
    return () => {
      current.removeEventListener('click', handleClick);
      clearTimeout(interval)
    };
  }, [toggleModal, duration]);

  return (
    <div className='Modal' ref={modalRef}>
      <div className={`Modal__Content Modal__Content-${variant}`}>
        {children}
        <div className='Modal__line' style={{ animationDuration: `${duration}s` }}></div>
      </div>
    </div>
  );
}

export default Modal;
