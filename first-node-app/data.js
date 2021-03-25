/* การเขียนข้อความลงในไฟล์ */
const fs = require('fs');
fs.writeFileSync('test.txt','Name: ');
fs.appendFileSync('test.txt','Artitaya');