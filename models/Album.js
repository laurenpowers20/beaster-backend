import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Album = new Schema({
  title: { type: String },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "artists"},
  albumCover: { type: String },
  songs: [{ type: String }],
  year: { type: Number },
});

export default mongoose.model("albums", Album);
