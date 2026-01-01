const menuToggle = document.getElementById("menuToggle");
const navRight = document.getElementById("navRight");
let backdrop = null;

function createBackdrop() {
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    backdrop.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.5); z-index: 998; display: none;';
    document.body.appendChild(backdrop);
    
    backdrop.addEventListener('click', () => {
      closeMenu();
    });
  }
  return backdrop;
}

function openMenu() {
  navRight.classList.add("show");
  const back = createBackdrop();
  back.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navRight.classList.remove("show");
  if (backdrop) {
    backdrop.style.display = 'none';
  }
  document.body.style.overflow = '';
  // Close all dropdowns and submenus when closing the menu
  document.querySelectorAll('.nav-item.open, .has-submenu.open').forEach(el => el.classList.remove('open'));
}

menuToggle.addEventListener("click", () => {
  if (navRight.classList.contains("show")) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 992) {
    if (navRight.classList.contains("show") && 
        !navRight.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      closeMenu();
    }
  }
});


  
  // WHY SLIDER: card-level, infinite autoplay with touch drag
  function initWhySlider(){
    const slider = document.querySelector('.why-slider');
    const track = document.querySelector('.why-track');
    if(!slider || !track) return;

    // gather all cards (may be inside .why-slide wrappers)
    const originalCards = Array.from(track.querySelectorAll('.why-card'));
    if(originalCards.length === 0) return;

    function getCardsPerView(){
      if(window.innerWidth <= 768) return 1;
      return 4; // Desktop: 4 cards
    }

    let perView = getCardsPerView();

    // create a fresh list of items inside track (clear existing wrappers)
    const items = originalCards.map(c => c.cloneNode(true));
    track.innerHTML = '';

    // prepend last `perView` clones
    for(let i = items.length - perView; i < items.length; i++){
      const clone = items[i].cloneNode(true);
      clone.classList.add('clone');
      track.appendChild(clone);
    }

    // append originals
    items.forEach(it => track.appendChild(it));

    // append first `perView` clones
    for(let i = 0; i < perView; i++){
      const clone = items[i].cloneNode(true);
      clone.classList.add('clone');
      track.appendChild(clone);
    }

    let index = perView;
    let cardWidth = 0;
    let isAnimating = false;
    let autoInterval = 3000;
    let timer = null;

    function calcSizes(){
      perView = getCardsPerView();
      const first = track.querySelector('.why-card');
      if(!first) return;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const rect = first.getBoundingClientRect();
      cardWidth = rect.width + gap;
      // position to correct index
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    // initial calc
    calcSizes();
    window.addEventListener('resize', () => {
      const newPerView = getCardsPerView();
      if(newPerView !== perView){
        stopAuto();
        perView = newPerView;
        // Rebuild clones with new perView
        const items = originalCards.map(c => c.cloneNode(true));
        track.innerHTML = '';
        for(let i = items.length - perView; i < items.length; i++){
          const clone = items[i].cloneNode(true);
          clone.classList.add('clone');
          track.appendChild(clone);
        }
        items.forEach(it => track.appendChild(it));
        for(let i = 0; i < perView; i++){
          const clone = items[i].cloneNode(true);
          clone.classList.add('clone');
          track.appendChild(clone);
        }
        index = perView;
        calcSizes();
        track.style.transition = 'none';
        track.style.transform = `translateX(-${index * cardWidth}px)`;
        requestAnimationFrame(()=> track.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)');
        startAuto();
      } else {
        setTimeout(calcSizes, 80);
      }
    });

    // set initial position (no transition)
    track.style.transition = 'none';
    track.style.transform = `translateX(-${index * cardWidth}px)`;
    requestAnimationFrame(()=> track.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)');

    function moveNext(){
      if(isAnimating) return;
      isAnimating = true;
      index++;
      track.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    function movePrev(){
      if(isAnimating) return;
      isAnimating = true;
      index--;
      track.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    track.addEventListener('transitionend', ()=>{
      isAnimating = false;
      const children = track.children;
      // reset when crossing clones at end
      if(index >= children.length - perView){
        track.style.transition = 'none';
        index = perView;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
        requestAnimationFrame(()=> track.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)');
      }
      // reset when crossing clones at start
      if(index < perView){
        track.style.transition = 'none';
        index = children.length - (perView * 2);
        track.style.transform = `translateX(-${index * cardWidth}px)`;
        requestAnimationFrame(()=> track.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)');
      }
    });

    function startAuto(){ timer = setInterval(moveNext, autoInterval); }
    function stopAuto(){ if(timer){ clearInterval(timer); timer = null; } }
    startAuto();

    // pause on hover
    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);

    // pointer dragging (touch & mouse)
    let isDown = false, startX = 0, startTranslate = 0;
    track.addEventListener('pointerdown', (e)=>{
      isDown = true;
      track.setPointerCapture(e.pointerId);
      startX = e.clientX;
      // compute current translateX
      const matrix = window.getComputedStyle(track).transform;
      if(matrix && matrix !== 'none'){
        const val = matrix.split(',')[4];
        startTranslate = Math.abs(parseFloat(val));
      } else { startTranslate = index * cardWidth; }
      track.style.transition = 'none';
      stopAuto();
    });

    track.addEventListener('pointermove', (e)=>{
      if(!isDown) return;
      const dx = e.clientX - startX;
      track.style.transform = `translateX(-${startTranslate - dx}px)`;
    });

    const endDrag = (e)=>{
      if(!isDown) return;
      isDown = false;
      try{ track.releasePointerCapture(e.pointerId); }catch(err){}
      // compute nearest index
      const transform = window.getComputedStyle(track).transform;
      let translateX = 0;
      if(transform && transform !== 'none'){
        const num = transform.split(',')[4];
        translateX = Math.abs(parseFloat(num));
      }
      index = Math.round(translateX / cardWidth);
      track.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      track.style.transform = `translateX(-${index * cardWidth}px)`;
      startAuto();
    };

    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
    track.addEventListener('lostpointercapture', endDrag);
  }

  window.addEventListener('load', initWhySlider);


// NAV DROPDOWN TOGGLES (mobile)
function initNavDropdowns(){
  if(initNavDropdowns._inited) return;
  initNavDropdowns._inited = true;

  const topDropdownLinks = document.querySelectorAll('.nav-item.has-dropdown > a');
  topDropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if(window.innerWidth <= 992){
        e.preventDefault();
        e.stopPropagation();
        const parent = link.parentElement;
        // close siblings
        const siblings = parent.parentElement.querySelectorAll('.nav-item.open');
        siblings.forEach(s => { if(s !== parent) s.classList.remove('open'); });
        parent.classList.toggle('open');
      }
    });
  });

  const subLinks = document.querySelectorAll('.has-submenu > a');
  subLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if(window.innerWidth <= 992){
        e.preventDefault();
        e.stopPropagation();
        const parent = link.parentElement;
        // close sibling submenus within the same dropdown
        const dropdown = parent.closest('.dropdown');
        if(dropdown) {
          const siblings = dropdown.querySelectorAll('.has-submenu.open');
          siblings.forEach(s => { if(s !== parent) s.classList.remove('open'); });
        }
        parent.classList.toggle('open');
      }
    });
  });

  // allow tapping the caret itself to toggle (better small-target UX)
  document.querySelectorAll('.nav-item.has-dropdown > a .caret, .has-submenu > a .caret-sub').forEach(c=>{
    c.addEventListener('click', (e)=>{
      if(window.innerWidth <= 992){
        e.preventDefault();
        e.stopPropagation();
        const parent = c.closest('.nav-item') || c.closest('.has-submenu');
        if(parent) {
          if(parent.classList.contains('nav-item')) {
            // close sibling dropdowns
            const siblings = parent.parentElement.querySelectorAll('.nav-item.open');
            siblings.forEach(s => { if(s !== parent) s.classList.remove('open'); });
          } else if(parent.classList.contains('has-submenu')) {
            // close sibling submenus
            const dropdown = parent.closest('.dropdown');
            if(dropdown) {
              const siblings = dropdown.querySelectorAll('.has-submenu.open');
              siblings.forEach(s => { if(s !== parent) s.classList.remove('open'); });
            }
          }
          parent.classList.toggle('open');
        }
      }
    });
  });

  // close dropdowns/submenus when clicking outside navbar (but don't close the entire menu)
  document.addEventListener('click', (e)=>{
    if(window.innerWidth <= 992){
      if(!e.target.closest('.nav-right')){
        document.querySelectorAll('.nav-item.open, .has-submenu.open').forEach(el => el.classList.remove('open'));
      }
    }
  });
}

