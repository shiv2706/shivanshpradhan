import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xwpqvdga");

    if (state.succeeded) {
        return (
            <div className="text-indigo-400 text-center lg:mt-90 text-lg text-5xl font-semibold mt-50 mb-50" >
                Thanks for contacting me!
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md w-full sm:mt-25 mx-auto p-6 bg-transparent shadow-md rounded-md space-y-8">
            <h2 className="text-2xl font-bold text-center text-white">Contact Me</h2>

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-1 w-full px-3 py-2 border text-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1 w-full px-3 py-2 border text-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Your message"
                    rows="4"
                    className="mt-1 w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
                {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}

export default ContactForm;
