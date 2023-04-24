import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uploadedFileName =
      file.fieldname + '-' + Date.now() + '-' + file.originalname
    cb(null, uploadedFileName)
  },
})

export const upload = multer({ storage: storage })
