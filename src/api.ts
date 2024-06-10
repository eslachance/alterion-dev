import { cache, action } from '@solidjs/router';
import { inc, get } from './db';

export const init = async () => {
  return get('count');
}

export const getCounter = cache(async() => {
  'use server';
  console.log('Getting counter: ', get('count'));
  return get('count') as Number;
}, 'counter');

export const incrementCounter = action(async () => {
  'use server';
  inc('count');
});
