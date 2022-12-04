const FeatureFlag = require('./src/feature-flag');

class Feature1 extends FeatureFlag {
    constructor(fieldList, tableList) {
        super(fieldList, tableList);
    }
    execute() {
        add('fieldList.account', { id: 123 });
        update('fieldList.client.fields.name', 'Ritik', 'Goyal');
        remove('tableList.table1');
    }
}

const fieldList = {
    client: {
        fields: {
            name: 'Ritik'
        }
    }
};

const tableList = {
    'table1': {}
}
const ff = new Feature1(fieldList, tableList);



console.log(ff.fieldList, ff.tableList);