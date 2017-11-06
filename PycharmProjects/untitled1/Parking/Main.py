# -'- coding: utf-8 -'-
from Vehiculo import Vehiculo as vehiculo
from Furgonetas import Furgonetas as furgoneta
from Autobuses import Autobuses as autobus
from Parking import Parking as parking

listaVehiculos = []

#Creo un parking para poder utilizar los métodos
p1 = parking(100, 20)

#Meto los vehiculos en la lista
listaVehiculos.append(vehiculo("BYX5377SE", "TOYOTA", 60))
listaVehiculos.append(furgoneta("CTW2351SE", "BMW", 30, 7))
listaVehiculos.append(autobus("JSK2837SE", "AUDI", 100, 32))
listaVehiculos.append(furgoneta("SSE8787SE", "MERCEDES", 10, 12))

opcion = ''

while opcion != 0:
    print "***************PARKING******************"
    print "Pulse 1 para mostrar datos de los vehículos que hay en el parking"
    print "Pulse 2 para calcular el precio de un solo vehículo"
    print "Pulse 3 para comprobar si hay furgonetas que sobrepasen los 7 metros"
    print "Pulse 4 para ver la recaudación del parking"
    print "*****************************************"
    opcion = input()
    #Listo todos los vehículos que tenemos en el parking
    if opcion == 1:
        print "VEHÍCULOS QUE SE ENCUENTRAN EN EL PARKING: "
        for i in listaVehiculos:
            print i
    #Le pido al usuario que me diga la matrícula de su coche para poder calcular el precio
    elif opcion == 2:
        print "Diga la matrícula de su vehículo"
        matricula = raw_input()
        #Comparo la matrícula que me indica el usuario con las que tenemos en la lista
        if matricula == 'BYX5377SE':
            print p1.calcularPagoUno(listaVehiculos[0])
        elif matricula == "CTW2351SE":
            print p1.calcularPagoUno(listaVehiculos[1])
        elif matricula == "JSK2837SE":
            print p1.calcularPagoUno(listaVehiculos[2])
        elif matricula == "SSE8787SE":
           print p1.calcularPagoUno(listaVehiculos[3])
        else:
            print "No existe un vehículo con esa matricula\n"

    elif opcion == 3:
        #Compruebo si hay algun objeto dentro de la listaVehiculos que este instanciado como furgoneta
        #Si esta instanciado como furgoneta llama al método
        for i in listaVehiculos:
            if isinstance(i, furgoneta):
                if i.getLongitud() > 7:
                   print i.avisarLongitud()
    elif opcion == 4:
        #Llamo al método para calculartodo lo recaudado
        print "EL TOTAL RECAUDADO ES:"
        print p1.calcularCajaTotal(listaVehiculos)
