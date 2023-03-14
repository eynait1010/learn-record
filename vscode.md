# 如何调试
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "cli",
            "cwd":"${workspaceFolder}/packages/vite-project",
            "runtimeExecutable": "npm",
            "runtimeArgs": [
                "run",
                "dev"
            ],
            "port":9229,// 固定的
            "autoAttachChildProcesses": true,
            "stopOnEntry": true,
            "skipFiles": [
                "<node_internals>/**"
            ]
        }
    ]
}
```