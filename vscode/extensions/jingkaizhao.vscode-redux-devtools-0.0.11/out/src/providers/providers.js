"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReduxDevtoolsProvider {
    provideTextDocumentContent(uri) {
        return `<!DOCTYPE html>
                <html>
                    <head>
                        <title>Remote Devtools</title>
                        <style>
                            html, body, #root {
                                width: 100%;
                                height: 100%;
                            }
                        </style>
                    </head>
                    <body>
                        <div id="root"></div>
                    </body>
                    <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
                    <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
                    <script src="https://unpkg.com/remotedev-app@0.10.7/dist/remotedev-app.min.js"></script>
                    <script>
                        let root = document.getElementById('root');
                        ReactDOM.render(
                            React.createElement(
                                RemoteDevApp, 
                                {
                                socketOptions: {
                                    hostname: 'localhost',
                                    port: 1024,
                                    autoReconnect: true
                                }
                                }, 
                                'Remote Devtools'
                            ),
                            root
                        );
                    </script>
                </html>`;
    }
}
exports.ReduxDevtoolsProvider = ReduxDevtoolsProvider;
//# sourceMappingURL=providers.js.map