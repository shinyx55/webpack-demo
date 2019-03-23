//lodash를 모듈로 가져오는 방법: commonJs 스펙
import _ from 'lodash';
import './style.css';
import './hello.scss';

console.log('hello webpack dev server');

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());