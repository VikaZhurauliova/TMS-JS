
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
            <div class="row flex-column align-items-center wrap">
              <div class="col-6">
                <div class="d-flex justify-content-between">
                  <button id="start" class="btn btn-outline-primary">Start</button>
                  <button id="stop" class="btn btn-outline-danger">Stop</button>
                  <button  class = "btn btn-outline-success" id="reset">Reset</button>
                </div>
              </div>
              <div class="col-6">
                <div class="time-wrap text-center">
                  <h2 id='time'></h2>
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
