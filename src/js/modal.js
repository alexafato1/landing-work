   
const modal = () => {
   
    function bindModal(trigger, modal, close) {
     trigger.forEach(item => {
     item.addEventListener('click', (e) => {
        
          
          if(e.target) {
             e.preventDefault();
             
          }
          modal.style.display = 'block';
          
          document.body.style.everflow = 'hidden';
       });
 
       close.forEach(item => {
       item.addEventListener('click', () => {
          modal.style.display = 'none';
          document.body.style.everflow = '';
       });
       })
    });
    }
 
    const callModal = document.querySelectorAll('.button-modal'),
       modalOpen = document.querySelector('.popup'),
       modalClose = document.querySelectorAll('.closeBtn')
 
     bindModal(callModal, modalOpen, modalClose)
 
 
     function showModalByTime(selector, time) {
       setTimeout(function(){
          document.querySelector(selector).style.display = 'block';
          
       }, time);
    }
     
    //showModalByTime('.popup', 10000);
   
 };

 export default modal