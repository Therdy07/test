import React from "react";
import { Link } from "react-router-dom";
import { CgTimer } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DateTime from "./DateTime";
export default function Navbar() {

  return (
    <>
      <div
        data-v-46c9dc4f=""
        className="header row"
        style={{ flexDirection: "row" }}
      >
        <div
          data-v-46c9dc4f=""
          className="row"
          style={{ flexDirection: "row" }}
        >
          <Link
            data-v-46c9dc4f=""
            to="/"
            aria-current="page"
            className="router-link-exact-active router-link-active"
          >
            <svg
              data-v-46c9dc4f=""
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 300 143.5"
              width={60}
              height={20}
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="#ffffff"
                  d="M237,49.3v-4.5c0-3.7,2.8-3.5,4.1-3.5h34.3c5.7,0,10.2-4.6,10.2-10.2v-2.2c0-5.7-4.6-10.2-10.2-10.2h-43.3
    c-13.3,0-25.7,7.4-25.7,25.2v5.3V56v2.2v3.1v4.3c0-0.4,0.1-0.6,0.1-0.8c1.3,13,9.8,19.5,19.9,21.2c1.8,0.4,3.6,0.5,5.5,0.5h16.6
    h5.1c0.6,0.4,1.1,0.8,1.2,1.8c0.1,0.4,0.1,0.7,0.1,1.2v3.4v7.8v3.4c0,3.7-2.8,3.5-4.1,3.5l-44.5,0.4l-66.9-0.2h-5.4
    c-3.3,0-5.8-2.7-5.8-5.8v-9.5c0-3,2.3-5.5,5.3-5.8h11.4h37.2c9.3,0,15.7-8.7,15.7-17.6V40.1c0-15.7-6.7-21.3-19.8-21.3h-46.5
    c-18.2,0-27.6,7.3-27.6,26.9v38c0,24,0.1,41.3,23.7,45.8c0.6,0.1,1.2,0.1,1.9,0.1l76.5,0.6h53.4c13.3,0,25.7-7.4,25.7-25.2v-4.2
    v-7.8v-4.2c0-1.2-0.1-2.4-0.1-3.5c-1.3-13-9.8-19.5-19.9-21.2c-1.8-0.4-3.6-0.5-5.5-0.5h-21.7c-0.7-0.5-1.3-1.3-1.3-3V56v-6.7H237z
     M128.6,45.6c0-2.7,2.2-4.8,4.8-4.8h10.7h2.3h26.5c2.7,0,4.8,2.2,4.8,4.8v16.3c0,2.7-2.2,4.8-4.8,4.8h-13c-0.2,0-1.3,0-1.7,0h-11.8
    h-2.3h-10.7c-2.7,0-4.8-2.2-4.8-4.8V45.6z"
                  className="st0"
                />
                <path
                  fill="#ffe588"
                  d="M95.4,19.9H77.1c-1.6,0-3,0.8-3.7,2.3L52.8,61.1l-21-38.9c-0.7-1.3-2.2-2.3-3.7-2.3H9.4c-1.4,0-2.9,0.8-3.6,2
    c-0.7,1.3-0.7,2.9,0,4.2l34,60v38.8c0,2.3,1.9,4.2,4.2,4.2h16.7c2.3,0,4.2-1.9,4.2-4.2V86.1l34-60c0.7-1.3,0.7-2.9,0-4.2
    C98.3,20.7,96.9,19.9,95.4,19.9z"
                  className="st0"
                />
              </g>
            </svg>
          </Link>
        </div>

        <div
          data-v-05849275=""
          data-v-46c9dc4f=""
          className="list scrollable-auto nav row"
          style={{ flexDirection: "row" }}
        >
          <Link data-v-46c9dc4f="" to="/sports/prematch" className="">
            Sports
          </Link>
          <Link data-v-46c9dc4f="" to="/sports/inplay" className="">
            Live
          </Link>
          <Link data-v-46c9dc4f="" to="/esports/prematch" className="">
            E-Sports
          </Link>
          <Link data-v-46c9dc4f="" to="/casino" className="">
            Casino
          </Link>
          <Link data-v-46c9dc4f="" to="/games" className="">
            Mini Games
          </Link>
          
        </div>

        <div
          data-v-46c9dc4f=""
          className="time row"
          style={{ flexDirection: "row" }}
        >
          <span data-v-46c9dc4f="" className="text">
            <CgTimer
              size="1rem"
              data-v-e56d064c=""
              data-v-46c9dc4f=""
              className="margin-right-5 fa-solid fa-timer"
            />
            <DateTime />
          </span>
        </div>
        <div
          data-v-46c9dc4f=""
          className="language row"
          style={{ flexDirection: "row" }}
        >
          <div
            data-v-faab87c8=""
            data-v-46c9dc4f=""
            dir="auto"
            className="v-select vs--single vs--unsearchable"
            style={{ top: 9 }}
          >
            <div
              id="vs1__combobox"
              role="combobox"
              aria-controls=""
              aria-expanded="false"
              aria-owns="vs1__listbox"
              aria-label="Search for option"
              className="vs__dropdown-toggle"
            >
              <div className="vs__selected-options">
                <span className="vs__selected">
                  <span
                    data-v-faab87c8=""
                    className="margin-right-5 text en_US"
                  ></span>
                  English
                </span>
                <input
                  readOnly="readonly"
                  aria-autocomplete="list"
                  aria-labelledby="vs1__combobox"
                  aria-controls="vs1__listbox"
                  type="search"
                  autoComplete="off"
                  className="vs__search"
                />
              </div>

              <div className="vs__actions">
                <button
                  type="button"
                  title="Clear Selected"
                  aria-label="Clear Selected"
                  className="vs__clear"
                  style={{ display: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                  >
                    <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path>
                  </svg>
                </button>
                <MdOutlineKeyboardArrowDown
                  size="1.5rem"
                  height="14"
                  width="10"
                />
                <div className="vs__spinner" style={{ display: "none" }}>
                  Loading...
                </div>
              </div>
            </div>
            <ul
              id="vs1__listbox"
              role="listbox"
              style={{ display: "none", visibility: "hidden" }}
            ></ul>
          </div>
        </div>
      </div>

      <div
        data-v-46c9dc4f=""
        className="tablet-header-wrap"
        style={{ flexDirection: "row", display: "none" }}
      >
        <div data-v-46c9dc4f="" className="spacer" />
        <span
          data-v-46c9dc4f=""
          className="text"
          style={{ marginRight: 10 }}
        >
          Use it by logging in
        </span>
        <button
          data-v-46c9dc4f=""
          className="button text"
          style={{
            background: "transparent",
            width: 40,
            height: 40,
          }}
        >
          <i
            data-v-e56d064c=""
            data-v-46c9dc4f=""
            className="fa-light fa-bars"
            style={{ fontSize: 20 }}
          />
        </button>
      </div>

      <div
        data-v-46c9dc4f=""
        className="mobile-header-wrap"
        style={{ flexDirection: "row", display: "none" }}
      >
        <div
          data-v-46c9dc4f=""
          className="language row"
          style={{ flexDirection: "row", position: "absolute" }}
        >
          <div
            data-v-faab87c8=""
            data-v-46c9dc4f=""
            dir="auto"
            className="v-select vs--single vs--unsearchable"
          >
            <div
              id="vs4__combobox"
              role="combobox"
              aria-controls=""
              aria-expanded="false"
              aria-owns="vs4__listbox"
              aria-label="Search for option"
              className="vs__dropdown-toggle"
            >
              <div className="vs__selected-options">
                <span className="vs__selected">
                  <span
                    data-v-faab87c8=""
                    className="margin-right-5 text en_US"
                  />
                  English
                </span>
                <input
                  readOnly="readonly"
                  aria-autocomplete="list"
                  aria-labelledby="vs4__combobox"
                  aria-controls="vs4__listbox"
                  type="search"
                  autoComplete="off"
                  className="vs__search"
                />
              </div>
              <div className="vs__actions">
                <button
                  type="button"
                  title="Clear Selected"
                  aria-label="Clear Selected"
                  className="vs__clear"
                  style={{ display: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                  >
                    <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" />
                  </svg>
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={10}
                  role="presentation"
                  className="vs__open-indicator"
                >
                  <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" />
                </svg>
                <div className="vs__spinner" style={{ display: "none" }}>
                  Loading...
                </div>
              </div>
            </div>
            <ul
              id="vs4__listbox"
              role="listbox"
              style={{ display: "none", visibility: "hidden" }}
            />
          </div>
        </div>
        <div
          data-v-46c9dc4f=""
          className="row"
          style={{ margin: "0px auto", flexDirection: "row" }}
        >
          <a
            data-v-46c9dc4f=""
            href="/"
            aria-current="page"
            className="router-link-exact-active router-link-active"
          >
            <svg
              data-v-46c9dc4f=""
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 300 143.5"
              width={60}
              height={20}
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="#ffffff"
                  d="M237,49.3v-4.5c0-3.7,2.8-3.5,4.1-3.5h34.3c5.7,0,10.2-4.6,10.2-10.2v-2.2c0-5.7-4.6-10.2-10.2-10.2h-43.3
    c-13.3,0-25.7,7.4-25.7,25.2v5.3V56v2.2v3.1v4.3c0-0.4,0.1-0.6,0.1-0.8c1.3,13,9.8,19.5,19.9,21.2c1.8,0.4,3.6,0.5,5.5,0.5h16.6
    h5.1c0.6,0.4,1.1,0.8,1.2,1.8c0.1,0.4,0.1,0.7,0.1,1.2v3.4v7.8v3.4c0,3.7-2.8,3.5-4.1,3.5l-44.5,0.4l-66.9-0.2h-5.4
    c-3.3,0-5.8-2.7-5.8-5.8v-9.5c0-3,2.3-5.5,5.3-5.8h11.4h37.2c9.3,0,15.7-8.7,15.7-17.6V40.1c0-15.7-6.7-21.3-19.8-21.3h-46.5
    c-18.2,0-27.6,7.3-27.6,26.9v38c0,24,0.1,41.3,23.7,45.8c0.6,0.1,1.2,0.1,1.9,0.1l76.5,0.6h53.4c13.3,0,25.7-7.4,25.7-25.2v-4.2
    v-7.8v-4.2c0-1.2-0.1-2.4-0.1-3.5c-1.3-13-9.8-19.5-19.9-21.2c-1.8-0.4-3.6-0.5-5.5-0.5h-21.7c-0.7-0.5-1.3-1.3-1.3-3V56v-6.7H237z
     M128.6,45.6c0-2.7,2.2-4.8,4.8-4.8h10.7h2.3h26.5c2.7,0,4.8,2.2,4.8,4.8v16.3c0,2.7-2.2,4.8-4.8,4.8h-13c-0.2,0-1.3,0-1.7,0h-11.8
    h-2.3h-10.7c-2.7,0-4.8-2.2-4.8-4.8V45.6z"
                  className="st0"
                />
                <path
                  fill="#ffe588"
                  d="M95.4,19.9H77.1c-1.6,0-3,0.8-3.7,2.3L52.8,61.1l-21-38.9c-0.7-1.3-2.2-2.3-3.7-2.3H9.4c-1.4,0-2.9,0.8-3.6,2
    c-0.7,1.3-0.7,2.9,0,4.2l34,60v38.8c0,2.3,1.9,4.2,4.2,4.2h16.7c2.3,0,4.2-1.9,4.2-4.2V86.1l34-60c0.7-1.3,0.7-2.9,0-4.2
    C98.3,20.7,96.9,19.9,95.4,19.9z"
                  className="st0"
                />
              </g>
            </svg>
          </a>
        </div>
        <button
          data-v-46c9dc4f=""
          className="mobile-menu button text"
          style={{
            background: "transparent",
            width: 40,
            height: 40,
            position: "absolute",
            right: 0,
            marginRight: 10,
          }}
        >
          <i
            data-v-e56d064c=""
            data-v-46c9dc4f=""
            className="margin-right-0 fa-light fa-bars"
            style={{ fontSize: 20 }}
          />
        </button>
      </div>
    </>
  );
}
