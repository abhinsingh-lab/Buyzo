import { useEffect, useState } from "react";

export function useFetch<T = any>(url: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!url) return;
    const ac = new AbortController();
    setLoading(true);
    setError(null);

    fetch(url, { signal: ac.signal })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        if ((err as any).name !== "AbortError") setError(err);
      })
      .finally(() => setLoading(false));

    return () => ac.abort();
    // TODO : add caching, retries, and an optional dependencies list
  }, [url]);

  return { data, loading, error };
}