// init on load and on resize (to ensure correct behavior after orientation change)
// render hero text slides from JS (so HTML stays clean)
function renderTextSlides(){
  const slidesData = [
    {
      title: 'High-Tech Sealing Solution',
      text: 'SealVentures India delivers innovative mechanical seal solutions through advanced materials, precision engineering, and custom designs, ensuring superior durability, efficiency, and reliability across industries.'
    },
    {
      title: 'Professional Expertise',
      text: 'SealVentures India demonstrates professional expertise in mechanical seal manufacturing through precision engineering, advanced technology integration, and unwavering commitment to global quality standards.'
    },
    {
      title: 'Strong After-Sales Support',
      text: 'We ensure strong after-sales support by providing timely technical assistance, genuine spare parts, performance monitoring, and dedicated customer service to enhance the reliability and longevity of our mechanical seals.'
    },
    {
      title: 'Wide Range of Products/Services',
      text: 'We offer a wide range of precision-engineered mechanical seals and related sealing solutions, designed to meet diverse industrial applications with superior quality and reliability.'
    }
  ];

  const container = document.querySelector('.text-slides');
  if(!container) return;
  container.innerHTML = slidesData.map((s, i) => `\n    <div class="text-slide ${i===0? 'active':''}" data-index="${i}">\n      <h1>${s.title}</h1>\n      <p>${s.text}</p>\n    </div>`).join('');
}

