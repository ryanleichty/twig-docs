---
title: "``shuffle``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/shuffle.rst"
upstreamPath: "doc/filters/shuffle.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``shuffle``


> **Added in Twig 3.11**
>
> The `shuffle` filter was added in Twig 3.11.
>

The `shuffle` filter shuffles a sequence, a mapping, or a string:


```twig
{% for user in users|shuffle %}
    ...
{% endfor %}

```


> **The shuffled array does not preserve keys. So if the input had not**
>
> sequential keys but indexed keys (using the user id for instance), it is
> not the case anymore after shuffling it.
>

Example 1:


```twig
{% set items = [
    'a',
    'b',
    'c',
] %}

<ul>
    {% for item in items|shuffle %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>

```

The above example will be rendered as:


```html
<ul>
    <li>a</li>
    <li>c</li>
    <li>b</li>
</ul>

```

The result can also be: "a, b, c" or "b, a, c" or "b, c, a" or "c, a, b" or
"c, b, a".

Example 2:


```twig
{% set items = {
    'a': 'd',
    'b': 'e',
    'c': 'f',
} %}

<ul>
    {% for index, item in items|shuffle %}
        <li>{{ index }} - {{ item }}</li>
    {% endfor %}
</ul>

```

The above example will be rendered as:


```html
<ul>
    <li>0 - d</li>
    <li>1 - f</li>
    <li>2 - e</li>
</ul>

```

The result can also be: "d, e, f" or "e, d, f" or "e, f, d" or "f, d, e" or
"f, e, d".


```twig
{% set string = 'ghi' %}

<p>{{ string|shuffle }}</p>

```

The above example will be rendered as:


```html
<p>gih</p>

```

The result can also be: "ghi" or "hgi" or "hig" or "igh" or "ihg".

::::::
