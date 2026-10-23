FROM node:20-slim

# Instalamos git
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Truco de bypass de caché para forzar el git clone cuando actualices
ENV CACHE_BYPASS=20261023v1.0.0

# Clonamos tu repositorio de Muebles Hábitat
RUN rm -rf ./* && git clone https://github.com/juniorguira2012/web-muebleshabitat.git .

# 1. Entramos a la carpeta frontend e instalamos dependencias
WORKDIR /app/frontend
RUN npm install

# 2. Compilamos con Vite (Genera la carpeta /app/frontend/dist)
RUN npm run build

# 3. Instalamos 'serve' globalmente para servir la carpeta estática dist en el puerto 3000
RUN npm install -g serve

EXPOSE 3000

# 4. Servimos la SPA en el puerto 3000 redirigiendo rutas al index.html
CMD ["serve", "-s", "dist", "-l", "3000"]