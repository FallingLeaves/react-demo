import React, { useState, useContext } from "react";

const SideContent = React.createContext()

const SideProvider = ({ children }) => {
  const [isSlidebarOpen, setIsSlidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSlidebar = () => {
    setIsSlidebarOpen(true)
  }
  const closeSlidebar = () => {
    setIsSlidebarOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <SideContent.Provider
      value={{
        isSlidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSlidebar,
        closeSlidebar
      }}
    >
      {children}
    </SideContent.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(SideContent)
}

export { SideContent, SideProvider }