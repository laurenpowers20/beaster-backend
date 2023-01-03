import { Router } from "express";
import * as controllers from "../controllers/albums.js";

const router = Router();

router.get("/", controllers.getAlbums);
router.get("/:id", controllers.getAlbum);
router.get("/title/:title", controllers.getAlbumTitle);
router.post("/", controllers.createAlbum);
router.put("/:id", controllers.updateAlbum);
router.put("/title/:title", controllers.updateAlbumTitle);
router.delete("/:id", controllers.deleteAlbum);
router.delete("/title/:title", controllers.deleteAlbumTitle);

export default router;
