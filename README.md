# Descripción

## Correr en dev

1. Clone el repositorio.
2. Crear una copia de `.env.example` y renombrarla a ` .env` y cambiar las variables de entorno.
3. Instalar las dependencias con `npm install`.
4. Levantar la base de datos con `docker-compose up -d`.
5. Correr las migraciones con `npx prisma migrate dev`.
6. Correr el servidor con `npm run dev`.

## Correr en Producción
