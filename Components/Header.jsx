import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
        <header className="bg-yellow-400 p-6 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-white">Bakery Delights</h1>
                    <nav className="space-x-6">
                        <Link to="/" className="text-gray-700 hover:text-yellow-600">Home</Link>
                        <Link to="/bakery" className="text-gray-700 hover:text-yellow-600">Products</Link>
                        <Link to="/about" className="text-gray-700 hover:text-yellow-600">About Us</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-yellow-600">Contact</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;