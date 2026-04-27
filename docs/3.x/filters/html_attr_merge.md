---
title: "``html_attr_merge``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/html_attr_merge.rst"
upstreamPath: "doc/filters/html_attr_merge.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``html_attr_merge``


> **Added in Twig 3.24**
>
> The `html_attr_merge` filter was added in Twig 3.24.
>

The `html_attr_merge` filter merges multiple mappings that represent
HTML attribute values. Such mappings contain the names of the HTML attributes
as keys, and the corresponding values represent the attributes' values.

It is primarily designed for working with arrays that are passed to the
`html_attr` function. It closely resembles the [merge](../filters/merge)
filter, but has different merge behavior for values that are iterables
themselves, as it will merge such values in turn.

The filter returns a new merged array:


```twig
{% set base = {class: ['btn'], type: 'button'} %}
{% set variant = {class: ['btn-primary'], disabled: true} %}

{% set merged = base|html_attr_merge(variant) %}

{# merged is now: {
    class: ['btn', 'btn-primary'],
    type: 'button',
    disabled: true
} #}

```

The filter accepts multiple arrays as arguments and merges them from left to right:


```twig
{% set merged = base|html_attr_merge(variant1, variant2, variant3) %}

```

A common use case is to build attribute mappings conditionally by merging multiple
parts based on conditions. To make this conditional merging more convenient, filter
arguments that are `false`, `null` or empty arrays are ignored:


```twig
{% set button_attrs = {
    type: 'button',
    class: ['btn']
}|html_attr_merge(
    variant == 'primary' ? { class: ['btn-primary'] },
    variant == 'secondary' ? { class: ['btn-secondary'] },
    size == 'large' ? { class: ['btn-lg'] },
    size == 'small' ? { class: ['btn-sm'] },
    disabled ? { disabled: true, class: ['btn-disabled'] },
    loading ? { 'aria-busy': 'true', class: ['btn-loading'] },
) %}

{# Example with variant='primary', size='large', disabled=false, loading=true:

   The false values (secondary variant, small size, disabled state) are ignored.

   button_attrs is:
   {
       type: 'button',
       class: ['btn', 'btn-primary', 'btn-lg', 'btn-loading'],
       'aria-busy': 'true'
   }
#}

```

## Merging Rules

The filter follows these rules when merging attribute values:

**Scalar values**: Later values override earlier ones.


```twig
{% set result = {id: 'old'}|html_attr_merge({id: 'new'}) %}
{# result: {id: 'new'} #}

```

**Array values**: Arrays are merged like in PHP's `array_merge` function - numeric keys are
appended, non-numeric keys replace.


```twig
{# Numeric keys (appended): #}
{% set result = {class: ['btn']}|html_attr_merge({class: ['btn-primary']}) %}
{# result: {class: ['btn', 'btn-primary']} #}

{# Non-numeric keys (replaced): #}
{% set result = {class: {base: 'btn', size: 'small'}}|html_attr_merge({class: {variant: 'primary', size: 'large'}}) %}
{# result: {class: {base: 'btn', size: 'large', variant: 'primary'}} #}

```


> **Remember, attribute mappings passed to or returned from this filter are regular**
>
> Twig mappings after all. If you want to completely replace an attribute value
> that is an iterable with another value, you can use the [merge](../filters/merge)
> filter to do that.
>

**`MergeableInterface` implementations**: For advanced use cases, attribute values can be objects
that implement the `MergeableInterface`. These objects can define their own, custom merge
behavior that takes precedence over the default rules. See the docblocks in that interface
for details.


> **The `html_attr_merge` filter is part of the `HtmlExtension` which is not**
>
> installed by default. Install it first:
>
>
> ```bash
> $ composer require twig/html-extra
>
> ```
>
> Then, on Symfony projects, install the `twig/extra-bundle`:
>
>
> ```bash
> $ composer require twig/extra-bundle
>
> ```
>
> Otherwise, add the extension explicitly on the Twig environment::
>
>     use Twig\Extra\Html\HtmlExtension;
>
>     $twig = new \Twig\Environment(...);
>     $twig->addExtension(new HtmlExtension());
>

## Arguments

The filter accepts a variadic list of arguments to merge. Each argument can be:

* A map of attributes
* `false` or `null` (ignored, useful for conditional merging)
* An empty string `''` (ignored, to support implicit else in ternary operators)


> **Note**
>

::::::
