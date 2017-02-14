export class UsersService {

    users = [{ userName: 'hen@walla.com', password: '123' }];

    removeUser(user) {
        var index = this.users.indexOf(user);
        if (index > -1) {
            this.users.splice(index, 1);
        }
    }
    addUser(user){
        this.users.push(user);
    }
}