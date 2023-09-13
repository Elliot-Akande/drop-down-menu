import './index.css';
import DropDown from './DropDown';

const container = document.querySelector('.container');

container.appendChild(
  DropDown('Sports', [
    { title: 'Football', callback: () => console.log('Football') },
    { title: 'Basketball', callback: () => console.log('Basketball') },
    { title: 'Hockey', callback: () => console.log('Hockey') },
    { title: 'Swimming', callback: () => console.log('Swimming') },
  ]),
);

container.appendChild(
  DropDown('Food', [
    { title: 'Pizza', callback: () => console.log('Pizza') },
    { title: 'Lasagne', callback: () => console.log('Lasagne') },
  ]),
);

container.appendChild(
  DropDown('Bits & Bobs', [{ title: 'Bits' }, { title: 'Bobs' }]),
);
