import {OurNodes} from './OurNodes.js';
let Data = document.querySelector('.data');
//Функция открытия окна для создания нового узла. Здесь ничего динамического, хотя я думал,
//как сделать "переходящий" массив, чтобы не делать бэкенд.
export function NewNode() {
    Data.innerHTML = `<div class="NewNode">
            <h1 class="NewNode_text">Добавление нового узла</h1>
            <h3 class="NewNode_type">Тип узла
                <span class="NewNode_dropdown">
                <select class="NewNode_dropdown_select">
                    <option value="DataUnit">DataUnit</option>
                    <option value="PC">PC</option>  
                    <option value="ЦОД">ЦОД</option>
                </select>
            </span></h3>
            <h3 class="NewNode_name">Наименование узла<input class="NewNode_address_input NewNode_address_input-name" type="text"></h3>
            <h3 class="NewNode_address">Адрес узла<input class="NewNode_address_input NewNode_address_input-adres" type="text"></h3>
            <div class="NewNode_btn">
            <button class="NewNode_add">Добавить</button>
            <button class="NewNode_exit">Выход</button>
            </div>
          </div>`;


let NewNodeExit = document.querySelector('.NewNode_exit');
NewNodeExit.addEventListener('click', OurNodes);


    let NewNodeAdd = document.querySelector('.NewNode_add');
    NewNodeAdd.addEventListener('click', function(){
let NewNodeDropdown = document.querySelector('.NewNode_dropdown_select');
let NewNodeAddress = document.querySelector('.NewNode_address_input-adres');
let NewNodeName = document.querySelector('.NewNode_address_input-name');
Nodes.push(['NonActive', `${NewNodeName.value}`,`${(+Nodes[Nodes.length - 1][2]) + 1}` , `${NewNodeDropdown.value}`, `${NewNodeAddress.value}`]);
OurNodes();
    });
}