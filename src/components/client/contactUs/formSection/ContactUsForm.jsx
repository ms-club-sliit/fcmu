import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './contcaUsForm.css'

function ContactUsForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_5qurs4f', 'template_jt84zq9', form.current, 'eRRlFxuVAqopaJyAH').then(
      (result) => {
        console.log(result.text)
        toastNotification('Succesfully sent', 'success')
        e.target.reset()
      },
      (error) => {
        console.log(error.text)
        toastNotification('Something went wrong. Please try again', 'error')
      },
    )
  }

  const toastNotification = (message, status) => {
    if (status === 'success') {
      toast.success(message, {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else if (status === 'error') {
      toast.error(message, {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      toast.info(message, {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <div className="card formCard mb-5 ">
      <div className="px-4">
        <form
          className="row mt-5 d-flex justify-content-center align-items-center"
          ref={form}
          onSubmit={sendEmail}>
          <div className="row mt-4 ">
            <div className="col">
              <input type="text" className="form-control" name="fname" placeholder="First Name" />
            </div>
            <div className="col">
              <input type="text" className="form-control" name="lname" placeholder="Last Name" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <input type="email" className="form-control" name="email" placeholder="Email" />
            </div>
            <div className="col-12 mt-4">
              <input type="text" className="form-control" name="subject" placeholder="Subject" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <textarea
                className="message form-control"
                name="message"
                id="message"
                rows="4"
                placeholder="Message"></textarea>
            </div>
          </div>
          <div className="col-12 mt-4 d-flex justify-content-center align-items-center">
            <input type="submit" className="btnSubmit" value="Send Message" />
          </div>
        </form>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3001}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  )
}

export default ContactUsForm
