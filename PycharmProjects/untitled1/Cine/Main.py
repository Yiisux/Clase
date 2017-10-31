# -'- coding: utf-8 -'-
from Cine import Entradas as e




print '***********MENU***********'
print '¿Qué desea hacer?'
print 'Pulse 1 para ver la cartelera'
print 'Pulse 2 para comprar una entrada'
print 'Pulse 3 para mostrar precio total a pagar'
print 'Pulse 4 para mostrar las ganancias del día'
opcion = input()




if opcion == 1:
    print 'La película que se estrena hoy es: La historia interminable'
elif opcion == 2:
    print 'La entrada vale 5 euros'

    print '¿Cúantas entradas quiere?'
    numEntradas = input()
    print '¿Qué fila desea? , tenemos desde la 1 hasta la 15'
    numFila = input()
    print '¿Qué número de butaca quiere?, tenemos desde la 1 hasta la 30'
    numButaca = input()
    c1 = entradaCine(1, 5,numEntradas, numFila, numButaca)

    print 'Precio por entrada: ' + c1.get_precio()
    print 'Número de fila: ' + c1.get_numFila()
    print 'Número de butaca: ' + c1.get_numLocalidad()

