console.log('Hello, World!');

const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10;

console.log('hello');

import overlay from './images/overlay.jpg';
import font from './fonts/roboto/Roboto-Regular.woff'

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'overlay', link: overlay },
  { name: 'font', link: font },
];

