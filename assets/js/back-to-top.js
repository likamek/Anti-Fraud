const mybutton = document.getElementById('back-to-top');
const footer = document.getElementById('footer');
const btnMarginBottom = parseInt(window.getComputedStyle(mybutton).getPropertyValue('bottom'));

window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 100
    || document.documentElement.scrollTop > 100) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }

  const footStartPos = footer.getBoundingClientRect().y;

  if (window.innerHeight > footStartPos) {
    mybutton.style.bottom = `${window.innerHeight - footStartPos}px`;
  } else {
    mybutton.style.bottom = '';
  }
});


