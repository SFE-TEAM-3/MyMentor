const Profile = require("../Models/profileModel");
const fs = require("fs");

//show the list of mentorInfo
const getAllMentee = (req, res, next) => {
  Profile.find({ lookingFor: "mentor" })
    .populate({ path: "user dealtWith", select: "-tokens" })
    .then((response) => {
      res.json({ response });
    })
    .catch((e) => {
      res.send("error Occured!", e.message);
    });
};

//////////////////////////////////////////////////////

// add new mentor
const addNewMentee = (req, res, next) => {
  let avatar = req.file ? req.file.fieldname : "";
  const avatarPath = req.file ? req.file.path : "";
  let mentee = new Profile({
    ...req.body,
    lookingFor: req.body.lookingFor ? req.body.lookingFor : "mentor",
    avatar,
    user: req.user._id,
  });
  mentee.updateRole(mentee);

  mentee
    .save()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(400).send(error.message);
      if (avatar) {
        deleteUploadedAvatar(avatarPath);
      }
    });
};

///////////////////////////////////////////////
//////Delete avatar in case the profile failed of saving

function deleteUploadedAvatar(avatarPath) {
  // avatarPath
  const filePath = avatarPath; // Specify the correct path to the avatar file

  if (!fs.existsSync(filePath)) {
    console.error("Avatar file does not exist");
    return;
  }

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting avatar: ${err}`);
    } else {
      console.log("Avatar deleted successfully");
    }
  });
}

////////////////////////////////////////

//get mentor by id
const getMentee = async (req, res, next) => {
  const _id = req.params.id;
  Profile.findById(_id)
    .populate({ path: "user dealtWith", select: "-tokens" })
    .then((mentee) => {
      if (!mentee) {
        return res.status(404).send("mentee not found");
      }
      res.status(200).send(mentee);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// update mentor
const updateMentee = async (req, res, next) => {
  try {
    const menteeId = req.params.id;
    const mentee = await Profile.findByIdAndUpdate(
      menteeId,
      {
        lockingFor: req.body.lockingFor,
        designation: req.body.designation,
        location: req.body.location,
        skills: req.body.skills,
        avatar: req.file ? req.file.filename : "",
        availableForHiring: req.body.availableForHiring,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!mentee) {
      return res.status(404).send("No mentee Founded");
    }
    mentee.updateRole(mentee);
    res.status(200).send(mentee);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

// delete mentor
const removeMentee = async (req, res, next) => {
  try {
    const id = req.params.id;
    const mentee = await Profile.findByIdAndDelete(id);
    if (!mentee) {
      return res.status(404).send("Selected mentee not found to delete");
    }
    res.status(200).send("delete is successfully");
  } catch (error) {
    res.status(400).send(error.messsage);
  }
};

module.exports = {
  addNewMentee,
  getAllMentee,
  getMentee,
  updateMentee,
  removeMentee,
};
