# Kubernetes Exercises

- [1.1](https://github.com/prachishah0105-ai/kubernates-excercises/tree/1.1/log-output)
- [1.2](https://github.com/prachishah0105-ai/kubernates-excercises/tree/1.2/todo-app)
- [1.3](https://github.com/prachishah0105-ai/kubernates-excercises/tree/1.3/log-output)
- [1.4](https://github.com/prachishah0105-ai/kubernates-excercises/tree/1.4/todo-app)
- [1.5](https://github.com/prachishah0105-ai/kubernates-excercises/tree/1.5/todo-app)
- [1.6](https://github.com/prachishah0105-ai/kubernates-excercises/tree/1.6/todo-app)
- [1.7](https://github.com/prachishah0105-ai/kubernates-excercises/tree/1.7/log-output)
- [1.8](https://github.com/prachishah0105-ai/kubernates-excercises/tree/1.8/todo-app)
- [1.9](https://github.com/prachishah0105-ai/kubernates-excercises/tree/1.9/ping-pong)
- [1.10](https://github.com/prachishah0105-ai/kubernates-excercises/tree/1.10/log-output)
- [1.11](https://github.com/prachishah0105-ai/kubernates-excercises/tree/1.11/ping-pong)
- [1.12](https://github.com/prachishah0105-ai/kubernates-excercises/tree/1.12/todo-app)
- [1.13](https://github.com/prachishah0105-ai/kubernates-excercises/tree/1.13/todo-app)
- [2.1](https://github.com/prachishah0105-ai/kubernates-excercises/tree/2.1/log-output)
- [2.2](https://github.com/prachishah0105-ai/kubernates-excercises/tree/2.2/todo-app)
- [2.3](https://github.com/prachishah0105-ai/kubernates-excercises/tree/2.3/log-output)
- [2.4](https://github.com/prachishah0105-ai/kubernates-excercises/tree/2.4/todo-app)
- [2.5](https://github.com/prachishah0105-ai/kubernates-excercises/tree/2.5/log-output)
- [2.6](https://github.com/prachishah0105-ai/kubernates-excercises/tree/2.6/todo-app)
- [2.7](https://github.com/prachishah0105-ai/kubernates-excercises/tree/2.7/ping-pong)
- [2.8](https://github.com/prachishah0105-ai/kubernates-excercises/tree/2.8/todo-backend)
- [2.9](https://github.com/prachishah0105-ai/kubernates-excercises/tree/2.9/todo-app)
- [2.10](https://github.com/prachishah0105-ai/kubernates-excercises/tree/2.10/todo-backend)
- [4.1](https://github.com/prachishah0105-ai/kubernates-excercises/tree/4.1/ping-pong)
- [4.2](https://github.com/prachishah0105-ai/kubernates-excercises/tree/4.2/todo-backend)
- [4.3](https://github.com/prachishah0105-ai/kubernates-excercises/tree/4.3/ping-pong)
- [4.4](https://github.com/prachishah0105-ai/kubernates-excercises/tree/4.4/ping-pong)
- [4.5](https://github.com/prachishah0105-ai/kubernates-excercises/tree/4.5/todo-app)
- [4.6](https://github.com/prachishah0105-ai/kubernates-excercises/tree/4.6/todo-app/broadcaster)
- [4.7](https://github.com/prachishah0105-ai/kubernates-excercises/tree/4.7/log-output)
- [4.8](https://github.com/prachishah0105-ai/kubernates-excercises/tree/4.8/todo-app)
- [4.9](https://github.com/prachishah0105-ai/kubernates-excercises/tree/4.9/todo-app/overlays)
- [4.10: The Grande Finale (Dedicated Config Repo)](https://github.com/prachishah0105-ai/todo-app-config)
- ## Exercise 4.1: Readiness Probes

I have implemented readiness probes for both the Ping-pong and Log-output applications:

* **Ping-pong**: Added a `/healthz` endpoint that checks the database connection using a `SELECT 1` query. The deployment manifest now includes a `readinessProbe` that pings this endpoint.
* **Log-output**: Added a `/healthz` endpoint that verifies connectivity to the Ping-pong service. Its `readinessProbe` ensures it only becomes READY after the Ping-pong service is healthy.
* **Verification**: I verified the implementation by scaling the database to 0 replicas. As expected, the Ping-pong pod changed to `0/1 READY`, and subsequently, the Log-output pod also became unready.
