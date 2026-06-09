//import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2 className="m-3 text-danger fs-3">
              <b>Car Showroom</b>
            </h2>
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                <div class="card h-100">
                  <img
                    src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-73572,resizemode-75,msid-98986433/industry/auto/auto-news/four-new-cars-set-to-launch-next-month-heres-what-you-need-to-know-about-them.jpg"
                    class="card-img-top"
                    alt="..."
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Lamborghini Urus</h5>
                    <p class="card-text">
                      high-performance luxury super-SUV that blends exotic supercar speed with a sharp, aggressive design.
                      <br />
                      Model: Lamborghini Urus SE
                      <br />
                      Price: ₹4.57 Crore
                    </p>
                    <a href="#" class="btn btn-primary">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                <div class="card h-100">
                  <img
                    src="https://i5.walmartimages.com/seo/Disney-Pixar-Cars-1-55-Scale-Die-Cast-Car-Truck-Play-Vehicle_dda5f901-6b0f-4656-b442-dcbe3a45ac88.9cddca1ba5b6c5fa03591db5947904bd.jpeg"
                    class="card-img-top"
                    alt="..."
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Rolls-Royce Droptail</h5>
                    <p class="card-text">
                      An ultra-exclusive, coach-built luxury roadster representing the peak of bespoke automotive design.
                      <br />
                      Model: La Rose Noire Droptail
                      <br />
                      Price: ₹250 Crore
                    </p>
                    <a href="#" class="btn btn-primary">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                <div class="card h-100">
                  <img
                    src="data:image/jpeg;base64,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"
                    class="card-img-top"
                    alt="..."
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Tata Sierra</h5>
                    <p class="card-text">
                      A modern, rugged lifestyle SUV that brings back an iconic Indian automotive nameplate with futuristic styling and unique rear glass panels.
                      <br />
                      Model: Tata Sierra SUV
                      <br />
                      Price: ₹11.49 Lakh
                    </p>
                    <a href="#" class="btn btn-primary">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                <div class="card h-100">
                  <img
                    src="https://motorwagon.co/wp-content/uploads/2026/05/DSC00367-scaled.jpeg"
                    class="card-img-top"
                    alt="..."
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">G-Wagon</h5>
                    <p class="card-text">
                      A luxury, boxy full-size 4x4 SUV.<br />Model: Mercedes-AMG G63
                    </p>
                    <a href="#" class="btn btn-primary">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                <div class="card h=100">
                  <img
                    src="https://motorwagon.co/wp-content/uploads/2026/05/DSC00367-scaled.jpeg"
                    class="card-img-top"
                    alt="..."
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">G-Wagon</h5>
                    <p class="card-text">
                      A luxury, boxy full-size 4x4 SUV.<br />Model: Mercedes-AMG G63
                    </p>
                    <a href="#" class="btn btn-primary">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                <div class="card h-100">
                  <img
                    src="https://motorwagon.co/wp-content/uploads/2026/05/DSC00367-scaled.jpeg"
                    class="card-img-top"
                    alt="..."
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">G-Wagon</h5>
                    <p class="card-text">
                      A luxury, boxy full-size 4x4 SUV.<br />Model: Mercedes-AMG G63
                    </p>
                    <a href="#" class="btn btn-primary">
                      View Details

                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
