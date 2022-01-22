const cakeImgBtns = document.querySelectorAll('.cake-img');
let cakeInfos = document.querySelectorAll('.cake-info');
cakeInfos[0].classList.remove("cake-info-none");
cakeImgBtns[0].classList.add('selectedImg');


cakeImgBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    reset()
    this.classList.toggle('selectedImg')

    let datatype = this.dataset.type;
    cakeInfos = document.querySelectorAll('.cake-info');
    cakeInfos.forEach(function (cakeInfo) {
      cakeInfo.classList.add('cake-info-none');
      if (cakeInfo.dataset.type == datatype) {
        cakeInfo.classList.remove('cake-info-none')
      }
    })
  })

});
function reset() {
  cakeImgBtns.forEach((btn) => {
    btn.classList.remove('selectedImg')
  });
}

