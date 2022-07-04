const slider = document.querySelectorAll('.picture');

slider.forEach(el => el.addEventListener('click', changeSize))

function changeSize (e) {
    this.classList.add('big_png')
    this.removeEventListener('click', changeSize)
  }