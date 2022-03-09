export declare class IterableWeakMap<K extends object, V> {
    private keysSet;
    private valueStore;
    constructor();
    get size(): number;
    forEach(fn: CallableFunction): void;
    [Symbol.iterator](): Generator<any[], void, unknown>;
    clear(): void;
    delete(key: K): boolean;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): any;
}
