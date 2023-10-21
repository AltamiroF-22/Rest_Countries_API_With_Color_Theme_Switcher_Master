import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import "./SingleCountry.sass";

import Loader from "../../public/loader.svg";

const SingleCountryPage = () => {
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    // Fetch data for the specific country using its alpha code
    fetch(`https://restcountries.com/v3.1/alpha?codes=${countryName}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      })
      .catch((error) => {
        console.error("Erro na chamada à API:", error);
      });
  }, [countryName]);

  // Helper function to render data elements
  const renderData = (label, value) => {
    return value ? (
      <p>
        {label} <span>{value}</span>
      </p>
    ) : (
      <p> </p>
    );
  };

  // Helper function to render country flag image
  const renderImage = (imageSrc) => {
    return imageSrc ? (
      <img src={imageSrc} alt="Country Flag" />
    ) : (
      <p>No image found</p>
    );
  };

  if (!countryData) {
    // Show a loading indicator while data is fetched
    return (
      <div>
        <img src={Loader} alt="Loading" className="loading" />
      </div>
    );
  }

 // Render country information based on data received from the API
  return (
    <main className="main-single-country">
      <Link className="back-btn" to="/">
        <FaArrowAltCircleLeft /> Back
      </Link>

      <section className="Single-country">
        <div className="left-side">
          {renderImage(countryData[0]?.flags?.svg)}
        </div>

        <div className="right-side">
          <div className="top">
            {renderData("", countryData[0]?.name?.common)}
          </div>

          <div className="mid">
            {countryData[0] ? (
              <div className="mid-left">
                {renderData("Official Name:", countryData[0]?.name?.official)}
                {renderData("Population:", countryData[0]?.population)}
                {renderData("Region:", countryData[0]?.region)}
                {renderData("Subregion:", countryData[0]?.subregion)}
                {renderData("Capital:", countryData[0]?.capital)}
              </div>
            ) : (
              ""
            )}

            <div className="mid-right">
              {countryData[0]?.currencies &&
              Object.keys(countryData[0].currencies).length > 0 ? (
                <p>
                  Currencies:{" "}
                  <span>
                    {Object.keys(countryData[0].currencies)
                      .map(
                        (currencyCode) =>
                          countryData[0].currencies[currencyCode].name
                      )
                      .join(", ")}
                  </span>
                </p>
              ) : (
                <img src={Loader} alt="Loading" className="loading" />
              )}
              <p>{renderData("Top Level Domain:", countryData[0]?.tld)}</p>
            </div>
          </div>

          {countryData[0] ? (
            <div className="bottom">
              <p>Border Countries:</p>

              <div className="borders">
                {countryData[0]?.borders &&
                  countryData[0].borders.map((result, index) => (
                    <Link
                      className="link-redu"
                      key={index}
                      to={`/single_country/${result}`}
                    >
                      {result}
                    </Link>
                  ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </main>
  );
};

export default SingleCountryPage;
