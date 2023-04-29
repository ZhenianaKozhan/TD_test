const quizForm = document.getElementById('quiz');
const nameBtn = document.getElementById('submit-btn1');
const mailBtn = document.getElementById('submit-btn2');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const dyson = document.querySelector('.dyson');
const conditions = document.querySelector('.conditions');
const wonText = document.querySelector('.won');

quizForm.addEventListener('click', e => {
  if (e.target.id === 'submit-btn1') {
    e.target.previousElementSibling.value.length !== 0
      ? box1.classList.add('opened')
      : alert('Дайте відповідь на перше питання');
  }

  if (e.target.id === 'submit-btn2') {
    e.target.previousElementSibling.value.length !== 0
      ? box2.classList.add('opened')
      : alert('Дайте відповідь на друге питання');
  }
});

quizForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = quizForm.elements.name.value;
  const email = quizForm.elements.email.value;
  const age = quizForm.elements.age.value;
  console.log({ name: name, email: email, age: age });

  box3.classList.add('opened');
  box3.classList.add('hidden');
  dyson.classList.add('show');
  conditions.style.opacity = 0;
  wonText.style.opacity = 1;
});
