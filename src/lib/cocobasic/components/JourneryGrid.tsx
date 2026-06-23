import { useMemo, useState } from "react";

const gridItems = [
  {
    variant: "left",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/c_pad,b_gen_fill,w_720,h_660/v1745951298/Facetune_14-10-2024-20-33-23-min_aly0vg_d1b9f6.png",
    tag: "HELLO, I’m Diksha Dubb",
    title: () => (
      <>
        My contemporary, classic and inspiring <i>artistic</i> roots
      </>
    ),
    subtitle:
      "Rejected initially due to a weak portfolio, I reapplied with renewed effort, earning acceptance and a scholarship.",
    paragraphs: () => (
      <>
        <p>
          In 2019, I arrived in Canada to pursue a Studio Arts diploma. My
          journey, however, didn’t begin as smoothly as I had hoped. My initial
          application was rejected because my portfolio wasn’t strong enough,
          and I wasn’t fully aware of how competitive the program would be. It
          felt like a setback, but then something unexpected happened—my advisor
          reached out, letting me know that the program still needed more
          applicants. They gave me a chance to reapply within a month with a
          completely new portfolio.
        </p>

        <p>
          I poured my heart into creating a fresh body of work, pushing my
          creativity to new limits. My efforts paid off—not only did I receive
          the acceptance letter, but I also earned a scholarship. That moment
          was a turning point, reinforcing that persistence and resilience can
          indeed shape new opportunities.
        </p>
      </>
    ),
  },
  {
    variant: "right",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673756/cvlnqk8lbt7bk8pprdio.jpg",
    tag: "Art Gallery",
    title: () => (
      <>
        Nature details softly <i>crafted</i> by hand
      </>
    ),
    subtitle:
      "I sold paintings on Whyte Avenue on weekends until the pandemic hit, pushing me to seek a more stable path in the art world.",
    paragraphs: () => (
      <>
        <p>
          As a newcomer to the Canadian art scene, I felt a bit lost, unsure of
          how to make my mark. I began selling paintings on Whyte Avenue street,
          standing front of a “wee book inn” book store.. during weekends.
          Although I did sell a few, it was a short-lived venture as the
          pandemic soon hit. Navigating the art world as a new artist wasn’t
          easy. Galleries seemed out of reach, and I had no connections to guide
          me. I kept searching for a stable path, wondering how I could sustain
          myself through art. Selling paintings felt unpredictable—either
          someone loved it and bought it, or they just walked by. I needed
          something more consistent.
        </p>
      </>
    ),
  },
  {
    variant: "left",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781676828/itltwnxqjbqtu0ckitdp.jpg",
    tag: "Tattoo Art & Sketches",
    subtitle:
      "A spontaneous decision led me to an apprenticeship at FX INC, where I built my tattoo skills from scratch and learned the value of trust and persistence.",
    title: () => (
      <>
        Connection of art and <i>tattoos</i>
      </>
    ),
    paragraphs: () => (
      <>
        <p>
          Tattooing entered my life almost by accident. It wasn’t something I
          had ever envisioned for myself, but one night, the idea just sparked
          in my mind. I decided to give it a try. That spontaneous decision led
          me to FX INC—the very last tattoo and piercing studio I approached,
          almost ready to give up. I had no portfolio, no idea how to apply for
          jobs, and little knowledge of the tattoo industry. But FX INC gave me
          a chance—a space to learn, grow, and develop my skills through an
          apprenticeship that lasted around 14 to 16 months.
        </p>
        <p>
          The tattoo industry taught me a lot about trust—the trust that clients
          place in your work. It’s not just about meeting expectations; it’s
          about striving to exceed them. Every project, no matter how small or
          big, became a lesson in persistence and growth.
        </p>
      </>
    ),
  },
  {
    variant: "right",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673740/boj4pmbsofyoscd3g7qq.jpg",
    tag: "Piercing",
    subtitle:
      "I unexpectedly stepped into piercing, discovering a new creative outlet where each piece became part of someone’s self-expression.",
    title: () => (
      <>
        Design <i>piercing</i> ideas to life
      </>
    ),
    paragraphs: () => (
      <>
        <p>
          One day, my senior piercer casually asked if I’d be interested in
          learning how to pierce. I thought, “Why not?” Little did I know that
          piercing would open up a new layer of creativity for me. I hadn’t
          realized how a single, precise poke could make such a significant
          difference in someone’s self-expression. Designing a human body
          through piercing felt like adding thoughtful details to a canvas—each
          piece becoming a part of how they choose to represent themselves.
        </p>
      </>
    ),
  },
  {
    variant: "left",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673744/ucurab5dt3fsnt2zeeea.jpg",
    tag: "Onwards and upwards",
    subtitle:
      "Five years in, I embrace the uncertainty, moving forward with gratitude, passion, and a commitment to constant growth.",
    title: () => (
      <>
        Fresh born ideas <i>growing</i> every day
      </>
    ),
    paragraphs: () => (
      <>
        <p>
          Now, five years into this journey, I still don’t know exactly where I
          stand. But I’ve learned to embrace the uncertainty, finding joy in the
          process of learning and growing. I owe so much to my mentors, my
          clients, and their visions—which often inspire me to see things in new
          ways.
        </p>

        <p>
          I continue to move forward with gratitude, passion, and an open mind,
          knowing that every day is a chance to evolve as an artist.
        </p>
      </>
    ),
  },
] as GridItemProps[];

