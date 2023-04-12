const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const navMenuBtn = document.querySelector('.nav-menu-btn');
const navDropdown = document.querySelector('.nav-dropdown');

navMenuBtn.addEventListener('click', function() {
  this.classList.toggle('open');
  navDropdown.classList.toggle('open');
});


const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");
  
  element.innerText = "";
  
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    outer.className = "outer";
    
    const inner = document.createElement("span"); 
    inner.className = "inner";
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    
    const letter = document.createElement("span");
    letter.className = "letter";
    letter.innerText = value;
    
    if (value === " ") {
      letter.innerHTML = "&nbsp;";
    } else {
      letter.style.animationDelay = `${index * 1000 }ms`;
    }
    
    inner.appendChild(letter);    
    outer.appendChild(inner);    
    element.appendChild(outer);
  });
}
enhance("new");
enhance("web");
enhance("name");


window.addEventListener("load", function() {
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
  setTimeout(function() {
    document.querySelector(".loader-con").classList.add("fade-out");
    document.body.style.overflow = "auto";
  }, 3000);
});
