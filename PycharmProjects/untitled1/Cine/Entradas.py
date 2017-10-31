# -'- coding: utf-8 -'-
class entradaCine(object):

    def __init__(self, id, entradas, numFila, numLocalidad):
        self.__id = id
        self.__precio = 5
        self.__entradas = entradas
        self.__numFila = numFila
        self.__numLocalidad = numLocalidad

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

    def set_numlocalidad(self, numlocalidad):
        self.__numlocalidad = numlocalidad



    def __str__(self):
        return ' %s %s %s %s %s' % (self.get_id(), self.get_precio(), self.get_entradas(), self.get_numFila(), self.get_numLocalidad())
