# make shelters and Puppies

s1 = Shelter.create(name: 'Roberts Shelter', location: 'NYC')
s2 = Shelter.create(name: 'Alis Shelter', location: 'NYC')
s3 = Shelter.create(name: 'Veras Shelter', location: 'Denver')
s4 = Shelter.create(name: 'Joshuas Shelter', location: 'NYC')

Puppy.create(name: 'Kim', breed: 'Pinscher', shelter: s3)
Puppy.create(name: 'Rambo', breed: 'Bischonpoo', shelter_id: 1)
Puppy.create(name: 'Clifford', breed: 'Big Red Dog', shelter_id: 4)
Puppy.create(name: 'Scooby Doo', breed: 'Great Dane', shelter_id: 2)
Puppy.create(name: 'Minion', breed: 'Chihuahua', shelter_id: 4)
Puppy.create(name: 'Josh', breed: 'Poodle', shelter_id: 3)
Puppy.create(name: 'Hazel', breed: 'American Bulldog', shelter_id: 1)
