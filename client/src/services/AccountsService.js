const baseURL = 'http://localhost:5000/api/accounts';

const AccountsService = {
    getAccounts() {
        return fetch(baseURL)
        .then(res => res.json())
    }
}

export default AccountsService;