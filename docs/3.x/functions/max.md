---
title: "``max``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/functions/max.rst"
upstreamPath: "doc/functions/max.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``max``

`max` returns the biggest value of a sequence or a set of values:


```twig
{{ max(1, 3, 2) }}
{{ max([1, 3, 2]) }}

```

When called with a mapping, max ignores keys and only compares values:


```twig
{{ max({2: "e", 1: "a", 3: "b", 5: "d", 4: "c"}) }}
{# returns "e" #}


```

::::::
