import express from 'express'
import bodyParser from 'body-parser'
import cloudinary from 'cloudinary'
import fileUpload from 'express-fileupload'
import { upload } from '../utils/multer.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())
cloudinary.config({
  cloud_name: 'dzvwjfjp5',
  api_key: '536397594342757',
  api_secret: 'r8GMl9LAH8Zdy-QeAzx69oDt9yw',
})

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     limits: { fileSize: 50 * 2024 * 1024 },
//   })
// )

const adminRoutes = express.Router()
adminRoutes.post('/upload', upload.single('image'), async (req, res) => {
  try {
    console.log('req.body..', req.body)
    console.log('req.file...', req.file)

    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: `${Date.now()}`,
      resource_type: 'auto',
      folder: 'images',
    })
    console.log('result...', result)

    res.json(result)
  } catch {
    ;(err) => console.log(err)
  }
  // res.send('lol')
})

export default adminRoutes
