import { Router } from "express";
import { sendEmailFromContactPage } from "../util/sendEmail.js"
const router = Router();

router.post("/api/contact", (req, res) => {
    const errorOrResponse = sendEmailFromContactPage(req.body.email, req.body.message)
    res.send(req.body);
});

export default router;