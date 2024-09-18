const Filter = ({ setAlbumId, setLimit }) => {
    const handleChange = (e) => {
        const value = e.target.value;

        if (e.target.type === 'number') {
            setAlbumId(Number(value));
        } else {
            setLimit(Number(value));
        }
    };

    return (
        <div className="flex justify-center mb-4">
            <input
                type="number"
                min="1"
                max="100"
                placeholder="Album ID"
                className="border px-2 py-1 mr-2 rounded-md"
                onChange={handleChange}
            />
            <select className="border px-2 py-1 rounded-md" onChange={handleChange}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
        </div>
    );
};

export default Filter;

