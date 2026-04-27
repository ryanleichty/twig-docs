---
title: "``set``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/tags/set.rst"
upstreamPath: "doc/tags/set.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``set``

Inside code blocks you can also assign values to variables. Assignments use
the `set` tag and can have multiple targets.

Here is how you can assign the `Fabien` value to the `name` variable:


```twig
{% set name = 'Fabien' %}

```

After the `set` call, the `name` variable is available in the template like
any other ones:


```twig
{# displays Fabien #}
{{ name }}

```

The assigned value can be any valid `Twig expression`:


```twig
{% set numbers = [1, 2] %}
{% set user = {'name': 'Fabien'} %}
{% set name = 'Fabien' ~ ' ' ~ 'Potencier' %}

```


> **To assign a value within an expression, use the `= operator`:**
>
>
>
> ```twig
> {# use assignment within a larger expression #}
> {{ (result = fetch_data()) ? result : 'default' }}
>
> ```
>

Several variables can be assigned in one block:


```twig
{% set first, last = 'Fabien', 'Potencier' %}

{# is equivalent to #}

{% set first = 'Fabien' %}
{% set last = 'Potencier' %}

```

The `set` tag can also be used to "capture" chunks of text:


```twig
{% set content %}
    <div id="pagination">
        ...
    </div>
{% endset %}

```


> **If you enable automatic output escaping, Twig will only consider the**
>
> content to be safe when capturing chunks of text.
>


> **Note that loops are scoped in Twig; therefore a variable declared inside a**
>
> `for` loop is not accessible outside the loop itself:
>
>
> ```twig
> {% for item in items %}
>     {% set value = item %}
> {% endfor %}
>
> {# value is NOT available #}
>
> ```
>
> If you want to access the variable, just declare it before the loop:
>
>
> ```twig
> {% set value = "" %}
> {% for item in items %}
>     {% set value = item %}
> {% endfor %}
>
> {# value is available #}
>
> ```
>

::::::
