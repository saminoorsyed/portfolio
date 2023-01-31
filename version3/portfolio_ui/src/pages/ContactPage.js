// import dependencies
import React from 'react';
// import components


export default function BlogPage(){
    return(
        <section>
            <h1>Contact Me </h1>
            <p> Do you have questions, or are you interested in collaborating with me?</p>
            <p> Please reach out!</p>
            <form className='contact'>

            <fieldset class="contactInfo">
                <input
                    type={"text"}
                    placeholder = "first name"
                    id="fname" 
                    required/>
                <input
                    type={"text"}
                    placeholder = "last name"
                    id="lname" 
                    required/>
                <input
                    type={"email"}
                    placeholder = "email address"
                    id="email" 
                    required/>
            </fieldset>
            <textarea
                id="w3review" 
                name="w3review" 
                rows="4" 
                cols="50"
                placeholder='Write your message here!'/>
            </form>
            <button>submit</button>
        </section>
    )
}