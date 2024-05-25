import axios from "axios";
import { atom, selector } from "recoil";
import { BACKEND_URL } from '../utils/index'

export const tagImg = atom({
    key: 'tagImg',
    default: []
})

export const tagImgSelector = selector({
    key: 'tagImgSelector',
    get: async ({ get }) => {
        const images = get(tagImg);
        if (images.length > 0)
            return images;
        try {
            const resp = await axios.get(`${BACKEND_URL}/user/all/3/tags`);
            const data = await resp.data;
            return data;
        } catch (error) {
            console.log('error while fetching tag images');
            return { data: "error while fetching tag images" };
        }
    },
    set: ({ set }, newtagImages) => {
        set(tagImg, newtagImages);
    }
})
