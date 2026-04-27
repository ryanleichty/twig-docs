---
title: "``column``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/column.rst"
upstreamPath: "doc/filters/column.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``column``

The `column` filter returns the values from a single column in the input
array.


```twig
{% set items = [{ 'fruit' : 'apple'}, {'fruit' : 'orange' }] %}

{% set fruits = items|column('fruit') %}

{# fruits now contains ['apple', 'orange'] #}

```


> **Internally, Twig uses the PHP [array_column](https://www.php.net/array_column) function.**
>
>

## Arguments

* `name`: The column name to extract

::::::
