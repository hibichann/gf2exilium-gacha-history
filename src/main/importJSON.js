const ExcelJS = require("./module/exceljs.min.js");
const getData = require("./getData.js").getData;
const { app, ipcMain, dialog } = require("electron");
const fs = require("fs-extra");
const path = require("path");
const i18n = require("./i18n.js");
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
const importExcel = async () => {
  // 选择要导入的Excel文件
  const filePath = dialog.showOpenDialogSync({
    properties: ['openFile'],
    filters: [{ name: 'Excel Files', extensions: ['xlsx'] }]
  });

  if (!filePath || filePath.length === 0) {
    console.log('No file selected');
    return;
  }

  const selectedFilePath = filePath[0];
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(selectedFilePath);

  const { dataMap, current } = getData();
  const data = dataMap.get(current);
  const existingLogs = data.result;

  workbook.eachSheet((worksheet, sheetId) => {
    const sheetName = worksheet.name;
    const typeKey = Array.from(data.typeMap.entries()).find(([key, value]) => value === sheetName)[0];
    const newLogs = [];

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return; // Skip header row

      const log = [
        row.getCell(1).value, // time
        row.getCell(2).value, // name
        row.getCell(3).value === i18n.excel.cols.character ? true : false, // isCharacter
        row.getCell(6).value, // pool
        row.getCell(1).value, // time (repeated)
      ];

      newLogs.push(log);
    });

    // 合并日志
    const existingLogsForType = existingLogs.get(typeKey) || [];
    const combinedLogs = [...existingLogsForType, ...newLogs];
    data.result.set(typeKey, combinedLogs);
  });

  // 保存合并后的数据
  dataMap.set(current, data);
  // saveData(dataMap); // 假设你有一个saveData函数来保存数据

  console.log(dataMap);
};

ipcMain.handle("IMPORT_EXCEL", async () => {
  await importExcel();
});
