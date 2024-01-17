import React, { useState } from 'react';
import backgroundImage from './background.jpg'; // Импорт изображения

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showGenres, setShowGenres] = useState(false);

  const genres = [
    'хорор',
    'боевик',
    'фантастика',
    'аниме',
    'детектив',
    'драмма',
    'комедия',
    'фентези',
    'семейный',
    'мультфильмы',
    'мультфильмы',
    // ... добавьте свои жанры
  ];

  const handleSearch = () => {
    // Реализация поиска по названию фильма
    console.log(`Ищем фильмы по запросу: ${searchTerm}`);
  };

  const handleToggleGenres = () => {
    setShowGenres(!showGenres);
  };

  return (
    <div style={{ textAlign: 'center', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <div style={{ padding: '10px', textAlign: 'left' }}>
        <h1 style={{ margin: 0, fontSize: '3em' }}>КИНОХА</h1>
        <div style={{ textAlign: 'center', marginTop: '-50px' }}>
          <input
            type="text"
            placeholder="Поиск по названию"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Поиск</button>
        </div>
      </div>
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <button onClick={handleToggleGenres}>Жанры</button>
        {showGenres && (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {genres.map((genre, index) => (
              <button key={index} style={{ margin: '5px', padding: '5px' }}>{genre}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;