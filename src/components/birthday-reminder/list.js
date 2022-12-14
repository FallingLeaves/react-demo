import React from "react";
import styleObj from './index.module.scss'

const List = ({ people }) => {
  return (
    <>
      {people.map(person => {
        const { id, name, age, image } = person
        return (
          <article key={id} className={styleObj.person}>
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List