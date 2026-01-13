# Animal-Leg-Count

## Project Overview
This project analyzes an array of animals and counts how many of them have exactly four legs. It simulates a coding interview scenario where a quick, efficient solution is required. The function `countFourLeggedAnimals` is implemented in JavaScript and tested using Jest.

---

## Clarifying Questions

1. Are all animal names guaranteed to be lowercase and spelled exactly as listed?
   - Yes. All animal names will be lowercase and spelled exactly as listed if they exist in the code.

2. What should happen if the array is empty?
   - If the array is empty, the function returns `0` and may log an informational message.

3. What if an animal is not in the provided list (e.g., 'cow' or 'dragon')?
   - Unknown animals are ignored and may be optionally logged.

4. Should we ignore unknown animals or treat them as zero-leg animals?
   - Unknown animals will be ignored since their leg count is not defined.

5. Is the input always an array of strings, or do we need to validate input types?
   - The input will always be an array of strings.
  
---

## Flowchart

The function works as follows:

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
|-- No --> Print "Unknown animal ignored" --> Continue
|
|-- Yes --> Does animalLegs[animal] == 4?
|-- Yes --> Increment count
|-- No --> Do nothing
|
v
After loop ends --> Return count
|
v
End


> See `diagrams/flowchart.md` for a textual representation.

---

## Example Usage

```javascript
const { countFourLeggedAnimals } = require('./src/countFourLeggedAnimals');

const animals = ['lion', 'monkey', 'deer', 'snake', 'elephant'];
console.log(countFourLeggedAnimals(animals)); // Output: 3
```
---

## Unit Tests
- Written using Jest
- Includes 3 normal test cases and 3 edge cases:
Normal Cases:
- ['lion', 'monkey', 'deer', 'snake', 'elephant'] → 3
- ['frog', 'horse', 'spider', 'ant'] → 1
- ['dog', 'cat', 'lion'] → 3

Edge Cases:
- [] (empty array) → 0
- ['cow', 'dragon'] (unknown animals) → 0
- ['lion', 'dragon', 'cow', 'cat'] → 2
```Bash
npm test
```
---

---

## Youtube Link
https://youtu.be/B3rFaEvGQfg 

## Time and Space Complexity

- **Time Complexity:** O(n), where n is the number of animals in the input array. We loop through each animal once, and lookups in the `animalLegs` object are O(1).
- **Space Complexity:** O(1), constant space. Only a single counter variable is used, and the `animalLegs` table is fixed in size.
