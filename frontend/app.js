fetch('http://192.168.100.70:3000/dados')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
