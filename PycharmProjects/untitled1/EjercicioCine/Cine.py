# -'- coding: utf-8 -'-
class entradaCine(object):

    def __init__(self ,id, precio, entradas, numFila, numLocalidad):
        self.__id = id
        self.__precio = precio
        self.__entradas = entradas
        self.__numFila = numFila
        self.numLocalidad = numLocalidad

    def get_id(self):
        return self.__id

    def set_id(self, id):
        self.__id = id

    def get_precio(self):
        return self.__precio

    def set_precio(self, precio):
        self.__precio = precio

    def get_entradas(self):
        return self.__entradas

    def set_entradas(self, entradas):
        self.__entradas = entradas

    def get_numFila(self):
        return self.__numFila

    def set_numFila(self, numFila):
        self.__numFila = numFila

    def get_numLocalidad(self):
        return self.__numLocalidad

    def set_numlocalidad(self, numLocalidad):
        self.__numLocalidad = numLocalidad

    def calcularEntradas(self, n):
        self.__entradas = n


    def __str__(self):
        return ' %s %s %s %s %s' % (self.get_id(), self.get_precio(), self.get_entradas(), self.get_numFila(), self.get_numLocalidad())


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
    print 'Su entrada es : '
    print c1

