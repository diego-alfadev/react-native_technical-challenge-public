# Prueba Técnica Silence

La prueba técnica consiste en implementar en una aplicación existente en la que aparecen 10 motos en un mapa, un sistema básico de reserva de motos.

Ésta aplicación no se comunica con ningún backend, si no que simula su conexión. Usa inyección de depenencias. En la arpeta './src/core' se puede ver la inyección de vehiculos.

**Tareas a realizar:**

- Crear una función para el botón **Reservar**
- Ésta función debe extirpar del array de vehículos la moto reservada, y solo mostrar ésta en el mapa
- El contenido del BottomSheet debe cambiar, hay que poner la hora de inicio de la reserva
- El mismo botón servirá para finalizar la reserva
- Al finalizar la reserva la moto tardará 2 minutos en estar disponible de nuevo en el mapa
- El mapa debe refrescarse cada 30 segundos si no hay una reserva en curso

##  Instalación y arranque del proyecto

1. Instalar dependencias:
   > yarn
2. Arrancar proyecto en el simulador iOS:
   > yarn start -i
