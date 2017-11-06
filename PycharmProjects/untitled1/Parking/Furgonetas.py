# -'- coding: utf-8 -'-
from Vehiculo import Vehiculo
class Furgonetas(Vehiculo):
    def __init__(self, matricula, marca, tiempo, longitud):
        super(Furgonetas, self).__init__(matricula, marca, tiempo)
        self.__longitud = longitud

    def getLongitud(self):
        return self.__longitud
    def setLongitud(self, longitud):
        self.__longitud = longitud

#
    def calcularPrecio(self):
        # Sumo al precio generico el impuesto de Furgonetas
        return self.__longitud * 0.20 + super(Furgonetas, self).calcularPrecio()

    #Compruebo fuera en el main si una furgoneta es mayor a 7 metros y si lo es llamo a este método
    def avisarLongitud(self):
         return "La furgoneta con mátricula: %s sobrepasa los 7 metros\n" % (self.getMatricula())


    def __str__(self):
        return super(Furgonetas, self).__str__() + "\nLONGITUD: %s" % (self.getLongitud())