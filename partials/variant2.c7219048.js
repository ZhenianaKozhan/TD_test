!function(){var e=document.getElementById("quiz"),t=(document.getElementById("submit-btn1"),document.getElementById("submit-btn2"),document.getElementById("box1")),n=document.getElementById("box2"),l=document.getElementById("box3"),d=document.querySelector(".dyson"),a=document.querySelector(".conditions"),o=document.querySelector(".won");e.addEventListener("click",(function(e){"submit-btn1"===e.target.id&&(0!==e.target.previousElementSibling.value.length?t.classList.add("opened"):alert("Дайте відповідь на перше питання")),"submit-btn2"===e.target.id&&(0!==e.target.previousElementSibling.value.length?n.classList.add("opened"):alert("Дайте відповідь на друге питання"))})),e.addEventListener("submit",(function(t){t.preventDefault();var n=e.elements.name.value,i=e.elements.email.value,s=e.elements.age.value;console.log({name:n,email:i,age:s}),l.classList.add("hidden"),d.classList.add("show"),a.style.opacity=0,o.style.opacity=1}))}();
//# sourceMappingURL=variant2.c7219048.js.map