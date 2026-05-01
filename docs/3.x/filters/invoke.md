---
title: "``invoke``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/invoke.rst"
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
