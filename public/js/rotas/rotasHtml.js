function handleRouteClick(route) {
    return function(event) {
      event.preventDefault(); 
  
      fetch(route)
        .then(function(response) {
          if (response.ok) {
        
            window.location.href = route;
          } else {
            console.error("Erro ao chamar a rota:", route);
          }
        })
        .catch(function(error) {
          console.error("Erro ao chamar a rota:", route, error);
        });
    };
  }
  
  document.getElementById("home-link").addEventListener("click", handleRouteClick("/home"));
  document.getElementById("sobre").addEventListener("click", handleRouteClick("/sobre"));
  document.getElementById("estimate").addEventListener("click", handleRouteClick("/estimate"));
  document.getElementById("comun-visual").addEventListener("click", handleRouteClick("/comun-visual"));
  document.getElementById("escolas").addEventListener("click", handleRouteClick("/escolas"));
  document.getElementById("hospitais").addEventListener("click", handleRouteClick("/hospitais"));
  document.getElementById("empresas").addEventListener("click", handleRouteClick("/empresas"));
  