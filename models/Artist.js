import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Artist = new Schema({
  name: { type: String },
  artistImg: { type: String },
  albums: [
    {
      type: Schema.Types.ObjectId,
      ref: "albums",
    },
  ],
  members: [{ type: String }],
  bio: { type: String },
});

export default mongoose.model("artists", Artist);
