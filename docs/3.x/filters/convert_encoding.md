---
title: "``convert_encoding``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/convert_encoding.rst"
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


> **This filter relies on the [iconv](https://www.php.net/iconv) extension.**
>
>

## Arguments

* `to`:   The output charset
* `from`: The input charset

::::::
