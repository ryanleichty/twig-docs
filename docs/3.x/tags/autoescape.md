---
title: "``autoescape``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/tags/autoescape.rst"
upstreamPath: "doc/tags/autoescape.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``autoescape``

Whether automatic escaping is enabled or not, you can mark a section of a
template to be escaped or not by using the `autoescape` tag:


```twig
{% autoescape %}
    Everything will be automatically escaped in this block
    using the HTML strategy
{% endautoescape %}

{% autoescape 'html' %}
    Everything will be automatically escaped in this block
    using the HTML strategy
{% endautoescape %}

{% autoescape 'js' %}
    Everything will be automatically escaped in this block
    using the js escaping strategy
{% endautoescape %}

{% autoescape false %}
    Everything will be outputted as is in this block
{% endautoescape %}

```

When automatic escaping is enabled everything is escaped by default except for
values explicitly marked as safe. Those can be marked in the template by using
the [raw](../filters/raw) filter:


```twig
{% autoescape %}
    {{ safe_value|raw }}
{% endautoescape %}

```

Functions returning template data (like [macros](macro) and
[parent](../functions/parent)) always return safe markup.


> **Twig is smart enough to not escape an already escaped value by the**
>
> [escape](../filters/escape) filter when the automatic escaping
> strategy is the same as the one applied by the escape filter.
>


> **Twig does not escape static expressions:**
>
>
>
> ```twig
> {% set hello = "<strong>Hello</strong>" %}
> {{ hello }}
> {{ "<strong>world</strong>" }}
>
> ```
>
> Will be rendered "<strong>Hello</strong> **world**".
>


> **The chapter [Twig for Developers](../api) gives more information**
>
> about when and how automatic escaping is applied.
>

::::::
