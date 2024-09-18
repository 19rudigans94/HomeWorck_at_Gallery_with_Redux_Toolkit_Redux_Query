import React, { useState } from 'react';
import { useGetPhotosByAlbumQuery } from './api/photosApi';
import Filter from './components/Filter';
import Gallery from './components/Gallery';

const App = () => {
  const [albumId, setAlbumId] = useState(1);
  const [limit, setLimit] = useState(50);
  const { data: photos, error, isLoading } = useGetPhotosByAlbumQuery({ albumId, limit });

  if (isLoading) {
    return <p className="text-center text-2xl">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl text-red-600">Error loading photos</p>;
  }

  return (
    <div className="container mx-auto p-4 bg-slate-600">
      <h1 className="text-5xl font-bold mb-4 text-center">Photo Gallery</h1>
      <Filter setAlbumId={setAlbumId} setLimit={setLimit} />
      <Gallery photos={photos} />
    </div>
  );
};

export default App;

