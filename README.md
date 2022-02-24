# Description
Library of classes to model videogame stats for NPCs.

# Classes available

There are two kind of stats avaliable: PhysicalStats and MentalStats.
Both work pretty similar, but PhysicalStats accepts generation using a Profile.
There is a ProfileFactory that allows to specify the ProfileKind and the ProfileLevel, the obtained Profile instance can be used in the PhysicalStats.generateFrom method to get the stats instance.