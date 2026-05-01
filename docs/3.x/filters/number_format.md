---
title: "``number_format``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/number_format.rst"
upstreamPath: "doc/filters/number_format.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``number_format``

The `number_format` filter formats numbers.  It is a wrapper around PHP's
[number_format](https://www.php.net/number_format) function:


```twig
{{ 200.35|number_format }}

```

You can control the number of decimal places, decimal point, and thousands
separator using the additional arguments:


```twig
{{ 9800.333|number_format(2, '.', ',') }}

```

To format negative numbers, wrap the previous statement with parentheses (note
that as of Twig 3.21, not using parentheses is deprecated as the filter
operator will change precedence in Twig 4.0):


```twig
{{ -9800.333|number_format(2, '.', ',') }} {# outputs : -9 #}
{{ (-9800.333)|number_format(2, '.', ',') }} {# outputs : -9,800.33 #}

```

To format math calculation, wrap the previous statement with parentheses
(needed because of Twig's `precedence of operators -`):


```twig
{{ 1 + 0.2|number_format(2) }} {# outputs : 1.2 #}
{{ (1 + 0.2)|number_format(2) }} {# outputs : 1.20 #}

```

If no formatting options are provided then Twig will use the default formatting
options of:

* 0 decimal places.
* `.` as the decimal point.
* `,` as the thousands separator.

These defaults can be changed through the core extension:

```php
$twig = new \Twig\Environment($loader);
$twig->getExtension(\Twig\Extension\CoreExtension::class)->setNumberFormat(3, '.', ',');

```

The defaults set for `number_format` can be over-ridden upon each call using the
additional parameters.

## Arguments

* `decimal`:       The number of decimal points to display
* `decimal_point`: The character(s) to use for the decimal point
* `thousand_sep`:   The character(s) to use for the thousands separator

::::::
