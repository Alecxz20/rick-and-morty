export default function Search({searchValue, setSearchValue, handleSubmit}) {
    
    function typing (e) {
        setSearchValue(e.target.value)
    }

    const submitting = (e) => {
        e.preventDefault()
        handleSubmit(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
    }

    return(
        <div className="searchContainer">
            <form className="searchBox" onSubmit={submitting}>
                <input onChange={typing} className="searchInput" type="text" value={searchValue} />
                <button className="searchBox" type="submit">Search</button>
            </form>
        </div>
    )
}