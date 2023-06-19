// Реализовать функциональность:
//
//   + Сохранение карточек с делами в **`localStorage`**:
// + Создать ключ `todos` в `localStorage`
// + Написать две функции `getName` и `setName` для получения и записи данных в `localStorage`
// + Не забудьте сделать проверку в `localStorage` по ключу если вдруг его не будет.
// + После перезагрузки страницы состояния карточек `checked` / `unchecked` должны сохраняться.
// + `Id` у карточек должны быть разными и генерироваться динамически.

//   + Объект карточки дела должен содержать поля:
//   ```javascript
//         const todo = {
//             id: 1,
//             date: '19:35 17 sept',
//             text: 'Play video games',
//             isChecked: true,
//         }

export const addition = () => {
  const id = Date.now()
  const date = new Date(id)
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const dates = date.toLocaleDateString();
  const fullDate = (`${hour}:${minutes} ${dates}`)
  const text = prompt('Send title');

  const todo = {
    id: id,
    date: fullDate,
    text: text,
    isChecked: true,
  }
  localStorage.todos = JSON.stringify(todo);

  const getName = () => {
    if (!localStorage.getItem('name')) {
      console.log(`Key doesn't exist`)
    } else {
      console.log(localStorage.getItem('name'))
    }
  }
  getName()
  const setName = () => {
    localStorage.setItem('name', 'Vika')
  }
  setName()
}
