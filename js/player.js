var isRecording = false;

function clearShapesLogger() {
  shapesLogger = [];
  isRecording = !isRecording;
  startTimer();
}
