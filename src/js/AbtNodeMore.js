import {OurNodes} from './OurNodes.js';
let Data = document.querySelector('.data');
//Непосредственно список с микропроцессами в узлах. Опять же, формируется динамически из примерочного массива.
//Каждый новый ветвь прописывается за предыдущей, используя ключ - значение из массива.
export function AbtNodeMore() {
    Data.innerHTML = `
    <div onclick="TreeToggle()" class="TreeToggle">
    <ul class="Container">
    </div>
    </ul>`;

    let Process = [
        ['process-e4grgh45wg-g4w5gw45g-w45tgw4a', '/opt/AIO/slash/wfawg5634-w45gw4h4-w45yw45y'],
        ['process-64533353trt-y566i545y4-g5h743wfh', '/opt/AIO/slash/w35gw34tg-w45gw4h4-t3gw3geas4g'],
        ['process-34tg45t3w5t-w345t345t3-tw354t34t', '/opt/AIO/slash/se5haseg4aw-wa4gwaf3-wafwg4234'],
        ['process-e4grgh45wg-g4w5gw45g-w45tgw4a', '/opt/AIO/slash/wfawg5634-w45gw4h4-w45yw45y'],
        ['process-34tg45t3w5t-w345t345t3-tw354t34t', '/opt/AIO/slash/se5haseg4aw-wa4gwaf3-wafwg4234'],
        ['process-64533353trt-y566i545y4-g5h743wfh', '/opt/AIO/slash/w35gw34tg-w45gw4h4-t3gw3geas4g'],
        ['process-e4grgh45wg-g4w5gw45g-w45tgw4a', '/opt/AIO/slash/wfawg5634-w45gw4h4-w45yw45y'],
        ['process-e4grgh45wg-g4w5gw45g-w45tgw4a', '/opt/AIO/slash/wfawg5634-w45gw4h4-w45yw45y'],
        ['process-64533353trt-y566i545y4-g5h743wfh', '/opt/AIO/slash/w35gw34tg-w45gw4h4-t3gw3geas4g'],
        ['process-34tg45t3w5t-w345t345t3-tw354t34t', '/opt/AIO/slash/se5haseg4aw-wa4gwaf3-wafwg4234'],
        ['process-e4grgh45wg-g4w5gw45g-w45tgw4a', '/opt/AIO/slash/wfawg5634-w45gw4h4-w45yw45y'],
        ['process-34tg45t3w5t-w345t345t3-tw354t34t', '/opt/AIO/slash/se5haseg4aw-wa4gwaf3-wafwg4234'],
        ['process-64533353trt-y566i545y4-g5h743wfh', '/opt/AIO/slash/w35gw34tg-w45gw4h4-t3gw3geas4g'],
        ['process-e4grgh45wg-g4w5gw45g-w45tgw4a', '/opt/AIO/slash/wfawg5634-w45gw4h4-w45yw45y'],
        ['process-e4grgh45wg-g4w5gw45g-w45tgw4a', '/opt/AIO/slash/wfawg5634-w45gw4h4-w45yw45y'],
        ['process-64533353trt-y566i545y4-g5h743wfh', '/opt/AIO/slash/w35gw34tg-w45gw4h4-t3gw3geas4g'],
        ['process-34tg45t3w5t-w345t345t3-tw354t34t', '/opt/AIO/slash/se5haseg4aw-wa4gwaf3-wafwg4234'],
        ['process-e4grgh45wg-g4w5gw45g-w45tgw4a', '/opt/AIO/slash/wfawg5634-w45gw4h4-w45yw45y'],
        ['process-34tg45t3w5t-w345t345t3-tw354t34t', '/opt/AIO/slash/se5haseg4aw-wa4gwaf3-wafwg4234'],
        ['process-64533353trt-y566i545y4-g5h743wfh', '/opt/AIO/slash/w35gw34tg-w45gw4h4-t3gw3geas4g'],
        ['process-e4grgh45wg-g4w5gw45g-w45tgw4a', '/opt/AIO/slash/wfawg5634-w45gw4h4-w45yw45y']
    ];
      

    let Container = document.querySelector('.Container');
//Для каждого элемента массива мы делаем свою часть списка.
    for (let value of Process.values()) {
    Container.innerHTML += `<li class="NodeTree ExpandOpen IsRoot ">
    <div class="Expand"></div>
    <div class="Content">${value[0]}</div>
    <ul class="Container">
      <li class="NodeTree ExpandLeaf IsLast">
        <div class="Expand"></div>
        <div class="Content">${value[1]}</div>
      </li>
    </ul>
  </li>`;
    }
    Container.innerHTML += `<button class="AbtNodeZone_exit">Выход</button>`

    let AbtNodeExitBtn = document.querySelector('.AbtNodeZone_exit');
    AbtNodeExitBtn.addEventListener('click', OurNodes);

}