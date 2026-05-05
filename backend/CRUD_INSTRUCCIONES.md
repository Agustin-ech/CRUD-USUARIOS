# CRUD Usuarios

## Cómo usar

1. Abre `frontend/index.html` en el navegador
2. El formulario se encarga de crear, editar y eliminar usuarios
3. Los botones "Editar" y "Eliminar" aparecen al lado de cada usuario en la tabla

## Funciones

- Agregar usuario: Completa el formulario y presiona "Agregar"
- Editar: Presiona "Editar", modifica los datos y presiona "Actualizar"
- Eliminar: Presiona "Eliminar" y confirma

## Notas

- El backend debe estar corriendo en http://localhost:3000
- Los datos se guardan en PostgreSQL

## 🔗 Endpoints Disponibles

```
GET    /users              → Obtiene todos los usuarios
GET    /users/:id          → Obtiene un usuario por ID
POST   /users              → Crea un nuevo usuario
PUT    /users/:id          → Actualiza un usuario
DELETE /users/:id          → Elimina un usuario
```

---

## 📋 Características

✅ Interfaz limpia y profesional  
✅ Validación de formularios  
✅ Mensajes de confirmación  
✅ Carga automática de datos  
✅ Responsive (funciona en móviles)  
✅ CRUD completo (Create, Read, Update, Delete)  
✅ Confirmación antes de eliminar  
✅ Manejo de errores  

---

## 🐛 Solución de Problemas

### Si no aparecen los usuarios:
1. Verifica que el backend está corriendo (`npm run dev`)
2. Comprueba que tienes usuarios en la BD
3. Abre la consola del navegador (F12) para ver errores

### Si hay errores de CORS:
- Ya está configurado, pero asegúrate de que el backend está en `http://localhost:3000`

### Si los datos no se guardan:
- Verifica que la base de datos está corriendo
- Comprueba las variables de entorno (.env)

---

## 📁 Estructura Final

```
frontend/
├── index.html          → Interfaz HTML
├── app.js             → Lógica JavaScript (CRUD)
├── style.css          → Estilos CSS
src/
├── index.js           → Backend (con CORS activado)
├── controllers/       → Lógica de usuarios
├── routes/            → Rutas API
```

¡Listo! Tu CRUD frontend está completamente funcional y conectado al backend. 🎉
