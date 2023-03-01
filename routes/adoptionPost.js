const router = require('express').Router()
const adoptionPostsCtrl = require('../controllers/adoptionPosts.js')
const middleware = require('../middleware/auth.js')
const adoptionPost = require('../models/adoptionPost.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/
router.get('/', adoptionPostsCtrl.index)
router.get('/:id', adoptionPostsCtrl.show)

/*---------- Protected Routes ----------*/

router.use( decodeUserFromToken )
router.post('/', checkAuth,adoptionPostsCtrl.create)
router.put('/:id', checkAuth,adoptionPostsCtrl.update)
router.put('/:id/add-photo', checkAuth, adoptionPostsCtrl.addPhoto)
router.delete('/:id', checkAuth,adoptionPostsCtrl.delete)

module.exports = router