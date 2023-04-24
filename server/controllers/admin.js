import express from 'express'
import cloudinary from 'cloudinary'
import fileUpload from 'express-fileupload'

const upload = () => {
  const app = express()

  app.use(express.json())

  cloudinary.config({
    cloud_name: 'dzvwjfjp5',
    api_key: '536397594342757',
    api_secret: 'r8GMl9LAH8Zdy-QeAzx69oDt9yw',
  })

  app.use(
    fileUpload({
      useTempFiles: true,
      limits: { fileSize: 50 * 2024 * 1024 },
    })
  )

  app.post('/upload', async (req, res) => {
    console.log(req)
    const file = req.file.audio
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: 'auto',
      folder: 'audios',
    })

    res.json(result)
  })
}

export default upload
