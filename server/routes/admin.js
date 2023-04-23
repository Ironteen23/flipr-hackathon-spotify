import express from 'express'
import { upload } from '../controllers/auth.js'

const adminRoutes = express.Router()
adminRoutes.post('/', upload)

export default adminRoutes
