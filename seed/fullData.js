import db from "../db/connection.js";
import Album from "../models/Album.js";
import Artist from "../models/Artist.js";

const insertData = async () => {
  await db.dropDatabase();

  const beaster = new Artist({
    name: "Beaster",
    artistImg: "https://i.imgur.com/fwhq6n9.png",
    albums: [],
    members: ["Dez", "Mike", "Tracy", "Newman"],
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet arcu at mattis ultricies. Sed in purus feugiat, pharetra nunc et, rutrum orci. Aenean feugiat congue ultricies. Quisque leo augue, interdum a pharetra ut, pellentesque ornare urna. Nulla facilisi. Aliquam efficitur tellus at luctus auctor. Curabitur at ligula leo.",
  });

  await beaster.save();

  const beasterEP = new Album({
    title: "BeasterEP",
    artist: beaster,
    albumCover: "https://f4.bcbits.com/img/a2374827918_16.jpg",
    songs: ["Wilma", "Mystery Snail", "Cuthroat", "China Buffet"],
    year: 2020,
  });
  await beasterEP.save();
  beaster.albums.push(beasterEP);
  await beaster.save();

  await db.close();
};

insertData();
