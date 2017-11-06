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

