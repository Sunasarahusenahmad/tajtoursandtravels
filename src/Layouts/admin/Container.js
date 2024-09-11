import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { ToastContainer } from 'react-toastify'

const Container = ({children}) => {
  return (
    <>
        <Sidebar />
        <div className="content">
          <Navbar/>
          <div>
            <main>
              {children}
            </main>
          </div>
          <ToastContainer />
        </div>
    </>
  )
}

export default Container