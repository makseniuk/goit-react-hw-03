const SearchBox = ({ value, onChange }) => {
    return (
        <>
            <input
                type="text"
                placeholder="Search Contact"
                onChange={onChange}
                value={value}
            />
        </>
    );
};

export default SearchBox;