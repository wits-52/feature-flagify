class FeatureFlag {
    constructor(fieldList, tableList) {
        if(this.constructor.name === 'FeatureFlag') {
            throw new Error('Feature Flag can not be instantiated');
        }
        this.fieldList = fieldList;
        this.tableList = tableList;
        this.parentFlag = null;
    }
    setParentFlag(parentFlag) {
        this.parentFlag = parentFlag;
    }
    execute() {
        throw new Error('child class should overwrite execute function');
    }
    add(path, value) {
        const pathNodes = path.split('.');

        if(![ 'fieldList', 'tableList' ].includes(pathNodes[0])) {
            throw new Error('Path should start with fieldList or tableList');
        }
        let targetProperty = this;
        for(const pathNode of pathNodes.slice(0, -1)) {
            targetProperty = targetProperty[pathNode];
        }
        if(targetProperty[pathNodes[pathNodes.length - 1]] !== undefined) {
            throw err('property at given path already exists. Please try update')
        }
        targetProperty[pathNodes[pathNodes.length - 1]] = value;
    }
    update(path, oldValue, newValue) {
        const pathNodes = path.split('.');

        if(![ 'fieldList', 'tableList' ].includes(pathNodes[0])) {
            throw new Error('Path should start with fieldList or tableList');
        }
        let targetProperty = this;
        for(const pathNode of pathNodes.slice(0, -1)) {
            targetProperty = targetProperty[pathNode];
        }
        if(targetProperty[pathNodes[pathNodes.length - 1]] !== oldValue) {
            throw err('Old value mismatch. Please try again')
        }
        targetProperty[pathNodes[pathNodes.length - 1]] = newValue;
    }
    remove(path) {
        const pathNodes = path.split('.');

        if(![ 'fieldList', 'tableList' ].includes(pathNodes[0])) {
            throw new Error('Path should start with fieldList or tableList');
        }
        let targetProperty = this;
        for(const pathNode of pathNodes.slice(0, -1)) {
            targetProperty = targetProperty[pathNode];
        }
        if(targetProperty[pathNodes[pathNodes.length - 1]] === undefined) {
            throw err('property at path does not exist. Please try again.')
        }
        delete(targetProperty[pathNodes[pathNodes.length - 1]]);
    }
}

module.exports = FeatureFlag;