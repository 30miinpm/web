/* eslint-disable import/prefer-default-export */
import database from '../../index';

const postGetAll = async () => {
    try {
        const fileNames = await database.select('title', 'id').from('post');

        return fileNames.map((fileName) => {
            return fileName;
        });
    } catch (error) {
        return {
            params: {
                id: `error: ${error}`,
            },
        };
    }
};

export default postGetAll;
