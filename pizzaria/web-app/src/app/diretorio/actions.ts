import {Subject} from 'rxjs';

export interface User {
    id?: number;
    name: string;
    lastName: string;
    email: string;
    image: string;
    password: string;
    level: number;
}

export enum ActionTypes {
    BUCAR = '[HOME] Get all pizzas',
    LOGGED_IN_USER = '[HOME] User logged-in'
}

interface InitialState {
    search: string;
    userLoggedIn: User;
}

interface Event {
    type: String;
    payload?: any;
}

let state: InitialState = {
    search:  '',
    userLoggedIn: {
        id: 0,
        name: '',
        lastName: '',
        email: '',
        image: '',
        password: '',
        level: 0
    }
}


export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
    switch (data.type) {
        case ActionTypes.BUCAR:
            const search = data.payload;
            store.next(search);
            break;
        
        case ActionTypes.LOGGED_IN_USER:
            const userLoggedIn = data.payload;
            store.next(userLoggedIn);
            break;
    }
})