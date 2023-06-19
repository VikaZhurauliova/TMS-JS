// Создайте класс **`Developer`**
//
// + Конструктор этого класса принимает один параметр `name`
// + Реализуйте метод  **`startWork`**  который возвращает строку:
//   >  `name` start work ...
// + Реализуйте метод  **`endtWork`**  который возвращает строку:
//   >  `name` end work ...
//
// Далее реализуйте два класса **`Frontend`** **`Backend`** которые будут наследовать методы из класса **`Developer`**
//
// + Класс **`Frontend`** должен иметь свой уникальный метод `buildWebSite` который возвращает строку:
//   >  `name` start build website
// + Класс **`Frontend`** должен иметь свой уникальный ключ `websiteName` в который мы записываем название веб-сайта над которым будет работать разработчик.
//
// + Класс **`Backend`** должен иметь свой уникальный метод `buildServer` который возвращает строку:
//   >  `name` start build server
//
// Проинициализируйте два класса **`Frontend`** **`Backend`** и вызовите у них все доступные методы.
//
//   ```javascript
//     const john = new Frontend('john');
//     john.startWork()        // john start work ...
//     john.buildWebsite()     // john start build website Amazon
//     john.endWork()          // john end work ...
// ```

export const classDeveloper = () => {
  class Developer {
    constructor(name) {
      this.name = name;
    }

    startWork() {
      return `${this.name} start work`
    }

    endWork() {
      return `${this.name} end work`
    }
  }
    class Frontend extends Developer{
   constructor(name,websiteName) {
     super(name);
     this.websiteName = websiteName;
   }
    buildWebSite() {
      return `${this.name} start build ${this.websiteName}`
    }
  }

  let frontend1 = new Frontend('John', 'https://test.url')
  console.log(frontend1.buildWebSite())
  console.log(frontend1.startWork())
  console.log(frontend1.endWork())

  class Backend extends Developer{
    constructor(name) {
      super(name);
    }
    buildServer() {
      return `${this.name} start build server`
    }
  }

  let backend1 = new Backend('john')
  console.log(backend1.buildServer())

}
