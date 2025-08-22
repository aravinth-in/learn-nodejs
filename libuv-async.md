# Libuv and Async Methods in Node.js

## Overview

In Node.js, asynchronous methods are handled by **libuv**, a multi-platform support library with a focus on asynchronous I/O. Libuv enables Node.js to perform non-blocking operations, even though JavaScript itself is single-threaded.

## How Async Methods Are Handled

Async methods in Node.js are managed in two main ways:

1. **Native Async Mechanisms**
2. **Thread Pool**

### 1. Native Async Mechanisms

- Whenever possible, libuv uses the operating system's native async mechanisms to avoid blocking the main thread.
- Examples:
  - **epoll** for Linux
  - **kqueue** for macOS
  - **IO Completion Ports** for Windows
- These mechanisms are part of the OS kernel and are highly scalable, as the only limitation is the operating system itself.
- **Example:** Network I/O operations (like HTTP requests) use native async mechanisms.

### 2. Thread Pool

- If there is no native async support and the task is file I/O or CPU-intensive, libuv uses a thread pool to avoid blocking the main thread.
- The thread pool allows Node.js to perform expensive operations (like file system access, DNS lookups, or cryptographic functions) asynchronously.
- The default thread pool size is **4**, but it can be increased by setting the `UV_THREADPOOL_SIZE` environment variable (up to 128).

    ```sh
    UV_THREADPOOL_SIZE=8 node your-script.js
    ```

- **Note:** The thread pool preserves asynchrony with respect to Node’s main thread, but it can become a bottleneck if all threads are busy. Tasks waiting for a free thread will be queued, which can increase their latency.

## Key Points

- **Libuv** is the backbone of Node.js async operations.
- Native async mechanisms are preferred for scalability.
- The thread pool is used for CPU-intensive or file I/O tasks without native async support.
- The thread pool size can be tuned for your workload, but excessive size may impact system performance.
- If all threads in the pool are busy, additional async tasks will wait, potentially