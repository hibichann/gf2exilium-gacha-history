const fs = require("fs-extra");
const path = require("path");
const protobufCN = require("./protobuf/compiledCN");
const protobufEN = require("./protobuf/compiledEN");
const utils = require("./utils");
const gamePath = utils.getGamePath();
const config = require("./config");
const getNameRarityDictionary=async()=>{
  let path2 = "";
  let protobuf = null;
  let protobufProp=''
  let curConfig = await config.currentValue();
  console.log(curConfig.lang=="en-us");
  if (curConfig.lang == "en-us") {
    path2 = "LocalCache/Data/Table/LangPackageTableEnusData.bytes";
    protobuf = protobufEN;
    protobufProp='LangPackageTableEnusDataTable'
  } else {
    path2 = "LocalCache/Data/Table/LangPackageTableCnData.bytes";
    protobuf = protobufCN;
    protobufProp='LangPackageTableCnDataTable'
  }
  const LangPackage = (function () {
    const lptcdtBytes = fs.readFileSync(path.join(gamePath, path2));
    const lptcdmsg = protobuf[protobufProp].decode(
      lptcdtBytes.subarray(lptcdtBytes.readInt32LE() + 1)
    );
    // console.log(lptcdmsg["Data"]);
    return lptcdmsg["Data"];
  })();
  const Characters = (function () {
    const bytes = fs.readFileSync(
      path.join(gamePath, "LocalCache/Data/Table/GunData.bytes")
    );
    const msg = protobuf.GunDataTable.decode(
      bytes.subarray(bytes.readInt32LE() + 1)
    );
    return msg["Data"];
  })();
  const Weapons = (function () {
    const bytes = fs.readFileSync(
      path.join(gamePath, "LocalCache/Data/Table/GunWeaponData.bytes")
    );
    const msg = protobuf.GunWeaponDataTable.decode(
      bytes.subarray(bytes.readInt32LE() + 1)
    );
    return msg["Data"];
  })();
  const NameRarityDictionary = {};
  Characters.forEach((chara) => {
    var name = LangPackage.find((x) => x.Id.low == chara.Name.Id).Content;
    var rank = chara.Rank;
    NameRarityDictionary[chara.Id] = { name, rank, isCharacter: true };
  });
  Weapons.forEach((weapon) => {
    var name = LangPackage.find((x) => x.Id.low == weapon.Name.Id).Content;
    var rank = weapon.Rank;
    NameRarityDictionary[weapon.Id] = { name, rank, isCharacter: false };
  });
  return NameRarityDictionary
}
module.exports = {
  getNameRarityDictionary,
};
