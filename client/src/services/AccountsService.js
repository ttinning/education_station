const baseURL = 'http://localhost:5000/api/accounts';

const AccountsService = {
    getAccounts() {
        return fetch(baseURL)
        .then(res => res.json())
    },

    updateAccounts(id, payload) {
        return fetch(baseURL + id, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json());
    

    
}

export default AccountsService;