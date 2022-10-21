import React, { useState } from "react";
import data from './data'
import List from './list'
import styleObj from './index.module.scss'
import { setRouterUrl } from "utils";

function BirthdayReminder() {
  const [people, setPeople] = useState(data)
  return (
    <div>
      <section className={styleObj.container}>
        <h3>{people.length} birthdays today</h3>
        <List people={people}></List>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </div>
  )
}

setRouterUrl(BirthdayReminder, '/birthday')

export default BirthdayReminder