
const Contact = () => {
    return (
        <>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
                    <p className="mt-4 text-gray-600 text-lg">We'd love to hear from you! Whether you have a question about our products, feedback, or anything else, our team is here to help.</p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label className="block text-gray-600">Full Name</label>
                                <input type="text" id="name" name="name" required className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"></input>
                            </div>
                            <div>
                                <label className="block text-gray-600">Email Address</label>
                                <input type="email" id="email" name="email" required className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"></input>
                            </div>
                            <div>
                                <label className="block text-gray-600">Message</label>
                                <textarea id="message" name="message" rows="4" required className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition">Send Message</button>
                        </form>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Contact Information</h3>
                        <p className="text-gray-600 mb-4">Feel free to reach out to us directly through our contact details below:</p>

                        <div className="mt-4">
                            <h4 className="text-xl font-semibold text-gray-800">Address</h4>
                            <p className="text-gray-600 mt-2">1234 Bakery Lane, Sweet Town, USA</p>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-xl font-semibold text-gray-800">Phone</h4>
                            <p className="text-gray-600 mt-2">+1 555-123-4567</p>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-xl font-semibold text-gray-800">Email</h4>
                            <p className="text-gray-600 mt-2">contact@bakerydelights.com</p>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-xl font-semibold text-gray-800">Opening Hours</h4>
                            <p className="text-gray-600 mt-2">Mon - Sat: 8:00 AM - 6:00 PM</p>
                            <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact;