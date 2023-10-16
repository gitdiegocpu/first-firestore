import { addArt,getAllArt } from "./src/art.js";

await addArt({
    artist: "Van gough",
    title: "irises",
    media:"oil",
});

await addArt({
artist: "da vinci",
title: "last supper",
media:"oil",
});

await getAllArt();
