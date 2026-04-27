---
title: "``date``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/functions/date.rst"
upstreamPath: "doc/functions/date.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``date``

Converts an argument to a date to allow date comparison:


```twig
{% if date(user.created_at) < date('-2days') %}
    {# do something #}
{% endif %}

```

The argument must be in one of PHP's supported [date and time formats](https://www.php.net/manual/en/datetime.formats.php).

You can pass a timezone as the second argument:


```twig
{% if date(user.created_at) < date('-2days', 'Europe/Paris') %}
    {# do something #}
{% endif %}

```

If no argument is passed, the function returns the current date:


```twig
{% if date(user.created_at) < date() %}
    {# always! #}
{% endif %}

```


> **You can set the default timezone globally by calling `setTimezone()` on**
>
> the `core` extension instance::
>
>     $twig = new \Twig\Environment($loader);
>     $twig->getExtension(\Twig\Extension\CoreExtension::class)->setTimezone('Europe/Paris');
>

## Arguments

* `date`:     The date
* `timezone`: The timezone

::::::
