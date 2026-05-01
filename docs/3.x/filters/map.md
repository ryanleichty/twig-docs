---
title: "``map``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/map.rst"
upstreamPath: "doc/filters/map.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``map``

The `map` filter applies an arrow function to the elements of a sequence or a
mapping. The arrow function receives the value of the sequence or mapping:


```twig
{% set people = [
    {first: "Bob", last: "Smith"},
    {first: "Alice", last: "Dupond"},
] %}

{{ people|map(p => "#{p.first} #{p.last}")|join(', ') }}
{# outputs Bob Smith, Alice Dupond #}

```

The arrow function also receives the key as a second argument:


```twig
{% set people = {
    "Bob": "Smith",
    "Alice": "Dupond",
} %}

{{ people|map((value, key) => "#{key} #{value}")|join(', ') }}
{# outputs Bob Smith, Alice Dupond #}

```

Note that the arrow function has access to the current context.

## Arguments

* `arrow`: The arrow function

::::::
