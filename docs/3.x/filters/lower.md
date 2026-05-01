---
title: "``lower``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/lower.rst"
upstreamPath: "doc/filters/lower.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``lower``

The `lower` filter converts a value to lowercase:


```twig
{{ 'WELCOME'|lower }}

{# outputs 'welcome' #}

```


> **Internally, Twig uses the PHP [mb_strtolower](https://www.php.net/manual/fr/function.mb-strtolower.php) function.**
>
>

::::::
