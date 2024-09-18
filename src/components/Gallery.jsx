const Gallery = ({ photos }) => {
    if (!photos) return <p className="text-center text-2xl">No photos</p>;

    return (
        <div className="grid grid-cols-5 gap-4 p-4 border rounded-md bg-cyan-500">
            {photos?.map((photo) => (
                <div key={photo.id} className="bg-white rounded-lg shadow-lg p-4">
                    <img src={photo.thumbnailUrl} alt={photo.title} className="mb-2 rounded-lg" />
                    <h2 className="text-2xl font-bold">{photo.title}</h2>
                    <p className="text-sm text-gray-500">Photo ID: {photo.id}</p>
                </div>
            ))}
        </div>
    );
};

export default Gallery;

