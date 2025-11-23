// src/ContactMe/ContactMe.jsx

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import TextPressure from '../components/TextPressure/TextPressure.jsx';
import TextType from '../components/TextType/TextType.jsx';

function ContactMe() {
    // Make sure 'mkgenkad' is the correct Formspree ID
    const [state, handleSubmit] = useForm("mkgenkad"); 
    
    if (state.succeeded) {
        return (
            <div className="text-white text-center p-12 max-w-xl mx-auto my-20 text-black rounded-lg shadow-xl border border-gray-700">
                <p className="text-2xl font-semibold">Thanks for contacting me! I will get back to you soon.</p>
            </div>
        );
    }

    return (
        <section id="contact" className="py-20 px-4 bg-black">
            
            {/* Centered Heading */}
            <TextPressure 
                text="Let's Connect" 
                className="text-5xl md:text-6xl text-center text-blue-300 p-5 mb-12 font-extrabold" 
            />

            {/* Centered TextType component */}
            <div className="flex justify-center mb-10">
                <TextType text='Would love a message from you...' typingSpeed={5} deletingSpeed={5} className='text-gray-500 text-3xl font-semibold'/>
            </div>
            
            {/* Form Card Container: Added border-white and p-8 */}
            <div className='max-w-xl mx-auto p-8 rounded-xl border border-white bg-black shadow-2xl'> 
                <form 
                    onSubmit={handleSubmit}
                    className='text-white flex flex-col space-y-6'
                >
                    <h2 className="text-3xl font-semibold mb-4 text-center">Get In Touch</h2>
                    
                    {/* Name Input Group */}
                    <div className='flex flex-col'>
                        <label htmlFor="name" className="mb-2 text-lg font-medium">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder='Please Enter Your Name. . .'
                            required
                            // Input: Added border border-white and focus:ring-white
                            className="p-3 border border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-white"
                        />
                    </div>
                    
                    {/* Email Input Group */}
                    <div className='flex flex-col'>
                        <label htmlFor="email" className="mb-2 text-lg font-medium">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder='Please Enter Your Email Address. . .'
                            required
                            // Input: Added border border-white and focus:ring-white
                            className="p-3  border border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-white"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            className="text-red-400 mt-1 text-sm"
                        />
                    </div>
                    
                    {/* Message Input Group */}
                    <div className='flex flex-col'>
                        <label htmlFor="message"
                         className="mb-2 text-lg font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Would Love To Hear From You. . .'
                            required
                            rows="5"
                            // Textarea: Added border border-white and focus:ring-white
                            className="p-3 border border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-white resize-none"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                            className="text-red-400 mt-1 text-sm"
                        />
                    </div>
                    
                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        disabled={state.submitting}
                        className={`
                            p-3 mt-4 text-lg font-bold rounded-xl transition duration-300 shadow-xl 
                            ${state.submitting 
                                ? 'bg-gray-600 cursor-not-allowed' 
                                : 'bg-white hover:bg-red-200 text-black active:bg-red-200'
                            }
                        `}
                    >
                        {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactMe;