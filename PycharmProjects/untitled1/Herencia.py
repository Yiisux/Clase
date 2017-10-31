# -'- coding: utf-8 -'-
class Persona(object):
    def __init__(self, nombre, apellidos):
        self.__nombre = nombre
        self.__apellidos = apellidos

    def get_nombre(self):
        return self.__nombre

    def set_nombre(self, nombre):
        self.__nombre = nombre

    def get_apellidos(self):
        return self.__apellidos

    def set_apellidos(self, apellidos):
        self.__apellidos = apellidos

    def __str__(self):
        return ' %s %s' % (self.get_nombre(), self.get_apellidos())


class Trabajador(Persona):
    def __init__(self, sueldo, nombre, apellidos):
        super(Trabajador, self).__init__(nombre, apellidos)
        self.__sueldo = sueldo

    def get_sueldo(self):
        return self.__sueldo

    def set_sueldo(self, sueldo):
        self.__sueldo = sueldo

    def __str__(self):
        return self.__sueldo + super(Trabajador, self).__str__()

    def __cmp__(self, other):
        return self.__sueldo - other.__sueldo


t = Trabajador(10000 , 'Jesús', 'Arteaga')
t2 = Trabajador(80000, 'Pedro', 'Picapiedra')



if t > t2:
    print 'Jésus tiene mayor sueldo'
else:
    print 'Pedro tiene mayor sueldo'