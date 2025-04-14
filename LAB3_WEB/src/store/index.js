import { createStore } from 'vuex';

export default createStore({
    state: {
        initiatives: [
            { id: 1, name: 'Допомога в Дитячих будинках', description: 'Допомога дітям', volunteersNeeded: 5, endDate: '2025-06-30', joined: false },
            { id: 2, name: 'Прибирання парків', description: 'Прибирання сміття', volunteersNeeded: 10, endDate: '2025-06-30', joined: false },
            { id: 3, name: 'Допомога літнім людям', description: 'Допомога старшим', volunteersNeeded: 8, endDate: '2025-06-30', joined: false },
            { id: 4, name: 'Збір коштів для безпритульних', description: 'Збір коштів', volunteersNeeded: 15, endDate: '2025-06-30', joined: false },
            { id: 5, name: 'Організація культурних заходів', description: 'Культурні заходи', volunteersNeeded: 12, endDate: '2025-06-30', joined: false },
            { id: 6, name: 'Екологічні акції', description: 'Еко акції', volunteersNeeded: 20, endDate: '2025-06-30', joined: false }
        ]
    },
    mutations: {
        joinInitiative(state, initiativeId) {
            const initiative = state.initiatives.find(i => i.id === initiativeId);
            if (initiative && !initiative.joined && initiative.volunteersNeeded > 0) {
                initiative.joined = true;
                initiative.volunteersNeeded--;
            }
        },
        registerInitiative(state, initiativeId) {
            const initiative = state.initiatives.find(i => i.id === initiativeId);
            if (initiative) {
                initiative.joined = true;
            }
        }
    },
    actions: {
        joinInitiative({ commit }, initiativeId) {
            commit('joinInitiative', initiativeId);
        },
        registerInitiative({ commit }, initiativeId) {
            commit('registerInitiative', initiativeId);
        }
    },
    getters: {
        initiatives: state => state.initiatives,
        availableInitiatives: state => state.initiatives.filter(i => new Date(i.endDate) > new Date())
    }
});