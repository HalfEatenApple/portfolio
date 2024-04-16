const dayCounter = document.getElementById('counter');
const start = '2024-04-01';
const startDate = new Date(start);
const numFormat = new Intl.NumberFormat("en-US");
const oneDay = 1000 * 60 * 60 * 24;
  
setInterval(() => {
    const currentDate = new Date();
    const difference = Math.floor(
        (currentDate.getTime() - startDate.getTime()) / oneDay );
        dayCounter.innerText = numFormat.format(difference);
});
