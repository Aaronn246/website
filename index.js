var languages_ui = document.getElementById('languages-ui');
var languages_btn_icon = document.getElementById('languages-btn-icon');

var languages_btn_clicked = false;

function languages(){
    if (languages_btn_clicked == false){
        languages_ui.style.display = 'block';
        setTimeout(() => { languages_ui.style.transform = 'scale(1)'; }, 1);
        setTimeout(() => { languages_btn_icon.style.transform = 'rotate(180deg)'; }, 1);
        languages_btn_clicked = true;
    } else{
        setTimeout(() => { languages_ui.style.transform = 'scale(0.9)'; }, 1);
        setTimeout(() => { languages_btn_icon.style.transform = 'rotate(0deg)'; }, 1);
        setTimeout(() => { languages_ui.style.display = 'none'; }, 100);
        languages_btn_clicked = false;
    }
};
