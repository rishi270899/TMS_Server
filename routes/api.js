const express = require("express")
const route = express.Router();
const TenderController = require('../controllers/TenderController')



// Tender Api
route.post("/Tender_insert", TenderController.Tender_insert);
route.get("/getTender",TenderController.getTender);
route.get("/getTenderById/:id",TenderController.getTenderById);
route.delete("/deleteTender/:id",TenderController.deleteTender)
route.post("/updateTender/:id",TenderController.updateTender)








module.exports = route;
