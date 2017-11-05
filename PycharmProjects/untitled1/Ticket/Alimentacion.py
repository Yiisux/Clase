# -'- coding: utf-8 -'-
from Producto import Producto
class Alimentacion(Producto):
    def __init__(self, id, nombre, precio, fechaCaducidad):
        super(Alimentacion,self).__init__(id, nombre, precio)
        self.__fechaCaducidad = fechaCaducidad

    def get_fechaCaducidad(self):
        return self.__fechaCaducidad
    def set_fechaCaducidad(self, fechaCaducidad):
        self.__fechaCaducidad = fechaCaducidad

    def __str__(self):
        return super(Alimentacion, self).__str__()


    #Me gustaria pasarle al método una lista de productos pero no encuentro la manera
    def comprobarCaducidad(self, p):
        if self.get_fechaCaducidad() < 2:
            print "Le queda menos de 2 días para caducar"




