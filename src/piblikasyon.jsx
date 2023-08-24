import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.css';

export default function Piblikasyon() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts') 
            const pub = await res.json();
            setData(pub);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    useEffect(() => { 
        fetchData();
    }, []);

    return (
        <div className={styles.Piblikasyon}>
            <h3>Klike pou'w we yon piblikasyon </h3>
            {data !== null && (
                <ul>
                    {data.slice(0, 10).map(pub => (
                        <li key={pub.id} className={styles.Pub}>
                            <Link to={`/piblikasyon/pub/${pub.id}`}>piblikasyon {pub.id}</Link>
                            { (pub.id == 10)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
