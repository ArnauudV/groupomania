const fs = require("fs");


exports.deleteOldFile = (req, res, next) => {
  if (req.body.oldfile && req.body.oldfile != "") {
    const filename = req.body.oldfile.split("/images/")[1];
    fs.unlink(`images/${filename}`, () => {
      console.log(`${filename} deleted`);
    });
  }
  next();
};

exports.deleteUserAllPostFiles = (req, res, next) => {
  for (let i in req.file) {
    if (req.file[i].image != null) {
      const filename = req.file[i].image.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        console.log(`${filename} deleted`);
      });
    }
  }
  next();
}

exports.deleteFile = (req, res, next) => {
  if (req.post_picture != null) {
    const filename = req.post_picture.split("/images/")[1];
    fs.unlink(`images/${filename}`, () => {
      console.log(`${filename} deleted`);
    });
  }
  next();
};


