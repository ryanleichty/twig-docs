---
title: "``macro``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/tags/macro.rst"
upstreamPath: "doc/tags/macro.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``macro``

Macros are comparable with functions in regular programming languages. They
are useful to reuse template fragments to not repeat yourself.

Macros are defined in regular templates.

Imagine having a generic helper template that define how to render HTML forms
via macros (called `forms.twig`):


```twig
{% macro input(name, value, type = "text", size = 20) %}
    <input type="{{ type }}" name="{{ name }}" value="{{ value|e }}" size="{{ size }}"/>
{% endmacro %}

{% macro textarea(name, value, rows = 10, cols = 40) %}
    <textarea name="{{ name }}" rows="{{ rows }}" cols="{{ cols }}">{{ value|e }}</textarea>
{% endmacro %}

```

Each macro argument can have a default value (here `text` is the default value
for `type` if not provided in the call).

Macros differ from native PHP functions in a few ways:

* Arguments of a macro are always optional.

* If extra positional arguments are passed to a macro, they end up in the
  special `varargs` variable as a list of values.

But as with PHP functions, macros don't have access to the current template
variables.


> **You can pass the whole context as an argument by using the special**
>
> `_context` variable.
>

## Importing Macros

There are two ways to import macros. You can import the complete template
containing the macros into a local variable (via the `import` tag) or only
import specific macros from the template (via the `from` tag).

To import all macros from a template into a local variable, use the `import`
tag:


```twig
{% import "forms.html.twig" as forms %}

```

The above `import` call imports the `forms.html.twig` file (which can contain
only macros, or a template and some macros), and import the macros as
attributes of the `forms` local variable.

The macros can then be called at will in the *current* template:


```twig
<p>{{ forms.input('username') }}</p>
<p>{{ forms.input('password', null, 'password') }}</p>
{# You can also use named arguments #}
<p>{{ forms.input(name: 'password', type: 'password') }}</p>

```

Alternatively you can import names from the template into the current namespace
via the `from` tag:


```twig
{% from 'forms.html.twig' import input as input_field, textarea %}

<p>{{ input_field('password', '', 'password') }}</p>
<p>{{ input_field(name: 'password', type: 'password') }}</p>
<p>{{ textarea('comment') }}</p>

```


> **As macros imported via `from` are called like functions, be careful that**
>
> they shadow existing functions:
>
>
> ```twig
> {% from 'forms.html.twig' import input as include %}
>
> {# include refers to the macro and not to the built-in "include" function #}
> {{ include() }}
>
> ```
>


> **When macro usages and definitions are in the same template, you don't need to**
>
> import the macros as they are automatically available under the special
> `_self` variable:
>
>
> ```twig
> <p>{{ _self.input('password', '', 'password') }}</p>
>
> {% macro input(name, value, type = "text", size = 20) %}
>     <input type="{{ type }}" name="{{ name }}" value="{{ value|e }}" size="{{ size }}"/>
> {% endmacro %}
>
> ```
>

## Macros Scoping

The scoping rules are the same whether you imported macros via `import` or
`from`.

Imported macros are always **local** to the current template. It means that
macros are available in all blocks and other macros defined in the current
template, but they are not available in included templates or child templates;
you need to explicitly re-import macros in each template.

Imported macros are not available in the body of `embed` tags, you need
to explicitly re-import macros inside the tag.

When calling `import` or `from` from a `block` tag, the imported macros
are only defined in the current block and they shadow macros defined at the
template level with the same names.

## Checking if a Macro is defined

You can check if a macro is defined via the `defined` test:


```twig
{% import "macros.html.twig" as macros %}

{% from "macros.html.twig" import hello %}

{% if macros.hello is defined -%}
    OK
{% endif %}

{% if hello is defined -%}
    OK
{% endif %}

```

## Named Macro End-Tags

Twig allows you to put the name of the macro after the end tag for better
readability (the name after the `endmacro` word must match the macro name):


```twig
{% macro input() %}
    ...
{% endmacro input %}

```

::::::
