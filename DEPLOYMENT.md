# 🚀 Guía de Despliegue - Vercel

## Estado Actual del Proyecto
- ✅ Proyecto Next.js compilado exitosamente
- ✅ Código sincronizado en GitHub: `https://github.com/BR4V3/mariajosefuentes`
- ✅ Rama main lista para deploy
- ✅ Build optimizado para producción

---

## 📋 Pasos para Desplegar en Vercel

### 1. Crear Cuenta en Vercel
```
https://vercel.com → Sign Up → Usa tu GitHub (BR4V3)
```

### 2. Importar Repositorio
- Click en "Add New" → "Project"
- Busca "mariajosefuentes"
- Click "Import"
- Framework: Next.js (automático)
- Click "Deploy"

### 3. Esperar Compilación
- Vercel desplegará automáticamente (~2-3 minutos)
- Obtendrás URL temporal: `mariajosefuentes-xxx.vercel.app`

### 4. Configurar Dominio Personalizado
En Vercel Dashboard:
1. Ve a tu proyecto
2. "Settings" → "Domains"
3. Click "Add Domain"
4. Ingresa tu dominio (ej: `mariajosefuentes.com`)
5. Vercel mostrará registros DNS (CNAME o A)

### 5. Configurar DNS
En tu registrador de dominio (Godaddy, Namecheap, etc.):
1. Ve a tu panel de control de DNS
2. Agrega los registros que Vercel proporciona
3. Guarda cambios

### 6. Esperar Propagación
- Tiempo: 24-48 horas
- Verifica estado: https://vercel.com/dashboard

### 7. Verificar en Vivo
Una vez propagado, accede a tu dominio:
```
https://tudominio.com
```

---

## 🔄 Deploys Automáticos
Después de la configuración inicial:
```bash
git add .
git commit -m "mensaje"
git push origin main
# ✨ Vercel se redeploya automáticamente
```

---

## 🆘 Troubleshooting

| Problema | Solución |
|----------|----------|
| Build falla | Ver logs en "Deployments" en Vercel |
| DNS no propaga | Esperar 24-48h, verificar registros |
| Dominio no conecta | Verificar registros CNAME en DNS |
| Cambios no reflejan | Hard refresh (Cmd+Shift+R) |

---

## ✨ Características Incluidas
- ✅ SSL/HTTPS automático
- ✅ CDN global (rápido en cualquier país)
- ✅ Optimización automática de imágenes
- ✅ Caching inteligente
- ✅ Analytics de uso
- ✅ Previews en PRs

---

**Dominio personalizado**: _[Ingresa aquí tu dominio]_

Última actualización: 26 de abril de 2026
