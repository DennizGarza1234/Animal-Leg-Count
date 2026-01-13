Start
  |
  v
Check if input array is empty?
  |-- Yes --> Print "Array is empty" --> Return 0
  |
  v
Initialize count = 0
  |
  v
For each animal in the array:
  |
  v
  Does animal exist in animalLegs table?
     |-- No --> Print "Unknown animal ignored" --> Continue to next animal
     |
     |-- Yes --> Does animalLegs[animal] == 4?
                    |-- Yes --> Increment count
                    |-- No  --> Do nothing
  |
  v
After loop ends --> Return count
  |
  v
End
