   const wrapper = document.querySelector('.wrapper');
   let button = document.querySelector('.btn');
   let inputText = document.querySelector('.inputTxt')

   let image = document.querySelector('.image')
   const downloadBtn = document.querySelector('.btn.download');

   button.addEventListener("click",function(){
    let qrValue = inputText.value;
    if(!qrValue) return // If The input is Empty it will return , return statement is executed, which exits the function early and prevents any subsequent code from running.

    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`

    console.log(qrValue)
    wrapper.classList.add("active")
   })


