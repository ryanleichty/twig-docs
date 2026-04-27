---
title: "``sort``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/sort.rst"
upstreamPath: "doc/filters/sort.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``sort``

The `sort` filter sorts sequences and mappings:


```twig
{% for user in users|sort %}
    ...
{% endfor %}

```


> **Internally, Twig uses the PHP `asort`_ function to maintain index**
>
> association. It supports Traversable objects by transforming
> those to arrays.
>

You can pass an arrow function to configure the sorting:


```twig
{% set fruits = [
    {name: 'Apples', quantity: 5},
    {name: 'Oranges', quantity: 2},
    {name: 'Grapes', quantity: 4},
] %}

{% for fruit in fruits|sort((a, b) => a.quantity <=> b.quantity)|column('name') %}
    {{ fruit }}
{% endfor %}

{# output in this order: Oranges, Grapes, Apples #}

```

Note the usage of the `spaceship`_ operator to simplify the comparison.

## Arguments

* `arrow`: An arrow function

::::::
