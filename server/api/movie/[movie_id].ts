import { useApi } from "~/composables/useApi"

export default defineEventHandler((event) => {
    return useApi({
        endpoint: `/movie/${event.context.params?.movie_id}`,
    });
})