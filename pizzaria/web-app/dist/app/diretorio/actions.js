import { Subject } from 'rxjs';
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["BUCAR"] = "[HOME] Get all pizzas";
    ActionTypes["LOGGED_IN_USER"] = "[HOME] User logged-in";
})(ActionTypes || (ActionTypes = {}));
let state = {
    search: '',
    userLoggedIn: {
        id: 0,
        name: '',
        lastName: '',
        email: '',
        image: '',
        password: '',
        level: 0
    }
};
export const store = new Subject();
export const eventDispatcher = new Subject();
eventDispatcher.subscribe((data) => {
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
});
//# sourceMappingURL=actions.js.map