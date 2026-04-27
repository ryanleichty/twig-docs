---
title: "``keys``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/keys.rst"
upstreamPath: "doc/filters/keys.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``keys``

The `keys` filter returns the keys of a sequence or a mapping. It is useful
when you want to iterate over the keys of a sequence or a mapping:


```twig
{% for key in ['a', 'b', 'c', 'd']|keys %}
    {{ key }}
{% endfor %}
{# outputs: 0 1 2 3 #}

{% for key in {a: 'a_value', b: 'b_value'}|keys %}
    {{ key }}
{% endfor %}
{# outputs: a b #}

```


> **Internally, Twig uses the PHP `array_keys`_ function.**
>
>

::::::
