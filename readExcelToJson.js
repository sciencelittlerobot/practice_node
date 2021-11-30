const fs = require('fs');
const xlsx = require('node-xlsx');

// 获取所有的工作簿
const sheets = xlsx.parse("./data/综合数据.xlsx");
// 获取工作簿名称是【区域公司和生产单元清单】的sheet
const tempSheet = sheets.filter((item) => {
  return item.name == '测试数据';
});
// 获取表格数据
const sheetdata = tempSheet[0].data;

let list = [];
sheetdata.forEach((item, index) => {
  // 表格的标题行跳过，行内容为空也跳过
  if (index == 0 || item.length <= 0) {
    return;
  }

  list.push({
    subCompanyCode: item[1] + '',
    subCompanyName: item[2],
    iframeUrl: item[3] || ''
  });
});

const jsonObj = list;

// 同步
// fs.writeFileSync('./data/codeUrlJson.json', JSON.stringify(jsonObj));
// console.log('excel转换json文件成功');

// 异步
fs.writeFile('./data/codeUrlJson.json', JSON.stringify(jsonObj), 'utf-8', function (err) {
  if (err) {
    console.log('出错了');
  } else {
    console.log('excel转换json文件成功');
  }
});