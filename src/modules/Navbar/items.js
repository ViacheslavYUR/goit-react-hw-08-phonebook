import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home page',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'MyPhonebook page',
    link: '/contacts',
  },
];

export default items;
