/* eslint-disable react/prop-types */
import "./CountryCard.sass";

const CountryCard = ({
  countyFlag,
  countyName,
  countyPopulation,
  countyRegion,
  countyCapital
}) => {

  return (
    <div className="country-card">
      <div className="flag-img">
        <img src={countyFlag} alt="Country Flag" />
      </div>
      <div className="info">
        <h5>{countyName}</h5>
        <p>
          Population:<span>{countyPopulation}</span>
        </p>
        <p>
          Region:<span>{countyRegion}</span>
        </p>
        <p>
          Capital:<span>{countyCapital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
