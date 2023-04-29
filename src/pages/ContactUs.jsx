import React from 'react'
import HeroSection from '../components/client/contactUs/HeroSection'
import contactUs from '../assets/images/ContactUsPage/contactUs.png'
// eslint-disable-next-line import/extensions
import ContactUsForm from '../components/client/contactUs/formSection/ContactUsForm.jsx'

function ContactUs() {
  return (
    <div>
      <HeroSection
        description="Thank you for reaching out.  We will do it for you as soon as possible. Please be patient.   In the meantime ,if you have any questions, do not hesitate to fill out our form below. Once you submit  the form, a member of our team will contact within day ."
        imgAltText="contactus image"
        imgSrc={contactUs}
        title="Contact Us"
      />
      <div className="w-100 container-fluid px-4 pt-4 m-0 d-flex justify-content-left align-items-center">
        <ContactUsForm />
      </div>
    </div>
  )
}
export default ContactUs
