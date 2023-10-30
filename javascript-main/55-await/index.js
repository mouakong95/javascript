// await = makes an async function wait for a promise

async function loadFile() {

  let fileLoaded = false;

  if(fileLoaded) {
    // if true, then resolve this over to promise.then
    return "file loaded";
  }
  else {
    throw "file not loaded.";
  }
}

async function startProcess() {
  try {
    let message =  await loadFile();
    console.log(message);
  }
  catch(error) {
    console.log(error);
  }
}

startProcess();

//https://www.youtube.com/watch?v=8dWL3wF_OMw 4:46