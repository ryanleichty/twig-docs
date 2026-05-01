---
title: "``sequence``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/tests/sequence.rst"
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
