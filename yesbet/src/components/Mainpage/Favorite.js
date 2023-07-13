import React from "react";
import { Link } from "react-router-dom";

function Favorite() {
  return (
    <div data-v-756132ea="" className="favorite column">
      <div data-v-756132ea="" className="row" style={{ flexDirection: "row" }}>
        <span
          data-v-756132ea=""
          className="margin-bottom-20 text"
          style={{
            color: "rgb(255, 229, 136)",
            fontWeight: "bold",
          }}
        >
          You may Like
        </span>
      </div>
      <div
        data-v-756132ea=""
        className="margin-bottom-40 row"
        style={{ flexDirection: "row" }}
      >
        <Link data-v-756132ea="" to="/sports/prematch" className="">
          <i
            data-v-e56d064c=""
            data-v-756132ea=""
            className="fa-solid fa-tennis-ball"
          ></i>
          <span data-v-756132ea="" className="text">
            Sports
          </span>
        </Link>
        <Link data-v-756132ea="" to="/sports/inplay" className="">
          <i
            data-v-e56d064c=""
            data-v-756132ea=""
            className="fa-solid fa-timer"
          ></i>
          <span data-v-756132ea="" className="text">
            live
          </span>
        </Link>
        <Link data-v-756132ea="" to="/esports/prematch" className="">
          <i
            data-v-e56d064c=""
            data-v-756132ea=""
            className="fa-solid fa-gamepad-modern"
          ></i>
          <span data-v-756132ea="" className="text">
            Esports
          </span>
        </Link>
        <Link data-v-756132ea="" to="/casino" className="">
          <i
            data-v-e56d064c=""
            data-v-756132ea=""
            className="fa-solid fa-cards"
          ></i>
          <span data-v-756132ea="" className="text">
            Casino
          </span>
        </Link>
        <Link data-v-756132ea="" to="/games" className="">
          <i
            data-v-e56d064c=""
            data-v-756132ea=""
            className="fa-solid fa-game-console-handheld"
          ></i>
          <span data-v-756132ea="" className="text">
            Minigame
          </span>
        </Link>
      </div>
      <div data-v-756132ea="" className="row" style={{ flexDirection: "row" }}>
        <span
          data-v-756132ea=""
          className="margin-bottom-20 text"
          style={{
            color: "rgb(255, 229, 136)",
            fontWeight: "bold",
          }}
        >
          Crypto Currency
        </span>
      </div>
      <div
        data-v-756132ea=""
        className="column"
        style={{ alignItems: "center" }}
      >
        <span data-v-756132ea="" className="margin-bottom-10 text">
          <svg
            data-v-756132ea=""
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="120"
            viewBox="-45.97596 -16.00015 398.45832 96.0009"
          >
            <path
              data-v-756132ea=""
              fill="#f7931a"
              d="M63.0355 39.7416c-4.274 17.143-21.637 27.576-38.782 23.301-17.138-4.274-27.571-21.638-23.295-38.78 4.272-17.145 21.635-27.579 38.775-23.305 17.144 4.274 27.576 21.64 23.302 38.784z"
            ></path>
            <path
              data-v-756132ea=""
              fill="#ffffff"
              d="M46.1055 27.4416c.637-4.258-2.605-6.547-7.038-8.074l1.438-5.768-3.511-.875-1.4 5.616c-.923-.23-1.871-.447-2.813-.662l1.41-5.653-3.509-.875-1.439 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.679 1.296 1.636 2.042l-1.638 6.571c.098.025.225.061.365.117-.117-.029-.242-.061-.371-.092l-2.296 9.205c-.174.432-.615 1.08-1.609.834.035.051-2.552-.637-2.552-.637l-1.743 4.019 4.569 1.139c.85.213 1.683.436 2.503.646l-1.453 5.834 3.507.875 1.439-5.772c.958.26 1.888.5 2.798.726l-1.434 5.745 3.511.875 1.453-5.823c5.987 1.133 10.489.676 12.384-4.739 1.527-4.36-.076-6.875-3.226-8.515 2.294-.529 4.022-2.038 4.483-5.155zm-8.022 11.249c-1.085 4.36-8.426 2.003-10.806 1.412l1.928-7.729c2.38.594 10.012 1.77 8.878 6.317zm1.086-11.312c-.99 3.966-7.1 1.951-9.082 1.457l1.748-7.01c1.982.494 8.365 1.416 7.334 5.553z"
            ></path>
            <path
              data-v-756132ea=""
              d="M93.7755 19.3616c2.595 0 4.837.465 6.721 1.378 1.893.922 3.455 2.164 4.708 3.726 1.236 1.57 2.156 3.405 2.75 5.508.59 2.109.886 4.376.886 6.803 0 3.728-.683 7.25-2.062 10.57-1.379 3.325-3.25 6.209-5.63 8.669-2.378 2.457-5.186 4.394-8.424 5.825-3.233 1.432-6.748 2.148-10.522 2.148-.488 0-1.346-.014-2.558-.039-1.212-.025-2.605-.15-4.165-.361-1.57-.219-3.23-.543-4.983-.977-1.752-.426-3.416-1.023-4.983-1.781l14.012-58.876 12.55-1.945-5.017 20.893c1.074-.484 2.156-.859 3.236-1.132 1.081-.269 2.241-.409 3.481-.409zm-10.527 34.671c1.89 0 3.671-.465 5.344-1.378 1.678-.914 3.126-2.148 4.339-3.685 1.213-1.544 2.173-3.283 2.873-5.226.7-1.943 1.054-3.97 1.054-6.079 0-2.591-.433-4.612-1.296-6.073-.863-1.455-2.46-2.187-4.779-2.187-.76 0-1.739.145-2.953.404-1.218.275-2.308.846-3.285 1.705l-5.342 22.188c.322.057.607.111.85.162.238.055.501.094.763.121.277.031.594.047.977.047s.862.001 1.455.001zm38.607 8.829h-11.987l10.123-42.597h12.069zm5.833-47.787c-1.673 0-3.19-.498-4.536-1.496-1.357-.992-2.029-2.519-2.029-4.577 0-1.132.23-2.194.686-3.196.463-1 1.068-1.861 1.826-2.593.757-.726 1.634-1.306 2.63-1.743 1.002-.43 2.068-.645 3.204-.645 1.672 0 3.181.498 4.532 1.496 1.346 1.003 2.023 2.53 2.023 4.577 0 1.136-.229 2.202-.689 3.202-.457 1-1.062 1.861-1.82 2.593-.751.727-1.636 1.305-2.63 1.738-1.003.437-2.065.644-3.197.644zm14.877-5.423l12.555-1.945-3.083 12.556h13.446l-2.428 9.878h-13.365l-3.56 14.9c-.328 1.242-.514 2.402-.566 3.48-.059 1.083.078 2.013.402 2.796.322.785.901 1.39 1.741 1.818.836.435 2.033.654 3.603.654 1.293 0 2.553-.123 3.771-.367 1.211-.24 2.438-.574 3.68-1.011l.894 9.236c-1.62.594-3.374 1.105-5.264 1.535-1.893.436-4.134.646-6.724.646-3.724 0-6.611-.553-8.668-1.654-2.054-1.109-3.506-2.624-4.375-4.542-.857-1.911-1.24-4.114-1.133-6.596.111-2.488.486-5.103 1.133-7.857zm22.39 36.2c0-3.669.594-7.129 1.781-10.368 1.185-3.242 2.892-6.077 5.107-8.51 2.207-2.421 4.896-4.339 8.061-5.747 3.15-1.4 6.677-2.106 10.564-2.106 2.433 0 4.606.23 6.518.691 1.92.465 3.657 1.066 5.228 1.82l-4.134 9.4c-1.08-.438-2.201-.824-3.36-1.174-1.16-.357-2.576-.529-4.251-.529-4.001 0-7.164 1.379-9.518 4.128-2.345 2.751-3.526 6.454-3.526 11.099 0 2.753.594 4.979 1.786 6.682 1.186 1.703 3.377 2.55 6.558 2.55 1.57 0 3.085-.164 4.536-.484 1.462-.324 2.753-.732 3.89-1.214l.895 9.636c-1.516.588-3.188 1.119-5.022 1.584-1.838.449-4.026.682-6.563.682-3.349 0-6.184-.49-8.503-1.455-2.32-.98-4.237-2.281-5.747-3.929-1.518-1.652-2.608-3.581-3.282-5.795-.674-2.212-1.018-4.536-1.018-6.961zm53.25 18.14c-2.861 0-5.346-.436-7.454-1.299-2.102-.863-3.843-2.074-5.22-3.644-1.379-1.562-2.411-3.413-3.118-5.546-.707-2.132-1.047-4.493-1.047-7.08 0-3.245.521-6.489 1.574-9.724 1.048-3.242 2.603-6.155 4.661-8.744 2.042-2.593 4.561-4.713 7.527-6.366 2.963-1.642 6.371-2.468 10.199-2.468 2.809 0 5.281.437 7.418 1.3 2.127.861 3.879 2.082 5.264 3.644 1.37 1.57 2.411 3.413 3.111 5.549.705 2.128 1.053 4.495 1.053 7.084 0 3.235-.514 6.479-1.534 9.724-1.021 3.229-2.536 6.149-4.536 8.744-1.996 2.589-4.492 4.708-7.49 6.354-2.994 1.646-6.466 2.472-10.408 2.472zm5.991-34.662c-1.777 0-3.348.516-4.693 1.535-1.35 1.031-2.484 2.327-3.398 3.89-.924 1.57-1.609 3.282-2.072 5.143-.459 1.865-.684 3.628-.684 5.303 0 2.703.436 4.808 1.293 6.323.869 1.507 2.43 2.265 4.699 2.265 1.783 0 3.346-.512 4.699-1.542 1.342-1.023 2.477-2.32 3.398-3.886.918-1.562 1.609-3.279 2.072-5.143.453-1.859.684-3.632.684-5.304 0-2.696-.434-4.806-1.299-6.319-.864-1.507-2.432-2.265-4.699-2.265zm31.039 33.532h-11.997l10.123-42.597h12.075zm5.824-47.787c-1.672 0-3.188-.498-4.532-1.496-1.35-.992-2.028-2.519-2.028-4.577 0-1.132.233-2.194.69-3.196.457-1 1.066-1.861 1.824-2.593.753-.726 1.638-1.306 2.632-1.743.996-.43 2.062-.645 3.194-.645 1.676 0 3.19.498 4.538 1.496 1.349 1.003 2.03 2.53 2.03 4.577 0 1.136-.242 2.202-.695 3.202-.453 1-1.062 1.861-1.817 2.593-.76.727-1.634 1.305-2.63 1.738-1.004.437-2.068.644-3.206.644zm13.016 7.127c.91-.266 1.926-.586 3.031-.934 1.109-.348 2.348-.672 3.732-.964 1.369-.301 2.914-.545 4.613-.734 1.699-.193 3.635-.287 5.786-.287 6.322 0 10.68 1.841 13.086 5.512 2.404 3.671 2.82 8.695 1.26 15.063l-5.514 23h-12.066l5.344-22.516c.326-1.406.582-2.765.771-4.093.191-1.316.18-2.476-.043-3.48-.213-.992-.715-1.804-1.494-2.433-.791-.619-1.986-.93-3.607-.93-1.563 0-3.153.168-4.776.492l-7.857 32.959h-12.071z"
              fill="#ffffff"
            ></path>
          </svg>
        </span>
        <span data-v-756132ea="" className="margin-bottom-5 text">
          YES BET allows cryptocurrency Bitcoin payment
        </span>
        <span data-v-756132ea="" className="margin-bottom-5 text">
          Your payment will be processed safely through Bitpoly Payment Gateway
        </span>
        <span data-v-756132ea="" className="margin-bottom-5 text">
          Depositing cryptocurrency does not incur any additional fees other
          than network fees
        </span>
      </div>
    </div>
  );
}

export default Favorite;
