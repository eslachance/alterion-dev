'use server'
import Enmap from 'enmap';
const myCounter = new Enmap({ name: 'myCounter' });

export const inc = (key: string) => myCounter.inc(key);
export const get = (key: string) => myCounter.get(key);
export const set = (key: string, value: any) => myCounter.set(key, value);
export const has = (key: string) => myCounter.has(key);
