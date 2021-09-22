const { MODE } = require("./blendMode.js");
const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "ipfs://REPLACE_WITH_IPFS_CID";

const layerConfigurations = [
  {
    growEditionSizeTo: 182,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Base" },
      { name: "Skin" },
      { name: "Hats" },
      { name: "Eyes" },
    ],
  },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const preview = {
  thumbPerRow: 20,
  thumbWidth: 100,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
};
