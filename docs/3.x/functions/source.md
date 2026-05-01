---
title: "``source``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/functions/source.rst"
upstreamPath: "doc/functions/source.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``source``

The `source` function returns the content of a template without rendering it:


```twig
{{ source('template.html.twig') }}
{{ source(some_var) }}

```

When you set the `ignore_missing` flag, Twig will return an empty string if
the template does not exist:


```twig
{{ source('template.html.twig', ignore_missing = true) }}

```

The function uses the same template loaders as the ones used to include
templates. So, if you are using the filesystem loader, the templates are looked
for in the paths defined by it.

## Arguments

* `name`: The name of the template to read
* `ignore_missing`: Whether to ignore missing templates or not

::::::
