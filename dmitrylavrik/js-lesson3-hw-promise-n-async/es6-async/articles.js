import * as serverApi from './db';

const parseRes = (rs) => {
    let info = JSON.parse(rs);
    if (info.code === 200) {
        return info.data;
    } else {
        throw new Error('info.code !== 200');
    }
};
const all = async () => parseRes(await serverApi.all());

const one = async (id) => parseRes(await serverApi.get(id));

const remove = async (id) => parseRes(await serverApi.remove(id));

export {
    all,
    one,
    remove
};