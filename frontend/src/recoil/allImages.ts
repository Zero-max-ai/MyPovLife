import axios from "axios";
import { atom, selector } from "recoil"
import { BACKEND_URL } from '../utils/index'

export const allImages = atom({
    key: 'allImages',
    default: []
});

export const allImagesSelector = selector({
    key: 'allImagesSelector',
    get: async ({ get }) => {
        const images = get(allImages);
        if (images.length > 0)
            return images;
        try {
            const resp = await axios.get(`${BACKEND_URL}/user/all`);
            const data = await resp.data.res;
            return data;
        } catch (error) {
            console.log('error while fetching the images');
            return { data: "error while fetching images" }
        }
    },
    set: ({ set }, newImages) => {
        set(allImages, newImages);
    }
})