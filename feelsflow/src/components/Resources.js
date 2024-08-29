import React, { useState } from 'react';
import articles from '../data/dummyData';  // Assuming you've set up a dummyData file
import './Resources.css';

const Resources = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const handleFilterChange = (category) => {
        setActiveCategory(category);
    };

    const filteredArticles = articles.filter(article => 
        activeCategory === 'all' || article.category === activeCategory
    );

    return (
        <div className="resources-page">
            {/* Filter Section */}
            <div className="filters">
                <button
                    onClick={() => handleFilterChange('all')}
                    className={activeCategory === 'all' ? 'filter-button active' : 'filter-button'}
                >
                    All
                </button>
                <button
                    onClick={() => handleFilterChange('managing anxiety')}
                    className={activeCategory === 'managing anxiety' ? 'filter-button active' : 'filter-button'}
                >
                    Managing Anxiety
                </button>
                <button
                    onClick={() => handleFilterChange('managing food')}
                    className={activeCategory === 'managing food' ? 'filter-button active' : 'filter-button'}
                >
                    Managing Food
                </button>
                <button
                    onClick={() => handleFilterChange('managing life')}
                    className={activeCategory === 'managing life' ? 'filter-button active' : 'filter-button'}
                >
                    Managing Life
                </button>
            </div>

            <div className="content-section">
                {/* Articles Section */}
                <div className="articles-container">
                    {filteredArticles.map(article => (
                        <div key={article.id} className="article-card">
                            <img src={article.imageUrl} alt={article.title} />
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <a href={article.link} className="read-more">Read more</a>
                        </div>
                    ))}
                </div>

                {/* Spotify Playlist Section */}
                <div className="playlist-container">
                    <iframe 
                        title="Spotify Playlist"
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U?utm_source=generator" 
                        width="100%" 
                        height="352" 
                        frameBorder="0" 
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Resources;
