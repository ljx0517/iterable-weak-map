import { IterableWeakSet } from 'iterable-weak-set';

export class IterableWeakMap<K extends object, V> {
  private keysSet: IterableWeakSet<K>;
  private valueStore: WeakMap<K, V>;
  constructor() {
    this.keysSet = new IterableWeakSet<object>();
    this.valueStore = new WeakMap<K, V>();
  }
  get size() {
    return this.keysSet.size
  }
  forEach(fn: CallableFunction) {
    this.keysSet.forEach((k: K) => {
      const v = this.valueStore.get(k);
      fn(v, k, this)
    })
  }
  *[Symbol.iterator]() {
    for (const k of this.keysSet) {
      yield [k, this.valueStore.get(k)]
    }
  }
  clear(){
    this.keysSet.forEach((item: K) => {
      this.valueStore.delete(item);
    })
  }
  delete(key: K){
    this.keysSet.delete(key);
    return this.valueStore.delete(key);
  }
  get(key: K){
    return this.valueStore.get(key);
  }
  has(key: K){
    return this.valueStore.has(key);
  }
  set(key: K, value: V){
    if (this.valueStore.set(key, value)) {
      return this.keysSet.add(key)
    }
  }

}

