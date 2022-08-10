Aquí añadimos comentarios interesantes del Proyecto.

[Pepojmc] 09.08.2022
    
    [001] He creado el main.css con un :root {} de variables de todos los colores del proyecto.
        Con eso podemos cambiar el color de TODO el proyecto sin tener que tocar código,
        ni tener que cambiar uno por uno el color de todos los elementos.
        Si queréis, hacer el Link del css a vuestra pagina.
        Usar: var(--AquíNombreVariable) para asignar el color.
        
        Ejemplo:
            
            body {
                background: var(--light-color);
                }

            /* En este caso el color del main asignado al --light-color sería el #F4F6FC */

    [002] En cuando al diseño responsive y tamaños, el standard de los navegadores es de 16px = 1em.
        Este valor de 16px viene como referencia de font-size: 16px; en el html. Por lo tanto entiendo
        que si aplicamos el font-size: 16px; en el style.css body {}, a partir de ahí es calcular todo
        lo que sean pixeles y poner el valor correspondiente en em, así tendremos todo responsive.
        Entiendo, y corregirme si me equivoco, que sirve para todo tipo de elementos, textos, imagenes...

            Dejo una calculadora para facilitar el trabajo: https://nekocalc.com/es/px-a-em-conversor
