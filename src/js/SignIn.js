let Data = document.querySelector('.data');

//Функция ниже отвечает за подгрузку меню авторизации, как только загрузится DOM 
function SignIn(){
Data.innerHTML = `<form id="login_form" action="#" class="login_form">
<input required autocomplete="off" pattern="[A-Za-z][A-Za-z0-9]+" type="text" class='login_input'>
<input required autocomplete="off" minlength="5" maxlength="15" type="password" class='login_input login_input_password'>
<button type="submit" form="login_form" class="login_btn">Войти в систему</button>
</form>`;

}
SignIn();
//Переход к следующему окну, с проверкой введеных логина и пароля
let Btn = document.querySelector('.login_btn');
let LoginInput = document.querySelector('.login_input');
let PassInput = document.querySelector('.login_input_password');
import {OurNodes} from './OurNodes.js';
Btn.addEventListener('click', function(){
if (LoginInput.value == 'admin' & PassInput.value == 'admin') {
OurNodes();
}
});

