import React from "react";
import { useGlobalContext, QuizProvider } from './context'
import style from './index.module.scss'
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer
  } = useGlobalContext()

  if (waiting) {
    return <SetupForm></SetupForm>
  }
  if (loading) {
    return <Loading></Loading>
  }

  const { question, incorrect_answers, correct_answer } = questions[index]
  let answers = [...incorrect_answers]
  const tempIndex = Math.floor(Math.random() * 4)
  if (tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }

  return (
    <div className={style.main}>
      <Modal></Modal>
      <section className={style.quiz}>
        <p className={style['correct-answers']}>
          correct answers : {correct} / {index}
        </p>
        <article className={style.container}>
          <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
          <div className={style['btn-container']}>
            {
              answers.map((answer, index) => {
                return (
                  <button
                    key={index}
                    className={style['answer-btn']}
                    onClick={() => checkAnswer(correct_answer === answer)}
                    dangerouslySetInnerHTML={{ __html: answer }}
                  >
                  </button>
                )
              })
            }
          </div>
        </article>
        <button className={style['next-question']} onClick={nextQuestion}>
          next question
        </button>
      </section>
    </div>
  )
}

function QuizApp() {
  return (
    <QuizProvider>
      <App></App>
    </QuizProvider>
  )
}

export default QuizApp