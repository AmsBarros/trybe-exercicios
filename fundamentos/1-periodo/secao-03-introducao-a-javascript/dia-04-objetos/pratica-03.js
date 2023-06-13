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
  let teste = getIndex(school,0);
  console.log(teste); 

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

  const changeKey = (obj, course, value) => {
    // Encontra o elemento que o course é igual a Python
    let findCourse;
    for (let index = 0; index < obj.lessons.length; index += 1) {
      let element = obj.lessons[index];
      if (element.course === course) {
        findCourse = element;
        break;
      }
    }
  
    // Condição para exibir o resultado. Caso o findCourse seja undefined, significa que o curso não foi encontrado.
    if (findCourse !== undefined) {
      findCourse.shift = value;
      return findCourse;
    } else {
      return 'Curso não encontrado.';
    }
  };
  
  console.log(changeKey(school, 'Python', 'Noite'));