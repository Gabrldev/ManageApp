import bycript from 'bcryptjs';

const encryptPass = async (password) => {
    const salt = await bycript.genSalt(10);
    const hashedPass = await bycript.hash(password, salt);
    return hashedPass;
}

const verifyPass = async (password, hashedPass) => {
    const result = await bycript.compare(password, hashedPass);
    return result;
}

export { encryptPass, verifyPass };