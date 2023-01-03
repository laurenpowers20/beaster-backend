import { Router } from "express";
import * as controllers from "../controllers/artists.js";

const router = Router();

router.get("/", controllers.getArtists);
router.get("/:id", controllers.getArtist);
router.get("/name/:name", controllers.getArtistName);
router.post("/", controllers.createArtist);
router.put("/:id", controllers.updateArtist);
router.put("/name/:name", controllers.updateArtistName);
router.delete("/:id", controllers.deleteArtist);
router.delete("/name/:name", controllers.deleteArtistName);

export default router;
