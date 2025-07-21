const precios = {
  seguidores: {
    1000: 290,
    2000: 590,
    3000: 790,
    4000: 1090,
    5000: 1290,
    6000: 1490,
    7000: 1790,
    8000: 2090,
    9000: 2390,
    9000: 2590,
  },
  likes: {
    100: 0.80,
    500: 3.20,
    1000: 6.00
  },
  vistas: {
    500: 0.70,
    1000: 1.20,
    5000: 5.00
  }
};

function actualizarPrecio(tipo) {
  const select = document.getElementById(tipo);
  const cantidad = parseInt(select.value);
  const precio = precios[tipo][cantidad];

  // Mostrar precio actualizado en pesos dominicanos
  document.getElementById(`precio-${tipo}`).textContent = `Precio: RD$${precio.toFixed(2)}`;

  // Generar mensaje de WhatsApp con moneda dominicana
  const mensaje = `Hola, quiero comprar ${cantidad} ${tipo} de Instagram por RD$${precio.toFixed(2)}.`;
  const numero = "18292308837"; // Reemplázalo con tu número real
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  document.getElementById(`btn-${tipo}`).href = link;
}

// Inicializar al cargar
window.onload = function () {
  actualizarPrecio('seguidores');
  actualizarPrecio('likes');
  actualizarPrecio('vistas');
};
