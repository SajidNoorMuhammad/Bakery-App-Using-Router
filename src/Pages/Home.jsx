const Home = () => {
    return (
        <>

            <section className="bg-cover bg-center h-screen bg-[url('https://images.unsplash.com/photo-1608198093002-0ccf55f9ee08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80')] flex items-center">
                <div className="container mx-auto text-red-700 text-center">
                    <h2 className="text-5xl font-bold text-yellow-400 drop-shadow-md">Freshly Baked Every Day</h2>
                    <p className="mt-4 text-xl text-yellow-400">Delicious cakes, pastries, and breads, made with love and care.</p>
                    <a href="#" className="mt-6 inline-block bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition">Shop Now</a>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Featured Bakes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://via.placeholder.com/400x300" alt="Product 1" className="w-full h-48 object-cover"></img>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">Chocolate Cake</h3>
                                <p className="mt-2 text-gray-600">$12.99</p>
                                <a href="#" className="mt-4 block bg-yellow-600 text-white text-center py-2 rounded hover:bg-yellow-700 transition">Order Now</a>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://via.placeholder.com/400x300" alt="Product 2" className="w-full h-48 object-cover"></img>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">Strawberry Tart</h3>
                                <p className="mt-2 text-gray-600">$8.99</p>
                                <a href="#" className="mt-4 block bg-yellow-600 text-white text-center py-2 rounded hover:bg-yellow-700 transition">Order Now</a>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://via.placeholder.com/400x300" alt="Product 3" className="w-full h-48 object-cover"></img>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">Fresh Baguette</h3>
                                <p className="mt-2 text-gray-600">$3.99</p>
                                <a href="#" className="mt-4 block bg-yellow-600 text-white text-center py-2 rounded hover:bg-yellow-700 transition">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;