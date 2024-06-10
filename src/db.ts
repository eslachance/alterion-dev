'use server'
import Enmap from 'enmap';
const myCounter = new Enmap({ name: 'myCounter' });

if(!myCounter.has('count')) {
  console.log('Initializing counter');
  myCounter.set('count', 0);
}

export const inc = (key: string) => myCounter.inc(key);
export const get = (key: string) => myCounter.get(key);
export const set = (key: string, value: any) => myCounter.set(key, value);
export const has = (key: string) => myCounter.has(key);