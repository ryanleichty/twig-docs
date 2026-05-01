---
title: "``sort``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/sort.rst"
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


> **Internally, Twig uses the PHP [asort](https://www.php.net/asort) function to maintain index**
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

Note the usage of the [spaceship](https://www.php.net/manual/en/language.operators.comparison.php) operator to simplify the comparison.

## Arguments

* `arrow`: An arrow function

::::::
