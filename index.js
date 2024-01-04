var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "UI-UX Designer",
      "Backend Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

  function resume(link) {
    window.location.href = link;
  }


  function scroll(id) {
    const section = document.getElementById(id);
  
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


  function toggleMenu() {
    var slideMenu = document.getElementById('slideMenu');
    if (slideMenu.style.left === '0px') {
      slideMenu.style.left = '-250px';
    } else {
      slideMenu.style.left = '0px';
    }
  }
