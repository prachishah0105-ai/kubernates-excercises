
## Exercise 3.9: DBaaS vs DIY

| Feature | DBaaS (e.g., Google Cloud SQL) | DIY (Database in Kubernetes) |
| :--- | :--- | :--- |
| **Initialization** | **Effort**: Extremely low. Can be set up via a few clicks or a single Terraform command. **Cost**: Higher initial base cost for the managed instance. | **Effort**: Higher. Requires manual configuration of StatefulSets, PersistentVolumeClaims, and Secrets. **Cost**: Low; uses existing cluster resources. |
| **Maintenance** | **Minimal**: The cloud provider handles OS updates, database patching, and hardware health. | **Significant**: You are responsible for version upgrades, patching, and managing storage scaling. |
| **Backups** | **Built-in**: Offers automated daily snapshots and point-in-time recovery with simple toggles. | **Manual**: Requires setting up CronJobs (like `pg_dump`) and managing external storage for backup files. |
| **Ease of Use** | **High**: Excellent developer experience; allows focus on the app logic rather than infrastructure. | **Moderate**: Requires deep Kubernetes knowledge to ensure data persistence and high availability. |

**Conclusion**: For production, I would choose **DBaaS** because the time saved on maintenance and the security of automated backups far outweigh the monthly service fee.# Kubernetes Exercises

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
- [3.1: Pingpong GKE](https://github.com/prachishah0105-ai/kubernates-excercises/tree/main/3.1)
- [3.2: Project and Ping-pong](https://github.com/prachishah0105-ai/kubernates-excercises/tree/main/3.2)
- [3.3: https://github.com/prachishah0105-ai/kubernates-excercises/actions/runs/20593437682](./.github/workflows/deploy.yaml)
- ### [Exercise 3.3: GitHub Actions](https://github.com/prachishah0105-ai/kubernates-excercises/tree/main/.github/workflows)

- **Workflow YAML**: [deploy.yaml](https://github.com/prachishah0105-ai/kubernates-excercises/blob/main/.github/workflows/deploy.yaml)
- **Successful Action Run**: [Run #20593437682](https://github.com/prachishah0105-ai/kubernates-excercises/actions/runs/20593437682)

- ## Exercise 4.1: Readiness Probes

I have implemented readiness probes for both the Ping-pong and Log-output applications:

* **Ping-pong**: Added a `/healthz` endpoint that checks the database connection using a `SELECT 1` query. The deployment manifest now includes a `readinessProbe` that pings this endpoint.
* **Log-output**: Added a `/healthz` endpoint that verifies connectivity to the Ping-pong service. Its `readinessProbe` ensures it only becomes READY after the Ping-pong service is healthy.
* **Verification**: I verified the implementation by scaling the database to 0 replicas. As expected, the Ping-pong pod changed to `0/1 READY`, and subsequently, the Log-output pod also became unready.
