
addEventListener('load', () => {
  document.body.classList.add('loaded')
})
let response =  fetch("https://randomuser.me/api/?results=10")
.then((response) => {
   return  response.json();
})
.then((data)=> {
    console.log(data);
    let list = document.querySelector('#infos')
    let users =data.results;
let key;
for (key in users){
  list.innerHTML +=`
  <div class="cards">
  <div class="card-img">
<img src=" ${users[key].picture.large}">
    </div>

    <div class="card-info" >
  <h5>Имя: ${users[key].name.first} Фамилия:${users[key].name.last}</h5>
  <h5>Пол: ${users[key].gender}</h5>
  <h5>Cтрана ${users[key].location.country}</h5>
  <h5>Город-${users[key].location.city} Ул.${users[key].location.street.name}</h5> 
  <h5>Дом:${users[key].location.street.number}</h5>
  <h5>email ${users[key].email}</h5>
  <h5>Дата рождения ${users[key].dob.date} Возраст: ${users[key].dob.age}</h5>
  <h5>Телефон ${users[key].cell}</h5>
  
    </div>
    </div>
`

}
})
