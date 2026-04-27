---
title: "``merge``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/merge.rst"
upstreamPath: "doc/filters/merge.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``merge``

The `merge` filter merges sequences and mappings:

For sequences, new values are added at the end of the existing ones:


```twig
{% set values = [1, 2] %}

{% set values = values|merge(['apple', 'orange']) %}

{# values now contains [1, 2, 'apple', 'orange'] #}

```

For mappings, the merging process occurs on the keys; if the key does not
already exist, it is added but if the key already exists, its value is
overridden:


```twig
{% set items = {'apple': 'fruit', 'orange': 'fruit', 'peugeot': 'unknown'} %}

{% set items = items|merge({ 'peugeot': 'car', 'renault': 'car' }) %}

{# items now contains {'apple': 'fruit', 'orange': 'fruit', 'peugeot': 'car', 'renault': 'car'} #}

```


> **If you want to ensure that some values are defined in a mapping (by given**
>
> default values), reverse the two elements in the call:
>
>
> ```twig
> {% set items = {'apple': 'fruit', 'orange': 'fruit'} %}
>
> {% set items = {'apple': 'unknown'}|merge(items) %}
>
> {# items now contains {'apple': 'fruit', 'orange': 'fruit'} #}
>
> ```
>


> **Internally, Twig uses the PHP `array_merge`_ function. It supports**
>
> Traversable objects by transforming those to arrays.
>

::::::
