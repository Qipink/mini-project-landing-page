import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://lumoshive-api-furniture.vercel.app/api';

export const useHeader = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeader = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/header`);
                setData(res.data);
            } catch (err) {
                console.error("Error fetching header data:", err);
            } finally {
                setLoading(false)
            }
        }

        fetchHeader();
    }, []);

    return {data, loading};
}

export const useStats = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/data`)
                setStats(res.data);
            } catch (err) {
                console.error("Error fetching stats data:", err);
            }
        }

        fetchStats();
    }, []);

    return {stats};
}

export const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/category`);
                setCategories(res.data.category);
            } catch (err) {
                console.error("Error fetching categories:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchCategories();
    }, []);
    
     return {categories, loading};
}

export const useProducts = (page = 1, limit = 10) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({totalItems: 0, totalPages: 0});

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`${BASE_URL}/products`, {
                    params: {page, limit}
                });

                setProducts(res.data.products);
                setPagination({
                    totalItems: res.data.totalItems,
                    totalPages: res.data.totalPages
                })
            } catch (err) {
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [page, limit]);

    return {products, loading, pagination};
}

export const useTestimonials = (page = 1, limit = 1) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/testimonials`, {
                    params: {page, limit}
                });
                
                setData(res.data.testimonials[0]);
            } catch (err) {
                console.error("Error fetching testimonials:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchTestimonials();
    }, [page]);

    return {data, loading};
}