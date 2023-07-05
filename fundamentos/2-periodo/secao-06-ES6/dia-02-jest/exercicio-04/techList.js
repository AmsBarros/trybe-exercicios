const techList = (technologies, name) => {
    try {
        return sortedObjects(technologies, name)
    } catch (error) {
        return error.message;
    }
}

const sortedObjects = (technologies, name) => {
    if (technologies.length === 0) {
        throw new Error('Vazio!');
    }

    const newArray = [];
    technologies.sort();
    for (let i = 0; i < technologies.length; i += 1) {
        const newObject = {
            name: name,
            tech: technologies[i]
        };
        newArray.push(newObject);
    }
    return newArray;
}

module.exports = techList;

/* GABARITO

const techList = (arrayTechnologies, name) => {

  const sortedArray = arrayTechnologies.sort();
  const technologyList = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    technologyList.push({
      tech: sortedArray[index],
      name,
    });
  }

  return technologyList;
}; */