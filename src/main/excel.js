const ExcelJS = require("./module/exceljs.min.js");
const getData = require("./getData").getData;
const { app, ipcMain, dialog } = require("electron");
const fs = require("fs-extra");
const path = require("path");
const i18n = require("./i18n");
const cloneDeep = require("lodash-es/cloneDeep").default;

function pad(num) {
  return `${num}`.padStart(2, "0");
}

function getTimeString() {
  const d = new Date();
  const YYYY = d.getFullYear();
  const MM = pad(d.getMonth() + 1);
  const DD = pad(d.getDate());
  const HH = pad(d.getHours());
  const mm = pad(d.getMinutes());
  const ss = pad(d.getSeconds());
  return `${YYYY}${MM}${DD}_${HH}${mm}${ss}`;
}

const start = async () => {
  const { header, customFont, filePrefix, fileType,cols } = i18n.excel;
  const { dataMap, current } = getData();
  const data = dataMap.get(current);
  // https://github.com/sunfkny/genshin-gacha-export-js/blob/main/index.js
  const workbook = new ExcelJS.Workbook();
  for (let [key, value] of data.result) {
    const name = data.typeMap.get(key);
    const sheet = workbook.addWorksheet(name, {
      views: [{ state: "frozen", ySplit: 1 }],
    });
    let width = [24, 34, 12, 12, 12, 12, 12];
    const excelKeys = [
      "time",
      "name",
      "type",
      "rank",
      "total",
      "pity",
      "remark",
    ];
    sheet.columns = excelKeys.map((key, index) => {
      return {
        header: header[key],
        key,
        width: width[index],
      };
    });
    // get gacha logs
    const logs = cloneDeep(value);
    let total = 0;
    let pity = 0;
    for (let log of logs) {
      var namE = log[1];
      var rank = log[2];
      var isCharacter = log[3];
      var pool = log[4];
      var time = log[5];
      log[0] = time;
      log[1] = namE;
      log[2] = isCharacter ? cols.character : cols.weapon;
      log[3] = rank;
      log[6] = pool;
      total += 1;
      pity += 1;
      log[4] = total;
      log[5] = pity;
      if (log[3] === 5) {
        pity = 0;
      }
    }

    sheet.addRows(logs);
    // set xlsx hearer style
    ["A", "B", "C", "D", "E", "F", "G"].forEach((v) => {
      sheet.getCell(`${v}1`).border = {
        top: { style: "thin", color: { argb: "ffc4c2bf" } },
        left: { style: "thin", color: { argb: "ffc4c2bf" } },
        bottom: { style: "thin", color: { argb: "ffc4c2bf" } },
        right: { style: "thin", color: { argb: "ffc4c2bf" } },
      };
      sheet.getCell(`${v}1`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "ffdbd7d3" },
      };
      sheet.getCell(`${v}1`).font = {
        name: customFont,
        color: { argb: "ff757575" },
        bold: true,
      };
    });
    // set xlsx cell style
    logs.forEach((v, i) => {
      ["A", "B", "C", "D", "E", "F", "G"].forEach((c) => {
        sheet.getCell(`${c}${i + 2}`).border = {
          top: { style: "thin", color: { argb: "ffc4c2bf" } },
          left: { style: "thin", color: { argb: "ffc4c2bf" } },
          bottom: { style: "thin", color: { argb: "ffc4c2bf" } },
          right: { style: "thin", color: { argb: "ffc4c2bf" } },
        };
        sheet.getCell(`${c}${i + 2}`).fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "ffebebeb" },
        };
        // rare rank background color
        const rankColor = {
          3: "ff8e8e8e",
          4: "ffa256e1",
          5: "ffbd6932",
        };
        sheet.getCell(`${c}${i + 2}`).font = {
          name: customFont,
          color: { argb: rankColor[v[3]] },
          bold: v[3] != "3",
        };
      });
    });
  }

  const buffer = await workbook.xlsx.writeBuffer();
  const filePath = dialog.showSaveDialogSync({
    defaultPath: path.join(
      app.getPath("downloads"),
      `${filePrefix}_${getTimeString()}`
    ),
    filters: [{ name: fileType, extensions: ["xlsx"] }],
  });
  if (filePath) {
    await fs.ensureFile(filePath);
    await fs.writeFile(filePath, buffer);
  }
};

ipcMain.handle("SAVE_EXCEL", async () => {
  await start();
});
