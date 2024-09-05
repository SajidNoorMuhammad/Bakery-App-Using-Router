import { Link } from "react-router-dom";

const Bakery = () => {

    return (
        <>

            <section id="home" className="bg-cover bg-center h-screen text-white flex items-center justify-center">
                <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
                    <h2 className="text-5xl font-bold mb-4">Freshly Baked, Just for You</h2>
                    <p className="text-lg mb-6">Delicious cakes, breads, and pastries made with love.</p>
                    <a href="#products" className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300">Explore Our Products</a>
                </div>
            </section>

            <section id="products" className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Our Baked Goods</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img src="https://images.unsplash.com/photo-1546069901-eacef0df6022" alt="Cake" className="w-full h-48 object-cover rounded-md mb-4"></img>
                            <h3 className="text-2xl font-bold">Chocolate Cake</h3>
                            <p className="text-gray-600 mt-2">Rich and moist chocolate cake.</p>
                            <p className="text-yellow-500 font-bold mt-4">$15.99</p>
                            <button className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300">Add to Cart</button>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img src="https://images.unsplash.com/photo-1547516508-e9109db5e5f4" alt="Bread" className="w-full h-48 object-cover rounded-md mb-4"></img>
                            <h3 className="text-2xl font-bold">Sourdough Bread</h3>
                            <p className="text-gray-600 mt-2">Artisan sourdough with a crispy crust.</p>
                            <p className="text-yellow-500 font-bold mt-4">$5.99</p>
                            <button className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300">Add to Cart</button>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img src="https://images.unsplash.com/photo-1599785209707-e378717fdf93" alt="Pastries" className="w-full h-48 object-cover rounded-md mb-4"></img>
                            <h3 className="text-2xl font-bold">Assorted Pastries</h3>
                            <p className="text-gray-600 mt-2">A selection of flaky, delicious pastries.</p>
                            <p className="text-yellow-500 font-bold mt-4">$9.99</p>
                            <button className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300">Add to Cart</button>
                        </div>

                    </div>
                </div>
            </section>

           
        </>
    )
}

export default Bakery;