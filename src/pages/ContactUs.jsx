import React from 'react'
import HeroSection from '../components/client/contactUs/HeroSection'
import contactUs from '../assets/images/ContactUsPage/contactUs.png'

function ContactUs() {
    return (
        <div>
            <HeroSection
                description={'Lorem ipsum dolor sit amet consectetur. Vulputate iaculis facilisis consequat nec amet mi morbi' +
                    ' blandit. Facilisis posuere blandit massa turpis nulla. Sed risus tellus nunc pellentesque. Suspendisse ' +
                    'arcu commodo bibendum risus. Amet risus facilisis vitae tellus adipiscing semper arcu risus. Viverra non ' +
                    'dui dui sodales auctor neque phasellus varius. Vulputate lobortis felis diam eu at viverra nulla. Eu nulla ' +
                    'arcu in quam. Vitae justo ultrices pellentesque in orci nulla duis. Neque non enim laoreetfacilisis vitae' +
                    ' tellus adipiscing semper arcu risus. Viverra non ' +
                    'dui dui sodales auctor neque phasellus varius. Vulputate lobortis felis diam eu at viverra nulla. Eu nulla ' +
                    'arcu in quam. Vitae justo ultrices pellentesque in orci nulla duis. Neque non enim laoreet '}
                imgAltText={'contactus image'}
                imgSrc={contactUs}
                title={'Contact Us'}
            />
        </div>
    )
}

export default ContactUs
