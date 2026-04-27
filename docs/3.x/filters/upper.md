---
title: "``upper``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/upper.rst"
upstreamPath: "doc/filters/upper.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``upper``

The `upper` filter converts a value to uppercase:


```twig
{{ 'welcome'|upper }}

{# outputs 'WELCOME' #}

```


> **Internally, Twig uses the PHP [mb_strtoupper](https://www.php.net/mb_strtoupper) function.**
>
>

::::::
