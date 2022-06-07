import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../redux/actions/counterActions";

const Counter = () => {
  const dispatch = useDispatch();

  const { count } = useSelector((state) => state.counterReducer);

  return (
    <div className="m-auto bg-purple-500 w-5/12 text-center p-8 mb-8 mt-4 rounded-md">
      <div className=" mb-8 font-extrabold text-gray-200">COUNT : {count}</div>

      <div className="flex justify-between text-sm">
        <button
          onClick={() => dispatch(incrementAction())}
          className="bg-purple-900 text-white p-2 rounded-md border-2 border-gray-100"
        >
          INCREMENT +
        </button>
        <button
          onClick={() => dispatch(resetAction())}
          className="bg-purple-900 text-white p-2 rounded-md border-2 border-gray-100"
        >
          RESET
        </button>
        <button
          onClick={() => dispatch(decrementAction())}
          className="bg-purple-900 text-white p-2 rounded-md border-2 border-gray-100"
        >
          DECREMENT -
        </button>
      </div>
    </div>
  );
};

export default Counter;
