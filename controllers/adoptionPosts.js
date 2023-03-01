const { AdoptionPost } = require("../models")


const create = async (req, res) => {
  try {
    console.log("Req Body:", req.body)
    console.log("Req User:", req.user)
    req.body.author = req.user.profile.id
    const adoptionPost = await AdoptionPost.create(req.body);

    res.status(200).json(adoptionPost);
  } catch (error) {
    console.log("Backend Error:", error)
    res.status(500).json(error);
  }
}

const index = async (req, res) => {
  try {
    const adoptionPosts = await AdoptionPost.findAll()

    res.status(200).json(adoptionPosts)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const adoptionPost = await AdoptionPost.findByPk(req.params.id)

    adoptionPost.set(req.body)
    await adoptionPost.save()

    res.status(200).json(adoptionPost)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteAdoptionPost = async (req, res) => {
  try {
    const adoptionPost = await AdoptionPost.findByPk(req.params.id)
    await adoptionPost.destroy()

    res.status(200).json(adoptionPost)
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
    const adoptionPost = await AdoptionPost.findByPk(req.params.id);
    
    res.status(200).json(adoptionPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

async function addPhoto(req, res) {
  try {
    const imageFile = req.files.photo.path
    const adoptionPost = await AdoptionPost.findByPk(req.params.id)
    const image = await cloudinary.uploader.upload(
      imageFile, 
      { tags: `${req.user.email}` }
    )
    adoptionPost.photo = image.url
    await adoptionPost.save()
    res.status(201).json(adoptionPost.photo)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}



module.exports = {
  create,
  index,
  update,
  show,
  delete: deleteAdoptionPost,
  addPhoto
}