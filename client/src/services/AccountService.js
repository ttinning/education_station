const baseURL = 'http://localhost:5000/api/accounts';

const AccountService = {
    getAccount() {
        return fetch(baseURL)
        .then(res => res.json())
    }
}

export default AccountService;