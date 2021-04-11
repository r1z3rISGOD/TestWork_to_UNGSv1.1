import {OurNodes} from './OurNodes.js';
let Data = document.querySelector('.data');
//Функция открытия окна для создания нового узла. Здесь ничего динамического, хотя я думал,
//как сделать "переходящий" массив, чтобы не делать бэкенд.
export function NewNode() {
    Data.innerHTML = `<form class="NewNode">
    <h1 class="NewNode_text">Добавление нового узла</h1>
    <div>
    <h3 class="NewNode_type">Тип узла
        <span class="NewNode_dropdown">
        <select class="NewNode_dropdown_select">
            <option value="DataUnit">DataUnit</option>
            <option value="PC">PC</option>  
            <option value="ЦОД">ЦОД</option>
        </select>
    </span></h3>
    <h3 class="NewNode_name">Наименова&shy;ние узла<input maxlength="15" class="NewNode_address_input NewNode_address_input-name" type="text" required></h3>
    <h3 class="NewNode_address">Адрес узла<input placeholder="123.123.123.123" pattern="((^|\\.)((25[0-5])|(2[0-4]\\d)|(1\\d\\d)|([1-9]?\\d))){4}$" class="NewNode_address_input NewNode_address_input-adres" type="text" required></h3>
    </div>
    <div class="NewNode_btn">
    <input type="submit" class="NewNode_add" value="Добавить"></input>
    <button class="NewNode_exit">Выход</button>
    </div>
  </form>`;


 let NewNodeExit = document.querySelector('.NewNode_exit');
 NewNodeExit.addEventListener('click', OurNodes);
 let NewNodeAdd = document.querySelector('.NewNode_add');
 NewNodeAdd.addEventListener('click', function(){
     let NewNodeDropdown = document.querySelector('.NewNode_dropdown_select');
     let NewNodeAddress = document.querySelector('.NewNode_address_input-adres');
     if (NewNodeAddress.checkValidity() == true) {
         for(let i=0; i<Nodes.length; i++) {
             if (NewNodeAddress.value === Nodes[i][4]) {
             alert('Узел с таким адресом уже имеется!');
             NewNode();
             return;
        }  
    }
         let NewNodeName = document.querySelector('.NewNode_address_input-name');
         Nodes.push(['NonActive', `${NewNodeName.value}`,`${(+Nodes[Nodes.length - 1][2]) + 1}` , `${NewNodeDropdown.value}`, `${NewNodeAddress.value}`]);
         OurNodes();
}

   });
}
