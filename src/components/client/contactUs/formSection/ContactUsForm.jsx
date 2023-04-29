import React from 'react'
import './contcaUsForm.css'

function ContactUsForm() {
    return (
        <div className="card formCard mb-5 ">
            <div className= "px-4">
                <form className="row mt-5 d-flex justify-content-center align-items-center">
                    <div className="row mt-4 ">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First Name"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="col-12 mt-4">
                            <input type="text" className="form-control" placeholder="Subject"/>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <textarea className="message form-control" id="message" rows="4" placeholder="Message"></textarea>
                        </div>
                    </div>
                <div className="col-12 mt-4 d-flex justify-content-center align-items-center">
                    <button type="submit" className="btnSubmit">Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default ContactUsForm
