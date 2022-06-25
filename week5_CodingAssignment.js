class Dealership{
    constructor(name){
        this.dealershipName = name;
        this.dealershipLocation=[];
    }
    addUser(user){
        if(user instanceof User){
            this.user.push(user);
        }else {
            throw new Error(`You can only add an instance of user. Argument is not a user: ${user}`);
        }
    }
}
class User{
    constructor (name, email){
    this.userName=name;
    this.email=email;
    }
}
class Menu {
    constructor(){
        this.dealerships=[];
        this.selectedDealership= null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch(selection){
                case '1':
                    this.createDealership();
                    break;
                case '2':
                    this.viewDealership();
                    break;
                case '3':
                    this.deleteDealership();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMenuOptions();
        }
        alert('Goodbye');
    }
}
createDealership();{
    let name= prompt('Enter dealership name:');
    this.dealership.push(new Dealership(name));
}
viewDealership();{
    let index= prompt('Enter index of dealership you want to view');
    if(index >-1 && index < this.dealership.length){
        this.selectedDealership =this.dealership[index];
        let description = `Team Name: '+ this.selectedDealership.name + '\n'`;
        for(let i=0;i<this.selectedDealership.user.length;i++);
        description += i + ')'+this.selectedDealership.user[i].name + '-' + this.selectedDealership.user[i].email + '\n';
    }
    let selection = this.showDealershipMenuOptions(description)
    switch (selection){
        case '1':
            this.createUser();
            break;
        case '2':
            this.deleteUser();
    }
}
deleteDealership();{
    let index = prompt ('Enter the index of the dealership you wish to delete');
    if (index >-1 && index < this.Dealership.name.length){
        this.dealership.splice(index,1);
    }
}
createUser();{
    let name = prompt ('Enter name of user.');
    let email= prempt ('Enter email of user.');
    this.selectedDealership.user.push(new User(name,email));
}
deleteUser();{
    let index = prompt ('Enter index of user you would like to delete');
    if (index >-1 && index < this.selectedDealership.user.length){
        this.selectedDealership.user.splice(index,1);
    }
}

showMainMenuOptions();{
    prompt (`
    0) exit
    1) create new dealership
    2) view dealership
    3) delete dealership
    `)
}
showDealershipMenuOptions(dealershipInfo);{
    prompt (`
    0) back
    1) create user
    2) delete user
    -----------------
    ${dealershipInfo}
    `)
}
let menu = new Menu();
menu.start();