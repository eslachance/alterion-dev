import { cache, action } from '@solidjs/router';
import { inc, has, set, get } from './db';

export const getCounter = cache(async() => {
  'use server';
  console.log('Getting counter');
  if(!has('count')) {
    console.log('Resetting counter');
    set('count', 0);
  }
  return get('count') as Number;
}, 'counter');

export const incrementCounter = action(async () => {
  'use server';
  inc('count');
});
