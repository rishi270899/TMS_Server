const TenderModel = require("../models/tender");

class TenderController {
  static Tender_insert = async (req, res) => {
    // console.log(req.body);
    try {
      const { name, Description, start_time, end_time, buffer_time } = req.body;
      const result = new TenderModel(req.body);
      if (!result) {
        return res
          .status(404)
          .json({ status: "fail", message: "tender data not found" });
      }
      const savetender = await result.save();
      res.status(200).json({
        status: "success",
        message: "Tender Registration Successfully",
        savetender,
      });
    } catch (error) {
      res.status(500).json({ status: "failed", message: error.message });
    }
  };

  static getTender = async (req, res) => {
    try {
      const tenders = await TenderModel.find();
      res.status(200).json(tenders);
    } catch (error) {
      res.status(400).json({ status: "failed", message: error.message });
    }
  };

  // get specific tender bu id
  static getTenderById = async (req, res) => {
    try {
      const tender = await TenderModel.findById(req.params.id);
      if (!tender) {
        return res.status(404).json({ message: "Tender not found" });
      }
      res.status(200).json(tender);
    } catch (error) {
      //   console.log(error.message);
      res.status(400).json({ status: "failed", message: error.message });
    }
  };

  // delete tender

  static deleteTender = async (req, res) => {
    try {
      const id = req.params.id;
      const userExist = await TenderModel.findById(id);
      if (!userExist) {
        return res.status(404).json({ message: "user not exist" });
      }
      await TenderModel.findByIdAndDelete(id);
      res.status(200).json({ message: "user deleted succesfully" });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ status: "failed", message: error.message });
    }
  };

  static updateTender = async (req, res) => {
    try {
      const { name, Description, start_time, end_time, buffer_time } = req.body;
      const data = await TenderModel.findByIdAndUpdate(req.params.id, {
        name: name,
        Description: Description,
        start_time: start_time,
        end_time: end_time,
        buffer_time: buffer_time,
      });
      res.status(200).json({ msg: "user update successfully" });
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = TenderController;
