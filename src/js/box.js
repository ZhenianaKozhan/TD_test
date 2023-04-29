const quizForm = document.getElementById('quiz');
const nameBtn = document.getElementById('submit-btn1');
const mailBtn = document.getElementById('submit-btn2');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

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
});

// function openBox() {
//   // Закрываем другие коробки и открываем только выбранную
//   boxes.forEach(box => {
//     if (box !== this) {
//       box.style.opacity = '0.5';
//       box.removeEventListener('click', openBox);
//     } else {
//       box.style.transform = 'rotateY(180deg)';
//       box.style.backgroundImage = "url('../images/prize.png')";
//       box.removeEventListener('click', openBox);
//       box.classList.add('prize-box');
//       setTimeout(() => {
//         alert('Поздравляем! Вы выиграли пылесос Dyson!');
//         location.reload();
//       }, 1000);
//     }
//   });
// }

