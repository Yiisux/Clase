# -'- coding: utf-8 -'-
from Vehiculo import Vehiculo as vehiculo
from Furgonetas import Furgonetas as furgoneta
from Autobuses import Autobuses as autobus
class Parking(object):
    def __init__(self, plazasDisponibles, plazasLibres):
        self.__plazasDisponibles = plazasDisponibles
        self.__plazasLibres = plazasLibres

    def get_plazasDisponibles(self):
        return self.__plazasDisponibles

    def set_plazasDisponibles(self, plazasDisponibles):
        self.__plazasDisponibles = plazasDisponibles

    def get_plazasLibres(self):
        return self.__plazasLibres

    def calcularPagoUno(self, vehiculo):
        return vehiculo.calcularPrecio()


    def calcularCajaTotal(self, listaVehiculos):
        cajaTotal = 0
        for i in listaVehiculos:
            #llamo al método calcularPagoUno de esta clase y le paso el vehiculo que estoy recorriendo en el for
            cajaTotal = self.calcularPagoUno(i) + cajaTotal
        return cajaTotal

