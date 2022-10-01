

/*add sold card */

const silverList = document.querySelectorAll('.body_silver_list');

Array.from(silverList).forEach(card => {
    card.addEventListener('click', () => {
        let modalBtn = document.querySelector('.button_modal');
        modalBtn.addEventListener('click', () => {
           const button = card.querySelector('._canBuy');
            button.classList.remove('_canBuy');
            button.classList.add('btn_unactive');
            card.classList.add('_cardUnactive');
            showAvalableSilverCard (avalableSilverCard());
        })
         
    })
});

const goldList = document.querySelectorAll('.body_gold_list');

Array.from(goldList).forEach(card => {
    card.addEventListener('click', () => {
        let modalBtn = document.querySelector('.button_modal');
        modalBtn.addEventListener('click', () => {
           const button = card.querySelector('._canBuy');
            button.classList.remove('_canBuy');
            button.classList.add('btn_unactive');
            card.classList.add('_cardUnactive');
            showAvalableSilverCard (avalableSilverCard());
        })
         
    })
});


    /* active esc */
    
    window.addEventListener('keyDown', esc);
    function esc () {
        document.addEventListener('keydown', function(e) {
            if (e.code === 'Escape') {                   
            closeThanks ();
            closeForm ();            
            }
            });
            window.removeEventListener('keyDown', esc);
    };

/* open modal thanks */

function openThanks () {
    const modal = document.querySelector('.modal_thanks');
    modal.classList.add('thanks_show');
};

/*close modal thanks*/

function closeThanks () {
    const modalWindow = document.querySelector('.modal_thanks');
    modalWindow.classList.remove('thanks_show');
};

const btnThanksClose = document.querySelector('.button_modal');

btnThanksClose.addEventListener('click', () => {
    closeThanks ();
    showAvalableSilverCard (avalableSilverCard());
    showAvalableGoldCard (avalableGoldCard ());
});

/* cross move 45/ */

const elements = document.querySelectorAll('.body_list');
const goldBox = document.querySelector('._goldBorder');
 Array.from(elements).forEach(element => {
    const box = element.querySelector('.muv');
    const cross = element.querySelector('.cross');
    
    
 cross.addEventListener('click', () => {    
   cross.classList.toggle('active');
   box.classList.toggle('show');
   if (element.classList.contains('_goldBorder')) {
    console.log('hello');
    element.classList.toggle('_golBor');
   }    
 })
 });

 /* show form */
 const form = document.querySelector('.modal_form');
 const formCross = document.querySelector('.form_cross'); 

 function showForm () {    
    form.classList.add('form_show');    
 };

 /* close form */

 function closeForm () {
    form.classList.remove('form_show');
 };
 formCross.addEventListener('click', () => {
    closeForm ();
 });


 /*open form */

function openform () {
    let byBtn = document.querySelectorAll('._canBuy');
 
 Array.from(byBtn).forEach(elem => {    
    elem.addEventListener('click', () => {
        showForm ();        
    });
 });
};
openform ();

 /* validate start */
  
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let formValidate = validate();
        if (formValidate) {
            closeForm();
            openThanks();
        };    
    };
    function validate () {
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');      
    
        if(!firstName.value) {
            firstName.classList.add('error');
            return false;
        }
        if(!lastName.value) {
            lastName.classList.add('error');
            return false;
        }
        if(!email.value) {
            email.classList.add('error');
            return false;
        }
        if(!phone.value) {
            phone.classList.add('error');
            return false;
        }
        
        return true;
     };
});

 /* validate end */

 /* close solid */

  const elemCheckBox = document.querySelectorAll('input[type=checkbox]');
    Array.from(elemCheckBox).forEach(elem => {
        
       elem.addEventListener('change', () => {
        const bodySilver = document.querySelector('.body_silver_card');
        const bodyGold = document.querySelector('.body_gold_card');        
           
        if (Number(elem.dataset.box) === 1) {
           const boxs =  bodySilver.querySelectorAll('._cardUnactive');
             Array.from(boxs).forEach(box => {
                box.classList.toggle('_sold');                
             })           
            return;
        }else if (Number(elem.dataset.box) === 2) {
            const boxs =  bodyGold.querySelectorAll('._cardUnactive');
            Array.from(boxs).forEach(box => {
                box.classList.toggle('_sold');                
             })
             return;            
        }               
       })
    });

    /*show avalable card */
    
    function showAvalableSilverCard (value) {
        const countBox = document.getElementById('avalableSilverCard');
        if (value > 0) {
            countBox.textContent = Number(value); 
            return; 
        }
        countBox.textContent = 0;
    };

    function showAvalableGoldCard (value) {
        const countBox = document.getElementById('avalableGoldCard');
        if (value > 0) {
            countBox.textContent = Number(value); 
            return; 
        }
        countBox.textContent = 0;
    };   
    
   
    function avalableSilverCard  () {
        const silverBox = document.querySelector('.body_silver_card');
        const availableSilver = silverBox.querySelectorAll('._canBuy');
    return availableSilver.length;
    };
    showAvalableSilverCard (avalableSilverCard());

    function avalableGoldCard () {
        const goldBox = document.querySelector('.body_gold_card'); 
        const availableGold = goldBox.querySelectorAll('._canBuy');
        return availableGold.length;
    };    
    showAvalableGoldCard (avalableGoldCard ());
    
    