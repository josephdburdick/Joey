// BASE_URL has no trailing slash when trailingSlash is 'ignore'; normalize so
// paths can be built as `${base}work/...`.
export const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
