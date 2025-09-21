document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".cards");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  let currentIndex = 0;
  let autoSlide;

  // Função para mostrar o card atual
  function showCard(index) {
    cards.forEach((card, i) => {
      card.style.display = i === index ? "block" : "none";
      card.classList.remove("visivel");
    });

    // Força reflow para reiniciar animação
    void cards[index].offsetWidth;
    cards[index].classList.add("visivel");
  }

  // Botões
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
    resetAutoSlide();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
    resetAutoSlide();
  });

  // Auto slide
  function startAutoSlide() {
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length;
      showCard(currentIndex);
    }, 5000); // muda a cada 5s
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  // Inicialização
  showCard(currentIndex);
  startAutoSlide();
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".number-trust-client");

  const animateCounter = (el) => {
    const target = +el.innerText; // valor final
    let count = 0;
    const increment = target / 450; // velocidade da contagem

    const updateCounter = () => {
      count += increment;
      if (count < target) {
        el.innerText = Math.ceil(count);
        requestAnimationFrame(updateCounter);
      } else {
        el.innerText = target;
      }
    };

    updateCounter();
  };

  // Detecta quando os números entram na tela
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target); // anima apenas uma vez
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".imgs-attorneys");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let currentIndex = 0;
  let autoSlide;

  // Ajusta layout para carrossel
  track.style.display = "flex";
  track.style.transition = "transform 0.6s ease";
  slides.forEach(slide => {
    slide.style.minWidth = "100%"; // apenas 1 por vez
  });

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 2000); // troca a cada 4s
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  // Inicializa
  updateCarousel();
  startAutoSlide();

  // Ajusta ao redimensionar
  window.addEventListener("resize", updateCarousel);
});


const mobileMenuButton = document.getElementById("mobile-menu-button");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-link"); // Seleciona todos os links do menu

// 2. Adiciona um evento de clique ao botão
mobileMenuButton.addEventListener("click", () => {
  // Adiciona ou remove a classe 'active' do menu
  menu.classList.toggle("active");
});

// 3. (Bônus) Faz o menu fechar ao clicar em um link
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Se o menu estiver ativo, remove a classe 'active' para fechá-lo
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    }
  });
});




