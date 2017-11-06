# -'- coding: utf-8 -'-
class Vehiculo(object):
    def __init__(self, matricula, marca, tiempo):
        self.__matricula = matricula
        self.__marca = marca
        self.__tiempo = tiempo

    def getMatricula(self):
        return self.__matricula
    def setMatricula(self, matricula):
        self.__matricula = matricula
    def getMarca(self):
        return self.__marca
    def setMarca(self, marca):
        self.__marca = marca
    def getTiempo(self):
        return self.__tiempo
    def setTiempo(self, tiempo):
        self.__tiempo = tiempo

    def calcularPrecio(self):
        precioTotal = self.__tiempo * 0.04