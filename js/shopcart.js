const cakeImgBtns = document.querySelectorAll('.cake-img');
cakeImgBtns.forEach((btn)=> {
  btn.addEventListener('click',function(){
    let type = this.dataset.type
    

    let cakeInfo = document.querySelectorAll('.cake-info [data-type="'+type+'"]');
    
    cakeInfo.forEach((info)=>{
      console.log(info);
    })
  })

});




// // 先把兩個標籤找出來
// const tabElements = document.querySelectorAll('.tab');
// const contentElements = document.querySelectorAll('.content');

// //這是第三種方法，也是最常用的方式

// //tabElements.forEach 是按鈕都選一次
// //(function (tabElement,index) 元素加index是索引值，對應到contenElemnts，才不會對應不到
// tabElements.forEach(function (tabElement, index) {

//   //觸發tabElement 監聽事件
//   tabElement.addEventListener('click', function () {

//     //tabElements.forEach 是按鈕都選一次
//     tabElements.forEach(function (tabElement) {

//       //
//       tabElement.classList.remove('active')
//     })
//     //tabElemen可以換成this   this指用在addEventListener點擊的時候
//     tabElement.classList.add('active');

//     //contentElements.forEach 是按鈕都選一次
//     contentElements.forEach(function (contentElement) {
//       contentElement.classList.remove('active')
//     });
//     contentElements[index].classList.add('active');
//   });
// });




// let orderItem = document.querySelectorAll (".order-item");
// let addBtn = document.querySelectorAll (".add");
// let reduceBtn = document.querySelectorAll (".reduce");
// let itemNumInput = document.querySelectorAll (".order-input");

// let orderlist = document.querySelectorAll (".orderlist ");
// let orderitemsubtotal = document.querySelectorAll( ".order-item-subtotal");
// let orderitemprice = document.querySelectorAll( ".order-item-price");

// //總計框
// let allQty = document.querySelector(".gty");
// let allSubtotal = document.querySelector(".subtotal");
// let allFee = document.querySelector(".fee");
// let allTotal = document.querySelector(".total");


// //初始化 進來就把價格算一算
// window.onload = function(){
//     for (let i = 0;i < orderlist.length; i++){
//         //orderitemsubtotal[index].innerHTML = Number(itemNumInput[i].value) * Number(orderitemprice[i].textContent);
//         calclateOrderItemSubtotal(i);

//     }
// }; 

// // 先log看有沒有抓到那個值
// // console.log(addBtn,reduceBtn,itemNumInput,orderlist);

//  addBtn.forEach(function(btn, index){
//      btn.addEventListener('click',function(){
//         //  + BTN
        
//         //itemNumInput[index].value = Number( itemNumInput[index].value ) + 1;
//         handleButton(index, + 1);
         
//         //orderitemsubtotal[index].innerHTML = Number(itemNumInput[index].value) * Number(orderitemprice[index].textContent);
//          calclateOrderItemSubtotal(index)
//         //console.log('input',itemNumInput[index].value);
//         //console.log(orderitemprice[index].textContent);


//      });
//  });

//  reduceBtn.forEach(function(btn, index){
//      btn.addEventListener('click',function(){
//         if (itemNumInput[index].value <= 1 ) {
//             let yes = confirm('是否確定要移除該商品');

//             if (yes) {
//                 orderlist[index].remove();
//             }else{
//                 return;
//                 // js return很強大
//             }
//         }

//         //itemNumInput[index].value = Number( itemNumInput[index].value ) - 1;
//         handleButton(index, -1 );
//         //orderitemsubtotal[index].innerHTML = Number(itemNumInput[index].value) * Number(orderitemprice[index].textContent);
//         calclateOrderItemSubtotal(index);
//      });
//  });

//  //input框改數字 價格變動
//  itemNumInput.forEach(function(input, index){
//      input.addEventListener("change", function(){
        
//         //讓對話框不小於等於零
//         if(itemNumInput[index].value <= 0){
//             itemNumInput[index].value = 1;
//         }

//         calclateOrderItemSubtotal(index);

        
//      });
//  })


//  // 處理按鈕的功能 單品數量增減
//  function handleButton(index, num) {
//     itemNumInput[index].value = Number( itemNumInput[index].value ) + num;
    
//     calclateOrderItemSubtotal(index);
//     calclateOrderpPeice(index);
//  }

// // dty 把重複的程式碼封裝起來

// // 把單品數量總和

//   function calclateOrderItemSubtotal(index){
//     orderitemsubtotal[index].innerHTML = 
//         parseInt(itemNumInput[index].value) * 
//         parseInt(orderitemprice[index].textContent);

//     calclateOrderpPeice(index);
    
//   }

//   function calclateOrderpPeice(index){
//     let qty = 0;
//     let subtotal = 0;
//     let fee = 100;
//     for(let i = 0;i < orderItem. length; i ++ ){
//         qty = qty + parseInt(itemNumInput[i].value);
//         subtotal = subtotal + parseInt(orderitemsubtotal[i].textContent);
//     }

//     if (subtotal >= 100) fee = 0 ;
    
//     allQty.innerHTML = qty;
//     allSubtotal.innerHTML ='$ ' + subtotal;
//     allFee.innerHTML = '$ ' + fee;
//     allTotal.innerHTML = '$ ' + parseInt(subtotal + fee);


//  }

//  $("button").click(function () {
//     $(".check-icon").hide();
//     setTimeout(function () {
//       $(".check-icon").show();
//     }, 10);
//   });