import {Subject} from 'rxjs';

export enum ActionTypes {
    BUCAR = '[HOME] Get all pizzas'
}

interface InitialState {
    search: string;
}

interface Event {
    type: String;
    payload?: any;
}

let state: InitialState = {
    search:  '',
}


export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
    switch (data.type) {
        case ActionTypes.BUCAR:
            const search = data.payload;
            store.next(search);
            break;
    }
})