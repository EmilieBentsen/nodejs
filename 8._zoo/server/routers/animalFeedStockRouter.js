import { query, Router } from "express";
const router = Router();
import db from "../database/connection_mysql.js";

router.get("/animalfeedstock", async (req, res) => {
    const [rows, fields] = await db.query("SELECT * FROM animal_feed_stock;");
    
    res.send({ data: rows });
});

router.post("/animalfeedstock/:stockTypeId", async (req, res) => {
    // task write pseudo-code or comments and reflect on what steps you need to do here
    const stockTypeId = req.params;
    
    const data = db.query("INSERT INTO animal_feed_stock (initial_amount, remaining_amount, animal_stock_type_id) WHERE id = (stockTypeId) VALUES (initialAmount, remainingAmount || initialAmount);")
    
    res.send({});
});

export default router;