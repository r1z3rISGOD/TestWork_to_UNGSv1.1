import {AbtNodeMore} from './AbtNodeMore.js';
import {OurNodes} from './OurNodes.js';
let Data = document.querySelector('.data');
//Фунция, в которую приходят счетчик и массив узлов, чтобы вывести на экран информацию о том узле, на который нажали
export function AbtNode(Nodes, i) {
  Data.innerHTML += `
 <div class="AbtNodeZone">
  <h1 class="AbtNodeZone_text">
  <img src="./Images/${Nodes[i-1][3]}.png" alt="" class="AbtNodeZone_img">
  ${Nodes[i-1][1]}</h1>
  <h3 class="AbtNodeZone_status">Статус<img class="AbtNodeZone_status_active" src="./Images/${Nodes[i-1][0]}.png" alt=""></h3>
  <h3 class="AbtNodeZone_address">Адрес узла<input readonly value="${Nodes[i-1][4]}" class="AbtNodeZone_address_input" type="text"></h3>
  <div class="AbtNodeZone_btns">
  <button class="AbtNodeZone_more">Подробнее</button>
  <button class="AbtNodeZone_exit">Выход</button>
  </div>
</div>`;
let AbtNodeMoreBtn = document.querySelector('.AbtNodeZone_more');
AbtNodeMoreBtn.addEventListener('click', AbtNodeMore);
let AbtNodeExitBtn = document.querySelector('.AbtNodeZone_exit');
AbtNodeExitBtn.addEventListener('click', OurNodes);
}

