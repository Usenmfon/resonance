import { Celebrity } from "@/lib/types";

export const celebrities: Celebrity[] = [
  {
    id: "1",
    name: "Beyonce Giselle Knowles-Carter",
    stageName: "Beyonce",
    slug: "beyonce",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/9/97/Beyonce.jpg",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Beyonce_1%2B1_live_%282%29.jpg",
    shortBio:
      "A Houston-born cultural force whose music, visuals, and live performances transformed modern pop and R&B into cinematic world-building.",
    fullBiography: [
      "Beyonce first emerged on the global stage in the late 1990s as the defining voice of Destiny's Child before launching a solo career that reshaped the scale of contemporary stardom. Her albums balance vocal precision, instinctive rhythm, and a command of visual narrative that has made each era feel like a cultural event rather than a routine release cycle.",
      "From Dangerously in Love to Lemonade, Renaissance, and Cowboy Carter, her catalog shows a pattern of reinvention without dilution. She moves through R&B, pop, dance, soul, and country-adjacent storytelling with unusual authority, often pairing personal narrative with broader reflections on heritage, performance, authorship, and Black cultural memory.",
      "What makes Beyonce singular is not just the number of records sold or awards won, but the way she has redefined what an album era can look and feel like. Every visual, stage cue, vocal choice, and rollout decision contributes to a larger authored universe."
    ],
    birthInfo: "Born September 4, 1981 in Houston, Texas, U.S.",
    nationality: "American",
    genres: ["Pop", "R&B", "Dance"],
    yearsActive: "1997 - Present",
    labels: ["Columbia", "Parkwood"],
    instruments: ["Vocals", "Piano"],
    achievements: [
      "Most-awarded artist in GRAMMY history with 35 wins through the 2026 GRAMMY Awards",
      "First Black woman to win the GRAMMY for Best Country Album with Cowboy Carter",
      "Renaissance World Tour became the highest-grossing tour by a Black artist"
    ],
    discography: [
      {
        title: "Dangerously in Love",
        type: "Album",
        year: "2003",
        cover: "/images/beyonce-disc-1.svg",
        description: "Her solo debut established a superstar blueprint, pairing powerhouse vocals with polished R&B and global crossover hits."
      },
      {
        title: "Lemonade",
        type: "Album",
        year: "2016",
        cover: "/images/beyonce-disc-2.svg",
        description: "A landmark visual album that fused intimate confession, Southern imagery, and genre-bending ambition."
      },
      {
        title: "Cowboy Carter",
        type: "Album",
        year: "2024",
        cover: "/images/beyonce-disc-3.svg",
        description: "A roots-expansive project that extended her catalog into country and Americana conversations without losing her core identity."
      }
    ],
    awards: [
      {
        title: "Album of the Year",
        year: "2025",
        organization: "GRAMMY Awards",
        result: "Won"
      },
      {
        title: "Best Country Album",
        year: "2025",
        organization: "GRAMMY Awards",
        result: "Won"
      },
      {
        title: "Best Dance/Electronic Music Album",
        year: "2023",
        organization: "GRAMMY Awards",
        result: "Won"
      }
    ],
    stats: [
      {
        label: "Years Active",
        value: "28+",
        detail: "From Destiny's Child to multi-era solo reinvention"
      },
      {
        label: "Studio Albums",
        value: "8",
        detail: "Each full-length debuting at No. 1 in the United States"
      },
      {
        label: "GRAMMY Wins",
        value: "35",
        detail: "The current career record through the 2026 GRAMMY Awards"
      },
      {
        label: "No. 1 Albums",
        value: "8",
        detail: "A rare streak of chart-topping full-length releases"
      }
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/97/Beyonce.jpg",
        alt: "Beyonce performing during The Beyonce Experience in Munich in 2007",
        caption: "The Beyonce Experience era portrait"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Beyonce_Live_2013_%2832%29.jpg",
        alt: "Beyonce performing in Montreal during The Mrs. Carter Show World Tour in 2013",
        caption: "Mrs. Carter Show live performance"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Beyonce_1%2B1_live_%282%29.jpg",
        alt: "Beyonce performing the song 1+1 in Montreal in 2013",
        caption: "1+1 live in Montreal"
      }
    ],
    socialLinks: [
      { label: "Official", href: "https://www.beyonce.com/" },
      { label: "Spotify", href: "https://open.spotify.com/" },
      { label: "YouTube", href: "https://www.youtube.com/" },
      { label: "Instagram", href: "https://www.instagram.com/" }
    ],
    notableMoments: [
      {
        title: "Lemonade reframed the visual album",
        category: "Visual Album",
        year: "2016",
        description: "The project became a defining example of how music, film language, and autobiography can operate as one authored statement."
      },
      {
        title: "Cowboy Carter opened a new chapter",
        category: "Release Era",
        year: "2024",
        description: "Its release expanded country conversations and led to a historic GRAMMY win in the category the following year."
      }
    ],
    influence: [
      "Beyonce turned the album rollout into a total design system: sound, image, choreography, fashion, staging, and authorship all move as one.",
      "Her work has influenced a generation of artists to think cinematically about performance and to treat visual identity as part of the music itself.",
      "She also remains a benchmark for vocal discipline, live execution, and the ability to evolve stylistically without losing cultural gravity."
    ],
    earlyLife: [
      "Raised in Houston, Beyonce began performing young and developed early confidence through local talent competitions and intense rehearsal discipline.",
      "Her first major chapter came with Girl's Tyme, the group that eventually evolved into Destiny's Child, sharpening her instincts for harmony, stagecraft, and public performance.",
      "By the end of the 1990s, that early training had become the foundation for one of the most durable careers in modern music."
    ],
    timeline: [
      {
        year: "1997",
        title: "Destiny's Child breakthrough",
        description: "Began building national visibility as the lead voice in one of the defining girl groups of the era."
      },
      {
        year: "2003",
        title: "Dangerously in Love launches solo era",
        description: "Her debut solo album confirmed that she could lead the pop conversation on her own scale."
      },
      {
        year: "2016",
        title: "Lemonade becomes a cultural milestone",
        description: "The visual album expanded expectations for concept, vulnerability, and political texture in mainstream pop."
      },
      {
        year: "2024",
        title: "Cowboy Carter widens the frame",
        description: "A genre-stretching release that led to new milestones in country music and the GRAMMYs."
      }
    ]
  },
  {
    id: "2",
    name: "Taylor Alison Swift",
    stageName: "Taylor Swift",
    slug: "taylor-swift",
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Taylor_Swift_The_Eras_Tour_Midnights_Era_Set_%2853109023502%29_%28cropped%29.jpg",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Taylor_Swift_The_Eras_Tour_Reputation_Era_Set_%2853109853495%29_%28cropped%29.jpg",
    shortBio:
      "A Pennsylvania-born songwriter whose autobiographical precision and stylistic reinvention made her one of the defining pop authors of her generation.",
    fullBiography: [
      "Taylor Swift built her career on a rare combination of specificity and scale. She began as a teenage songwriter in country music, writing from lived detail with an immediacy that made listeners feel personally addressed. Over time, that instinct grew into one of the most recognizable voices in popular music.",
      "Her catalog documents a steady evolution from country roots to polished pop, indie-folk introspection, and large-format arena storytelling. Albums such as Fearless, 1989, Folklore, Midnights, and The Tortured Poets Department illustrate her ability to reinvent tone and production while keeping songwriting at the center.",
      "Swift's legacy extends beyond records alone. She has become a defining figure in modern music business conversations about catalog ownership, fan community, large-scale touring, and the emotional intimacy of mainstream pop writing."
    ],
    birthInfo: "Born December 13, 1989 in West Reading, Pennsylvania, U.S.",
    nationality: "American",
    genres: ["Pop", "Country", "Folk"],
    yearsActive: "2003 - Present",
    labels: ["Big Machine", "Republic"],
    instruments: ["Vocals", "Guitar", "Piano"],
    achievements: [
      "First artist to win the GRAMMY for Album of the Year four times",
      "The Eras Tour became the highest-grossing concert tour in history",
      "Among the most-awarded artists in American Music Awards, Billboard Music Awards, and MTV VMAs"
    ],
    discography: [
      {
        title: "Fearless",
        type: "Album",
        year: "2008",
        cover: "/images/taylor-disc-1.svg",
        description: "The breakout album that expanded her country-pop appeal and turned diaristic songwriting into a mass language."
      },
      {
        title: "1989",
        type: "Album",
        year: "2014",
        cover: "/images/taylor-disc-2.svg",
        description: "A complete pop pivot built on immaculate hooks, skyline sheen, and mainstream domination."
      },
      {
        title: "Midnights",
        type: "Album",
        year: "2022",
        cover: "/images/taylor-disc-3.svg",
        description: "A sleek, nocturnal album that helped secure her record-setting fourth Album of the Year win."
      }
    ],
    awards: [
      {
        title: "Album of the Year",
        year: "2024",
        organization: "GRAMMY Awards",
        result: "Won"
      },
      {
        title: "Album of the Year",
        year: "2021",
        organization: "GRAMMY Awards",
        result: "Won"
      },
      {
        title: "Album of the Year",
        year: "2016",
        organization: "GRAMMY Awards",
        result: "Won"
      }
    ],
    stats: [
      {
        label: "Years Active",
        value: "20+",
        detail: "Two decades of songwriting-led reinvention"
      },
      {
        label: "GRAMMY Wins",
        value: "14",
        detail: "Including a record four Album of the Year victories"
      },
      {
        label: "AOTY Wins",
        value: "4",
        detail: "A category record for any artist"
      },
      {
        label: "Eras Tour",
        value: "$2B",
        detail: "Reported gross for the history-making global run"
      }
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/88/Taylor_Swift_The_Eras_Tour_Midnights_Era_Set_%2853109023502%29_%28cropped%29.jpg",
        alt: "Taylor Swift performing the Midnights set on the Eras Tour at SoFi Stadium in 2023",
        caption: "Midnights era on the Eras Tour"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Taylor_Swift_The_Eras_Tour_Reputation_Era_Set_%2853109853495%29_%28cropped%29.jpg",
        alt: "Taylor Swift performing the Reputation set on the Eras Tour at SoFi Stadium in 2023",
        caption: "Reputation era stage portrait"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Taylor_Swift_The_Eras_Tour_Fearless_Set_Era_%2853109809135%29.jpg",
        alt: "Taylor Swift performing the Fearless set on the Eras Tour at SoFi Stadium in 2023",
        caption: "Fearless era in stadium light"
      }
    ],
    socialLinks: [
      { label: "Official", href: "https://www.taylorswift.com/" },
      { label: "Spotify", href: "https://open.spotify.com/" },
      { label: "YouTube", href: "https://www.youtube.com/" },
      { label: "Instagram", href: "https://www.instagram.com/" }
    ],
    notableMoments: [
      {
        title: "1989 completed the pop crossover",
        category: "Reinvention",
        year: "2014",
        description: "The album marked a decisive shift in sound and reintroduced her on a wider global pop axis."
      },
      {
        title: "The Eras Tour became a touring landmark",
        category: "Live Tour",
        year: "2024",
        description: "Its scale, demand, and cross-era framing redefined contemporary expectations for pop touring."
      }
    ],
    influence: [
      "Swift has made autobiographical songwriting central to mainstream pop identity, showing that detail and emotional specificity can scale globally.",
      "Her career has also shaped conversations around artist ownership, release strategy, rerecording, and direct artist-to-fan relationships.",
      "Few artists have matched her ability to reinvent style while keeping songwriting, narrative continuity, and fan memory tightly connected."
    ],
    earlyLife: [
      "Swift grew up in Pennsylvania before her family moved to Tennessee so she could pursue songwriting and country music more seriously near Nashville.",
      "She learned guitar young, wrote songs early, and became one of the youngest signings in Sony/ATV's publishing history.",
      "That early songwriting discipline became the engine of a career built on clarity of voice, memory, and carefully constructed eras."
    ],
    timeline: [
      {
        year: "2004",
        title: "Publishing deal in Nashville",
        description: "Signed an early songwriting deal and began building industry momentum around original material."
      },
      {
        year: "2008",
        title: "Fearless expands the audience",
        description: "The album deepened her country-pop reach and made her one of the defining new songwriters of the period."
      },
      {
        year: "2014",
        title: "1989 ushers in a pure-pop chapter",
        description: "A deliberate sonic reset that became one of the major pop statements of the decade."
      },
      {
        year: "2024",
        title: "Album of the Year record and Eras Tour peak",
        description: "She became the first artist to win the top GRAMMY album prize four times while the Eras Tour rewrote touring records."
      }
    ]
  },
  {
    id: "3",
    name: "Kendrick Lamar Duckworth",
    stageName: "Kendrick Lamar",
    slug: "kendrick-lamar",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Kendrick-lamar-1360479601.jpg",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Kendrick_Lamar_2013.jpg",
    shortBio:
      "A Compton-born lyricist whose albums fused narrative precision, political urgency, and formal experimentation into a defining body of modern rap.",
    fullBiography: [
      "Kendrick Lamar rose from Compton mixtape circuits into one of the most critically revered artists of the twenty-first century. Long before he was seen as a generational standard-bearer, his writing showed unusual narrative control, turning street memory, family history, spiritual tension, and self-examination into dense, vivid rap songs.",
      "With projects such as good kid, m.A.A.d city, To Pimp a Butterfly, DAMN., and GNX, Lamar pushed rap albums toward greater conceptual ambition without losing emotional force or mainstream reach. His work balances technical discipline with cultural inquiry, often asking what personal success means inside larger systems of race, violence, memory, and responsibility.",
      "That combination of craft and consequence has made him more than an acclaimed rapper. He is now widely treated as one of the era's essential album artists, equally at home in mass culture, literary criticism, and live spectacle."
    ],
    birthInfo: "Born June 17, 1987 in Compton, California, U.S.",
    nationality: "American",
    genres: ["Hip-Hop", "Progressive Rap", "Conscious Rap"],
    yearsActive: "2003 - Present",
    labels: ["PGLang", "Interscope", "Top Dawg", "Aftermath"],
    instruments: ["Vocals"],
    achievements: [
      "First nonclassical or jazz musician to win the Pulitzer Prize for Music",
      "Most-awarded rapper in GRAMMY history with 27 wins through the 2026 GRAMMY Awards",
      "Became the first solo rapper to headline the Super Bowl halftime show"
    ],
    discography: [
      {
        title: "good kid, m.A.A.d city",
        type: "Album",
        year: "2012",
        cover: "/images/kendrick-disc-1.svg",
        description: "A breakthrough narrative album that turned a coming-of-age story in Compton into a modern rap classic."
      },
      {
        title: "To Pimp a Butterfly",
        type: "Album",
        year: "2015",
        cover: "/images/kendrick-disc-2.svg",
        description: "A fearless fusion of jazz, funk, spoken-word gravity, and political critique."
      },
      {
        title: "GNX",
        type: "Album",
        year: "2024",
        cover: "/images/kendrick-disc-3.svg",
        description: "A sharp late-career statement that reinforced his command of the album form and the awards conversation."
      }
    ],
    awards: [
      {
        title: "Pulitzer Prize for Music",
        year: "2018",
        organization: "Pulitzer Prize",
        result: "Won"
      },
      {
        title: "Record of the Year",
        year: "2026",
        organization: "GRAMMY Awards",
        result: "Won"
      },
      {
        title: "Best Rap Album",
        year: "2016",
        organization: "GRAMMY Awards",
        result: "Won"
      }
    ],
    stats: [
      {
        label: "Years Active",
        value: "20+",
        detail: "A career spanning mixtape beginnings and major concept albums"
      },
      {
        label: "Studio Albums",
        value: "6",
        detail: "Each era widening his formal and thematic range"
      },
      {
        label: "GRAMMY Wins",
        value: "27",
        detail: "The current record among rappers through the 2026 GRAMMY Awards"
      },
      {
        label: "Pulitzers",
        value: "1",
        detail: "A singular recognition in modern rap history"
      }
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Kendrick-lamar-1360479601.jpg",
        alt: "Kendrick Lamar performing in 2013 in a photo by Merlijn Hoek",
        caption: "2013 live portrait"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Kendrick_Lamar_2013.jpg",
        alt: "Kendrick Lamar performing in 2013 in a photo by Eli Watson",
        caption: "Stage performance close-up"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Kendrick_Lamar_2011.jpg",
        alt: "Kendrick Lamar at Michigan State University in 2011",
        caption: "Early live performance image"
      }
    ],
    socialLinks: [
      { label: "Official", href: "https://oklama.com/" },
      { label: "Spotify", href: "https://open.spotify.com/" },
      { label: "YouTube", href: "https://www.youtube.com/" },
      { label: "Instagram", href: "https://www.instagram.com/" }
    ],
    notableMoments: [
      {
        title: "To Pimp a Butterfly became a landmark statement",
        category: "Album Era",
        year: "2015",
        description: "The album broadened the expressive possibilities of mainstream rap through jazz, funk, and political language."
      },
      {
        title: "The Pulitzer Prize changed rap's institutional visibility",
        category: "Recognition",
        year: "2018",
        description: "Its win formalized what many listeners already believed: his work had altered the artistic expectations around rap albums."
      }
    ],
    influence: [
      "Lamar helped reassert the rap album as a serious long-form medium, one capable of literary ambition, political weight, and emotional complexity.",
      "His success gave mainstream visibility to concept-driven rap that refuses to separate technical skill from moral and social inquiry.",
      "He is frequently cited by artists, critics, and educators as a reference point for narrative discipline, album architecture, and lyrical rigor."
    ],
    earlyLife: [
      "Born and raised in Compton, Lamar came of age in a city whose tensions and histories later became central to his writing.",
      "He first recorded under the name K.Dot, releasing early mixtapes while still in high school and sharpening a voice rooted in detail and discipline.",
      "His association with Top Dawg Entertainment gave him the structure to turn local momentum into a major-label breakthrough without losing the autobiographical intensity of his music."
    ],
    timeline: [
      {
        year: "2005",
        title: "Top Dawg era begins",
        description: "Started building a larger platform after early local momentum under the name K.Dot."
      },
      {
        year: "2012",
        title: "good kid, m.A.A.d city breakthrough",
        description: "The album established him as a major rap storyteller with both critical and commercial force."
      },
      {
        year: "2018",
        title: "Pulitzer Prize milestone",
        description: "His work reached a new level of institutional recognition rarely granted to rap."
      },
      {
        year: "2024",
        title: "GNX and a new late-career surge",
        description: "Another major release cycle extended his reputation as one of rap's defining album artists."
      }
    ]
  }
];

export const featuredCelebrity = celebrities[0];

export const genres = Array.from(new Set(celebrities.flatMap((celebrity) => celebrity.genres)));
