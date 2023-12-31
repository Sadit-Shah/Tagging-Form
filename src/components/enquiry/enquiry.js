"use client"
import enquiryFormCSS from './enquiry.module.scss'
import react, { useState } from 'react'
export default function Enquiry() {
    const [quickEnquiry, setquickEnquiry] = useState(false)
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        city: '',
        arrivalcity: '',
        persons: '',
        days: '',
        remarks: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (formData.name.length === 0) {
            setError('Please fill name field..')
        } else if (formData.email.length === 0) {
            setError('Please fill email field..')
        } else if(!emailPattern.test(formData.email)){
            setError('Please enter valid email address');
        }else if (formData.mobile.length === 0) {
            setError('Please fill mobile number field..')
        } else if (formData.city.length === 0) {
            setError('Please fill city field..')
        } else if (formData.arrivalcity.length === 0) {
            setError('Please fill arrivalcity field..')
        } else if (formData.persons.length === 0) {
            setError('Please fill persons field..')
        } else if (formData.persons <= 0) {
            setError('Persons should be greater than 0')
        }else if (formData.days.length === 0) {
            setError('Please fill days field..')
        }else if(formData.days<=0){
            setError('Days should be greater than 0')
        }
        else {
            setError('')
            const dataToSubmit = {
                ...formData // Any additional form data object here
            };
            console.log(dataToSubmit);
            handleReset();
        }
    }
    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            mobile: '',
            city: '',
            arrivalcity: '',
            persons: '',
            days: '',
            remarks: ''
        });
    };

    const handleInputChange = (event) => {
        const { target } = event;
        const { name, value } = target;

        setFormData({
            ...formData, // Keep existing form data
            [name]: value // Update form data for the input field that changed
        });

    }



    function handleenquiryWindow() {
        quickEnquiry ? setquickEnquiry(false) : setquickEnquiry(true)
        console.log(quickEnquiry)
    }
    return (
        <>

            <div className={`${enquiryFormCSS.enqContainer} ${quickEnquiry ? enquiryFormCSS.active : ''}`}>
                <div className={enquiryFormCSS.heading} onClick={handleenquiryWindow}>
                    <h3>Quick Enquiry</h3>
                    <i className={`${quickEnquiry ? 'fa-regular fa-circle-xmark' : 'fa-solid fa-arrow-up'}`}></i>
                </div>
                <div className={enquiryFormCSS.enqform}>
                    <label className={enquiryFormCSS.error}>{error}</label>
                    <form method='POST'>
                        <input placeholder="Full Name*" type="text" name="name" value={formData.name} onChange={handleInputChange} />
                        <input placeholder="Email Address*" type="text" name="email" value={formData.email} onChange={handleInputChange} />
                        <input placeholder="Mobile Number*" type="number" name="mobile" value={formData.mobile} onChange={handleInputChange} />
                        <input placeholder="Enter Your City*" type="text" name="city" value={formData.city} onChange={handleInputChange} />
                        <input placeholder="Arrival City*" type="text" name="arrivalcity" value={formData.arrivalcity} onChange={handleInputChange} />
                        <input placeholder="No of Persons*" type="number" name="persons" value={formData.persons} min='0' onChange={handleInputChange} />
                        <input placeholder="No of Days*" type="number" name="days" value={formData.days} min='0' onChange={handleInputChange} />
                        <textarea placeholder="Would you like to provide more details*" name='remarks' value={formData.remarks} onChange={handleInputChange} />
                    </form>
                </div>
                <button type="submit" onClick={handleSubmit} className={enquiryFormCSS.btnsubmit}>Submit</button>
            </div>

        </>


    )
}