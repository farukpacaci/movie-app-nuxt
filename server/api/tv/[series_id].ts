import { useApi } from "~/composables/useApi"

export default defineEventHandler((event) => {
    return useApi({
        endpoint: `/tv/${event.context.params?.series_id}`,
    });
})