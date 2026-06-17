import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <a
        className="slider-fullscreen__slide-button button-square"
        onClick={() => setOpen(true)}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g fill="none" fill-rule="evenodd">
            <rect className="rect" width="100%" height="100%"></rect>
          </g>
        </svg>
        <span>arrow_forward</span>
      </a>

      <Lightbox
        styles={{
          button: {},
        }}
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673740/qt0xjb34desamifjtnfb.jpg",
          },
          {
            src: "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673740/jzj0dflqo6d0gxfdtjri.jpg",
          },
        ]}
      />
    </>
  );
}
