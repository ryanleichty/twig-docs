---
title: "``enum_cases``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/functions/enum_cases.rst"
upstreamPath: "doc/functions/enum_cases.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``enum_cases``


> **Added in Twig 3.12**
>
> The `enum_cases` function was added in Twig 3.12.
>

`enum_cases` returns the list of cases for a given enum:


```twig
{% for case in enum_cases('App\\CardSuite') %}
    {{ case.value }}
{% endfor %}
{# "clubs", "spades", "hearts", "diamonds" #}

```

When using a string literal for the `enum` argument, it will be validated during compile time to be a valid enum name.

## Arguments

* `enum`: The FQCN of the enum

::::::
