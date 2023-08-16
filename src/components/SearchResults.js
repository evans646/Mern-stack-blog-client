import React from "react";
import {Link} from "react-router-dom";

const SearchResults = ({filteredData}) => {
  return (
    <>
     {filteredData.length !== 0 && (
        <div className="data-result">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link className="data-item" to={`/blog/${value.name}`} target="_blank" key={key}>
                <p>{value.title}</p>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchResults;
