import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children, showFooter }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  showFooter === false ? (showFooter = false) : (showFooter = true)
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      {showFooter && <Footer />}
    </>
  )
}

export default Layout
