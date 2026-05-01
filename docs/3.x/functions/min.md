---
title: "``min``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/functions/min.rst"
upstreamPath: "doc/functions/min.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``min``

`min` returns the lowest value of a sequence or a set of values:


```twig
{{ min(1, 3, 2) }}
{{ min([1, 3, 2]) }}

```

When called with a mapping, min ignores keys and only compares values:


```twig
{{ min({2: "e", 3: "a", 1: "b", 5: "d", 4: "c"}) }}
{# returns "a" #}


```

::::::
