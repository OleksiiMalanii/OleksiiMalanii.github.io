import { createStore } from 'vuex';

export default createStore({
    state: {
        initiatives: [
            {
                id: 1,
                title: 'Еко-проєкт',
                description: 'Деталі...',
                location: 'Київ',
                date: '2025-05-01',
                type: 'ecology',
                volunteersNeeded: 5,
                joined: false
            },
            {
                id: 2,
                title: 'Допомога тваринам',
                description: 'Деталі...',
                location: 'Львів',
                date: '2025-04-15',
                type: 'animals',
                volunteersNeeded: 10,
                joined: false
            },
            {
                id: 3,
                title: 'Соціальна підтримка',
                description: 'Деталі...',
                location: 'Одеса',
                date: '2025-06-01',
                type: 'social',
                volunteersNeeded: 8,
                joined: false
            },
            {
                id: 4,
                title: 'Культурний захід',
                description: 'Деталі...',
                location: 'Харків',
                date: '2025-07-01',
                type: 'culture',
                volunteersNeeded: 15,
                joined: false
            },
            {
                id: 5,
                title: 'Спортивний захід',
                description: 'Деталі...',
                location: 'Дніпро',
                date: '2025-08-01',
                type: 'sports',
                volunteersNeeded: 20,
                joined: false
            },
            {
                id: 6,
                title: 'Мистецький фестиваль',
                description: 'Деталі...',
                location: 'Івано-Франківськ',
                date: '2025-09-15',
                type: 'art',
                volunteersNeeded: 12,
                joined: false
            },
            {
                id: 7,
                title: 'Освітній семінар',
                description: 'Деталі...',
                location: 'Чернівці',
                date: '2025-10-10',
                type: 'education',
                volunteersNeeded: 8,
                joined: false
            },
            {
                id: 8,
                title: 'Благодійний концерт',
                description: 'Деталі...',
                location: 'Запоріжжя',
                date: '2025-11-20',
                type: 'charity',
                volunteersNeeded: 25,
                joined: false
            }
        ]
    },

    mutations: {
        registerInitiative(state, { initiativeId, form }) {
            const initiative = state.initiatives.find(
                (item) => item.id === initiativeId
            );

            if (initiative && !initiative.joined) {
                initiative.joined = true;


                if (initiative.volunteersNeeded > 0) {
                    initiative.volunteersNeeded -= 1;
                }


                initiative.registeredName = form.name;
                initiative.registeredEmail = form.email;
            }
        }
    },

    actions: {
        registerInitiative({ commit }, { initiativeId, form }) {
            commit('registerInitiative', { initiativeId, form });
        }
    },

    getters: {
        initiatives: (state) => state.initiatives,
        availableInitiatives: (state) =>
            state.initiatives.filter(
                (i) => new Date(i.date) >= new Date() && i.volunteersNeeded > 0
            )
    }
});