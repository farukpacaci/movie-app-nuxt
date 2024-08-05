export interface IHomeSwitches {
    selectedSwitchTrending: 'day' | 'week',
    selectedSwitchFreeToWatch: 'movie' | 'tv',
    selectedSwitchWhatsPopular: 'movie' | 'tv',
}

export const useHomeStore = defineStore('homeStore', {
    state: (): IHomeSwitches => {
        return {
            selectedSwitchTrending: 'day',
            selectedSwitchFreeToWatch: 'movie',
            selectedSwitchWhatsPopular: 'movie',
        };
    },
    actions: {
        setSelectedSwitch(key: keyof IHomeSwitches, value: IHomeSwitches[keyof IHomeSwitches]) {
            (this as any)[key] = value;
        },
    }
});
