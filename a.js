function addScript(){
  const scriptInput = document.createElement('input');
  scriptInput.type = "text";
  scriptInput.id = "scriptInput";
  document.body.appendChild(scriptInput);
  const script = document.createElement('script');
  script.innerText = scriptInput.value;
  document.body.appendChild(script);
}
addScript();
