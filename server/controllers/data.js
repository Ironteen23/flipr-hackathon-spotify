import Podcast from "../models/Podcast.js";
import User from "../models/User.js";

export const getAllData = async (req, res) => {
  try {
    // const { firstName, lastName, email, password } = req.body;

    // const salt = await bcrypt.genSalt();
    // const passwordHash = await bcrypt.hash(password, salt);

    // const newUser = new User({
    //   firstName,
    //   lastName,
    //   email,
    //   password: passwordHash,
    // });
    // const savedUser = await newUser.save();

    const podcasts = await Podcast.find({});
    res.status(200).json(podcasts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addFav = async (req, res) => {
  try {
    const { user_id, song_id } = req.body;

    const user = await User.findOneAndUpdate(
      { _id: user_id },
      { $addToSet: { favourites: [song_id] } }
      // { favourites: favourites.push(song_id) }
    );

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
