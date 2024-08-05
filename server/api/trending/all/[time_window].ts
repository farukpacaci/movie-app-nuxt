import { useApi } from "~/composables/useApi"
import { IHomeSwitches } from "~/stores/home";

export default defineEventHandler((event) => {
    return useApi({
        endpoint: `/trending/all/${event.context.params?.time_window || 'day' as IHomeSwitches['selectedSwitchTrending']}`,
    });
})