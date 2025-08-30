## REACTJS QUESTIONS THAT MATTERED TO ME

### 1. reactive useState Hook

First : **useState does not update value instantly**

> can't get Instantly the update of a var after a new set using useState Hook

When you call the state setter function returned by useState (e.g., setName from const [name, setName] = useState('initialName');), you are **scheduling a state update**. React does not immediately update the state variable in the current execution context. State updates in React are asynchronous and are often batched for performance reasons.

Therefore, if you try to access the state variable directly after calling its setter within the same function or synchronous block of code, you will still see the old value from the previous render, not the newly updated value. The new value will only be reflected in the **next render cycle of the component**.

To access the updated state value and perform actions based on it, you should use the **useEffect** hook. By adding the state variable to the dependency array of useEffect, the effect function will run after the state has been updated and the component has re-rendered, allowing you to **access the new value**.

```js
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    // console.log(count); // This will log the OLD value of count
  };

  useEffect(() => {
    console.log("Count has updated:", count); // This will log the NEW value of count
  }, [count]); // The effect runs whenever 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

### 2. use usecallback Hook in useeffect Hook

Second: **I didn't want to draw 03 Canvas with respectively 72, 81 , 90 boxes **. To draw these tiny white box in grid.

> **PROBLEM** : I couldn't access each element using **getElementById**

When attempting to access a useRef element within a useEffect hook in React, the element might not be immediately available or "reactive" for a few reasons:

    **Initial Render Timing:**
    useEffect with an empty dependency array [] runs after the initial render of the component. If the element referenced by useRef is conditionally rendered or depends on asynchronous data fetching, it might not be present in the DOM during that initial useEffect execution. useRef.current will be null until the element is actually rendered and mounted.

    **useRef Updates Don't Trigger Re-renders:**
    Unlike useState, changes to useRef.current do not cause a component re-render. If you are expecting a useEffect to re-run based on a change to the ref's current value, it won't happen automatically unless that ref is explicitly included in the useEffect's dependency array, and even then, it's the ref object itself that triggers the re-run, not the current property's value changes.

    **Conditional Rendering:**
    If the element you're trying to reference with useRef is conditionally rendered (e.g., if (condition) { <div ref={myRef} /> }), the ref will only be set when that condition is true and the element is mounted.

**Solutions and Best Practices:**

    Conditional Access within useEffect: Always check for myRef.current before attempting to access its properties or methods within useEffect.

> useCallback in conjunction with useEffect

```js
useEffect(() => {
  if (myRef.current) {
    // Access myRef.current here
    console.log(myRef.current.clientHeight);
  }
}, []); // Or include dependencies if the element's presence depends on props/state
```

    Callback Refs for Dynamic Elements: For scenarios where the element's presence or content changes, a callback ref can be more reliable than useRef. The callback function is called with the DOM node when it mounts and with null when it unmounts.

```js
const myRefCallback = useCallback((node) => {
  if (node) {
    // Access the node here
    console.log(node.clientHeight);
  }
}, []);

return <div ref={myRefCallback} />;
```

**State-Driven Conditional Rendering:**

If the presence of the element is tied to a state variable, ensure that the useEffect's dependencies reflect that state so it re-runs when the element becomes available.

**Understand useRef's Purpose:**
useRef is primarily for holding mutable values that don't trigger re-renders, like direct DOM node references or timers. For values that should cause re-renders and affect the UI, useState is the appropriate tool.

### 3. useRef Hook not reactive under useeffect Hook

> useRef not Reactive in useEffect

useCallback can be used in conjunction with useEffect to optimize performance in React applications.

When a function is a dependency in a useEffect hook, the effect will re-run whenever that function is re-created. In JavaScript, functions are objects, and they are re-created on every render by default, even if their code remains the same. This can lead to unnecessary re-runs of useEffect, especially if the function is passed down to child components or performs expensive operations.

useCallback addresses this by memoizing the function, ensuring that it is only re-created when its specified dependencies change. By wrapping a function in useCallback and then including that memoized function in the dependency array of useEffect, you can prevent the effect from running unnecessarily.

Example:

```js
import React, { useState, useEffect, useCallback } from "react";

function MyComponent({ userId }) {
  const [userData, setUserData] = useState(null);

  // Memoize the fetchUser function using useCallback
  const fetchUser = useCallback(async () => {
    try {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }, [userId]); // Dependency array: fetchUser only re-creates if userId changes

  // useEffect depends on the memoized fetchUser function
  useEffect(() => {
    fetchUser();
  }, [fetchUser]); // The effect re-runs only when fetchUser (and thus userId) changes

  return (
    <div>
      {userData ? (
        <p>User Name: {userData.name}</p>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
```

In this example:

    **fetchUser** is wrapped in **useCallback** with userId as a dependency. This means fetchUser will only be re-created if userId changes.
    **useEffect** includes fetchUser in its dependency array. Because fetchUser is memoized, useEffect will only re-run when userId changes, preventing unnecessary data fetches on every render of MyComponent.
