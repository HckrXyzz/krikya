document.addEventListener('DOMContentLoaded', function() {
  // Create and append the input field
  const scriptInput = document.createElement('input');
  scriptInput.type = "text";
  scriptInput.id = "scriptInput";
  document.body.appendChild(scriptInput);

  // Create and append the button
  const button = document.createElement('button');
  button.innerText = "Add Script";
  button.onclick = function() {
    const scriptInput = document.getElementById('scriptInput');
    if (scriptInput) {
      const script = document.createElement('script');
      script.innerText = scriptInput.value;
      document.body.appendChild(script);
    }
  };
  document.body.appendChild(button);
});
