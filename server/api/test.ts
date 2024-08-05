import { useApi } from "~/composables/useApi"

export default defineEventHandler((event) => {
    return useApi({
        endpoint: '',
    });
})