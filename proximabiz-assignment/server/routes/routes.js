const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const subjectContoller = require("../controllers/subjectController");
const trainingContoller = require("../controllers/trainingController");

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.get(
  "/user/:userId",
  userController.allowIfLoggedin,
  userController.getUser
);

router.get(
  "/users",
  userController.allowIfLoggedin,
  userController.grantAccess("readAny", "profile"),
  userController.getUsers
);

router.put(
  "/user/:userId",
  userController.allowIfLoggedin,
  userController.grantAccess("updateAny", "profile"),
  userController.updateUser
);

router.delete(
  "/user/:userId",
  userController.allowIfLoggedin,
  userController.grantAccess("deleteAny", "profile"),
  userController.deleteUser
);

router.post(
  "/addSubject",
  userController.allowIfLoggedin,
  userController.grantAccess("createAny", "subject"),
  subjectContoller.addSubject
);

router.get(
  "/getAllSubjects",
  userController.allowIfLoggedin,
  userController.grantAccess("readAny", "profile"),
  subjectContoller.getAllSubjects
);

router.get(
  "/subjectsBySort/:sort/:limit",
  userController.allowIfLoggedin,
  userController.grantAccess("readAny", "profile"),
  subjectContoller.getAllSubjects
);

router.post(
  "/addTraining",
  userController.allowIfLoggedin,
  userController.grantAccess("createAny", "subject"),
  trainingContoller.addTraining
);

router.get(
  "/getAlltrainings",
  userController.allowIfLoggedin,
  userController.grantAccess("readAny", "profile"),
  trainingContoller.getAlltrainings
);

router.get(
  "/getTrainingBySubject/:subject",
  userController.allowIfLoggedin,
  userController.grantAccess("readAny", "profile"),
  trainingContoller.getTrainingBySubject
);

router.get(
  "/getTrainingByType/:type",
  userController.allowIfLoggedin,
  userController.grantAccess("readAny", "profile"),
  trainingContoller.getTrainingByType
);

router.get(
  "/getTrainingByStream/:stream",
  userController.allowIfLoggedin,
  userController.grantAccess("readAny", "profile"),
  trainingContoller.getTrainingByStream
);

module.exports = router;
