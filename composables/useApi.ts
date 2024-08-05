interface IUseApi {
    apiService?: 'TMDB';
    endpoint: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

export const useApi = async ({ apiService, endpoint, method }: IUseApi) => {
    const runtimeConfig = useRuntimeConfig();
    const baseurl = apiService || runtimeConfig.public.tmdbBaseUrl;
    const apiKey = apiService || runtimeConfig.public.tmdbApiKey;
    return await $fetch(
        `${baseurl}${endpoint}`,
        {
            method: method,
            query: {
                api_key: apiKey,
            }
        }
    )
}