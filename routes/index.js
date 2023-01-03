import { Router } from "express";
import artistsRoutes from "./artists.js";
import albumsRoutes from "./albums.js";

const router = Router();

router.get("/", (req, res) => res.send("API root for Beaster"));

router.use("/artists", artistsRoutes);
router.use("/albums", albumsRoutes);

export default router;
