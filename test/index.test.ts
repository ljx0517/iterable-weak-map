import {IterableWeakMap} from '../src/index';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('test api', () => {
  it('add & size', () => {
    const map = new IterableWeakMap()
    const o = {a:1}
    const o2 = o;
    map.set(o, 1);
    map.set(o2, 1)
    expect(map.size).to.equal(1);
  });
  it('foreach', () => {
    const set = new IterableWeakMap()
    const o1 = {a:1}
    set.set(o1, 1);
    const o2 = {a:2}
    set.set(o2, 2);
    const t: any[] = [];
    set.forEach((el: any, k: any) => {
      t.push({v: el, k})
    });
    expect(t[0].k.a).to.equal(1);
    expect(t[0].v).to.equal(1);
    expect(t[1].k.a).to.equal(2);
    expect(t[1].v).to.equal(2);
  });

  it('for of', () => {
    const map = new IterableWeakMap()
    const o1 = {a:1}
    map.set(o1, 1);
    const o2 = {a:2}
    map.set(o2, 1);
    const t: any[] = [];
    // @ts-ignore
    for (const [k, v] of map) {
      t.push({k, v})
    }
    expect(t[0].k.a).to.equal(1);
    expect(t[0].v).to.equal(1);
    expect(t[1].k.a).to.equal(2);
    expect(t[1].v).to.equal(1);
  });

  it('delete', () => {
    const map = new IterableWeakMap()
    const o1 = {a:1}
    map.set(o1, 1);
    const o2 = {a:2}
    const ref2 = map.set(o2, 2);
    expect(map.size).to.equal(2);
    map.delete(o1) // del by value
    expect(map.size).to.equal(1);
    map.delete(ref2) // del by value ref
    expect(map.size).to.equal(0);
  });
  it('has', () => {
    const map = new IterableWeakMap()
    const o1 = {a:1}
    map.set(o1, 1)
    const o2 = {a:2}
    const ref2 = map.set(o2, 2); // return ref
    expect(map.has(o1)).to.equal(true);
    map.delete(o1) // del by value
    expect(map.has(o1)).to.equal(false);
    expect(map.size).to.equal(1);
    map.delete(o2) // del by value ref
    expect(map.size).to.equal(0);
  });

});
