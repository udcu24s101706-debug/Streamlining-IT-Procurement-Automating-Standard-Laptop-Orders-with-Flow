const fs = require('fs'), path = require('path');
const files = [
  'config/approved_models.json', 'config/instance.example.json',
  'src/catalog/standard_laptop_item.json', 'src/flows/standard_laptop_order.flow.json'
];
files.forEach(f => { JSON.parse(fs.readFileSync(path.join(__dirname, '..', f), 'utf8')); console.log('OK', f); });
