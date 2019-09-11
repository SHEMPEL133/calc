
export default class UsersService {

    data = [
        { name: 'Nick', surname: 'Vonka', id: 1 },
        { name: 'Aria', surname: 'Stark', id: 2 },
        { name: 'Roz', surname: 'Zero', id: 3 },
    ];

    getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.1) {
                    resolve(this.data);
                } else {
                    reject(new Error('Bad!'))
                }
            }, 700);
        });
    }
}