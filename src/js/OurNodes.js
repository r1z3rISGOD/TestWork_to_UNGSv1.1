import {AbtNode} from './AbtNode.js';
import {NewNode} from './NewNode.js';
let Data = document.querySelector('.data');

//Функция, отправленная в скрипт авторизаци, которая динамически, из массива, выводит доступные узлы на экран
export function OurNodes() {
    Data.innerHTML = `<div class="Units_available-text"><ul class='Units'></ul>
    
    
    <h3 class="Units_available">Доступные узлы</h3>
    </div><button class="AddBtn">Добавить узел</button>`;

      
    let Units = document.querySelector('.Units');
//Все узлы из массива друг за другом записываются в разметку
    for (let value of Nodes.values()) {
      Units.innerHTML += `<li class='Units_item Units_item-${value[2]}'>
      <img src="./Images/${value[3]}.svg" alt="" class="Units_item_img">
      <a href="#" class="Units_item_abt">${value[1]}</a>
      </li>`;
    }
//Переход к окну информации о любом из узлов (по нажатию на узел)
    for(let i = 1; i<Nodes.length+1; i++) {
      document.querySelector(`.Units_item-${i}`).addEventListener('click', () => {
        AbtNode(Nodes, i);
      });
    }


 //Переход к окну добавления нового узла
    let AddBtn = document.querySelector('.AddBtn');
    AddBtn.addEventListener('click', function(){
        NewNode();
      });
    }
