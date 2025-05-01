import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="p-4 max-w-6xl mx-auto">
            <SearchBar query={query} setQuery={setQuery} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;