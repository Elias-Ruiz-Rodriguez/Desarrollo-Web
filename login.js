document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const usuarioEmail = document.getElementById('usuarioEmail').value;
  const password = document.getElementById('password').value;

  const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

  const usuarioEncontrado = usuariosRegistrados.find(user => (user.usuario === usuarioEmail || user.email === usuarioEmail) && user.password === password);

  if (usuarioEncontrado) {
    alert('Inicio de sesión exitoso');

    window.location.href = 'pagina_principal.html';
  } else {
    alert('Credenciales incorrectas. Inténtalo de nuevo.');
  }
});
