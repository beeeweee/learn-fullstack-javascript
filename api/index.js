import express from "express";


const router = express.Router();

//api call
router.get('/', (req, res) => {
    res.send({data: []});
});

export default router;