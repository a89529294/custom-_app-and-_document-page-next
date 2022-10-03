# Basic uses of `_app` and `_document` file

## `_app`

1. Maintaining state between pages duration navigation(passing down state directly or
   using contexts)
2. Common page layouts
3. Adding additional page props by modifying `pageProps` in `_app.tsx`

## `_document`

1. A custom Document can update the <html> and <body> tags used to render a Page.
2. This file is only rendered on the server, so event handlers like onClick cannot be used in \_document.
3. We can pass any standard HTML property (such as lang) to `<Html>` as a prop.
4. The `<Head>`(imported from `next/document`) here is different from the `<Head>`(imported from `next/head`) used in pages or components. We should use it only for adding _meta tags_ that is common to all the website pages.
5. `<Main>` is where Nextjs renders the page components.
