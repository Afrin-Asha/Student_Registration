const StudentFormModel = require("../model/StudentFormModel");

// C=Create
exports.CreateStudent = async (req, res) => {
  let reqBody = req.body;
  try {
    let result = await StudentFormModel.create(reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(500).json({ status: "fail", data: e });
  }
};

//R=Read

exports.ReadStudent = async (req, res) => {
    try {
      let result = await StudentFormModel.find();
      res.status(200).json({ status: "success", data: result });
    } catch (e) {
      res.status(500).json({ status: "fail", data: e });
    }
  };

  exports.ReadStudentById = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id };
    try {
      let result = await StudentFormModel.find(query);
      res.status(200).json({ status: "success", data: result });
    } catch (e) {
      res.status(500).json({ status: "fail", data: e });
    }
  };

//U=update
exports.UpdateStudent = async (req, res) => {
  let id = req.params.id;
  let query = { _id: id };
  let reqBody = req.body;
  try {
    let result = await StudentFormModel.updateOne(query, reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(500).json({ status: "fail", data: e });
  }
};


exports.DeleteStudent = async (req, res) => {
  let id = req.params.id;   
  let query = { _id: id };

  try {
    let result = await StudentFormModel.deleteOne(query);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(500).json({ status: "fail", data: e });
  }
};


