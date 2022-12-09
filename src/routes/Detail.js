import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movieData, setMovieData] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieData(json.data.movie);
  };
  console.log(movieData);

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div style={{ backgroundColor: "#202124", width: "100%" }}>
      <div
        className="datailContainer"
        style={{ width: "1200px", margin: "0 auto" }}
      >
        <div className="movieImage" style={{ width: "100%" }}>
          <img src={movieData.large_cover_image} style={{ width: "100%" }} />
        </div>
        <div
          className="movieHeader"
          style={{ marginTop: "160px", display: "flex", height: "120px" }}
        >
          <img src={movieData.medium_cover_image} style={{ height: "100%" }} />
          <div
            className="movieTitle"
            style={{ marginLeft: "40px", color: "white" }}
          >
            <h1 style={{ marginTop: "0" }}>{movieData.title_long}</h1>
            <p>
              {movieData.year}년 · {movieData.runtime}분
            </p>
          </div>
        </div>

        <div
          className="movieRate"
          style={{
            width: "100%",
            display: "flex",
            color: "white",
            fontSize: "19px",
          }}
        >
          <p>
            rate&nbsp;:&nbsp;{movieData.rating}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p>
            downlaod&nbsp;:&nbsp;{movieData.download_count}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p>like&nbsp;:&nbsp;{movieData.like_count}</p>
        </div>

        <div
          className="moviecontent"
          style={{
            color: "white",
            fontSize: "20px",
            marginTop: "30px",
            lineHeight: "28px",
            letterSpacing: "0.04em",
          }}
        >
          {movieData.description_full}
        </div>

        <div
          className="movieMusic"
          style={{ color: "white", marginTop: "30px" }}
        >
          {movieData.genres}
        </div>
      </div>
    </div>
  );
}

export default Detail;
