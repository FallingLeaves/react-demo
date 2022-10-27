import React from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import style from './index.module.scss'

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <div className={`${isModalOpen ? style['modal-overlay'] + ' ' + style['show-modal'] : style['modal-overlay']}`}>
      <div className={style['modal-container']}>
        <h3>modal content</h3>
        <button className={style['close-modal-btn']} onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  )
}

export default Modal