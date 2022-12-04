const Feature1 = require('./src/feature-flags/feature1');
const fieldList = require('./src/generated-constants/field-list');
const tableList = require('./src/generated-constants/table-list');

const ff = new Feature1(fieldList, tableList);



console.log(ff.fieldList, ff.tableList);