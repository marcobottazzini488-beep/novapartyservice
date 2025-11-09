// Shortcut query selector
const $ = (q, root=document) => root.querySelector(q);
const $$ = (q, root=document) => Array.from(root.querySelectorAll(q));

// YEAR FOOTER
const y = $('#year'); if (y) y.textContent = new Date().getFullYear();

// MOBILE MENU
const btn = $('.hamburger');
const drawer = $('#mobile-drawer');
if(btn && drawer){
  btn.addEventListener('click', ()=>{
    const open = drawer.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  $$('#mobile-drawer a').forEach(a=>{
    a.addEventListener('click',()=>{
      drawer.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    });
  });
}

// REVEAL ON SCROLL
const io = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
},{threshold:0.12});
$$('.reveal').forEach(el=>io.observe(el));
