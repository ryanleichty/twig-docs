---
title: "``date``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/date.rst"
upstreamPath: "doc/filters/date.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``date``

The `date` filter formats a date to a given format:


```twig
{{ post.published_at|date("m/d/Y") }}

```

The format specifier is the same as supported by [date](https://www.php.net/date),
except when the filtered data is of type [DateInterval](https://www.php.net/DateInterval), when the format must conform to
[DateInterval::format](https://www.php.net/DateInterval.format) instead.

The `date` filter accepts strings (it must be in a format supported by the
[strtotime](https://www.php.net/strtotime) function), [DateTime](https://www.php.net/DateTime) instances, or [DateInterval](https://www.php.net/DateInterval) instances. For
instance, to display the current date, filter the word "now":


```twig
{{ "now"|date("m/d/Y") }}

```

To escape words and characters in the date format use `\\` in front of each
character:


```twig
{{ post.published_at|date("F jS \\a\\t g:ia") }}

```

If the value passed to the `date` filter is `null`, it will return the
current date by default. If an empty string is desired instead of the current
date, use a ternary operator:


```twig
{{ post.published_at is empty ? "" : post.published_at|date("m/d/Y") }}

```

If no format is provided, Twig will use the default one: `F j, Y H:i`. This
default can be changed by calling the `setDateFormat()` method on the
`core` extension instance. The first argument is the default format for
dates and the second one is the default format for date intervals:

```php
$twig = new \Twig\Environment($loader);
$twig->getExtension(\Twig\Extension\CoreExtension::class)->setDateFormat('d/m/Y', '%d days');

```

## Timezone

By default, the date is displayed by applying the default timezone (the one
specified in php.ini or declared in Twig -- see below), but you can override
it by explicitly specifying a supported [timezone](https://www.php.net/manual/en/timezones.php):


```twig
{{ post.published_at|date("m/d/Y", "Europe/Paris") }}

```

If the date is already a DateTime object, and if you want to keep its current
timezone, pass `false` as the timezone value:


```twig
{{ post.published_at|date("m/d/Y", false) }}

```

The default timezone can also be set globally by calling `setTimezone()`:

```php
$twig = new \Twig\Environment($loader);
$twig->getExtension(\Twig\Extension\CoreExtension::class)->setTimezone('Europe/Paris');

```

## Arguments

* `format`:   The date format (default format is `F j, Y H:i`, which will render as `January 11, 2024 15:17`)
* `timezone`: The date timezone

::::::
