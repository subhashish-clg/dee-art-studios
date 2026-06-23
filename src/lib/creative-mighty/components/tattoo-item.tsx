export interface TattooItemCardProps {
  title: string;
  image: string;
  description: string;
}

const tattoosItems = [
  {
    title: "The falling angel",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677480/jzlbynrr3lofq5ozo30j.jpg",
    description:
      "They said stay low.He aimed higher.This tattoo isn’t about crashing — it’s about having the guts to rise when you know the risks.",
  },
  {
    title: "Fragments of Order, Threads of Freedom",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673735/ikutt4jhaxcrz8adotfo.jpg",
    description:
      "An intricate journey stitched along the skin- Sculpted faces, measured lines, and timeless figures woven together, capturing a mind that seeks both structure and liberation.",
  },
  {
    title: "Earth. Air. Water. Fire.",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673734/igaahj7ogh1j2rn3ifyj.jpg",
    description:
      "Not just elements — instincts. Power stitched under the skin, echoing the oldest truths of the universe.",
  },
  {
    title: "Ace of Power",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673733/rufopg5lfze4gnvzfqjt.jpg",
    description:
      "Not just a card — it’s a piece of the bigger game. Art, luck, and design all dealt in one shot.",
  },
  {
    title: "Made of Light",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673735/jowwruqgkebapwvknrlm.jpg",
    description:
      "Even if the world carves you from darkness, you choose what you become. Light stitched into every scar.",
  },
  {
    title: "Sacred Bloom",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673736/tjeoafr8ydiaajolqcrr.jpg",
    description:
      "A lily, eternal in ink and angles. Growth isn’t random — it’s sacred, even when built inside sharp edges.",
  },
  {
    title: "They See. They Bleed",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673738/wb6ii1wi7wqhntf9szgj.jpg",
    description:
      "Eyes that don’t just see life — they survive it. Burning, crying, fighting forward.",
  },
  {
    title: "We Wear Them All",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673739/fktq401yyvvq1hmnf96v.jpg",
    description:
      "Behind every smile, a shadow; behind every laugh, a weight. This piece reminds us: masks aren’t fake — they’re survival.",
  },
  {
    title: "A Soul in the Scribbles",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673732/licoaah5d296xpkxg3cb.jpg",
    description:
      "This figure rises from the mess, proving that beauty and survival are found in the struggle itself.",
  },
  {
    title: "Built to Survive",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677461/bdtfsytcnivejnklt1bl.jpg",
    description:
      "Tiny in size, massive in spirit. This shark doesn’t roar — it rules in silence.",
  },
  {
    title: "Pieces Stitched in Ink",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677466/wkgn9drfcx9dztocvisb.jpg",
    description:
      "Scars, faith, loss, hope — not separate moments but a single journey. This tattoo is a journal without pages, a soul spelled out across skin.",
  },
  {
    title: "Two Sides, One Story",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677482/lakyxdfrnamuwdvtj72a.jpg",
    description:
      "A single word, split by meaning — LOVE and HATE, intertwined in clean geometry.",
  },
  {
    title: "Burn Loud, Die Later",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677463/lornaj9ag7kz2yrmnw9v.jpg",
    description:
      "An open book, a burning candle, a grinning skull — a visual rebellion against time. Paired with the bold words, “We are here to laugh at the odds,” this tattoo burns bright with a fearless, untamed spirit.",
  },
  {
    title: "Wings and flowers",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677460/fddnoousfzxduefwunnz.jpg",
    description:
      "One side a delicate butterfly, the other blooming wild. A piece that blurs the lines between transformation and growth — a reminder that beauty is both a becoming and a blossoming.",
  },
  {
    title: "Where Life and Death Bloom Together",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677478/njsofiybijkqmuv4gonv.jpg",
    description:
      "A vivid red rose grows through the hollow of a skull, touched by the flutter of a butterfly — a striking balance between mortality and renewal. Bold colors and fine details weave a story of endings that give birth to new beginnings.",
  },
  {
    title: "Born from Fire",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677493/umkmm6oyskek8yfc9ybs.jpg",
    description:
      "This fierce dragon curls in mid-roar, etched with intricate scales and sharpened edges — a timeless guardian of strength, wisdom, and relentless spirit. Dark, bold, and alive with detail, this piece speaks of inner battles fought and victories earned.",
  },
  {
    title: "Ashes to Ascent",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677486/dva6ispzskwbna8d5ujp.jpg",
    description:
      "A phoenix captured in elegant motion, rising with fluid, almost whispered lines — paired with the words “Still I Rise.” This piece is a testament to resilience, to the beauty of falling and flying again, stronger and more luminous with every rebirth.",
  },
  {
    title: "Anchored in Faith, Lifted by Hope",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677475/pxu1etcpmobyvvwxkili.jpg",
    description:
      "A rugged cross crowned with thorns and draped in cloth, standing as a raw symbol of endurance and divine love. Below it, “Psalm 121” whispers a promise of unwavering protection and guidance — a piece rooted deeply in faith and strength through life’s journey.",
  },
  {
    title: "The Hands Behind the Shears",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677473/oslru9fqs8hdlmtlcxju.jpg",
    description:
      "Not just any scissors — her scissors. The ones that have seen early mornings, last-minute trims, new beginnings, and quiet transformations. Etched forever in ink, this piece is a salute to the artist behind the chair, and the hands that turned a simple tool into a lifelong craft since 2002.",
  },
  {
    title: "Whispers of Bloom",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677469/zojonra9hustpxsesymv.jpg",
    description:
      "Delicate florals unfurl across the collarbone, blending softness with strength in a dance of shaded petals and graceful leaves. A timeless symbol of growth, femininity, and quiet power that blooms beautifully against the skin.",
  },

  {
    title: "Bloom Where You Stand",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677491/adijro7m8tcdayhboiut.jpg",
    description:
      " A bundle of wildflowers growing upward. A quiet symbol of growth — thriving right where life plants you.",
  },
  {
    title: "Carved in Bloodlines",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677495/eodkouqblfsvg37gz7or.jpg",
    description: "Old English initials, stacked clean",
  },
  {
    title: "Small but deadly",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781677471/vm5bldcdfdim4b6csakg.jpg",
    description: "Quick moves. No second chances.",
  },
  {
    title: "Fight and grow.",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673735/w5hgdwcfkgchxkevswms.jpg",
    description:
      "Built from heat, carried by calm. Fire raised the flowers, not the rain.",
  },
  {
    title: "Howling Majesty",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673736/zevwmdqqgzndkr6kaoa4.jpg",
    description:
      " A detailed wolf portrait that doesn’t need words to say what it stands for — loyalty, instinct, and knowing exactly who you are without second-guessing.",
  },
  {
    title: "Burn and Breathe",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673733/fqftbxbyyfiibv0l7l9i.jpg",
    description:
      "A sun wrapped in smoke lines. This piece is about carrying your fire without losing your flow — a symbol of steady energy even when life feels scattered.",
  },
  {
    title: "Strength Worn Softly",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673737/v7ep0rtd4jhkg38wrcgh.jpg",
    description:
      "A bull skull framed by roses — a reminder that toughness and tenderness can live side by side. Worn like a badge earned through survival.",
  },
  {
    title: "Directions Carved in Skin",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673734/c50vsomestsga4ioqgpt.jpg",
    description:
      "A raw, almost sketch-like compass inked on the hand — worn as a permanent reminder to stay on course through chaos.",
  },
  {
    title: "Both Sides of the Fire",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673733/xwgseianmxuwzclg7qcd.jpg",
    description:
      "Dragon for the strength, demon for the chaos. Sometimes you gotta wear both to make it through.",
  },
  {
    title: "A Love That Stays",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673733/p6pkcftz5t4eezpyl8zl.jpg",
    description:
      "A fingerprint turned into a butterfly — carrying the memory of her late husband close. This piece isn’t just a tattoo; it’s a reminder that even after someone’s gone, their touch never really leaves.",
  },
  {
    title: "Quiet Warnings",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673738/ayoypvis6vg5gqbvxhfx.jpg",
    description: "No noise, no rush. Just what’s waiting at the end.",
  },
  {
    title: "Silent Fear, Loud Legacy",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673736/begeueexykuwnzun5h9n.jpg",
    description:
      "A bold composition featuring the scream mask, “DEATH” banner, and gothic elements, paying tribute to horror culture.",
  },
  {
    title: "Strength in Elegance",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673737/heyui4mubdno6rcmewnk.jpg",
    description: "Power carried with pride. Battle-born, not borrowed.",
  },
  /* {
    title: "Guarded By Loyalty",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746115059/Guarded_By_Loyalty_il4n65.jpg",
    description:
      "Three Dobermans across the chest — bold, loyal, and always watching. It’s about protecting what matters, standing strong without saying much.",
  }, */
  {
    title: "Ephemeral Beauty",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673734/gnrviyiqyhcsykakk0pg.jpg",
    description:
      "Time cracks and things fall apart, but from it something lighter is born. This piece is a reminder that growth often comes when everything feels like it’s breaking.",
  },
  {
    title: "Built Sharp, Grown Wild",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673733/tbikiw4l6eonjhx0l37p.jpg",
    description:
      "A sword that stayed sharp while life kept wrapping around it. It’s a piece about balance — knowing when to stay solid and when to let things grow naturally.",
  },

  {
    title: "The Guardian & The Beast",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673738/d4eifvi7foxvwo9h7mr2.jpg",
    description:
      "One protects, the other hunts. Together they form the full story — instinct, memory, and meaning beyond this world.",
  },
  {
    title: "Sacred in Silence",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673736/em3mgkridoeu4efitd7q.jpg",
    description:
      "Minimal yet intricate, this fine-lined cross speaks without shouting — a quiet emblem of faith, strength, and inner stillness.",
  },
  {
    title: "The Mark of Endurance",
    image:
      "https://res.cloudinary.com/dfyutghzy/image/upload/v1781673739/jrveu7ehq4zeplaiky6f.jpg",
    description:
      "Victory inked into skin. A symbol for those who’ve been through the storm and stood tall anyway.",
  },
] as TattooItemCardProps[];

function TattooItemCard(props: TattooItemCardProps) {
  const { title, image, description } = props;

  return (
    <div className="single-product-9 rts-team__item">
      <a href="#">
        <img src={image} alt="product" />
      </a>
      <div className="inner-content">
        <span>{title}</span>
        <a
          href="#"
          style={{
            fontSize: "0.75rem",
          }}
        >
          {description}
        </a>
      </div>
    </div>
  );
}

export default function TattoosList() {
  return (
    <div className="product-wrapper-9 rts-team__area rts-portfolio-area">
      <div className="product-row pt--200 pt_md--50 pt_sm--30">
        <div className="inner">
          {tattoosItems
            .filter((_, index) => index % 2 === 0)
            .map((element) => (
              <TattooItemCard
                key={element.title}
                title={element.title}
                image={element.image}
                description={element.description}
              />
            ))}
        </div>
      </div>
      <div className="product-row two">
        <div className="inner">
          {tattoosItems
            .filter((_, index) => index % 2 !== 0)
            .map((element) => (
              <TattooItemCard
                key={element.title}
                title={element.title}
                image={element.image}
                description={element.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
