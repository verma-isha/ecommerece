const cloudinary = require('cloudinary');
const router = require('express').Router();
// require('dotenv').config();

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET
// })
cloudinary.config({
  cloud_name: "dqoxbwykz",
  api_key: "898973315837412",
  api_secret: "A6ZL1HHeK_gA3PFbK74lciVRWIM"
});

router.delete('/:public_id', async(req, res)=> {
  const {public_id} = req.params;
  try {
      await cloudinary.uploader.destroy(public_id);
      res.status(200).send();
  } catch (e) {
      res.status(400).send(e.message)
  }
})


module.exports = router;
