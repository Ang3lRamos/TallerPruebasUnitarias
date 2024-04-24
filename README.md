Taller Pruebas Unitarias
Este proyecto es parte de un taller de pruebas unitarias donde se realizan pruebas a varios archivos de código fuente ubicados en la carpeta src.

Pasos para compilar el proyecto
Clonar el repositorio base:
Realiza un fork del repositorio base en tu cuenta de GitHub.
Clona el repositorio a tu máquina local utilizando el comando git clone <URL_DEL_REPOSITORIO_CLONADO>.
Configuración del proyecto:
Añade un archivo .gitignore para ignorar archivos y carpetas que no deben ser versionados, como node_modules y archivos de configuración locales.
Asegúrate de tener las dependencias necesarias para ejecutar las pruebas unitarias. Esto podría incluir bibliotecas como Jest, Mocha, o cualquier otra que estés utilizando.
Lanzar las pruebas unitarias
Para ejecutar las pruebas unitarias, sigue estos pasos:

Navega hasta el directorio del proyecto en tu terminal.
Ejecuta el comando npm test.
Explicación de las pruebas unitarias
Archivo array.ts
Prueba 1: Verifica que un array contenga el valor 'value1'.
Prueba 2: Verifica que un array contenga el valor 'value3'.
Prueba 3: Verifica que un array no contenga el valor 'UNAC'.
Archivo div.ts
Prueba 1: Verifica que la función div devuelva el resultado correcto para una división válida.
Prueba 2: Verifica que la función div lance un error cuando se divide por cero.
Archivo multi.ts
Prueba 1: Verifica que la constante n sea null.
Prueba 2: Verifica que la constante n esté definida (no sea undefined).
Prueba 3: Verifica que la constante number sea igual a 0.
Prueba 4: Verifica que la constante notTrue sea false.
Prueba 5: Verifica que la constante notFalse sea true.
Archivo string.ts
Prueba 1: Verifica que la constante anything contenga la cadena "UN".
Prueba 2: Verifica que la constante anything no contenga la letra "P".
Prueba 3: Verifica que la constante anything1 contenga la letra "n".
Archivo sum.ts
Prueba 1: Verifica que la suma de dos valores sea mayor que 10.
Prueba 2: Verifica que la suma de dos valores sea mayor o igual a 20.
Prueba 3: Verifica que la suma de dos valores sea menor o igual a 8.
Prueba 4: Verifica que la suma de dos valores sea menor que 12.
Prueba 5: Verifica que la suma de dos valores sea igual a 9.
Git
Realiza al menos 4 commits y 3 pull requests para organizar el trabajo en el repositorio.
Mantén un buen flujo de trabajo, solicitando revisiones y haciendo fusiones de ramas de manera adecuada.


Angel Ramos
Jamir Patiño
