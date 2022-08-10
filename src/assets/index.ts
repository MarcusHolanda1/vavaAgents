import { ImageSourcePropType } from "react-native";

type ImageTypes = {
  banners: {
    logoDark: ImageSourcePropType;
    logoLight: ImageSourcePropType;
  };
};

const IMAGES: ImageTypes = {
  banners: {
    logoDark: require("./images/banners/logoDark.png"),
    logoLight: require("./images/banners/logoLight.png"),
  },
};
export default IMAGES;
