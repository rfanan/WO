export function defaultRequiredRules(name?: any) {
    return [{required: true, message: `Please input ${name ?? 'data'}!`}]
}