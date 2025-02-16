The solution is to modify the `keyExtractor` function or the data itself to ensure each item has a unique key. Below is the corrected code:

```javascript
<FlatList
  data={[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={(item) => item.id} // Unique IDs solve the problem
/>
```

Alternatively, use a more robust key generation method if IDs are not reliably unique:

```javascript
import { uuid } from 'uuidv4'; // or another UUID library

<FlatList
  data={[{ name: 'Item 1' }, { name: 'Item 2' }]}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={(item, index) => uuid()}
/>
```
This ensures unique keys even if the data itself doesn't provide a unique identifier.