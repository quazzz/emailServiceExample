# email sending handler

a simplified email sending handler built with **NestJS** that leverages **Bull** and **Redis** to manage background jobs, incoming email requests are queued in Redis, and Bull processes these jobs asynchronously to simulate email sending

this setup ensures:
- **non-blocking request handling** — the server remains responsive without waiting for email sending to complete
- **scalable background task processing** — tasks are processed efficiently, even under high load

ideal for applications that require reliable and efficient asynchronous email delivery
