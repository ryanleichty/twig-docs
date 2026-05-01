---
title: "``sandbox``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/tags/sandbox.rst"
upstreamPath: "doc/tags/sandbox.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``sandbox``


> **The `sandbox` tag is deprecated as of Twig 3.15.**
>
> Use the `sandboxed` option of the `include` function instead.
>

The `sandbox` tag can be used to enable the sandboxing mode for an included
template, when sandboxing is not enabled globally for the Twig environment:


```twig
{% sandbox %}
    {% include 'user.html.twig' %}
{% endsandbox %}

```


> **The `sandbox` tag is only available when the sandbox extension is**
>
> enabled (see the [Twig for Developers](../api) chapter).
>


> **The `sandbox` tag can only be used to sandbox an include tag and it**
>
> cannot be used to sandbox a section of a template. The following example
> won't work:
>
>
> ```twig
> {% sandbox %}
>     {% for i in 1..2 %}
>         {{ i }}
>     {% endfor %}
> {% endsandbox %}
>
> ```
>

::::::
