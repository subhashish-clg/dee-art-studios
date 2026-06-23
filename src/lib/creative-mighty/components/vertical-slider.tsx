const slideItems = [
  {
    // image: "https://res.cloudinary.com/daoju0r3c/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1745600296/IMG_0843_nptqzl.png",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673731/zf1htdi5njiszocwzjnk.jpg",
    title: "Bond of <i class='underline'>Unity</i>",
    paragraph: () => (
      <>
        Symbolizing unity, partnership, friendship, love, or support. Also
        representing a close bond between two individuals or thc idea ofhelping
        and supporting each other through life's challenges. Itcan also bc a
        symbol ofsolidarity and connection between people.
      </>
    ),
  },
  {
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673732/llreyhy7hhperidzz6vj.jpg",
    title: "<i class='underline'>Spirit</i> of the Lion",
    paragraph: () => (
      <>
        Symbolizes strength, courage. and leadership. It can also represent
        protection, nobility, and loyalty. reflecting a person's inner power and
        determination. Additionally, in various cultures, lions may have
        specific rneanings related to honor and familial bonds. Overall, it
        embodies a fierce spirit and a commitment to overcorning challenges.
      </>
    ),
  },
  {
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673732/s0x8npewwyfksy7zudcy.jpg",
    title: "Call of the <i class='underline'>Wild</i>",
    paragraph: () => (
      <>
        Symbolizes strength. loyalty. and a deep connection to nature. It often
        represents a sense of freedom and the call of the wild, reflecting a
        person' inner spirit and resilience. This powerful imagery can also
        signify a longing for belonging and the importance of family or
        community
      </>
    ),
  },
  {
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673732/yocv1qf0rmzqd3onbizr.jpg",
    title: "Eternal <i class='underline'>Bond</i>",
    paragraph: () => (
      <>
        Symbolizing eternal love and commitment bctwccn partners or loved ones,
        representing a lasting bond that transcends time and challenges.
      </>
    ),
  },
  {
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781679885/seyr4ctdvziaaq6ryuie.jpg",
    title: "Healing <i class='underline'>Heart</i>",
    paragraph: () => (
      <>
        Symbolizing the process of healing and moving on from emotional pain
        caused by a broken heart, often incorporating elements representing
        strength, resilience, growth, and self-love.
      </>
    ),
  },
] as SlideItemProps[];

export default function VerticalSlider() {
  return (
    <div className="swiper-portfolio-main-wrapper-7">
      <div className="swiper mySwiper-7-varticle ">
        <div className="swiper-wrapper">
          {slideItems.map((element, index) => (
            <SlideItem
              key={index}
              image={element.image}
              title={element.title}
              paragraph={element.paragraph}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface SlideItemProps {
  image: string;
  title: string;
  paragraph: () => React.ReactNode;
}

function SlideItem(props: SlideItemProps) {
  const { image, title, paragraph } = props;
  return (
    <div className="swiper-slide">
      <div className="banner-slider-portfolio-seven-area">
        <div className="container">
          <div className="row pt--130 pt_sm--70 align-items-center">
            <div className="col-lg-6 col-md-6 one">
              <div className="banner-wrapper-seven pt--75 pt_sm--15">
                <h1
                  className="title font-playfair"
                  dangerouslySetInnerHTML={{
                    __html: title,
                  }}
                ></h1>
                <p className="disc font-lato">{paragraph()}</p>
                {/*  <a href="portfolio-details.html" className="learn-more-btn">
                  Learn More <i className="fa-solid fa-arrow-up-right"></i>
                </a> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="thumbnail-image-banner-7">
                <img src={image} alt="portfolio" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
