---
title: "``reduce``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/reduce.rst"
upstreamPath: "doc/filters/reduce.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``reduce``

The `reduce` filter iteratively reduces a sequence or a mapping to a single
value using an arrow function, so as to reduce it to a single value. The arrow
function receives the return value of the previous iteration and the current
value and key of the sequence or mapping:


```twig
{% set numbers = [1, 2, 3] %}

{{ numbers|reduce((carry, value, key) => carry + value * key) }}
{# output 8 #}

```

The `reduce` filter takes an `initial` value as a second argument:


```twig
{{ numbers|reduce((carry, value, key) => carry + value * key, 10) }}
{# output 18 #}

```

Note that the arrow function has access to the current context.

## Arguments

* `arrow`: The arrow function
* `initial`: The initial value

::::::
