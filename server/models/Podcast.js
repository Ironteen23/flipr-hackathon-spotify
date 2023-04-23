import mongoose from 'mongoose'

const PodSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    audioLink: {
      type: String,
    },
    imageLink: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
    },
    isVideo: {
      type: Boolean,
      default: false,
    },
    videoLink: {
      type: String,
    },
  },
  { timestamps: true }
)

const Podcast = mongoose.model('Podcast', PodSchema)
export default Podcast
