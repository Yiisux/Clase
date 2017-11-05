# -'- coding: utf-8 -'-
from Producto import Producto as p
from Alimentacion import Alimentacion as a


#Aunque el ejercicio solo pedía que imprimiéramos un ticket y en el se listaran todos los productos he decidido hacerlo
#un poco diferente pudiéndole dar al usuario la opción de elegir esos productos y así practicar un poco más.

precioTotal = 0
productos = []
carrito = []

productos.append(p(1,'Portatil', 500))
productos.append(a(2, 'Galletas', 2.5, 4))
productos.append(p(3, 'Horno', 250))
productos.append(a(4, 'Tarta', 10, 12))
productos.append(p(5, 'Cama', 1200))
productos.append(a(6 , 'Colacao', 2.75, 1))






opcion = 1 #Lo pongo con el valor 1 para que entre al bucle del cual no sale hasta que no marquemos el 0
while opcion != 0:
    print "\n*************EL CORTE ESPAÑOL**************"
    print "Pulse 1 para comprar los productos"
    print "Pulse 2 para comprobar si esta caducado o no el producto"
    print "Pulse 3 para imprimir su ticket de compra"
    opcion = input()
    #Primero muestro todos los productos que tenemos
    if opcion == 1:
        for i in productos:
            print i

        print "Diga el ID del producto que quiere"
        print "Pulse 0 para dejar de comprar"
        #Le digo al cliente que marque los IDS de los productos que quiere comprar, en caso de terminar o no querer comprar
        #ningún producto tiene que marcar 0
        compra = 1
        while compra != 0:
            compra = input()
            #Agrego al carrito del cliente el producto que me indica
            if compra == 1:
                carrito.append(productos[0])
            elif compra == 2:
                carrito.append((productos[1]))
            elif compra == 3:
                carrito.append((productos[2]))
            elif compra == 4:
                carrito.append(productos[3])
            elif compra == 5:
                carrito.append(productos[4])
            elif compra == 6:
                carrito.append(productos[5])

        print "Mi carrito: "
        print "*************"
        for e in carrito:
            #Me gustaria sumar el precio de todos pero no se como hacerlo, tenia pensado hacerlo así:
            # precioTotal = carrito[e].getPrecio + precioTotal
            print e
    elif opcion == 2:
        #Esta parte no me sale ya que quiero poder pasarle al método el carrito del cliente pero no se como
        #for i in carrito:
            #No me funciona:
            #print carrito[i].getNombre
        print "Estamos intentando solucionar el problema, lo sentimos"



    elif opcion == 3:
        # No se como coger el precio de todos los productos y sumarlos ya que no me reconoce carrito[i].getPrecio
        print "**************************TICKET******************************"
        print "|Nº DE CAJA: 4                       LE ATIENDE: JESUS ARTEAGA|"
        print "|FECHA: 2/2/2017      HORA: 12:45                             |"
        print "***************************************************************"
        for i in carrito:
            print i
        print "***************************************************************"
        print "                                           TOTAL A PAGAR:     |"
        print "***************************************************************"












