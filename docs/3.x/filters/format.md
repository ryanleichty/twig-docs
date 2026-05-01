---
title: "``format``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/format.rst"
upstreamPath: "doc/filters/format.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``format``

The `format` filter formats a given string by replacing the placeholders
(placeholders follows the [sprintf](https://www.php.net/sprintf) notation):


```twig
{% set fruit = 'apples' %}
{{ "I like %s and %s."|format(fruit, "oranges") }}

{# outputs I like apples and oranges #}

```


> **Note**
>

::::::
