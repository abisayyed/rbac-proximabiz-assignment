const Training = require("../models/trainingsModel");
const Subject = require("../models/subjectsModel");

exports.getAlltrainings = async (req, res, next) => {
  try {
    const trainings = await Training.find({});
    res.status(200).json({
      data: trainings,
    });
  } catch (error) {
    next(error);
  }
};

exports.addTraining = async (req, res, next) => {
  try {
    const { coursename, subjects, type } = req.body;
    const alreadyCourse = await Training.findOne({ coursename: coursename });
    if (alreadyCourse) {
      var message = "Course Already exists.";
      var data = alreadyCourse;
    } else {
      let userId = res.locals.loggedInUser._id;
      const newCourse = new Training({
        coursename,
        subjects,
        type,
        lastModifiedBy: userId,
      });
      await newCourse.save();
      var message = "New Course created successfully!";
      var data = newCourse;
    }
    res.json({
      data: data,
      message: message,
    });
  } catch (error) {
    next(error);
  }
};

exports.getTrainingBySubject = async (req, res, next) => {
  try {
    const subject = req.params.subject;
    console.log(req.params.subject);
    let result = await Training.find({ subjects: { $regex: subject } });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.getTrainingByType = async (req, res, next) => {
  try {
    const type = req.params.type;
    let result = await Training.find({ type: type });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.getTrainingByStream = async (req, res, next) => {
  try {
    const stream = req.params.stream;
    let subject = await Subject.find({ stream: stream });
    var newSubjectsArr = [];
    subject.forEach((items) => newSubjectsArr.push(items.subject));
    let uniqueArr = [...new Set(newSubjectsArr)];
    let myStream = await Training.find({
      subjects: { $regex: uniqueArr.toString() },
    });
    res.status(200).json({
      data: myStream,
    });
  } catch (error) {
    next(error);
  }
};
