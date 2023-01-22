let studentList = []

const handleFile = (event) => {
  const file = event.target.files[0]
}

const onSubmit = (event) => {
  event.preventDefault()
  const name = document.getElementById('name').value
  const photo = document.getElementById('photo').files[0]
  addPost(name, photo)
}

const addPost = (name, photo) => {
  studentList.push({name, photo})
  StudentList()
}

const onClick = (event) => {
  if (event.target.tagName === 'BUTTON') {
    const index = event.target.dataset.index
    studentList.splice(index, 1)
    StudentList()
  }
}

const StudentList = () => {
    const studentListEl = document.getElementById('student-list');
    studentListEl.innerHTML = '';
    studentList.forEach((student, index) => {
      const studentEl = document.createElement('li');
      const studentImg = document.createElement('img');
      studentImg.src = URL.createObjectURL(student.photo);
      studentImg.height = "100"; // ces deux lignes servent à controler les dimensions de l'image.
      studentImg.width = "100"; // 
      studentEl.innerHTML += ` <button data-index="${index}" onclick="onClick(event)">Supprimer</button> ${student.name}` ;
      studentEl.appendChild(studentImg);
      studentListEl.appendChild(studentEl);
    });
  }
