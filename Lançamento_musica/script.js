 // Seleciona todos os links de navegação
 const navLinks = document.querySelectorAll('nav ul li a');

 // Adiciona um evento de clique para cada link
 navLinks.forEach(link => {
     link.addEventListener('click', (e) => {
         e.preventDefault(); // Previne o comportamento padrão do link
 
         // Seleciona a seção alvo
         const targetId = link.getAttribute('href');
         const targetSection = document.querySelector(targetId);
 
         // Faz a rolagem suave até a seção alvo
         window.scrollTo({
             top: targetSection.offsetTop,
             behavior: 'smooth'
         });
     });
 });
 
 // Adiciona uma classe ativa ao link de navegação correspondente à seção visível
 window.addEventListener('scroll', () => {
     let current = '';
 
     document.querySelectorAll('.section').forEach(section => {
         const sectionTop = section.offsetTop;
         const sectionHeight = section.clientHeight;
 
         if (pageYOffset >= sectionTop - sectionHeight / 3) {
             current = section.getAttribute('id');
         }
     });
 
     navLinks.forEach(link => {
         link.classList.remove('active');
         if (link.getAttribute('href') === `#${current}`) {
             link.classList.add('active');
         }
     });
 });
 
 
 const countToDate = new Date().setHours(new Date().getHours() + 24)
 let previousTimeBetweenDates
 setInterval(() => {
   const currentDate = new Date()
   const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
   flipAllCards(timeBetweenDates)
 
   previousTimeBetweenDates = timeBetweenDates
 }, 250)
 
 function flipAllCards(time) {
   const seconds = time % 60
   const minutes = Math.floor(time / 60) % 60
   const hours = Math.floor(time / 3600)
 
   flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
   flip(document.querySelector("[data-hours-ones]"), hours % 10)
   flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
   flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
   flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
   flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
 }
 
 function flip(flipCard, newNumber) {
   const topHalf = flipCard.querySelector(".top")
   const startNumber = parseInt(topHalf.textContent)
   if (newNumber === startNumber) return
 
   const bottomHalf = flipCard.querySelector(".bottom")
   const topFlip = document.createElement("div")
   topFlip.classList.add("top-flip")
   const bottomFlip = document.createElement("div")
   bottomFlip.classList.add("bottom-flip")
 
   top.textContent = startNumber
   bottomHalf.textContent = startNumber
   topFlip.textContent = startNumber
   bottomFlip.textContent = newNumber
 
   topFlip.addEventListener("animationstart", e => {
     topHalf.textContent = newNumber
   })
   topFlip.addEventListener("animationend", e => {
     topFlip.remove()
   })
   bottomFlip.addEventListener("animationend", e => {
     bottomHalf.textContent = newNumber
     bottomFlip.remove()
   })
   flipCard.append(topFlip, bottomFlip)
 }
 
         $(function(){
             $(".palavras").typed({
               strings: ["Maior Hit De Todos Os Tempos"], //palavras ou frases que serão exibidas
                 typeSpeed: 50, //tempo de alteração de palavras
                 loop: true,  //loop para retornar desde a primeira palavra
                 backDelay: 1000, 
             });
         });
       
 