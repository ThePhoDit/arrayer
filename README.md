[![npm (scoped)](https://img.shields.io/npm/v/arrayer)](https://github.com/ThePhoDit/arrayer)

# Arrayer

Some handy array-related functions.

## Functions

<dl>
<dt><a href="#equal">equal(arr1, arr2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Compare two arrays and check if they are the same.</p>
</dd>
<dt><a href="#arrange">arrange(...arrays)</a> ⇒ <code>Array.&lt;any&gt;</code></dt>    
<dd><p>Arrange various arrays into a single one.</p>
</dd>
<dt><a href="#remove">remove(item, arr)</a> ⇒ <code>Array.&lt;any&gt;</code></dt>      
<dd><p>Removes the first match of the specified item.</p>
</dd>
<dt><a href="#removeAll">removeAll(item, arr)</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>Removes all matches of the specified item.</p>
</dd>
<dt><a href="#longestString">longestString(arr)</a> ⇒ <code>Object</code></dt>
<dd><p>Get the longest string of an array.</p>
</dd>
<dt><a href="#highestNumber">highestNumber(arr)</a> ⇒ <code>number</code></dt>
<dd><p>Get the highest value of a numeric array.</p>
</dd>
</dl>

<a name="equal"></a>

## equal(arr1, arr2) ⇒ <code>boolean</code>
Compare two arrays and check if they are the same.

**Kind**: global function
**Returns**: <code>boolean</code> - Whether they are the same or not.
**Author**: ThePhoDit

| Param | Type | Description |
| --- | --- | --- |
| arr1 | <code>Array.&lt;any&gt;</code> | First array. |
| arr2 | <code>Array.&lt;any&gt;</code> | Second array. |

<a name="arrange"></a>

## arrange(...arrays) ⇒ <code>Array.&lt;any&gt;</code>
Arrange various arrays into a single one.

**Kind**: global function
**Returns**: <code>Array.&lt;any&gt;</code> - Array with all values.
**Author**: ThePhoDit

| Param | Type | Description |
| --- | --- | --- |
| ...arrays | <code>Array.&lt;any&gt;</code> | All arrays to arrange. |

<a name="remove"></a>

## remove(item, arr) ⇒ <code>Array.&lt;any&gt;</code>
Removes the first match of the specified item.

**Kind**: global function
**Returns**: <code>Array.&lt;any&gt;</code> - Array without the removed item.
**Author**: ThePhoDit

| Param | Type | Description |
| --- | --- | --- |
| item | <code>string</code> \| <code>number</code> \| <code>boolean</code> | The item to remove. |
| arr | <code>Array.&lt;(string\|number\|boolean)&gt;</code> | The array from where the item is removed. |

<a name="removeAll"></a>

## removeAll(item, arr) ⇒ <code>Array.&lt;any&gt;</code>
Removes all matches of the specified item.

**Kind**: global function
**Returns**: <code>Array.&lt;any&gt;</code> - Array without the removed items.
**Author**: ThePhoDit

| Param | Type | Description |
| --- | --- | --- |
| item | <code>string</code> \| <code>number</code> \| <code>boolean</code> | The item to remove. |
| arr | <code>Array.&lt;(string\|number\|boolean)&gt;</code> | The array from where the item is removed. |

<a name="longestString"></a>

## longestString(arr) ⇒ <code>Object</code>
Get the longest string of an array.

**Kind**: global function
**Returns**: <code>Object</code> - The word and the length of it.
**Author**: ThePhoDit

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;string&gt;</code> | Array with different words. |

<a name="highestNumber"></a>

## highestNumber(arr) ⇒ <code>number</code>
Get the highest value of a numeric array.

**Kind**: global function
**Returns**: <code>number</code> - The highest number.
**Author**: ThePhoDit

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;number&gt;</code> | Array with different numbers. |