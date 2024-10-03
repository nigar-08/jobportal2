import axios from "axios";

export const apiUploadImages = (images) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "POST",
        url: `https://api.cloudinary.com/v1_1/dmo7eibxm/image/upload/`,
        data: images,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
