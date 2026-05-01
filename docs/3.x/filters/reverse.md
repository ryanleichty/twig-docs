---
title: "``reverse``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/reverse.rst"
upstreamPath: "doc/filters/reverse.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``reverse``

The `reverse` filter reverses a sequence, a mapping, or a string:


```twig
{% for user in users|reverse %}
    ...
{% endfor %}

{{ '1234'|reverse }}

{# outputs 4321 #}

```


> **For sequences and mappings, numeric keys are not preserved. To reverse**
>
> them as well, pass `true` as an argument to the `reverse` filter:
>
>
> ```twig
> {% for key, value in {1: "a", 2: "b", 3: "c"}|reverse %}
>     {{ key }}: {{ value }}
> {%- endfor %}
>
> {# output: 0: c    1: b    2: a #}
>
> {% for key, value in {1: "a", 2: "b", 3: "c"}|reverse(true) %}
>     {{ key }}: {{ value }}
> {%- endfor %}
>
> {# output: 3: c    2: b    1: a #}
>
> ```
>


> **It also works with objects implementing the [Traversable](https://www.php.net/Traversable) interface.**
>
>

## Arguments

* `preserve_keys`: Preserve keys when reversing a mapping or a sequence.

::::::
