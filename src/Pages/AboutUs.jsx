
const AboutUs = () => {
    return (
        <>

            <section className="bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
                    <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                        At <span className="text-yellow-600 font-bold">Bakery Delights</span>, we believe in the magic of freshly baked goods.
                        Established in 2005, we have been bringing joy and warmth to our customers with our wide range of artisanal breads, pastries, and cakes.
                        Every day, our bakers rise early to ensure that every bite of our products is made with the finest ingredients and lots of love.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                        We are proud to be a family-owned bakery, where tradition meets innovation. Our passion for baking and dedication to quality is what sets us apart.
                        From a small local shop, we have grown into a beloved community staple, known for our friendly service and exceptional products.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl font-bold text-gray-800 text-center">Meet Our Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member 1" className="w-24 h-24 mx-auto rounded-full mb-4"></img>
                            <h4 className="text-xl font-semibold text-gray-800">Sarah Baker</h4>
                            <p className="text-gray-600">Head Pastry Chef</p>
                            <p className="mt-4 text-gray-500">Sarah is a master of flavor and design, creating beautiful, delicious treats that delight our customers every day.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member 2" className="w-24 h-24 mx-auto rounded-full mb-4"></img>
                            <h4 className="text-xl font-semibold text-gray-800">John Dough</h4>
                            <p className="text-gray-600">Master Baker</p>
                            <p className="mt-4 text-gray-500">With over 20 years of experience, John ensures that every loaf of bread is baked to perfection, crisp on the outside and soft on the inside.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member 3" className="w-24 h-24 mx-auto rounded-full mb-4"></img>
                            <h4 className="text-xl font-semibold text-gray-800">Emily Sweets</h4>
                            <p className="text-gray-600">Creative Director</p>
                            <p className="mt-4 text-gray-500">Emily is the heart behind our innovative bakery creations, constantly coming up with new, fun ideas to surprise our customers.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold text-gray-800">Why Choose Us?</h3>
                    <div className="mt-8 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">
                        <div className="max-w-xs bg-gray-50 p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-semibold text-yellow-600">Quality Ingredients</h4>
                            <p className="mt-4 text-gray-600">We only use the best, locally sourced ingredients to ensure that every bite is as fresh and delicious as possible.</p>
                        </div>
                        <div className="max-w-xs bg-gray-50 p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-semibold text-yellow-600">Handcrafted Goods</h4>
                            <p className="mt-4 text-gray-600">Our bakers handcraft every item, ensuring a unique and personal touch with every product we create.</p>
                        </div>
                        <div className="max-w-xs bg-gray-50 p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-semibold text-yellow-600">Community Driven</h4>
                            <p className="mt-4 text-gray-600">We love giving back to the community that has supported us over the years, and we take pride in being a part of it.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs