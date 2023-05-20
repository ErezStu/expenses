import { Link } from "react-router-dom";

import pageNotFoundPic from "../../assets/pageNotFoundPic.avif";

import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="expenses-404">
      <div className="expenses-404__titles_container">
        <h1 className="expenses-404__title">אופס</h1>
        <h3 className="expenses-404__sub_title">העמוד לא נמצא</h3>
      </div>
      <div className="expenses-404__pic_container">
        <img className="expenses-404__pic" src={pageNotFoundPic} alt="404" />
      </div>
      <Link className="expenses-404__link" to="/">
        לחץ כאן כדי לחזור לאתר
      </Link>
    </section>
  );
};

export default NotFound;
