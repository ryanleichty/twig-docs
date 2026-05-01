---
title: "``upper``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/upper.rst"
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
