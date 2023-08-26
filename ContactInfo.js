class ContactInfo{

    static id=0
    constructor(typeofcontactinfo,valueofcontactinfo){
        this.typeofcontactinfo=typeofcontactinfo
        this.valueofcontactinfo=valueofcontactinfo
        this.id=ContactInfo.id++

    }

     static createContactinfo(typeofcontactinfo,valueofcontactinfo){
        if(typeof typeofcontactinfo !='string'){
            throw new Error('Enter Valid input')
        }
        if(typeof valueofcontactinfo != 'number' && typeof valueofcontactinfo!='string'){
            throw new Error('Enter Valid input')
        }
       return new ContactInfo(typeofcontactinfo,valueofcontactinfo)
     }

     updateTypeofContactInfo(parameter,newcontent){
        if(typeof parameter != 'string'){
            throw new Error('Enter valid parameter')
        }
        if(typeof newcontent != 'string'){
            throw new Error('Enter valid parameter')
        }
        this.typeofcontactinfo=newcontent
    }
    updateValueofContactInfo(parameter,newcontent){
        if(typeof parameter != 'string'){
            throw new Error('Enter valid parameter')
        }
        this.valueofcontactinfo=newcontent

    }
}

module.exports=ContactInfo