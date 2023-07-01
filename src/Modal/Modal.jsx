import React, { useContext, useEffect } from "react";
import { WeatherContext } from "../WeatherContextProvider/WeatherContextProvider";

const Modal = () => {
  const { modalContent } = useContext(WeatherContext);

  useEffect(() => console.log(modalContent), []);
  return (
    <div className="modal fade" id="staticBackdrop" aria-hidden="false">
      <div
        className="modal-dialog modal-xl mt-5 modal-div"
        style={{ maxWidth: "700px" }}
      >
        <div className="modal-content">
          <div className="modal-div">
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 me-4 mt-4"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="my-5">
            <div className="d-flex ms-5">
              <div>
                <span className="h2 fw-bold text-decoration-underline">
                  {modalContent.city},
                </span>{" "}
                <span className="h5">{modalContent.country}</span>{" "}
              </div>
              {/* <div className=' fw-bold ms-2 align'>{modalContent.country}</div> */}
            </div>
            <div className="d-flex mt-3">
              <div className="col-md-5 ms-1 position-relative">
                <img
                  src={
                    modalContent.temperature > 30
                      ? "https://as1.ftcdn.net/v2/jpg/01/59/64/76/1000_F_159647671_elprHktHdHzUrmZr1dnN5fpeLxEDG35k.jpg"
                      : modalContent.temperature >= 20 &&
                        modalContent.temperature < 30
                      ? "https://img.freepik.com/free-vector/realistic-fog-background_23-2149115275.jpg"
                      : modalContent.temperature < 20 &&
                        modalContent.temperature >= 10
                      ? "https://wallpaperaccess.com/full/3870710.jpg"
                      : modalContent.temperature < 10 &&
                        modalContent.temperature >= 5
                      ? "https://1.bp.blogspot.com/-5E0sO5GEKWo/UlQpPYK5DtI/AAAAAAAAY-U/a3QHMThFFTI/s1600/Early+Morning+Fog+Wallpapers+%25287%2529.jpg"
                      : "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                  }
                  className="col-md-11 rounded-circle px-4"
                  // alt={}
                  height={200}
                />
                <span
                  className={
                    modalContent.temperature < 5
                      ? "position-absolute fs-1 fw-bold deg-span text-dark"
                      : "position-absolute fs-1 fw-bold deg-span text-white"
                  }
                >
                  {modalContent.temperature} °C
                </span>
              </div>
              <div className="text-start">
                <div className="py-2">
                  <span className="fw-bold">Country : </span>
                  {`${modalContent.country} (${modalContent.country_code})`}
                </div>
                <div className="py-2">
                  <span className="fw-bold">Max-Temp : </span>
                  {modalContent.temperature + 6} °C
                </div>
                <div className="py-2">
                  <span className="fw-bold">Min-Temp : </span>
                  {modalContent.temperature - 5} °C
                </div>
                <div className="py-2">
                  <span className="fw-bold">Condition : </span>
                  {modalContent.temperature > 30
                    ? "Sunny"
                    : modalContent.temperature >= 20 &&
                      modalContent.temperature < 30
                    ? "Haze"
                    : modalContent.temperature < 20 &&
                      modalContent.temperature >= 10
                    ? "Rainy"
                    : modalContent.temperature < 10 &&
                      modalContent.temperature >= 5
                    ? "Foggy"
                    : "Snow"}
                </div>
                <div className="py-2">
                  <span className="fw-bold">Latitude : </span>
                  {modalContent.latitude}
                </div>
                <div className="py-2">
                  <span className="fw-bold">Longitude : </span>
                  {modalContent.longitude}
                </div>
                <div className="py-2">
                  <span className="fw-bold">Pressure : </span>
                  {modalContent.pressure} psi
                </div>
                <div className="py-2">
                  <span className="fw-bold">Wind : </span>
                  {modalContent.wind} km/h
                </div>
                <div className="py-2">
                  <span className="fw-bold">Humidity : </span>
                  {modalContent.humidity} %
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
