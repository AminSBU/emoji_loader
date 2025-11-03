import { useState, useEffect } from 'react';
import './App.css';

const ApiWithKey = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = '47/9xgXbTofxC8Bbhndayg==mlz7vxlxrrnD8j6Q';
    const API_URL = 'https://api.api-ninjas.com/v1/emoji?name=slightly smiling face';

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(API_URL, {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': API_KEY
                        // Alternative header formats:
                        // 'X-API-Key': API_KEY,
                        // 'API-Key': API_KEY,
                    }
                });

                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="loading">Loading data... 🔄</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="api-container">
            <h1>API Data with API Key</h1>
            <div className="data-grid">
                {data.map(item => (
                    <div key={item.id} className="data-card">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        {/* Render other data properties as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApiWithKey;