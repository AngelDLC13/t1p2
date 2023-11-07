new Vue({
    el: '#app',
    components: {
      'login-form': {
        template: `
          <div class="wrapper">
            <form action="" class="form">
              <h1 class="title">Inicio</h1>
              <div class="inp">
                <input type="text" name="" id="" class="input" placeholder="Usuario">
                <i class="fa-solid fa-user"></i>
              </div>
              <div class="inp">
                <input type="password" name="" id="" class="input" placeholder="Contraseña">
                <i class="fa-solid fa-lock"></i>
              </div>
              <button class="submit" id="loginButton">Iniciar Sesión</button>
              <p class="footer">No tienes cuenta? <a href="#" class="link">Registrarse</a></p>
            </form>
            <div></div>
            <div class="banner">
              <h1 class="wel_text">BIENVENIDO:)<br/></h1>
            </div>
          </div>
        `
      }
    }
  });
  