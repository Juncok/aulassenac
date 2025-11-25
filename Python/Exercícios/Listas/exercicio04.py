# Dada a lista nums = [1, 2, 3, 4, 5, 6, 7, 8], crie uma nova lista somente com os números ímpares.

nums = [1, 2, 3, 4, 5, 6, 7, 8]
impares = list(filter(lambda x: x % 2 != 0, nums))


print(impares)

