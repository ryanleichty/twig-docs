---
title: "``round``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/round.rst"
upstreamPath: "doc/filters/round.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``round``

The `round` filter rounds a number to a given precision:


```twig
{{ 42.55|round }}
{# outputs 43 #}

{{ 42.55|round(1, 'floor') }}
{# outputs 42.5 #}

```

The `round` filter takes two optional arguments; the first one specifies the
precision (default is `0`) and the second the rounding method (default is
`common`):

* `common` rounds either up or down (rounds the value up to precision decimal
  places away from zero, when it is half way there -- making 1.5 into 2 and
  -1.5 into -2);

* `ceil` always rounds up;

* `floor` always rounds down.


> **The `//` operator is equivalent to `|round(0, 'floor')`.**
>
>

## Arguments

* `precision`: The rounding precision
* `method`: The rounding method

::::::
