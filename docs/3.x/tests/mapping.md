---
title: "``mapping``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/tests/mapping.rst"
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