window.addEventListener('load', renderTextSlides);

window.addEventListener('load', initNavDropdowns);
window.addEventListener('resize', () => {
  // remove any open classes when resizing to desktop
  if(window.innerWidth > 992){
    document.querySelectorAll('.nav-item.open, .has-submenu.open').forEach(el => el.classList.remove('open'));
  }
});

// BACKGROUND VIDEO PLAYLIST
function initBgPlaylist(){
  const playlist = [
    'videos/Video 1.mp4',
    'videos/Video 2.mp4',
    'videos/Video 3.mp4',
    'videos/Video 4.mp4'
  ];
  const video = document.getElementById('bgVideo');
  if(!video) return;
  let idx = 0;
  const slides = document.querySelectorAll('.text-slide');

  function loadAndPlay(i){
    // update slide first for smooth transition
    showSlide(i);
    video.src = playlist[i];
    video.load();
    // try to play; muted + autoplay helps browsers allow autoplay
    video.play().catch(() => {});
  }

  video.addEventListener('ended', ()=>{
    idx = (idx + 1) % playlist.length;
    loadAndPlay(idx);
  });

  video.addEventListener('error', ()=>{
    // skip to next on error
    idx = (idx + 1) % playlist.length;
    loadAndPlay(idx);
  });

  // start playback
  loadAndPlay(idx);
  
  // helper: show corresponding text slide
  function showSlide(i){
    if(!slides || slides.length === 0) return;
    slides.forEach(s => s.classList.remove('active'));
    const el = slides[i % slides.length];
    if(el) {
      // slight delay before adding active so clip-path animates smoothly
      requestAnimationFrame(()=>{
        el.classList.add('active');
      });
    }
  }
}

window.addEventListener('load', initBgPlaylist);



