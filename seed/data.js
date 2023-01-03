import db from "../db/connection.js";
import Album from "../models/Album.js";
import Artist from "../models/Artist.js";
import artists from "./artists.json" assert { type: "json" };
import albums from "./albums.json" assert { type: "json" };

const insertData = async () => {
  await db.deleteMany();

  await Artist.create(artists);
  await Album.create(albums);

  await db.close();
};

insertData();
