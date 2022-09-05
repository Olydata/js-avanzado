import { getConnection } from "./../database/database"

const getLanguages = async (request, response) => {
    const connection = await getConnection();
    const result = await connection.query("SELECT id, name, programmers FROM language");
    console.log(result);
    response.json(result);
};

export const methods = {
    getLanguages
};