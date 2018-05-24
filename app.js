
var app = new Vue({
  el: '#app',

  data: {
    picture: '',
    name: 'Jane Doe',
    city: 'Melbourne',
    phone: '+61498 765 432',
    email: 'j.doe@hotmail.com',
    hobbies: [
      { text: 'walking'},
      { text: 'reading'},
      { text: 'running'},
    ]
  },
  methods: {
    newHobby: function() {
      let hobby = prompt('Add new hobby')
      this.hobbies.push({
        text: hobby
      });
    },
    fetchRandomUser: function () {
      fetch('https://randomuser.me/api/')
      .then(function(data){
        return(data.json());
      }).then(data => {
        let randomUser = data.results[0]
        this.name = `${randomUser.name.first} ${randomUser.name.last}`
        this.phone = randomUser.phone
        this.email = randomUser.email
        this.city = randomUser.city
        this.picture = randomUser.picture.large

        console.log(randomUser)
      })
    },
    deleteHobby: function(hobby) {
      let index = this.hobbies.indexOf(hobby)
      this.hobbies.splice(index, 1);
    }
  }
})
