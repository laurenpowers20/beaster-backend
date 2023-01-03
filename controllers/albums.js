import Album from "../models/Album.js";
import Artist from "../models/Artist.js";

export const getAlbums = async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const album = await Album.findById(id).populate("artist");

    if (album) {
      return res.json(album);
    }

    res.status(404).json({ message: "Album not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getAlbumTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const album = await Album.find({ title: title }).populate("artist");

    if (album) {
      return res.json(album);
    }

    res.status(404).json({ message: "Album not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createAlbum = async (req, res) => {
  try {
    const album = new Album(req.body);
    await album.save();

    await Artist.findByIdAndUpdate(
      req.body.artist,
      { $push: { albums: album } },
      { upsert: true, new: true }
    );

    res.status(201).json(album);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const album = await Album.findByIdAndUpdate(id, req.body);
    res.status(201).json(album);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateAlbumTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const album = await Album.findOneAndUpdate({ title: title }, req.body);
    res.status(201).json(album);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const album = await Album.findById(id);
    const artist = await Artist.findById(album.artist._id);
    artist.albums = artist.albums.filter((albumData) => {
      return albumData._id !== album._id;
    });
    await artist.save();
    const deleted = await Album.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Album deleted!");
    }

    throw new Error("Album not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteAlbumTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const deleted = await Album.findOneAndDelete({ title: title });

    if (deleted) {
      return res.status(200).send("Album deleted!");
    }

    throw new Error("Album not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
