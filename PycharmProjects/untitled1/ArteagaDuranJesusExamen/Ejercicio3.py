#-'- coding: utf-8 -'-
list = []
i = 0
while i < 5:
    print "Diga 1 número"
    list.append(input())
    i = i + 1

suma = list[0] + list[1] + list[2] + list[3] + list[4]

print "La suma de los números es: " + str(suma)