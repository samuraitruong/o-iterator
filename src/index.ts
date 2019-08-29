// tslint:disable-next-line:max-line-length
export function iterate(data: any, paths: string[], parents: any[], callback: (data: any, currentValue: any, paths: string[], decendantData: any[]) => void) {
    if (data == null) {
        return;
    }

    const currentPaths = [...paths];
    const parentsObject = [...parents];
    const value = data;
    callback(data, value, paths, parentsObject);
    if (value && Array.isArray(value)) {
        value.forEach((item) => {
            iterate(item, currentPaths, parentsObject, callback);
        });
    }

    if (value && typeof value === "object" && !Array.isArray(value)) {
        parentsObject.push(value);
        Object
            .keys(value)
            .forEach((item) => {
                iterate(value[item], currentPaths.concat([item]), parentsObject, callback);
            });
    }
}
