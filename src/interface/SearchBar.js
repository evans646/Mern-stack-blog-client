import React,{useState} from "react";
import SearchResults from "../components/SearchResults";

export function SearchBar({data }){
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())||value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

    return(
    <div className="columns search-column">
        <section className="search">
       <form>
         <fieldset>
            <input type="text" name="search" placeholder="Search..." maxLength="100"   value={wordEntered} onChange={handleFilter}/>
        </fieldset>
         <fieldset></fieldset>
       </form>
       </section>
       <SearchResults filteredData={filteredData}/>
    </div>
    )
};