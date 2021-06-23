import Model from '../models/model';

const messagesModel = new Model('users');
// not finished yet, recheck
export const registerUser = async (req, res) => {
    const { id, name, email, password, role } = req.body;
    const columns = 'name, message';
    const values = `'${name}', '${message}'`;
    try {
        const data = await messagesModel.insertWithReturn(columns, values);
        res.status(200).json({ messages: data.rows });
    } catch (err) {
        res.status(200).json({ messages: err.stack });
    }
};
