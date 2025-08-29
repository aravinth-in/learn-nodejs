# Node.js Cluster Module

## What is the Cluster Module?

The **cluster module** allows you to create child processes (workers) that all share the same server port.  
It enables Node.js to take advantage of multi-core systems, as Node.js runs JavaScript in a single thread by default.

---

## Why Use Cluster?

- Node.js is single-threaded; CPU-intensive tasks (like your `/slow-page` route) can block the event loop, making the server unresponsive to other requests.
- By using clusters, you can run multiple Node.js processes to handle more requests concurrently and utilize all CPU cores.

---

## Key Concepts

### 1. Master and Worker Processes
- The **master process** is responsible for forking worker processes.
- **Workers** are child processes that handle incoming requests.
- Each worker runs in its own process and has its own event loop.

### 2. Shared Server Port
- All workers can listen on the same port.
- The master process distributes incoming connections among the workers (using round-robin or OS scheduling).

### 3. Communication
- Master and workers can communicate via IPC (inter-process communication) using `process.send()` and `process.on('message', ...)`.

### 4. Fault Tolerance
- If a worker crashes, the master can fork a new one to keep the server running.

### 5. APIs
- `cluster.isMaster` / `cluster.isPrimary`: True if the process is the master.
- `cluster.fork()`: Forks a new worker.
- `cluster.on('exit', ...)`: Listen for worker exit events.
- `cluster.workers`: An object containing all active workers.

---

## Limitations

- Workers do **not** share memory; they are separate processes.
- Suitable for scaling CPU-bound and I/O-bound workloads, but **not** for sharing in-memory state.
- Not recommended for stateful applications unless you use external storage (e.g., Redis, database).

---

## When to Use Cluster

- When you want to utilize all CPU cores for better throughput.
- When your app has CPU-intensive routes that block the