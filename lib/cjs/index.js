"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IterableWeakMap = void 0;
const iterable_weak_set_1 = require("iterable-weak-set");
class IterableWeakMap {
    constructor() {
        this.keysSet = new iterable_weak_set_1.IterableWeakSet();
        this.valueStore = new WeakMap();
    }
    get size() {
        return this.keysSet.size;
    }
    forEach(fn) {
        this.keysSet.forEach((k) => {
            const v = this.valueStore.get(k);
            fn(v, k, this);
        });
    }
    *[Symbol.iterator]() {
        for (const k of this.keysSet) {
            yield [k, this.valueStore.get(k)];
        }
    }
    clear() {
        this.keysSet.forEach((item) => {
            this.valueStore.delete(item);
        });
    }
    delete(key) {
        this.keysSet.delete(key);
        return this.valueStore.delete(key);
    }
    get(key) {
        return this.valueStore.get(key);
    }
    has(key) {
        return this.valueStore.has(key);
    }
    set(key, value) {
        if (this.valueStore.set(key, value)) {
            return this.keysSet.add(key);
        }
    }
}
exports.IterableWeakMap = IterableWeakMap;
