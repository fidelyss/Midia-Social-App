import PostMessage from "../Models/postMessage.js"
export const getPost = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);

    } catch (error) {
        console.log(error.message);
    }
}
export const createPost = async (req, res) => {
    const bodyReq = req.body;
    const newPost = new PostMessage(bodyReq);
    try {
        await newPost.save();
        res.status(201).json({ message: 'deu certo' });
    } catch (error) {
        res.status(409).json({ erroMessage: 'AAAAAAAAAAA' });
    }
}