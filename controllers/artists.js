import Artist from "../models/Artist.js";

export const getArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findById(id).populate("albums");

    if (artist) {
      return res.json(artist);
    }

    res.status(404).json({ message: "Artist not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getArtistName = async (req, res) => {
  try {
    const { name } = req.params;
    const artist = await Artist.find({ name: name }).populate("albums");

    if (artist) {
      return res.json(artist);
    }

    res.status(404).json({ message: "Artist not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getArtistGenre = async (req, res) => {
  try {
    const { genre } = req.params;
    const artist = await Artist.find({ genre: genre }).populate("albums");

    if (artist) {
      return res.json(artist);
    }

    res.status(404).json({ message: "Artist not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createArtist = async (req, res) => {
  try {
    const artist = new Artist(req.body);
    await artist.save();
    res.status(201).json(artist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findByIdAndUpdate(id, req.body);
    res.status(201).json(artist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateArtistName = async (req, res) => {
  try {
    const { name } = req.params;
    const artist = await Artist.findOneAndUpdate({ name: name }, req.body);
    res.status(201).json(artist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Artist.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Artist deleted!");
    }

    throw new Error("Artist not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteArtistName = async (req, res) => {
  try {
    const { name } = req.params;
    const deleted = await Artist.findOneAndDelete({ name: name });

    if (deleted) {
      return res.status(200).send("Artist deleted!");
    }

    throw new Error("Artist not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

