---
title: "``lower``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/lower.rst"
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


> **Internally, Twig uses the PHP `mb_strtolower`_ function.**
>
>

::::::
