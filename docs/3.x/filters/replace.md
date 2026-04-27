---
title: "``replace``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/replace.rst"
upstreamPath: "doc/filters/replace.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``replace``

The `replace` filter replaces placeholders in a string (the placeholder
format is free-form):


```twig
{% set fruit = 'apples' %}

{{ "I like %this% and %that%."|replace({'%this%': fruit, '%that%': "oranges"}) }}
{# if the "fruit" variable is set to "apples", #}
{# it outputs "I like apples and oranges" #}

{# using % as a delimiter is purely conventional and optional #}
{{ "I like this and --that--."|replace({'this': fruit, '--that--': "oranges"}) }}
{# outputs "I like apples and oranges" #}

```

## Arguments

* `from`: The placeholder values as a mapping


> **Note**
>

::::::
