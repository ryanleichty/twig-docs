---
title: "Coding Standards"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/coding_standards.rst"
upstreamPath: "doc/coding_standards.rst"
editLink: true
vue: false
---
:::::: v-pre

# Coding Standards


> **The [Twig CS fixer tool](https://github.com/VincentLanglet/Twig-CS-Fixer)**
>
> uses the coding standards described in this document to automatically fix
> your templates.
>

When writing Twig templates, we recommend you to follow these official coding
standards:

* Put exactly one space after the start of a delimiter (`&#123;&#123;`, `{%`,
  and `{#`) and before the end of a delimiter (`&#125;&#125;`, `%}`, and `#}`)
  if the content is non empty:


```twig
{{ user }}
{# comment #} {##}
{% if user %}{% endif %}

```

  When using the whitespace control character, do not put any spaces between
  it and the delimiter:


```twig
{{- user -}}
{#- comment -#} {#--#}
{%- if user -%}{%- endif -%}

```

* Put exactly one space before and after the following operators:
  comparison operators (`==`, `!=`, `<`, `>`, `>=`, `<=`), math
  operators (`+`, `-`, `/`, `*`, `%`, `//`, `**`), logic
  operators (`not`, `and`, `or`), `~`, `is`, `in`, and the ternary
  operator (`?:`):


```twig
{{ 1 + 2 }}
{{ first_name ~ ' ' ~ last_name }}
{{ is_correct ? true : false }}

```

* Put exactly one space after the `:` sign in mappings and `,` in sequences
  and mappings:


```twig
[1, 2, 3]
{'name': 'Fabien'}

```

* Do not put any spaces after an opening parenthesis and before a closing
  parenthesis in expressions:


```twig
{{ 1 + (2 * 3) }}

```

* Do not put any spaces before and after string delimiters:


```twig
{{ 'Twig' }}
{{ "Twig" }}

```

* Do not put any spaces before and after the following operators: `|`,
  `.`, `..`, `[]`:


```twig
{{ name|upper|lower }}
{{ user.name }}
{{ user[name] }}
{% for i in 1..12 %}{% endfor %}

```

* Do not put any spaces before and after the parenthesis used for filter and
  function calls:


```twig
{{ name|default('Fabien') }}
{{ range(1..10) }}

```

* Do not put any spaces before and after the opening and the closing of
  sequences and mappings:


```twig
[1, 2, 3]
{'name': 'Fabien'}

```

* Put exactly one space before and after `=` in macro argument declarations:


```twig
{% macro html_input(class = "input") %}

```

* Put exactly one space after the `:` sign when using named arguments:


```twig
{{ html_input(class: "input") }}

```

* Use snake case for all variable names (provided by the application and
  created in templates), function/filter/test names, argument names and named
  arguments:


```twig
{% set name = 'Fabien' %}
{% set first_name = 'Fabien' %}

{{ 'Fabien Potencier'|to_lower_case }}
{{ generate_random_number() }}

{% macro html_input(class_name) %}

{{ html_input(class_name: 'pwd') }}

```

* Indent your code inside tags (use the same indentation as the one used for
  the target language of the rendered template):


```twig
{% block content %}
    {% if true %}
        true
    {% endif %}
{% endblock %}

```

* Use `:` instead of `=` to separate argument names and values:


```twig
{{ data|convert_encoding(from: 'iso-2022-jp', to: 'UTF-8') }}

```

::::::
