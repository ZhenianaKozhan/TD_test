const e=document.getElementById("quiz"),t=(document.getElementById("submit-btn1"),document.getElementById("submit-btn2"),document.getElementById("box1")),n=document.getElementById("box2"),l=document.getElementById("box3"),d=document.querySelector(".dyson"),s=document.querySelector(".conditions"),o=document.querySelector(".won");e.addEventListener("click",(e=>{"submit-btn1"===e.target.id&&(0!==e.target.previousElementSibling.value.length?t.classList.add("opened"):alert("Дайте відповідь на перше питання")),"submit-btn2"===e.target.id&&(0!==e.target.previousElementSibling.value.length?n.classList.add("opened"):alert("Дайте відповідь на друге питання"))})),e.addEventListener("submit",(t=>{t.preventDefault();const n=e.elements.name.value,a=e.elements.email.value,m=e.elements.age.value;console.log({name:n,email:a,age:m}),l.classList.add("hidden"),d.classList.add("show"),s.style.opacity=0,o.style.opacity=1}));
//# sourceMappingURL=variant2.6fe3ea09.js.map
