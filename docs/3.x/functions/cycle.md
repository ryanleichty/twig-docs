---
title: "``cycle``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/functions/cycle.rst"
upstreamPath: "doc/functions/cycle.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``cycle``

The `cycle` function cycles on a sequence:


```twig
{% set start_year = date() | date('Y') %}
{% set end_year = start_year + 5 %}

{% for year in start_year..end_year %}
    {{ cycle(['odd', 'even'], loop.index0) }}
{% endfor %}

{# outputs

    odd
    even
    odd
    even
    odd
    even

#}

```

The `cycle` function takes two arguments: the `sequence` to cycle through and the `position` in the sequence.

The `sequence` must be non-empty and can contain any number of values:


```twig
{% set fruits = ['apple', 'orange', 'citrus'] %}

{% for i in 0..10 %}
    {{ cycle(fruits, i) }}
{% endfor %}

{# outputs

    apple
    orange
    citrus
    apple
    orange
    citrus
    apple
    orange
    citrus
    apple
    orange

#}

```

## Arguments

* `values`: The sequence to cycle on
* `position`: The position in the sequence

::::::
