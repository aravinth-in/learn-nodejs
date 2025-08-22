# Node.js Event Loop Queues

This document explains the different queues involved in the Node.js event loop, and clarifies which are managed by **libuv** (the C++ library powering Node.js async I/O) and which are managed by **Node.js** or the **V8 JavaScript engine**.

---

## Event Loop Queues Overview

The Node.js event loop consists of several phases, each with its own queue for callbacks:

### Queues Managed by **libuv** (C++ Layer)

- **Timer Queue**  
  Handles callbacks scheduled by `setTimeout` and `setInterval`.

- **I/O Queue**  
  Handles callbacks for completed I/O operations (e.g., file system, network).

- **Check Queue**  
  Handles callbacks scheduled by `setImmediate`.

- **Close Queue**  
  Handles callbacks for resources that are closing (e.g., sockets).

These queues are part of the libuv library, which provides the core event loop and asynchronous I/O capabilities for Node.js.

---

### Queues Managed by **Node.js** / **V8** (JavaScript Layer)

- **Microtask Queue**  
  Contains two sub-queues:
  - **nextTick Queue**: Handles callbacks scheduled by `process.nextTick` (Node.js specific).
  - **Promise Queue**: Handles callbacks for resolved Promises (JavaScript spec, managed by V8).

These microtask queues are managed by Node.js and the V8 engine, not libuv.

---

## Summary Table

| Queue             | Managed By      | Example Callback Source         |
|-------------------|----------------|--------------------------------|
| Timer queue       | libuv          | `setTimeout`, `setInterval`    |
| I/O queue         | libuv          | File/network I/O               |
| Check queue       | libuv          | `setImmediate`                 |
| Close queue       | libuv          | Resource close events          |
| nextTick queue    | Node.js        | `process.nextTick`             |
| Promise queue     | V8/Node.js     | Promise `.then`/`.catch`       |

---

## Key Points

- **libuv** manages the core event loop queues for timers, I/O, immediate, and close events.
- **Node.js** adds its own microtask queue (`process.nextTick`), which is processed before other queues in each event loop phase.
- **V8** (the JavaScript engine) manages the Promise microtask queue.
- Microtasks (nextTick and Promise callbacks) are always processed before moving to the next phase of the event loop.

---

## References

- [Node.js Event Loop Guide](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
- [libuv Documentation](https://libuv.org/)