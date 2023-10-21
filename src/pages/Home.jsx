import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../public/loader.svg";
import "./Home.sass";

// Components
import CountryCard from "../components/country_card/CountryCard";
import Search from "../components/search_input/Search";
import Filter from "../components/filter/Filter";

const Home = () => {
  const [allResults, setAllResults] = useState([]);
  const [search, setSearch] = useState("");
  const [selectOp, setSelectOp] = useState("");

  useEffect(() => {
    const performSearch = () => {
      if (search.length > 0) {
        
        // Fetch countries based on search text (name)
        fetch(`https://restcountries.com/v3.1/translation/${search}`)
          .then((res) => res.json())
          .then((data) => {
            setSelectOp(""); // Reset the selected region filter
            setAllResults(data);
          })
          .catch((e) => console.log(e));
      } else if (selectOp.length > 0) {

        // Fetch countries based on selected region
        fetch(`https://restcountries.com/v3.1/region/${selectOp}`)
          .then((res) => res.json())
          .then((data) => {
            setAllResults(data);
          })
          .catch((e) => console.log(e));
      } else {

        // Fetch all countries if no search text or region is selected
        fetch("https://restcountries.com/v3.1/all")
          .then((res) => res.json())
          .then((data) => {
            setAllResults(data);
          })
          .catch((e) => console.log(e));
      }
    };

    performSearch();
  }, [search, selectOp]);

  const handleFilterChange = (selectedValue) => {
    setSelectOp(selectedValue);
  };

  return (
    <main className="home">
      <section className="search-filter">
        <Search
          type={"text"}
          placeholder={"Search for a country..."}
          onChange={(e) => setSearch(e.target.value.trim())}
        />
        <Filter value={selectOp} onFilterChange={handleFilterChange} />
      </section>

      <section className="all-countries">
        {allResults ? (
          allResults && allResults.length > 0 ? (
            allResults.map((res, index) => (
              <Link
                className="link"
                key={index}
                to={`/single_country/${res.fifa}`}
              >
                <CountryCard
                  countyFlag={res.flags.svg}
                  countyName={res.name.common}
                  countyPopulation={res.population}
                  countyRegion={res.region}
                  countyCapital={res.capital}
                />
              </Link>
            ))
          ) : (
            <p>No results found.</p>
          )
        ) : (
          <img src={Loader} alt="Loading" className="loading" />
        )}
      </section>
    </main>
  );
};

export default Home;
