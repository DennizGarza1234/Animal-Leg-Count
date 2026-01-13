const animalLegs = {
  lion: 4,
  deer: 4,
  elephant: 4,
  horse: 4,
  dog: 4,
  cat: 4,
  monkey: 2,
  parrot: 2,
  ostrich: 2,
  snake: 0,
  worm: 0,
  spider: 8,
  ant: 6,
  centipede: 100
};

function countFourLeggedAnimals(animals) {
    if (animals.length === 0) {
        console.log("The array is empty. Returning 0.");
        return 0;
    }

    let count = 0;

    for (let animal of animals) {
        if (animalLegs[animal] === undefined) {
            console.log(`Unknown animal ignored: ${animal}`);
            continue;
        }
        if (animalLegs[animal] === 4) {
            count++;
        }
    }

    return count;
}

module.exports = { countFourLeggedAnimals };
