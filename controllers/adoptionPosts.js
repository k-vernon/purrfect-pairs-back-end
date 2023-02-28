const { AdoptionPost } = require("../models")


const create = async (req, res) => {
  try {
    console.log("Req Body:", req.body)
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



module.exports = {
  create,
  index,
  update,
  show,
  delete: deleteAdoptionPost
}