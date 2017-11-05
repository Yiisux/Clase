class Producto(object):
    def __init__(self, id, nombre, precio):
        self.__id = id
        self.__nombre = nombre
        self.__precio = precio

    def get_nombre(self):
        return self.__nombre

    def set_nombre(self, nombre):
        self.__nombre = nombre

    def get_id(self):
        return self.__id

    def set_id(self, id):
        self.__id = id

    def get_precio(self):
        return self.__precio

    def set_precio(self, precio):
        self.__precio = precio

    def __str__(self):
        return 'ID: %s NOMBRE DEL PRODUCTO: %s PRECIO DEL PRODUCTO: %s' % (self.get_id(), self.get_nombre(), self.get_precio())