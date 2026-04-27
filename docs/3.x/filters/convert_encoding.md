---
title: "``convert_encoding``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/convert_encoding.rst"
upstreamPath: "doc/filters/convert_encoding.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``convert_encoding``

The `convert_encoding` filter converts a string from one encoding to
another. The first argument is the expected output charset and the second one
is the input charset:


```twig
{{ data|convert_encoding('UTF-8', 'iso-2022-jp') }}

```


> **This filter relies on the `iconv`_ extension.**
>
>

## Arguments

* `to`:   The output charset
* `from`: The input charset

::::::
