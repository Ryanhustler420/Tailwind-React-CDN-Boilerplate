const AUTH_STATE_KEYBOOK = {
    U1: 'U1',
    U2: 'U2'
}

class AuthState {

    constructor() {

    }

    saveUser(auth_state = { pos: AUTH_STATE_KEYBOOK.U1, meta: null }) {
        this.save('auth_table', JSON.stringify(auth_state));
    }

    getUser() {
        if (this.get('auth_table') == null) return null;
        try {
            return JSON.parse(this.get('auth_table'));
        } catch (err) {
            return null
        }
    }

    get(key) {
        if (localStorage.getItem(key)) return localStorage.getItem(key);
        return null;
    }

    save(key, value = null) {
        if (value == null) return;
        localStorage.setItem(key, value);
    }

    delete(key) {
        localStorage.removeItem(key);
    }

    clean() {
        localStorage.clear();
    }

}