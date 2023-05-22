import React, { useEffect, useState } from "react";
import "./tvPageRow.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiKey, baseUrl, imagebaseUrl } from "../../../App";

const TVCard = ({ tv }) => {
  return (
    <Link to={`/tv/${tv.id}`}>
      <div className="card">
        <img src={`${imagebaseUrl}/${tv.backdrop_path}`} alt="" />
        <div>{tv.name}</div>
      </div>
    </Link>
  );
};

export default function TVPageRow({ genre }) {
  const [imgArray, setImgArray] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      const { data } = await axios.get(
        `${baseUrl}/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genre.id}`
      );
      setImgArray(data.results);
    };
    fetcher(); // eslint-disable-next-line
  }, []);

  return (
    <div className="tv-page-row">
      <h2>{genre.name}</h2>
      <div className="tv-row-container">
        {imgArray.map((item, i) => {
          return item.backdrop_path && <TVCard key={i} tv={item} />;
        })}
      </div>
    </div>
  );
}
