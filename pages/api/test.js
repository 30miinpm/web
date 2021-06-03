import { postGetAll } from 'db/model/posts';

export default async (req, res) => {
    const posts = await postGetAll();
    res.json(posts);
};
