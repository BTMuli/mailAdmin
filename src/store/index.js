import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

// Create a pinia instance
const store = createPinia();

// Use the plugin to persist the state
store.use(createPersistedState());

export default store;
