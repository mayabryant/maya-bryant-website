document.getElementById('year').textContent = new Date().getFullYear();
const btn=document.querySelector('.menu-btn'), nav=document.querySelector('nav');
btn.addEventListener('click',()=>{const open=nav.style.display==='flex';nav.style.display=open?'none':'flex';btn.textContent=open?'MENU':'CLOSE';if(!open){Object.assign(nav.style,{display:'flex',position:'absolute',top:'70px',right:'6vw',flexDirection:'column',background:'#120d12',padding:'20px',gap:'18px'})}});
