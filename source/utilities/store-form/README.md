
Stores and syncs raw form data with *store* util and *SessionStorage*


### Saving entire form
`Events.$trigger('store-form::save', {form, storeId, itemId}`

Data properties:
- `form`: form html element : required
- `storeId`: The key of sessionstorage object : required
- `itemId`: Optional key if data should be stored as child object


### Updating single input field
`Events.$trigger('store-form::save', {form, storeId, itemId, name}`

Data properties:
- `form`: form html element : required
- `storeId`: The key of sessionstorage object : required
- `itemId`: Optional key if data should be stored as child object
- `name`: Name of input field


### Utils

## prefill form
When raw form data is saved, the 

``` javascript
  prefillForm({
    form, // Same as for event prop
    storeId, // Same as for event prop
    itemId, // Same as for event prop
    triggerSave: true, // Optional boolean that if true triggers save event
  })
```


### Example

``` html
<form js-hook-demo-form>
  <fieldset>
    <legend>Radio:</legend>

    <label for="radio-id-all">All</label>
    <input type="radio" name="radio-test" id="radio-id-all" value="all" checked><br>

    <label for="radio-id-one">One</label>
    <input type="radio" name="radio-test" id="radio-id-one" value="one">
  </fieldset>

  <fieldset>
    <legend>Checkbox:</legend>

    <label for="checkbox-id-one">One</label>
    <input type="checkbox" name="checkbox-id-one" id="checkbox-id-one" value="one"><br>

    <label for="checkbox-id-two">Two</label>
    <input type="checkbox" name="checkbox-id-two" id="checkbox-id-two" value="two"><br>
  </fieldset>

  <input type="text" name="input-test" id="input-test" placeholder="some data">
</form>
```

``` javascript
import Events from '@utilities/events'
import { prefillForm } from '@utilities/store-form/utils'

const STORE_ID = 'filter'
const ITEM_ID = window.location.pathname

class DemoForm {
  constructor(element) {
    this.element = element

    prefillForm({
      form: element,
      storeId: STORE_ID,
      itemId: ITEM_ID,
      triggerEvent: true,
    })

    this.bindEvents()
  }

  bindEvents() {
    this.element.addEventListener('change', () => this.triggerSave())
  }

  triggerSave() {
    Events.$trigger('store-form::save', {
      form: this.element,
      storeId: STORE_ID,
      itemId: ITEM_ID,
    })
  }
}

export default DemoForm
```
