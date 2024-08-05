import { useApi } from "~/composables/useApi"

export default defineEventHandler((event) => {
    return useApi({
        endpoint: `/discover/${event.context.params?.video || 'movie'}`,
    });
})