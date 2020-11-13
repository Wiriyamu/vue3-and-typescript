import { ref, Ref } from "vue";

export type ApiRequest = () => Promise<void>;

export default function useFetch<T>(
  url: RequestInfo,
  options?: RequestInit | undefined
) {
  const response: Ref<T | undefined> = ref();

  const request: ApiRequest = async () => {
    const res = await fetch(url, options);
    const data = await res.json();
    response.value = data;
  };

  return { response, request };
}
