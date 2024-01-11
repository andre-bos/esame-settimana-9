import React from "react";

const MyGallery = () => {

  return (
    <div className="mx-3">
        <h4>Trending Now</h4>
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center"
        >
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="./assets/2.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="./assets/3.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="./assets/4.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="./assets/5.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="./assets/6.png" alt="movie picture" />
          </div>
        </div>
    </div>
  );
};

export default MyGallery;