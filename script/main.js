const bars = document.querySelector('.bars')
const links = document.querySelector('#links')
const nav = document.querySelector('nav')

bars.addEventListener('click', showMenu=()=> {
  bars.classList.toggle('active');
  if (links.style.maxHeight) {
    links.style.maxHeight = null;
      }  else {
        links.style.maxHeight = links.scrollHeight + "vh"
        
      }
      
})

// this is to close the drop--down links when it is clicked
document.querySelectorAll('#link-item').forEach(function(item) {
  item.addEventListener("click", function(e) {
    links.style.maxHeight = null;
    bars.classList.toggle('active');
    console.log(11)
  })
})
// this is to close the drop-down once there's a click outside the drop-down
document.body.addEventListener("click", function(e) {
  if(!e.path.includes(nav)) {
    links.style.maxHeight = null;
    bars.classList.toggle('active');
  }
});


// countdown timer
const countDown = new Date('june 25, 2021 00:00:00').getTime();

const time = setInterval(() => {
  const today = new Date().getTime()
  const difference = countDown - today;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((difference % (1000 * 60)) / 1000);


  document.querySelector('#day').innerHTML =days
  document.querySelector('#hor').innerHTML = hours
  document.querySelector('#min').innerHTML = mins
  document.querySelector('#sec').innerHTML = secs

  if (difference < 0) {
    clearInterval(time);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000)



// accordion functionality



const questionPara = document.querySelectorAll('.accord')

questionPara.forEach(para => {
  para.addEventListener('click', showPara=()=> {
    para.classList.toggle("active");
    let item = para.nextElementSibling;
    if(item.style.maxHeight) {
            item.style.maxHeight = null;
          } else {
            item.style.maxHeight = item.scrollHeight + "px";
          }
  })
})


let firstPara = document.querySelector('#open')
firstPara.style.maxHeight = item.scrollHeight + "px"