// PRODUCT SLIDER: infinite autoplay with responsive support
function initProductSlider(){
  const slider = document.querySelector('.product-slider');
  const track = document.querySelector('.product-track');
  
  if(!slider || !track) return;

  const originalCards = Array.from(track.querySelectorAll('.product-card'));
  if(originalCards.length === 0) return;

  // Determine cards per view based on screen width
  function getCardsPerView(){
    if(window.innerWidth <= 600) return 1;
    if(window.innerWidth <= 992) return 2;
    return 4;
  }

  let cardsPerView = getCardsPerView();
  let currentIndex = cardsPerView;
  let cardWidth = 0;
  let isAnimating = false;
  let autoInterval = 2500;
  let timer = null;

  function cloneCards(){
    // Clear and rebuild track
    track.innerHTML = '';
    
    // Prepend last `cardsPerView` clones
    for(let i = originalCards.length - cardsPerView; i < originalCards.length; i++){
      const clone = originalCards[i].cloneNode(true);
      clone.classList.add('clone');
      track.appendChild(clone);
    }

    // Add originals
    originalCards.forEach(card => {
      track.appendChild(card.cloneNode(true));
    });

    // Append first `cardsPerView` clones
    for(let i = 0; i < cardsPerView; i++){
      const clone = originalCards[i].cloneNode(true);
      clone.classList.add('clone');
      track.appendChild(clone);
    }
  }

  function updateCardWidth(){
    const firstCard = track.querySelector('.product-card');
    if(firstCard){
      cardWidth = firstCard.offsetWidth + 25; // 25px gap
    }
  }

  function moveToIndex(idx, smooth = true){
    if(smooth){
      track.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
      track.style.transition = 'none';
    }
    track.style.transform = `translateX(-${idx * cardWidth}px)`;
    currentIndex = idx;
  }

  function nextSlide(){
    if(isAnimating) return;
    isAnimating = true;
    currentIndex++;
    moveToIndex(currentIndex, true);

    setTimeout(() => {
      if(currentIndex >= originalCards.length + cardsPerView){
        moveToIndex(cardsPerView, false);
      }
      isAnimating = false;
    }, 800);
  }

  function prevSlide(){
    if(isAnimating) return;
    isAnimating = true;
    currentIndex--;
    moveToIndex(currentIndex, true);

    setTimeout(() => {
      if(currentIndex < cardsPerView){
        moveToIndex(originalCards.length, false);
      }
      isAnimating = false;
    }, 800);
  }

  function startAuto(){
    timer = setInterval(nextSlide, autoInterval);
  }

  function stopAuto(){
    if(timer){
      clearInterval(timer);
      timer = null;
    }
  }

  // Initialize
  cloneCards();
  updateCardWidth();
  moveToIndex(currentIndex, false);
  startAuto();

  // Handle window resize
  window.addEventListener('resize', () => {
    const newPerView = getCardsPerView();
    if(newPerView !== cardsPerView){
      stopAuto();
      cardsPerView = newPerView;
      currentIndex = cardsPerView;
      cloneCards();
      updateCardWidth();
      moveToIndex(currentIndex, false);
      startAuto();
    }
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    stopAuto();
  });

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    
    if(touchStartX - touchEndX > 50){
      nextSlide();
    } else if(touchEndX - touchStartX > 50){
      prevSlide();
    }
    startAuto();
  });

  // Stop autoplay on hover
  slider.addEventListener('mouseenter', stopAuto);
  slider.addEventListener('mouseleave', startAuto);
}

window.addEventListener('load', initProductSlider);

