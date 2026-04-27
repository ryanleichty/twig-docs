---
title: "``max``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/functions/max.rst"
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
