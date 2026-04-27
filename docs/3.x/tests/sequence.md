---
title: "``sequence``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/tests/sequence.rst"
upstreamPath: "doc/tests/sequence.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``sequence``

`sequence` checks if a variable is a sequence:


```twig
{% set users = ["Alice", "Bob"] %}
{# evaluates to true if the users variable is a sequence #}
{% if users is sequence %}
    {% for user in users %}
        Hello {{ user }}!
    {% endfor %}
{% endif %}

```

::::::
