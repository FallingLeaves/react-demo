import React, { useState, useContext } from "react";
import sublinks from './data'

const SubmenuContext = React.createContext()

const SubmenuProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [page, setPage] = useState({ page: "", links: [] })
  const [location, setLocation] = useState({})

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find(link => link.page === text)
    setPage(page)
    setLocation(coordinates)
    setIsSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }

  return (
    <SubmenuContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </SubmenuContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(SubmenuContext)
}

export {
  SubmenuContext, SubmenuProvider
}