---
title: "``last``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/last.rst"
upstreamPath: "doc/filters/last.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``last``

The `last` filter returns the last "element" of a sequence, a mapping, or
a string:


```twig
{{ [1, 2, 3, 4]|last }}
{# outputs 4 #}

{{ {a: 1, b: 2, c: 3, d: 4}|last }}
{# outputs 4 #}

{{ '1234'|last }}
{# outputs 4 #}

```


> **It also works with objects implementing the `Traversable`_ interface.**
>
>

::::::
