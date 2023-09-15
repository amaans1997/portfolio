import React, { Component } from "react";

class ContactThree extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 justify-content-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">{this.props.contactTitle}</h2>
                                <p className="description">I am available for freelance work. Connect with me via phone: <a href="tel:+919773113603">+91 9773113603</a> or email:
                                    <a href="mailto:asalheen1997@gmail.com">asalheen1997@gmail.com</a> </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactThree;