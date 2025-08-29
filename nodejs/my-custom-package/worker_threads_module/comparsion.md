# Node.js: Worker Threads vs Cluster Module vs Thread Pool

This document compares the **Worker Thread**, **Cluster Module**, and **Thread Pool** features in Node.js, explaining their purpose, use cases, concurrency models, and example code.

---

## Comparison Table

| Feature         | Worker Thread                                                                 | Cluster Module                                                                 | Thread Pool (libuv)                                                      |
|-----------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **Purpose**     | Run JavaScript in parallel threads for CPU-bound tasks without blocking the main event loop. | Create multiple child processes (workers) to handle HTTP requests and scale across CPUs. | Offload expensive, blocking I/O tasks (file system, crypto, DNS) to background threads. |
| **Use Case**    | - CPU-intensive operations (data/image processing, ML inference)<br>- Parallel execution | - High-concurrency HTTP servers<br>- Scaling across CPU cores                  | - I/O-bound tasks (file read/write, DNS, TLS)<br>- Non-blocking async I/O |
| **How It Works**| Creates threads within a single process, each with its own event loop.        | Spawns child processes (workers) that share server resources and handle requests. | Uses a pool of threads for async I/O operations, managed by libuv.        |
| **Concurrency** | Multi-threading within a single process.                                     | Multi-process parallelism; each process runs on a different core.              | Multi-threading for async I/O; regular JS remains single-threaded.        |
| **Communication**| Message passing (`postMessage`, `onmessage`) between threads.                | IPC (Inter-Process Communication) between master and workers.                  | Communication via Node.js event loop; no direct worker communication.     |
| **Overhead**    | Low memory per thread; more complex communication.                           | Higher memory per process.                                                     | Low for I/O tasks; limited to non-CPU tasks.                              |
| **Scaling**     | Multi-threaded processing within a single process.                           | Best for scaling apps across multiple CPU cores.                               | For async, non-blocking operations; not for multi-process scaling.        |
| **Example Use** | - Data/image processing<br>- ML inference                                    | - Load balancing HTTP requests<br>- Scalable web servers                       | - File system ops<br>- DB queries<br>- Compression/encryption             |
| **Node.js Version** | v10.5.0+                                                                 | v0.8.0+                                                                        | Built-in from the beginning (internal)                                    |

---

## Example Code

### Worker Thread Example

```javascript
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.on('message', (result) => {
    console.log('Worker Result:', result);
  });
  worker.postMessage('Hello Worker');
} else {
  parentPort.on('message', (msg) => {
    parentPort.postMessage(`Received: ${msg}`);
  });
}
```

---

### Cluster Module Example

```javascript
const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello from Worker');
  }).listen(8000);
}
```

---

### Thread Pool Example (libuv, for I/O tasks)

```javascript
const fs = require('fs');

// Node.js uses a thread pool internally for I/O tasks like this:
fs.readFile('/path/to/large/file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log('File data:', data);
});
```

> **Note:** You can increase the thread pool size for I/O tasks using the `UV_THREADPOOL_SIZE` environment variable:
> ```sh
> UV_THREADPOOL_SIZE=8 node your-script.js
> ```

---

## Summary

- **Worker Threads**: Use for CPU-bound, parallelizable tasks within a single process.
- **Cluster Module**: Use for scaling HTTP servers across multiple CPU cores (multi-process).
- **Thread Pool**: Used internally by Node.js for non-blocking, async I/O operations (not for CPU-bound JS).

Choose the right tool based on your application's concurrency, scaling, and performance needs.