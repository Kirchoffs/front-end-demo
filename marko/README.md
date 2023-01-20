# Notes for Marko

## Basics

### Get Started
```
>> npx @marko/create color-picker

or

>> npx @marko/create --template basic --name color-picker
```

```
>> npm run dev
```

### Basic Code
#### Demo
```
class {
  onInput(input) {
    this.state.value = input.value;
  }

  onCreate() {
    this.state = {
      key: 'key',
      color: 'red'
    }
  }
}

<div>
  <p style={ backgroundColor: state.color }>${state.key}</p>
  <p>${state.value}</p>
</div>
```

#### For Loop
```
<table>
  <thead>
    <tr>
      <for|header| of = state.headers>
        <th>${header}</th>
      </for>
    </tr>
  </thead>
  <tbody>
    <for|row| of = state.rows>
      <tr>
        <for|header| of = state.headers>
          <td>${row[header]}</td>
        </for>
      </tr>
    </for>
  </tbody>
</table>
```