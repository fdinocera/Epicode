// {
//     id: 1,
//     firstName: 'Terry',
//     lastName: 'Medhurst',
//     email: 'atuny0@sohu.com',
//     image: 'https://robohash.org/hicveldicta.png',
//     title: 'Help Desk Operator',
// }

export interface Users {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    image: string,
    title: string
}

// {
//     "id": 130,
//     "todo": "Learn about a distributed version control system such as Git",
//     "completed": true,
//     "userId": 4
// }

export interface Todo{
    id: number,
    todo: string,
    completed: boolean,
    userId: number
}

export interface Db{
    users: Users[],
    todo: Todo[]
}
