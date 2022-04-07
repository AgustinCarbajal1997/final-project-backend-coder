const cloudinary = require("../config/cloudinary");
const fs = require("fs-extra");
const Factory = require("../dao/factory");

const postProduct = async (article) => {
  try {
    const data = await Factory.models("product").save({
      ...article,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

const postImage = async (image, productId) => {
  try {
    const imageUploaded = await cloudinary.v2.uploader.upload(image.path);
    const update = await Factory.models("product").updateById(productId, {
      $set: {
        images: [imageUploaded.secure_url],
        public_id: imageUploaded.public_id,
      },
    });
    await fs.unlink(image.path);
    return update;
  } catch (error) {
    throw error;
  }
};
const putProduct = async (article, productId) => {
  try {
    const update = await Factory.models("product").updateById(productId, {
      ...article,
    });
    return update;
  } catch (error) {
    throw error;
  }
};
const deleteProduct = async (productId) => {
  try {
    const data = await Factory.models("product").deleteById(productId);
    return data;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  postProduct,
  postImage,
  putProduct,
  deleteProduct,
};
