const User = require("./User");

// let g1= User.newAdmin('',23,'M')
// let g2= User.newAdmin('',23,'M')
// console.log(g1);
// console.log(g2);
// let user= g1.newUser("Shreyas",56,'M')
// console.log(user);


// g1.newUser("Shreyas",24,'M')
// g1.newUser("Mary",34,'F')
// console.log(g1.getAllUser());


//  g1.updateUser(2,'Age',20)
//  console.log(g1.getAllUser())

//  g1.deleteUser(2)
//  console.log(g1.getAllUser())

 

let user1= new User()
 
 
 user1.createContact('Rohan')
 user1.createContact('Akshay')
 console.log(user1.getAllContact())
 user1.updateContact(0,'name','Shreyas')
 console.log(user1.getAllContact())
 user1.deleteContact(1)
 console.log(user1.getAllContact())


 user1.createContactinfobyid(0,'phone',34535)
 console.log(user1.getAllContactinfobyid(0));
 user1.createContactinfobyid(0,'address',' abc residence')
 console.log(user1.getAllContactinfobyid(0));

 user1.updateContactinfobyid(0,0,'valueofcontactinfo',5678)
 console.log(user1.getAllContactinfobyid(0));

 user1.updateContactinfobyid(0,1,'typeofcontactinfo','home')
 console.log(user1.getAllContactinfobyid(0));

 user1.deleteContactinfobyid(0,1)
 console.log(user1.getAllContactinfobyid(0));

