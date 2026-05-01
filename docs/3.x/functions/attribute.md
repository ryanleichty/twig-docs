---
title: "``attribute``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/functions/attribute.rst"
upstreamPath: "doc/functions/attribute.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``attribute``


> **The `attribute` function is deprecated as of Twig 3.15. Use the**
>
> `dot operator` that now accepts any expression
> when wrapped with parenthesis.
>
> Note that this function will still be available in Twig 4.0 to allow a
> smoother upgrade path.
>

The `attribute` function lets you access an attribute, method, or property of
an object or array when the name of that attribute, method, or property is stored
in a variable or dynamically generated with an expression:


```twig
{# method_name is a variable that stores the method to call #}
{{ attribute(object, method_name) }}

{# you can also pass arguments when calling a method #}
{{ attribute(object, method_name, arguments) }}

{# the method/property name can be the result of evaluating an expression #}
{{ attribute(object, 'some_property_' ~ user.type) }}

{# in addition to objects, this function works with plain arrays as well #}
{{ attribute(array, item_name) }}

```

In addition, the `defined` test can check for the existence of a dynamic
attribute:


```twig
{{ attribute(object, method) is defined ? 'Method exists' : 'Method does not exist' }}

```


> **The resolution algorithm is the same as the one used for the `.`**
>
> operator.
>

## Arguments

* `variable`: The variable
* `attribute`: The attribute name
* `arguments`: An array of arguments to pass to the call

::::::
