import { IMGUR_API } from "../utils/api";

export const fileUpload = async (formData) => {
  return IMGUR_API.post("/util/upload-file", formData);
};
