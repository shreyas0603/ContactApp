const Contact = require("./Contact.js")


class User {

    static allUser = []
    static id = 0
    
    #isAdmin
    
   
    constructor(name, age, gender, isAdmin) {
        this.contact = []
        this.name = name
        this.age = age
        this.gender = gender
        this.#isAdmin = isAdmin
        this.id = User.id++

    }
  
    //admin functionality
    static newAdmin(name, age, gender) {
        try {
            if (typeof name != 'string') {
                throw new Error('Enter valid name')
            }
            if (typeof age != 'number') {
                throw new Error('Enter valid age')
            }
            if (gender != 'M' && gender != 'F' && gender != 'O') {
                throw new Error('Enter valid gender')
            }
            return new User(name, age, gender, true)

        } catch (error) {
            console.log(error.message);
        }

    }

    newUser(name, age, gender) {

        try {
            if (typeof name != 'string') {
                throw new Error('Enter valid name')
            }
            if (typeof age != 'number') {
                throw new Error('Enter valid age')
            }
            if (gender != 'M' && gender != 'F' && gender != 'O') {
                throw new Error('Enter valid gender')
            }
            if (!this.#isAdmin) {
                return new Error('You are not admin')
            }
            let newuser = new User(name, age, gender, false)
            User.allUser.push(newuser)
            // console.log(User.allUser);
            return newuser

        } catch (error) {
            console.log(error.message);
        }
    }

    getAllUser() {
        try {

            if (!this.#isAdmin) {
                throw new Error("You are not admin ")
            }
            return User.allUser
        } catch (error) {
            console.log(error.message);
        }

    }

