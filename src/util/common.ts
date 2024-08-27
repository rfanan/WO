export function defaultRequiredRules(name?: any) {
    return [{required: true, message: `Please input ${name ?? 'data'}!`}]
}
export function getRenderKey(col: any) {
    let renderKey = []
    for (const x of col) {
        if (x.hasOwnProperty('render')) {
            renderKey.push(x.dataIndex)
        }
    }
    return renderKey
}