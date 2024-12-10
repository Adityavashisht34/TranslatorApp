// src/components/History/History.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import '../../styles/History.css'; // Import the CSS file for styling

function History() {
    const [history, setHistory] = useState([]);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (userId) {
            axios.get(`http://127.0.0.1:3001/userTranslations/${userId}`)
                .then(response => {
                    setHistory(response.data);
                })
                .catch(err => console.log(err));
        }
    }, [userId]);

    return (
        <div className="history-container">
            <Header />
            <h1>Your Translation History</h1>
            {history.length > 0 ? (
                <ul className="history-list">
                    {history.map((item, index) => (
                        <li key={index} className="history-item">
                            <div className="history-item-content">
                                <p><strong>From:</strong> {item.fromlanguage}</p>
                                <p><strong>To:</strong> {item.tolanguage}</p>
                                <p><strong>Original:</strong> {item.fromtranslation}</p>
                                <p><strong>Translated:</strong> {item.totranslation}</p>
                                <p><strong>Date:</strong> {item.date}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-history">No history found.</p>
            )}
        </div>
    );
}

export default History;