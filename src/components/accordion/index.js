import React, { useState } from "react";
import data from './data'
import SingleQuestion from './Question'
import style from './index.module.scss'
import { setRouterUrl } from "utils";

function AccordionApp() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className={style.container}>
        <h3>question an answers about login</h3>
        <section className={style.info}>
          {questions.map(question => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            )
          })}
        </section>
      </div>
    </main>
  )
}

setRouterUrl(AccordionApp, '/accordion')

export default AccordionApp