---
title: "``find``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/find.rst"
upstreamPath: "doc/filters/find.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``find``


> **Added in Twig 3.11**
>
> The `find` filter was added in Twig 3.11.
>

The `find` filter returns the first element of a sequence matching an arrow
function. The arrow function receives the value of the sequence:


```twig
{% set sizes = [34, 36, 38, 40, 42] %}

{{ sizes|find(v => v > 38) }}
{# output 40 #}

```

It also works with mappings:


```twig
{% set sizes = {
    xxs: 32,
    xs:  34,
    s:   36,
    m:   38,
    l:   40,
    xl:  42,
} %}

{{ sizes|find(v => v > 38) }}

{# output 40 #}

```

The arrow function also receives the key as a second argument:


```twig
{{ sizes|find((v, k) => 's' not in k) }}

{# output 38 #}

```

Note that the arrow function has access to the current context:


```twig
{% set my_size = 39 %}

{{ sizes|find(v => v >= my_size) }}

{# output 40 #}

```

## Arguments

* `array`: The sequence or mapping
* `arrow`: The arrow function

::::::
