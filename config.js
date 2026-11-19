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
    { title: "Video one",   url: "" },
    { title: "Video two",   url: "" },
    { title: "Video three", url: "" },
    { title: "Video four",  url: "" },
    { title: "Video five",  url: "" },
    { title: "Video six",   url: "" }
  ],
  credits: "Made with love by {meFull}.",
  // Poems: one empty string "" makes a gap between stanzas. Add or remove poems freely.
  poems: [
    { title: "Title of your first poem", lines: [
      "Write the first line of your poem here,",
      "and the second line here.",
      "",
      "Leave an empty line for a new stanza." ] },
    { title: "Title of your second poem", lines: [
      "Your second poem goes here, {first}.",
      "Names like {first} and {me} fill in automatically." ] },
    { title: "Title of your third poem", lines: [
      "Replace this with your own words." ] }
  ],
  roomNames: ["Welcome","Message","Memories","Poems","Stars","Fireworks"]
};
/* ================================================================== */
