---
title: "``min``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/functions/min.rst"
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
