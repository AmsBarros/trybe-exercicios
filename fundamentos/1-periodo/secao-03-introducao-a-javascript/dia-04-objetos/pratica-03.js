const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

  function getIndex(obj, index) {
    return Object.values(obj)[index];
  }

  console.log(getIndex(school, 0));

  function sumStudents(object) {
    let sumStudents = 0;
    for (let index = 0; index < object.lessons.length; index += 1) {
        sumStudents += object.lessons[index].students;
    }
    return sumStudents;
  }

  console.log(sumStudents(school));

  function isThere(object, key) {
    for (let index = 0; index < object.lessons.length; index += 1) {
        if (object.lessons[index][key] === undefined) {
            return false;
        }
    }
    return true;
  }

  console.log(isThere(school, 'professor'));

  