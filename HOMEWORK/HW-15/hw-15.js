// + Перейдите по ссылке https://jsonplaceholder.typicode.com/
// + Во вкладке Resources лежит ключ /todos - Это именно те данные которые нам нужны
// + Далее напишите две функции getTodos & printTodos
// + Функция getTodos делает запрос по указанному адресу и забирает данные.
// + Функция printTodos создает список ul, и в каждый елемент li добавляет данные из полученного объекта с делом. Нам нужны ключи из объекта id title.
//     Example:
// ---
//     1 delectus aut autem
// 2 quis ut nam facilis et officia qui
// 3 fugiat veniam minus
// ...
// 200 ipsam aperiam voluptates qui

export const todos = () => {

    const printTodos = (toDo) => {
        const container = document.querySelector('#wrap-app');

        container.innerHTML = toDo.reduce((acc, task) => {
            return acc + `
                <li class="todo-title col-8">${task.id} ${task.title}</li>
        `
        }, '')
    };

    const getTodos = async () => {
        let toDos;

        try {
            toDos = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json());
        } catch (e) {
            console.warn(e)
        }
        printTodos(toDos)
        // const data = toDos?.slice(0, 20);
        //
        // if (data) {
        //     printTodos(data);
        // }
    }
    getTodos()
}