// INDUSTRIES SLIDER: smooth infinite autoplay
function initIndustriesSlider(){
  const slider = document.querySelector('.industries-slider');
  const track = document.querySelector('.industries-track');
  
  if(!slider || !track) return;

  const originalCards = Array.from(track.querySelectorAll('.industry-card'));
  if(originalCards.length === 0) return;

  // Determine cards per view based on screen width
  function getCardsPerView(){
    if(window.innerWidth <= 768) return 1;
    return 4; // Show 4 cards on desktop
  }

  let cardsPerView = getCardsPerView();
  let currentIndex = cardsPerView;
  let cardWidth = 0;
  let isAnimating = false;
  let autoInterval = 3500;
  let timer = null;

  function cloneCards(){
    // Clear and rebuild track
    track.innerHTML = '';
    
    // Prepend last `cardsPerView` clones
    for(let i = originalCards.length - cardsPerView; i < originalCards.length; i++){
      const clone = originalCards[i].cloneNode(true);
      clone.classList.add('clone');
      track.appendChild(clone);
    }

    // Add originals
    originalCards.forEach(card => {
      track.appendChild(card.cloneNode(true));
    });

    // Append first `cardsPerView` clones
    for(let i = 0; i < cardsPerView; i++){
      const clone = originalCards[i].cloneNode(true);
      clone.classList.add('clone');
      track.appendChild(clone);
    }
  }

  function updateCardWidth(){
    const firstCard = track.querySelector('.industry-card');
    if(firstCard){
      const gap = parseFloat(getComputedStyle(track).gap) || 25;
      cardWidth = firstCard.offsetWidth + gap;
    }
  }

  function moveToIndex(idx, smooth = true){
    if(smooth){
      track.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
      track.style.transition = 'none';
    }
    track.style.transform = `translateX(-${idx * cardWidth}px)`;
    currentIndex = idx;
  }

  function nextSlide(){
    if(isAnimating) return;
    isAnimating = true;
    currentIndex++;
    moveToIndex(currentIndex, true);

    setTimeout(() => {
      if(currentIndex >= originalCards.length + cardsPerView){
        moveToIndex(cardsPerView, false);
      }
      isAnimating = false;
    }, 800);
  }

  function startAuto(){
    timer = setInterval(nextSlide, autoInterval);
  }

  function stopAuto(){
    if(timer){
      clearInterval(timer);
      timer = null;
    }
  }

  // Initialize
  cloneCards();
  updateCardWidth();
  moveToIndex(currentIndex, false);
  startAuto();

  // Handle window resize
  window.addEventListener('resize', () => {
    const newPerView = getCardsPerView();
    if(newPerView !== cardsPerView){
      stopAuto();
      cardsPerView = newPerView;
      currentIndex = cardsPerView;
      cloneCards();
      updateCardWidth();
      moveToIndex(currentIndex, false);
      startAuto();
    } else {
      updateCardWidth();
      moveToIndex(currentIndex, false);
    }
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    stopAuto();
  });

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    
    if(touchStartX - touchEndX > 50){
      nextSlide();
    } else if(touchEndX - touchStartX > 50){
      if(isAnimating) return;
      isAnimating = true;
      currentIndex--;
      moveToIndex(currentIndex, true);
      setTimeout(() => {
        if(currentIndex < cardsPerView){
          moveToIndex(originalCards.length, false);
        }
        isAnimating = false;
      }, 800);
    }
    startAuto();
  });

  // Stop autoplay on hover
  slider.addEventListener('mouseenter', stopAuto);
  slider.addEventListener('mouseleave', startAuto);
}

window.addEventListener('load', initIndustriesSlider);

document.querySelectorAll('.acc-head').forEach(head=>{
  head.addEventListener('click',()=>{
    head.parentElement.classList.toggle('active');
  });
});

// Industry Cards Expand Functionality
document.querySelectorAll('.expand-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.industry-card');
    const content = card.querySelector('.industry-content');
    const isActive = content.classList.contains('active');
    
    // Close all other open cards
    document.querySelectorAll('.industry-content.active').forEach(openContent => {
      openContent.classList.remove('active');
      openContent.parentElement.querySelector('.expand-btn').classList.remove('active');
    });
    
    // Toggle current card
    if (!isActive) {
      content.classList.add('active');
      btn.classList.add('active');
    }
  });
});

// Close content when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.industry-card')) {
    document.querySelectorAll('.industry-content.active').forEach(content => {
      content.classList.remove('active');
      content.parentElement.querySelector('.expand-btn').classList.remove('active');
    });
  }
});


const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");

openBtn.addEventListener("click", function(e){
  e.preventDefault();
  popup.style.display = "flex";
});

// closeBtn.addEventListener("click", function(){
//   popup.style.display = "none";
// });

// popup.addEventListener("click", function(e){
//   if(e.target === popup){
//     popup.style.display = "none";
//   }
// });


function goToOverview(e, id) {
  e.preventDefault();
  window.location.href = 'overview.html#' + id;
}

const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-item.active');

    if (openItem && openItem !== item) {
      openItem.classList.remove('active');
      openItem.querySelector('.accordion-content').style.maxHeight = null;
    }

    item.classList.toggle('active');
    const content = item.querySelector('.accordion-content');

    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});