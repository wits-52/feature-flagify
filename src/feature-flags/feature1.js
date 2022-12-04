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

module.exports = Feature1;