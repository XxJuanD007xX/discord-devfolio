# Skill: Discord UI Design System

## Propósito
Asegurar que todos los nuevos componentes creados por la IA sigan estrictamente la estética de la plataforma Discord.

## Reglas de Estilo
1. **Paleta de Colores:**
   - Fondo principal: `bg-[#313338]`
   - Barra lateral: `bg-[#2b2d31]`
   - Hover de elementos: `bg-[#3f4147]`
   - Texto principal: `text-[#dbdee1]`
   - Texto secundario: `text-[#949ba4]`
   - Color de acento (Blurple): `bg-[#5865f2]`

2. **Bordes y Redondeado:**
   - Los botones y elementos de lista deben usar `rounded-md` (4px a 8px).
   - El avatar debe cambiar de `rounded-[24px]` a `rounded-[16px]` en hover (estilo clásico de Discord).

3. **Interactividad:**
   - Todos los elementos interactivos deben tener una transición suave: `transition-all duration-200`.
   - Los iconos deben cambiar de color de `#949ba4` a `#dbdee1` al pasar el mouse.

## Ejemplo de Código Preferido (React + Tailwind)
```tsx
const DiscordButton = ({ children }) => {
  return (
    <button className="bg-[#5865f2] text-white px-4 py-2 rounded-md hover:bg-[#4752c4] transition-colors duration-200">
      {children}
    </button>
  );
};