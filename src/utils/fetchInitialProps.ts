import ck from 'camelcase-keys';
import fetch_ from 'isomorphic-unfetch';
import nookies from 'nookies';
import { NextPageContext } from 'next';

import getAbsoluteUrl from './getAbsoluteUrl';

export default async <T>(
  ctx: Pick<NextPageContext, 'req' | 'res'| 'query'>,
  url: string,
  params: RequestInit = {}): Promise<T> => {
  const { token } = nookies.get(ctx);
  const baseUrl = getAbsoluteUrl(ctx.req);
  const res = await fetch_(`${baseUrl}/${url}`, {
    ...params,
    headers: {
      authorization: `Bearer ${unescape(token)}`
    }
  });
  if (res.status !== 200) {
    throw new Error(await res.text());
  }
  return await res.json().then(json => ck(json, { deep: true })) as T;
};
