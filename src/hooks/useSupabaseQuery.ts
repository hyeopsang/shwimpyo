import {useQuery, type UseQueryOptions} from '@tanstack/react-query';
import {supabase} from '@/lib/supbase/supabaseClient';

export function useSupabaseQuery<T>(
  key: string | unknown[],
  queryFn: (client: typeof supabase) => Promise<T[]>,
  options?: UseQueryOptions<T[], Error>
) {
  return useQuery<T[], Error>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn: () => queryFn(supabase),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    ...options,
  });
}
