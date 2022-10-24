import React, { useState, useEffect } from "react";
import List from './List';
import Alert from './Alert'
import style from './index.module.scss'
const STORAGE_NAME = '__list__'
const getLocalStorage = () => {
  let list = localStorage.getItem(STORAGE_NAME)
  if (list) {
    list = JSON.parse(localStorage.getItem(STORAGE_NAME))
    return list
  } else {
    return []
  }
}

function GroceryApp() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const showAlert = ({ show = false, type = "", msg = "" }) => {
    setAlert({ show, type, msg })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'please enter value')
    } else if (name && isEditing) {
      setList(list.map(item => {
        if (item.id === editId) {
          return { ...item, title: name }
        }
        return item
      }))
      setName('')
      setEditId(null)
      setIsEditing(false)
      showAlert(true, 'success', 'value changed')
    } else {
      showAlert(true, 'success', 'item added to the list')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  const clearList = () => {
    showAlert(true, 'danger', 'empty list')
    setList([])
  }

  const removeItem = id => {
    showAlert(true, 'danger', 'item removed')
    setList(list.filter(v => {
      return v.id !== id
    }))
  }

  const editItem = id => {
    const specificItem = list.find(v => v.id === id)
    setIsEditing(true)
    setEditId(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(list))
  }, [list])

  return (
    <section className={style['section-center']}>
      <form className={style['grocery-form']} onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}></Alert>}

        <h3>grocery bud</h3>
        <div className={style['form-control']}>
          <input type="text" className={`${style.grocery} ${style.input}`} value={name} onChange={e => setName(e.target.value)}></input>
          <button type="submit" className={style['submit-btn']}>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className={style['grocery-container']}>
          <List items={list} removeItem={removeItem} editItem={editItem}></List>
          <button className={style['clear-btn']} onClick={clearList}>
            clear items
          </button>
        </div>
      )}

    </section>
  )
}

export default GroceryApp