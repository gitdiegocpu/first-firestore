import{ db } from "./connectDb.js";


export async function addArt(newart){
    await db.collection('art').add(newart);
}

export async function getAllArt(){
    //first get collection from db
    const coll = await db.collection('art').get();
    // convert to array objetcs
    const art = coll.docs.map(doc => ({ id: doc.id, ...doc.data()}));
    //console.log array objects
    console.table(art);
}