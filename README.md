# Descripción

## Correr en dev

1. Clone el repositorio.

2. Levantar la base de datos con `docker-compose up -d`.

3. Crear una copia de `.env.example` y renombrarla a ` .env` y cambiar las variables de entorno.
4. Reemplazar las variables de entorno en el archivo `.env` con las correspondientes.
5. Instalar las dependencias con `npm install`.
6. Correr el servidor con `npm run dev`.
7. Correr las migraciones con `npx prisma migrate dev`.
8. Correr los seeders con `npx prisma generate`.
9. Ejecutar el SEED para -> [crear la base de datos local <- (localhost:3000/api/seed)]

## Nota: Usuario por defecto

**Usuario:** test1@google.com
**Password:** 123456

## Correr en Producción
