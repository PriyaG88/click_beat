let startTime;
let endTime;

const startTimer = () => {
  startTime = new Date().getSeconds();
  startTime += new Date().getMinutes() * 60;

};

const stopTimer = () => {
  endTime = new Date().getSeconds();
  endTime += new Date().getMinutes() * 60;
};

//in seconds
const findElapsedTime = () => {
  return endTime - startTime;
};
