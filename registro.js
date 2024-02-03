document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    const usuarioExistente = usuariosRegistrados.find(user => user.email === email);
    if (usuarioExistente) {
      alert('Este correo ya está registrado');
      return;
    }
  
    const nuevoUsuario = {
      nombre,
      apellido,
      edad,
      email,
      password
    };
  
    usuariosRegistrados.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
  
    window.location.href = 'desarrollo_web.html';
  });


  