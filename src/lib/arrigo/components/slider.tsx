import clsx from "clsx";

const sliderItems = [
  {
    title: "Piercing Collection",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673744/pfvqdt6vmkhnffkqjptr.jpg",
    paragraph:
      "Piercing Collection, where artistry meets precision! I believe that body art is a powerful form of self-expression. Each piercing is not just a procedure; it’s an opportunity to enhance your individuality and celebrate your unique style.",
  },
  {
    title: "Diverse Selection",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673740/ml1daxy7ldnxetkt3zlo.jpg",

    paragraph:
      "From classic ear piercings to bold body modifications, my collection features a wide range of styles to match every personality. Whether you prefer minimalist elegance or vibrant statement pieces, there’s something here for you.",
  },
  {
    title: "Personalized Experience",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673753/tiqdjt8hrdkv0ebitzz8.png",
    paragraph:
      "We pride on providing a personalized approach to every client. During your consultation, we’ll discuss your ideas, preferences, and any concerns you may have, ensuring that you feel informed and excited about your choices.",
  },
  {
    title: "Top-Quality Jewelry",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673749/iygieiwx9ocmhpukfnwe.jpg",
    paragraph:
      "Your safety and comfort are my top priorities. We use only the finest materials, from implant grade titanium, to ethically sourced gemstones, to ensure that your jewelry not only looks beautiful but is also safe for your skin.",
  },
  {
    title: "Custom Creations",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673741/e5exqtdlugsgyqikbfal.jpg",
    paragraph:
      "We offer custom piercing designs tailored to your vision. If you have a specific idea in mind, let’s collaborate to create a piece that reflects your personal style and story.",
  },
  {
    title: "Aftercare Support",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673749/g0nghs4avksnevwymofm.jpg",
    paragraph:
      "After your piercing, we provide comprehensive aftercare instructions and ongoing support, ensuring that your healing process is smooth and successful.",
  },
  {
    title: "Premium Piercing Jewelry",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673750/ieuiflvf7uofv7mxfdfp.png",
    paragraph:
      "Implant-grade piercing jewelry from top brands and local makers, including 14k–18k gold options.",
  },
];

export default function Slider(props: any) {
  return (
    <section
      className="section section-fullscreen section-fullscreen_1"
      data-os-animation="data-os-animation"
    >
      <div className="slider-fullscreen slider js-slider-fullscreen">
        <div className="slider-fullscreen__wrapper-controls">
          <div className="slider__controls slider-fullscreen__controls">
            <div className="slider__dots js-slider-fullscreen__dots">
              {sliderItems.map((_, index) => (
                <div
                  key={index}
                  className={clsx(
                    "slider__dot",
                    index === 0 ? "slider__dot_active" : ""
                  )}
                ></div>
              ))}
            </div>
          </div>
        </div>
        {/*<!-- - slider controls --> */}
        <div className="slider-fullscreen__wrapper-img overflow">
          <div className="overflow__curtain bg-accent"></div>
          <div className="overflow__content">
            <div className="swiper-container swiper slider-fullscreen-img js-slider-fullscreen__slider-img">
              <div className="swiper-wrapper">
                {sliderItems.map((element, index) => (
                  <div
                    key={index}
                    className="swiper-slide slider-fullscreen__slide"
                  >
                    <img
                      className="slider-fullscreen-img__slide-bg of-cover"
                      src={element.image}
                      width="892"
                      height="821"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*       <!-- - slider image -->*/}
        <div className="slider-fullscreen__wrapper-content container">
          <div className="row justify-content-xl-end">
            <div className="col-xl-5 col-lg-6">
              <div className="slider-fullscreen__slide-headline"></div>
              <div className="swiper-container swiper slider-fullscreen-content js-slider-fullscreen__slider-content">
                <div className="swiper-wrapper">
                  {sliderItems.map((element, index) => (
                    <div className="swiper-slide">
                      <div className="slider-fullscreen__slide-content">
                        <header className="slider-fullscreen__slide-header ">
                          <h2
                            style={{
                              color: "black",
                              fontFamily: "'Playfair Display', sans-serif",
                            }}
                          >
                            {element.title}
                          </h2>

                          <p style={{ fontFamily: "'Lato', sans-serif" }}>
                            {element.paragraph}
                          </p>
                        </header>
                        <div className="slider-fullscreen__slide-wrapper-button">
                          {props.gallery}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-fullscreen__wrapper-counter">
          <div className="slider__counter-big">
            <div className="swiper-container swiper slider__counter-big-current slider-fullscreen__counter-big-current js-slider-fullscreen__counter-current">
              <div className="swiper-wrapper"></div>
            </div>
            <div className="slider__counter-big-total js-slider-fullscreen__counter-total"></div>
          </div>
        </div>
      </div>
      <div className="section-fullscreen__backgrounds">
        <div className="section-fullscreen__inner-bg bg-dark"></div>
        <div className="section-fullscreen__inner-bg bg-light"></div>
      </div>
    </section>
  );
}
