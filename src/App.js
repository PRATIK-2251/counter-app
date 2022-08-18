import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/action/action";

const App = () => {
  const state = useSelector((state) => state);
  // console.log(state);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="row div-tag">
          <div className="col">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <h2>Counter</h2>
              </div>
            </div>
            <div className="box m-auto  d-flex justify-content-center align-items-center">
              <h3 className="fs-3 text-primary">{state}</h3>
            </div>
            <div className="row mt-2">
              <div className="col">
                <button
                  className="btn btn-light btn-outline-warning
                  pe-2 me-3"
                  onClick={() => dispatch(increment())}
                >
                  Increment
                </button>
                <button
                  className="btn btn-light btn-outline-warning me-3"
                  onClick={() => dispatch(decrement())}
                >
                  Decrement
                </button>
                <button
                  className="btn btn-light btn-outline-warning me-3"
                  onClick={() => dispatch(reset())}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
