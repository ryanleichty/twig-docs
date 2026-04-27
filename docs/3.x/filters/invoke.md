---
title: "``invoke``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/invoke.rst"
upstreamPath: "doc/filters/invoke.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``invoke``


> **Added in Twig 3.19**
>
> The `invoke` filter has been added in Twig 3.19.
>

The `invoke` filter invokes an arrow function with the given arguments:


```twig
{% set person = { first: "Bob", last: "Smith" } %}
{% set func = p => "#{p.first} #{p.last}" %}

{{ func|invoke(person) }}
{# outputs Bob Smith #}

```

::::::
