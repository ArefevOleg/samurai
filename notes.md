### Компонента - это функция, которая возвращает разметку (jsx, tsx)

### Компонента - это тег <App />

```javascript
// Можно переименовать название импортируемой компоненты, пример:
// c Profile на P
import { Profile as P } from "./components/Profile";
```

```javascript
// Можно создать дополнительную обёртку для эдементов, котороя ни как не будет влиять на разметку
<>
  <div>text</div>
  <div>text</div>
  <div>text</div>
  <div>text</div>
</>
```
