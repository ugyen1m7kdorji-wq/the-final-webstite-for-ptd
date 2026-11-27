/* ============ EDIT ME: names, message, videos, credits ============ */
const C = {
  her:  { first: "Phuntsho", middle: "Tenzin", last: "Dolma" },
  me:   { first: "Ugyen", last: "Dorji" },
  occasion: "Happy Birthday",
  // {first} {middle} {last} {full} {me} {meFull} {occasion} work in any text
  message: [
    "Some people pass through our lives for a season and still leave light behind.",
    "You are one of them, {first}.",
    "I said goodbye with only good intentions, and I wanted today to carry my warmest wishes to you.",
    "I made you a little sky to wander through. May this year be gentle and full of wonder."
  ],
  closing: "With all my warmest wishes,<br>{meFull}",
  wishText: "Your wish is on its way, {first}. May it find you.",
  // Paste each YouTube (Unlisted) link into url. Leave "" until it is ready.
  videos: [
    { title: "Uno", url: "https://youtu.be/xJcnTaTjGT4" },
    { title: "Duo", url: "https://youtu.be/S6c6r3UD41Y" },
    { title: "Tres", url: "https://youtu.be/z45GgojF-_w" },
    { title: "Cuatro", url: "https://youtu.be/I-uRBo_HOmU" },
    { title: "Cinco", url: "https://youtube.com/shorts/nI3ChFyY8uU?feature=share" },
    { title: "Seis", url: "https://youtube.com/shorts/rHt3rFo804g?feature=share" },
    { title: "Siete", url: "https://youtube.com/shorts/lVIzL9oDeDw?feature=share" },
    { title: "Ocho", url: "https://youtu.be/nhZ8LLbX7gI" },
    { title: "Nueve", url: "https://youtu.be/0B7vLsWXUVw" },
    { title: "Diez", url: "https://youtu.be/oe6OuM7ZPIo" },
    { title: "Once", url: "https://youtu.be/ojm1T9jANkU" },
    { title: "Doce", url: "https://youtu.be/2rqvE0N9Ydg" },
    { title: "Trece", url: "https://youtube.com/shorts/HK6XMWOVTvc?feature=share" },
    { title: "Catorce", url: "https://youtube.com/shorts/zRDw2_sJ-JI?feature=share" },
    { title: "Quince", url: "https://youtu.be/xoHTMm35TH4" },
    { title: "Dieciséis", url: "https://youtu.be/MQEC67wevQE" },
    { title: "Diecisiete", url: "https://youtu.be/wr4b6azC4bU" },
    { title: "Dieciocho", url: "https://youtube.com/shorts/5lxEertDwtg?feature=share" }
  ],
  credits: "Made with love by {meFull}.",
  // Poems: "music" is the audio file for that poem (put it in the audio folder, or "" for none).
  // One empty string "" makes a gap between stanzas. Add or remove poems freely.
  poems: [
    { title: "1 I guess", music: "audio/2.mp3", lines: [
      "I know we will never be together but please allow me this much,",
      "Let me tell you how in a sky crowded with stars, you remain the only moon I see",
      "How among billions of faces in this world it is only your eyes I ever search for,",
      "", 
      "Let me tell you how you are the fire I would reach for ",
      "without the fear of burnt, the warmth I would choose",
      "even knowing the cause, I know we will never be together,",
      "but please allow me to love you alound,", ] },
    { title: "Can't stop think about you", music: "audio/1.mp3", lines: [
      "In English we say I can't stop thinking about you, but in poetry we say;",
      "You live in the quite parts of my mind, ",
      "The place the even silence kneels to",
      " ",
      "Every thought drifts back to you",
      "like river returning to sea",
      "As if my heart remembers a home my hands never touch",  ] },
    { title: "Franz Kaftka", music: "audio/3.mp3", lines: [
      "If a million loved you",
      "I am one of them",
      "And if one loved you,",
      "It was me",
      "if no one loved you",
      "Then know that I am dead",
     ] },
    { title: "Mahmoud Darwish", music: "audio/4.mp3", lines: [
      "If you asked me how many times you came into my mind",
      "I would say once, because you came and never left,",
      "All road leads to you, even those I took to forget you,",
      "You are killing me, and you are keeping me from dying,",
      "That is love,",
      "if a thousand other loved you, they'd only love you a drop",
      "compared to my ocean of love",
      "They ask, do you love her to dead?",
      "",

      "I said, speak of her over my grave",
      "and watch how she brings me back to life,",
      "I used to dream of drinking tea with you at night",
      "I mean to be partner in happiness and in joy",
      "belive me my dear, it warms my heart",
      "even if you are far away, not because I love you less",
      "but because I love you more",

      "",
      "A university Degree, Four books and hundreds of ariticles",
      "and i still make mistake when reading",
      "you wrote me good morning I read it as ",
      "I love you",
       ] },
    { title: "Loki", music: "audio/5.mp3", lines: [
      "To begin with",
      "I Love you,",
      "with a depth and passion",
      "That I had felt for no one else in this life",
      " ",
      "If this astonishes you, it astounishes me as well",
      "You are beautiful, giving, gentle idotically and delicously feminine",
      "sexy, wonderfully intellegent and wonderfully silly as well",
      "I want nothing else in this life than to be with you",
      "To listen and watch you, your beautiful voice your beauty",
      "To argue with you,to laugh with you,",
      "To show you things,", 
      "share things with you, to explore your magnificent mind", 


      ] },
    { title: "Poem 06 title", music: "audio/poem-06.mp3", lines: [
      "Replace this with your poem, {first}." ] },
    { title: "Poem 07 title", music: "audio/poem-07.mp3", lines: [
      "Replace this with your poem, {first}." ] },
    { title: "Poem 08 title", music: "audio/poem-08.mp3", lines: [
      "Replace this with your poem, {first}." ] },
    { title: "Poem 09 title", music: "audio/poem-09.mp3", lines: [
      "Replace this with your poem, {first}." ] },
    { title: "Poem 10 title", music: "audio/poem-10.mp3", lines: [
      "Replace this with your poem, {first}." ] },
    { title: "Poem 11 title", music: "audio/poem-11.mp3", lines: [
      "Replace this with your poem, {first}." ] },
    { title: "Poem 12 title", music: "audio/poem-12.mp3", lines: [
      "Replace this with your poem, {first}." ] }
  ],
  roomNames: ["Welcome","Message","Memories","Poems","Stars","Fireworks"]
};
/* ================================================================== */
