import React from 'react'
import HeroSection from '../components/client/contactUs/HeroSection'
import contactUs from '../assets/images/ContactUsPage/contactUs.png'
// eslint-disable-next-line import/extensions
import ContactUsForm from '../components/client/contactUs/formSection/ContactUsForm.jsx'

function ContactUs() {
  return (
    <div>
      <HeroSection
        description="Thank you for reaching out to us! We are thrilled that you are interested in our services, and we are eager to help you bring your ideas to life. Our team of experienced professionals is dedicated to providing high-quality media services to our students, faculty, and staff at the SLIIT Faculty of Computing.We understand that time is of the essence, and we will do our best to fulfill your request as soon as possible. However, we kindly ask for your patience as we work diligently to ensure that your project receives the attention and care it deserves. Rest assured that we will keep you informed of our progress every step of the way."
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
