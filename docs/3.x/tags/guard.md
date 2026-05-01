---
title: "``guard``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/tags/guard.rst"
upstreamPath: "doc/tags/guard.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``guard``


> **Added in Twig 3.15**
>
> The `guard` tag was added in Twig 3.15.
>

The `guard` statement checks if some Twig callables are available at
**compilation time** to bypass code compilation that would otherwise fail.


```twig
{% guard function importmap %}
    {{ importmap('app') }}
{% endguard %}

```

The first argument is the Twig callable to test: `filter`, `function`, or
`test`. The second argument is the Twig callable name you want to test.

You can also generate different code if the callable does not exist:


```twig
{% guard function importmap %}
    {{ importmap('app') }}
{% else %}
    {# the importmap function doesn't exist, generate fallback code #}
{% endguard %}

```

::::::