    static #findUser(userId) {
        //validation of user id
        try {

            if (typeof userId != 'number') {
                throw new Error('Invalid userid')
            }
            for (let index = 0; index < User.allUser.length; index++) {
                if (userId == User.allUser[index].id) {
                    return index
                }

            }
            return -1

        } catch (error) {
            console.log(error.message);
        }
    }

    #updateName(newcontent, getindexofuser) {
        if (typeof newcontent != 'string') {
            throw new Error("Please enter new valid content")
        }
        User.allUser[getindexofuser].name = newcontent

    }
    #updateAge(newcontent, getindexofuser) {
        if (typeof newcontent != 'number') {
            throw new Error("Please enter new valid content")
        }
        User.allUser[getindexofuser].age = newcontent
    }

    #updateGender(newcontent, getindexofuser) {
        if (typeof newcontent != 'string') {
            throw new Error("Please enter new valid content")
        }
        User.allUser[getindexofuser].gender = newcontent
    }

    #noSuchParams() {
        try {
            throw new Error('You can only update name age gender of a user')
        } catch (error) {
            console.log(error.message);
        }
    }

    updateUser(userId, parameter, newcontent) {
        try {
            if (typeof userId != 'number') {
                throw new Error('Invalid userid')
            }
            if (typeof parameter != 'string') {
                throw new Error('Enter valid operation to be performed')
            }

            if (!this.#isAdmin) {
                throw new Error("You are not admin")
            }

            let getindexofuser = User.#findUser(userId)
            //validation
            if (getindexofuser == -1) {
                throw new Error('User id not found')
            }
            switch (parameter) {
                case 'name':
                    this.#updateName(newcontent, getindexofuser)
                    break
                case 'Age':
                    this.#updateAge(newcontent, getindexofuser)
                    break
                case 'gender':
                    this.#updateGender(newcontent, getindexofuser)
                    break
                default:
                    this.#noSuchParams()
            }
        } catch (error) {
            console.log(error.message);
        }

    }

    deleteUser(userId) {
        try {
            if (!this.#isAdmin) {
                throw new Error("You are not admin");
            }
            let getindexofuser = User.#findUser(userId);
            //validation
            if (getindexofuser == -1) {
                throw new Error('User id not found')
            }
            User.allUser.splice(getindexofuser, 1);
        } catch (error) {
            console.log(error.message);

        }

    }

    // user functionality
    createContact(name){
        try {
            
            if(this.#isAdmin){
                throw new Error("Only users can create Contact")
            }
            
            let newContact = Contact.newContact(name)
            this.contact.push(newContact)
            return newContact
        } catch (error) {
            console.log(error.message);
        }

    }

    getAllContact(){
        try {
            if(this.#isAdmin){
                throw new Error ('Only user can read all contacts')
            }
            return this.contact
        } catch (error) {
            console.log(error.message);
        }
    }

    #findContact(contactid){
        if (typeof contactid != 'number') {
            throw new Error('Invalid userid')
        }
        for (let index = 0; index < this.contact.length; index++) {
            if (contactid == this.contact[index].id) {
                return [this.contact[index],index]
            }

        }
        return[null,-1]

    }

    updateContact(contactid,parameter,newcontent){
        try {
            if(this.#isAdmin){
                throw new Error('Only user can update contact')
            }
            if(contactid <0 || typeof contactid !='number'){
                throw new Error('Enter  valid input')

            }
            let [FoundContact,getContactindex]=this.#findContact(contactid)
            if(FoundContact ==  null){
                throw new Error('Contact id not found')
            }
            FoundContact.updateContact(parameter,newcontent)
              
        } catch (error) {
            console.log(error.message);
        }
    }

    deleteContact(contactid){
        try {
            if(this.#isAdmin){
                throw new Error('Only user can delete contact')
            }
            if(typeof contactid != 'number'){
                throw new Error('Enter valid input')
            }

             let [FoundContact,getContactindex]=this.#findContact(contactid)
             if(getContactindex==-1){
                throw new Error('Contact id not found')
             }
             this.contact.splice(getContactindex,1)
        } catch (error) {
            console.log(error.message);
        }
    }


    createContactinfobyid(contactid,typeofcontactinfo,valueofcontactinfo){
        try {
            if(this.#isAdmin){
                throw new Error('Only user can delete contact')
            }
            if(typeof contactid != 'number'){
                throw new Error('Enter valid input')
            }

            let [FoundContact,getContactindex]=this.#findContact(contactid)

           let newcontactinfo= FoundContact.createContactinfo(typeofcontactinfo,valueofcontactinfo)
           return newcontactinfo
        } catch (error) {
            console.log(error.message);
        }
    }

    getAllContactinfobyid(contactid){
        try {
            if(this.#isAdmin){
                throw new Error('Only user can delete contact')
            }
            if(typeof contactid != 'number'){
                throw new Error('Enter valid input')
            }
            let [FoundContact,getContactindex]=this.#findContact(contactid)
            let allcontactinfo=FoundContact.getAllContactinfobyid()
            return allcontactinfo

        } catch (error) {
            console.log(error.message);
        }
    }

    updateContactinfobyid(contactid,contactinfoid,parameter,newcontent){
        try {
            if(this.#isAdmin){
                throw new Error('Only user can delete contact')
            }
            if(typeof contactid != 'number'){
                throw new Error('Enter valid input')
            }
            if(typeof contactinfoid != 'number'){
                throw new Error('Enter valid input')
            }
            
            let [FoundContact,getContactindex]=this.#findContact(contactid)
            if(FoundContact ==  null){
                throw new Error('Contact id not found')
            }
            FoundContact.updateContactinfobyid(contactinfoid,parameter,newcontent)
            
        } catch (error) {
            console.log(error.message);
        }
    }
    
    deleteContactinfobyid(contactid,contactinfoid){
        try {
            if(this.#isAdmin){
                throw new Error('Only user can delete contact')
            }
            if(typeof contactid != 'number'){
                throw new Error('Enter valid input')
            }
            if(typeof contactinfoid != 'number'){
                throw new Error('Enter valid input')
            }

            let [FoundContact,getContactindex]=this.#findContact(contactid)
            if(FoundContact ==  null){
                throw new Error('Contact id not found')
            }
            FoundContact.deleteContactinfobyid(contactinfoid)

        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = User