# -'- coding: utf-8 -'-
from Vehiculo import Vehiculo
class Autobuses(Vehiculo):
    def __init__(self, matricula, marca, tiempo, numAsientos):
        super(Autobuses, self).__init__(matricula, marca, tiempo)
        self.__numAsientos = numAsientos
    def getNumAsientos(self):
        return self.__numAsientos
    def setNumAsientos(self, numAsientos):
        self.__numAsientos = numAsientos


    def calcularPrecio(self):
       #Sumo al precio generico el impuesto de Autobuses
        return self.getNumAsientos() * 0.25 + super(Autobuses, self).calcularPrecio()


    def __str__(self):
        return super(Autobuses, self).__str__() + "\nNÚMERO DE ASIENTOS: %s" % (self.getNumAsientos())