const router = require('express').Router()
const adoptionPostsCtrl = require('../controllers/adoptionPosts.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/
router.post('/', adoptionPostsCtrl.create)
router.get('/', adoptionPostsCtrl.index)
router.put('/:id', adoptionPostsCtrl.update)
router.delete('/:id', adoptionPostsCtrl.delete)

/*---------- Protected Routes ----------*/


module.exports = router