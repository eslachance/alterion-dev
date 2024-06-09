'use server';
import { cache, action } from '@solidjs/router';
import Enmap from 'enmap';
const myCounter = new Enmap({ name: 'myCounter' });

export const getCounter = cache(async() => {
  'use server';
  console.log('Getting counter');
  if(!myCounter.has('count')) {
    console.log('Resetting counter');
    myCounter.set('count', 0);
  }
  return myCounter.get('count') as Number;
}, 'counter');

export const incrementCounter = action(async () => {
  'use server';
  myCounter.inc('count');
});
