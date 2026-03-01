# Skill: Shadcn/UI Component Usage

## Propósito
Asegurar la reutilización y consistencia de la interfaz de usuario utilizando la biblioteca de componentes Shadcn/UI ya instalada en el proyecto.

## Reglas Fundamentales

1.  **Prioriza la Reutilización:** Antes de escribir elementos HTML nativos (como `<button>`, `<input>`, `<div>` para tarjetas), el agente DEBE verificar si existe un componente equivalente en el directorio `src/components/ui/`.
    * *Incorrecto:* `<button className="px-4 py-2 bg-primary...">Enviar</button>`
    * *Correcto:* `<Button>Enviar</Button>`

2.  **Importaciones con Alias:** Utiliza siempre el alias `@/` para importar componentes de UI para mantener las rutas limpias.
    * *Ejemplo:* `import { Button } from "@/components/ui/button";`

3.  **Personalización vía `className` y `cn()`:**
    * Los componentes de Shadcn/UI están diseñados para aceptar una prop `className` adicional.
    * Utiliza la utilidad `cn` (comúnmente ubicada en `@/lib/utils`) para fusionar clases de Tailwind condicionalmente o sobrescribir estilos por defecto de forma segura.

4.  **Variantes:** Utiliza las props de variante definidas en el componente (ej. `variant="secondary"`, `size="sm"`) en lugar de intentar recrear esos estilos manualmente con clases de Tailwind.

## Ejemplo de Código Maestro

```tsx
import { useState } from "react";
// Importación correcta usando alias
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function LoginCard({ className }: { className?: string }) {
  const [email, setEmail] = useState("");

  return (
    // Uso de cn() para mezclar clases externas con las internas
    <Card className={cn("w-[350px] border-border/50", className)}>
      <CardHeader>
        <CardTitle>Iniciar Sesión</CardTitle>
        <CardDescription>Accede a tu cuenta de Discord Devfolio.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
             {/* Uso de componente Input existente */}
            <Input
              id="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* Uso de variantes en lugar de clases manuales */}
        <Button variant="ghost">Cancelar</Button>
        <Button>Entrar</Button>
      </CardFooter>
    </Card>
  );
}