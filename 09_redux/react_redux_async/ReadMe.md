# Side Effects, Async Task & Redux

## Q. Where Should side-effects and async tasks be excuted?

reducer함수는 순수함수여야 한다. 따라서 side-effect가 없고, synchronous fucntion이여야 하는데  
redux에서 side-effects and async tasks를 어떻게 수행해야 할까?

### solution

- Inside the **componenets** (e.g. useEffet())
- Inside the **actions creators**

---
