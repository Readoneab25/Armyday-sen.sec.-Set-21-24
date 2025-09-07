// <!-- ===== JAVASCRIPT ===== -->
document.getElementById("to").onclick = function(){
    nav.style.left = "-100%"
    to.style.display = "none"
    tog.style.display = "flex"
    over.style.display = "none"
}
document.getElementById("tog").onclick = function(){
    document.getElementById("nav")
    nav.style.left = "0"
    tog.style.display = "none"
    to.style.display = "flex"
    over.style.display = "block"
}
document.getElementById("over").onclick = function(){
    nav.style.left = "-100%"
    to.style.display = "none"
    tog.style.display = "flex"
    over.style.display = "none"
}
 document.getElementById("di").onclick = function () {
     window.location.href = " https://readoneab25.github.io/portfolio.github.io/#about"
     
 }
 document.getElementById("de").onclick = function () {
     window.location.href = "https://readoneab25.github.io/B-tech.github.io/#about"
     
 }
 document.getElementById("id").onclick = function () {
     window.location.href = "https://readoneab25.github.io/Armyday-sen.sec.-Set-21-24/ "
     
 }

  // Example student data
  const students = [
    {
      name: "Abdulganiyu kehinde<br>(The Class REP)",
      phone: "08171138367",
      whatsapp: "08171138367",
      image: "kehinde.jpg"
    
    },
    {
      name: "Kabeer Muhammad Ramadan<br>(A.k.A Smart graphics pixel )",
      phone: "08105094991",
      whatsapp: "07078388161",
      image: "ramadan.jpg"
    },
    {
        name: "Abdul Azeez Abdul Rasheed opeyemi",
        phone: "08069015696",
        whatsapp: "08069015696",
        image: "abdulrasheed.jpg"
      },
      {
      name: "Abdulganiyu Taiwo",
      phone: "08129016763",
      whatsapp: " 08129016763",
      image: "taiwo.jpg"
    },
    {
      name: "Abdullahi O Ridwanullah<br>(Front-end Website Designer)",
      phone: "09138907913",
      whatsapp: "09138907913",
      image: "ni.png"
    
    },
      {
      name: "Issa Ridwanullahi",
      phone: "07042864195",
      whatsapp: "07042864195",
      image: "ridw.jpg"
    
    },
    {name: " Muhammad Abdulsamad",
      phone: "08110025175",
      whatsapp: "08110025175",
      image: "master.jpg"
    
    },
    {
    name: "Imam Zainab",
      phone: "08113202515",
      whatsapp: "08113202515",
      image: "imam.jpg"
    
    },
    {
    name: "Isaq Monsurat",
      phone: "08162056292",
      whatsapp: "08162056292",
      image: "keh.jpg"
    
    },
      {
    name: "Isaq Khadija",
      phone: "08149040848",
      whatsapp: "08149040848",
      image: "tai.jpg"
    
    }, 
    {
    name: "Shuaib Abdulroqeeb Gbolahan ",
      phone: "08061105951",
      whatsapp: "08061105951",
      image: "roq.jpg"
    
    },
      {
    name: "Abdulrasaq Aishat",
      phone: "08159507651",
      whatsapp: "08159507651",
      image: "ais.jpg"
    
    },
    
      ];

  const grid = document.getElementById("studentsGrid");

  students.forEach(student => {
    const card = document.createElement("div");
    card.className = "student-card";
    card.innerHTML = `
      <img src="${student.image}" alt="${student.name}">
      <div class="student-info">
        <h3>${student.name}</h3>
        <p>📞 ${student.phone}</p>
        
        <a href="https://wa.me/234${student.whatsapp.slice(1)}" target="_blank" class="whatsapp-btn">WhatsApp</a>
      </div>
    `;
    grid.appendChild(card);
  });

  // === SCROLL REVEAL ===
  const reveals = document.querySelectorAll(".student-card, .teacher-card");

  const revealOnScroll = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("revealed");
        revealOnScroll.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(el => revealOnScroll.observe(el));

  // === BACK TO TOP BUTTON ===
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
;
