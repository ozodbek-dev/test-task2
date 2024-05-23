import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { api, queryBuilder } from "services";
import { TMeta, TParams } from "services/types";
import { get } from "lodash";

interface IQueryKeyArgs {
  url: string;
  params?: TParams | undefined;
}

interface IProps {
  name: string;
  url: string;
  onSuccess?: (data: unknown) => void;
  onError?: (error: unknown) => void;
  queryOptions?: UseQueryOptions<any, any, any, any>;
  params?: TParams | undefined;
}

async function fetch({
  queryKey,
}: QueryFunctionContext<[string, IQueryKeyArgs]>) {
  const { url, params } = queryKey[1];

  const res = await api.get(queryBuilder(url, params));
  return res.data;
}

function useGet(args: IProps): UseQueryResult<any> & { meta: TMeta } {
  const { name, onSuccess, onError, queryOptions, url, params } = args;

  const data = useQuery({
    queryKey: [`${name}`, { url, params }],
    queryFn: fetch,
    onSuccess,
    onError,
    ...queryOptions,
  });

  return {
    ...data,
    meta: {
      currentPage: get(data, "data.page", 1),
      pageCount: get(data, "data.last_page", 1),
      perPage: get(data, "data.per_page", 1),
      totalCount: get(data, "data.all_data", 1),
    } as TMeta,
  };
}

export default useGet;