export default function JourneyGrid() {
  const [showAll, setShowAll] = useState(false);

  const toShow = useMemo(() => {
    if (showAll) {
      return gridItems;
    }

    return gridItems.slice(0, 4);
  }, [showAll]);

  return (
    <>
      <div
        className="blog-holder block center-relative content-1170"
        style={{
          isolation: "isolate",
        }}
      >
        {toShow.map((element, index) => (
          <GridItem
            key={index}
            index={index}
            variant={element.variant}
            image={element.image}
            tag={element.tag}
            title={element.title}
            subtitle={element.subtitle}
            paragraphs={element.paragraphs}
          />
        ))}
      </div>

      <div className="clear"></div>
      <div className="block center-relative center-text more-posts-index-holder">
        <a className="more-posts" onClick={() => setShowAll((curr) => !curr)}>
          {showAll ? "SHOW LESS" : "SHOW MORE"}
        </a>
      </div>
      <div className="clear"></div>
    </>
  );
}

interface GridItemProps {
  variant: "left" | "right";
  index: number;
  image: string;
  tag: string;
  subtitle: string;
  title: () => React.ReactElement;
  paragraphs: () => React.ReactElement;
}

function GridItem(props: GridItemProps) {
  const { variant, image, tag, title, subtitle, index } = props;

  if (variant === "left") {
    return (
      <article
        className="animate relative blog-item-holder center-relative has-post-thumbnail"
        style={{
          zIndex: index,
        }}
      >
        <div className="post-thumbnail">
          <img src={image} alt="" />
        </div>
        <div className="entry-holder content-540">
          <div className="entry-info">
            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">{tag}</a>
                </li>
              </ul>
            </div>
          </div>
          <h2 className="entry-title">
            <a href="#">{title()}</a>
          </h2>
          <div className="excerpt">{subtitle}</div>
          <p className="read-more-arrow">
            <a href={`/journeys/${index + 1}`}>
              <span className="fa fa-arrow-right" aria-hidden="true"></span>
            </a>
          </p>
        </div>
        <div className="clear"></div>
      </article>
    );
  }

  if (variant === "right") {
    return (
      <article
        className="animate relative blog-item-holder center-relative has-post-thumbnail"
        style={{
          zIndex: index,
        }}
      >
        <div className="post-thumbnail">
          <img src={image} alt="" />
        </div>
        <div className="entry-holder content-540">
          <div className="entry-info">
            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">{tag}</a>
                </li>
              </ul>
            </div>
          </div>
          <h2 className="entry-title">
            <a href="#">{title()}</a>
          </h2>
          <div className="excerpt">{subtitle}</div>
          <p className="read-more-arrow">
            <a href={`/journeys/${index + 1}`}>
              <span className="fa fa-arrow-right" aria-hidden="true"></span>
            </a>
          </p>
        </div>
        <div className="clear"></div>
      </article>
    );
  }

  throw new Error("Variant could either be `left` or `right`.");
}
