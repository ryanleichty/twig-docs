---
title: "``mapping``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/tests/mapping.rst"
upstreamPath: "doc/tests/mapping.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``mapping``

`mapping` checks if a variable is a mapping:


```twig
{% set users = {alice: "Alice Dupond", bob: "Bob Smith"} %}
{# evaluates to true if the users variable is a mapping #}
{% if users is mapping %}
    {% for key, user in users %}
        {{ key }}: {{ user }};
    {% endfor %}
{% endif %}

```

::::::
