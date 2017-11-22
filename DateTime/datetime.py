# -*- coding: utf-8 -*-

from datetime import date, time, datetime, timedelta

diaCompleto = date.today()
# Obtenemos la fecha local actual con el siguiente formato 2014-09-27
print"Día completo: ", diaCompleto

# Obtenemos un número entero con el día del mes. Ejemplo: 27
print"Día del mes: ", diaCompleto.day

# Obtenemos un número entero con el mes del año. Ejemplo: 9 corresponde a septiembre
print"Mes en el que estamos: ", diaCompleto.month

#  Obtenemos un número de 4 dígitos con el año actual: Ejemplo: 2014
print"Año actual: ", diaCompleto.year

# Obtenemos un número entero con el día de la semana: 0 = lunes, 1 = martes, 2# = miércoles, 3 = jueves, 4 = viernes, 5 = sábado y 6 = domingo
print"Día de la semana en el que estamos: ", diaCompleto.weekday()

tiempoActual = datetime.now()  # Obtiene fecha actual incluyendo hora , minutos, segundos y microsegundos
print"Fecha y Hora:", tiempoActual  # Muestra fecha, hora, minutos , segundos y microsegundos
print"Fecha y Hora UTC:",tiempoActual.utcnow()  # Muestra fecha, hora, minutos, segundos y microsegundos en formato UTC
print"Día:",tiempoActual.day  # Muestra el día actual
print"Mes:",tiempoActual.month  # Muestra el mes actual
print"Año:",tiempoActual.year  # Muestra el año actual
print"Hora:", tiempoActual.hour  # Muestra la hora actual
print"Minutos:",tiempoActual.minute  # Muestra el minuto actual
print"Segundos:", tiempoActual.second  # Muestra el segundo actual
print"Microsegundos:",tiempoActual.microsecond  # Muestra microsegundo

#Establecemos la hora 1
hora1 = time(12, 30, 35)
print"Hora 1: ", hora1
#Establecemos la hora 2

hora2 = time(14, 33, 45)
print"Hora 2: ", hora2

#Simplemente comparando si un tiempo es mayor, menor o igual a otro nos lo indicará con un True o False
print hora1 > hora2

now = datetime.now()
tiempoActualConTime = time(now.hour, now.minute, now.second)
print tiempoActualConTime

#De la fecha actual de hoy vamos a sacar solo la hora, el minuto y los segundos
horaActual = datetime.now().strftime("%H:%M:%S")

print horaActual

#De la fecha actual de hoy vamos a sacar la semana en la que estamos
semanaActual = datetime.now().strftime("%U")

print semanaActual

#De la fecha actual de hoy vamos a sacar la fecha actual sin hora pero con el año en formato corto
zonaHoraria = datetime.now().strftime("%d/%m/%y")

print zonaHoraria

#Ahora una hora corta indicando si es AM o PM
horaCorta = datetime.now().strftime("%I:%M:%S %p")

print horaCorta

#Sumamos a la fecha actual 2 días
print"Fecha dentro de 2 días: ", date.today() + timedelta(days=2)

#Sumamos a la fecha actual 2 horas
print"Fecha dentro de 2 horas: ", datetime.now() + timedelta(hours=2)

#restamos a la fecha actual 10 días , 5 horas y 20 minutos
print"Fecha hace  10 días y 5 horas y 20 minutos: ", datetime.now() - timedelta(days=10, hours=5, minutes=20)