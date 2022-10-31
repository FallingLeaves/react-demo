import React from 'react';
import { useGlobalContext } from './context'
import style from './index.module.scss'

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext()
  return (
    <div className={isModalOpen ? style['modal-container'] + ' ' + style.isOpen : style['modal-container']}>
      <div className={style['modal-content']}>
        <h2>congrats!</h2>
        <p>you answered {((correct / questions.length) * 100).toFixed(0)}% of questions correctly</p>
        <button className={style['close-btn']} onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  )
}

export default Modal