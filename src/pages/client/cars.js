import React from 'react'
import Header from "../../Layouts/client/Header"
import Footer from "../../Layouts/client/Footer"
import Cars from '../../Components/client/Cars'

const cars = () => {
  return (
    <>
      <div id="wrapper">
        {/* <!-- header begin --> */}
            <Header />
        {/* <!-- header close --> */}

        {/* <!-- content begin --> */}
        <div className="no-bottom no-top zebra" id="content">
          <div id="top"></div>
          {/* <!-- section begin --> */}
          <section id="subheader" className="jarallax text-light">
            <div className="center-y relative text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1>Our Cars</h1>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </section>

          <div className='pt80'>
            <Cars />
          </div>
        </div>
        {/* <!-- content close --> */}

        {/* <!-- footer begin --> */}
            <Footer />
        {/* <!-- footer close --> */}
      </div>
    </>
  )
}

export default cars