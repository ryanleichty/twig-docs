---
title: "``format``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/format.rst"
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
