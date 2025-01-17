import express from 'express'
import { getPost, createPost } from '../Controllers/post.js'
const router = express.Router();
router.get('/', getPost);
router.post('/', createPost);
export default router;
