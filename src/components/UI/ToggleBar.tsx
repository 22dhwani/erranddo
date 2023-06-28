import { useState } from "react";

import "./../../styles/ToggleBar.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TogglerBar = (props: { status: boolean }) => {
  const [status, setStatus] = useState<boolean>(props.status);

  const [statusChange, setStatusChange] = useState(false);
  const onStatusChange = (status: boolean) => {
    if (status) {
      console.log("Active");
      setStatus((prevStatus) => !prevStatus);
    } else {
      console.log("InActive");
      setStatus((prevStatus) => !prevStatus);
    }
  };

  const statusHandler = () => {
    onStatusChange(!status);
    toast.success("Status Changed !");
    // setStatusChange(true);
    // setTimeout(() => {
    //   setStatusChange(false);
    // }, 3000);
  };
  return (
    <div>
      {/* {statusChange && (
        <div
          id="statuspopup"
          className="fixed top-4 py-4 px-4 z-50 bg-cyan-400 right-10 rounded-sm  text-white font-semibold bg-opacity-80 flex align-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-flag mr-2"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z" />{" "}
          </svg>
          Resort Status Changed
        </div>
      )} */}

      <label className="switch">
        {status && (
          <input
            type="checkbox"
            checked={status === true}
            onClick={statusHandler}
          />
        )}
        {!status && <input type="checkbox" onClick={statusHandler} />}
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default TogglerBar;
