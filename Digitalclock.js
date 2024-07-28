(() => {
  'use strict';
    const time = document.createElement('div');
    time.style.position = 'center';
    time.style.color = 'gray';
    time.style.margin = '25% 25% 25% 25%';
    time.style.fontSize = '3em';
    time.style.textAlign = 'center';
    document.body.appendChild(time);

    const tick = function () {
        const seconds = new Date();
        time.innerText = seconds.toLocaleTimeString();
    };
    setInterval(tick, 1000);  
})();