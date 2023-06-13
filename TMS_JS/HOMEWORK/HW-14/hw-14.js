
// Напишите маленькое приложение **`Timer`**:
//
//  Создайте папку `Timer`+
//  Создайте базовую структуру проекта из трех файлов `html`, `css`, `js`+
//  Функциональность приложения:
//  Клавиша `start` - для запуска таймера+
//  Клавиша `stop` - для остановки таймера+
//  Циферблат с текущим временем в формате `XX sec`
//

//  Примечания:
//
//  Таймер измеряет время только в секундах
//  После остановки таймера, если снова нажать клавишу `start` таймер запуститься с текущего результата, а не с начала.

export const timer = () => {
    const InnerHtml = () => {
        const hw_14 = document.querySelector('#FOR_HOMEWORK');
        hw_14.innerHTML = `
         <div class="container">
            <div class="row flex-column">
              <div class="col">
                <div class="d-flex justify-content-between">
                  <button id="start">Start</button>
                  <button id="stop">Stop</button>
                  <button id="reset">Reset</button>
                </div>
              </div>
              <div class="col">
                <div>
                  <h3 id='time'></h3>
                </div>
              </div>
            </div>
          </div>
        `
    }
    InnerHtml()

    let start = document.querySelector('#start');
    let stop  = document.querySelector('#stop');
    let reset  = document.querySelector('#reset');
    let time  = document.querySelector('#time');

    start.addEventListener('click', startTimer);
    stop.addEventListener('click', stopTimer);
    reset.addEventListener('click', resetTimer);

    let sec = 0;
    let interval;

    function startTimer() {
        interval = setInterval(count, 1000);
        function count(){
            sec++;
            time.innerHTML = sec;
        }
    }
    function stopTimer() {

        clearInterval(interval);
    }

    function resetTimer() {
        clearInterval(interval);
        sec = 0;
        time.innerHTML = sec;
    }

}
