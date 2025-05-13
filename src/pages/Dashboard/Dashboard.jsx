
import AddProductButton from '../../Elements/AddProductButton';
import { useAuth } from '../../context/authContext.jsx';
import ProductCard from '../../Elements/ProductCard/index.jsx';
import cls from './Dashboard.module.scss';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/products.js';

const Dashboard = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.log("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className={cls.dashboard}>
            <div className={cls.cards__container}>
                {products && products?.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
            {user?.role === 'admin' && <AddProductButton />}
        </div>
    );
};

export default Dashboard;
