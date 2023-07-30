const form = document.getElementById('imcForm');
const resultDiv = document.getElementById('result');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío del formulario
  
    // Obtener los valores del formulario
    const id = document.getElementById('id').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    // Calcular el IMC
    const imc = weight / (height * height);
  
    // Mostrar el resultado en el div 'result'
    resultDiv.innerHTML = `El IMC de ${id} es: ${imc.toFixed(2)}`;
  });
  