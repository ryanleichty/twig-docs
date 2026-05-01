---
title: "``url_encode``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/url_encode.rst"
upstreamPath: "doc/filters/url_encode.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``url_encode``

The `url_encode` filter percent encodes a given string as URL segment or a
mapping as query string:


```twig
{{ "path-seg*ment"|url_encode }}
{# outputs "path-seg%2Ament" #}

{{ "string with spaces"|url_encode }}
{# outputs "string%20with%20spaces" #}

{{ {'name': 'Fabien', 'city': 'Paris'}|url_encode }}
{# outputs "name=Fabien&city=Paris" #}

```


> **Internally, Twig uses the PHP [rawurlencode](https://www.php.net/rawurlencode) or the [http_build_query](https://www.php.net/http_build_query) function.**
>
>

::::::
