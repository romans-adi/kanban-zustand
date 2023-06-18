import { create } from 'zustand';

const useStore = create((set) => ({
  tasks: [{ title: 'TestTask', state: 'PLANNED' }],
}));

export default useStore;
