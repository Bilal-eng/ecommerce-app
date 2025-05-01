import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [query]);

    const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    // Paginated products (sliced)
    const paginated = filtered.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="p-4 max-w-6xl mx-auto">
            <SearchBar query={query} setQuery={setQuery} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {paginated.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="flex justify-center mt-6 gap-2">
                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
                >
                    Prev
                </button>

                {[...Array(Math.ceil(filtered.length / itemsPerPage))].map((_, i) => {
                    const page = i + 1;
                    return (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-1 rounded ${currentPage === page
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                        >
                            {page}
                        </button>
                    );
                })}

                <button
                    onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, Math.ceil(filtered.length / itemsPerPage)))
                    }
                    disabled={currentPage === Math.ceil(filtered.length / itemsPerPage)}
                    className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
            {/* <div className="flex justify-center mt-6 gap-2">
                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
                >
                    Prev
                </button>

                <button
                    onClick={() => setCurrentPage((p) => p + 1)}
                    disabled={currentPage >= Math.ceil(filtered.length / itemsPerPage)}
                    className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div> */}
        </div>
    );
};

export default Home;