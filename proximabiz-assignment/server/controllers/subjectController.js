const Subject = require("../models/subjectsModel");
const User = require("../models/usersModel");

exports.addSubject = async (req, res, next) => {
  try {
    const { subject, stream } = req.body;
    const alreadySubject = await Subject.findOne({ subject: subject });
    if (alreadySubject) {
      var message = "Subject Already exists.";
      var data = alreadySubject;
    } else {
      let userId = res.locals.loggedInUser._id;
      const newSubject = new Subject({
        subject,
        stream,
        lastModifiedBy: userId,
      });
      await newSubject.save();
      var message = "New Subject created successfully!";
      var data = newSubject;
    }
    res.json({
      data: data,
      message: message,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllSubjects = async (req, res, next) => {
  try {
    const sortingOrder = req.params.sort;
    const recordLimit = parseInt(req.params.limit);
    if (sortingOrder) {
      var subjects = await Subject.find({})
        .sort({ createdAt: sortingOrder })
        .limit(recordLimit);
    } else {
      var subjects = await Subject.find({});
    }
    res.status(200).json({
      data: subjects,
    });
  } catch (error) {
    next(error);
  }
};
