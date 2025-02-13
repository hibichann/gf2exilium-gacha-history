# GF2 Exilium Gacha History Export Tool  

Forked from https://github.com/EtherealAO/exilium-recruit-export 

[中文文档 (Chinese Documentation)](./README-zh.md)  

This is a small Electron-based tool for Windows 64-bit that extracts the `authKey` from game logs to access the game's gacha purchase history API.  

The tool saves data in the `userData` folder located in the current directory. It automatically merges new records with local data when new gacha records are retrieved.  

## Features  

- Support for exporting gacha history from multiple accounts.  
- Easy multi-language support via JSON file modifications.  
- Lightweight and simple to use on Windows 64-bit.  

## Usage  

1. **Extract the Tool**  
   Unzip the downloaded file.  

2. **Load Gacha History**  
   - Open the game's gacha history screen.  
   - Click "Load Data" in the tool.  

3. **Export for Multiple Accounts**  
   - Click the "+" button in the tool.  
   - Switch to another account in the game.  
   - Open the gacha history and click "Load Data" again.  

## About I18N  

To translate the tool into another language, modify the JSON files in the `src/i18n/` directory.  

If you want to change the language of the gacha history data, update the related files in the `src/main/protobuf/` directory.  

For any corrections or suggestions regarding existing translations, feel free to submit an issue or PR.  

## Development  

```bash
yarn install      # Install dependencies  
yarn dev          # Run in development mode  
yarn build:win64  # Build for Windows 64-bit  
```
