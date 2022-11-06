/**
Datatops.js is a JavaScript library for sending data to a Datatops database
server. For more information, see the docs at https://github.com/datatops.

Datatops is a quite simple API. All we need to do is the following:

```javascript
fetch(`https://${DATATOPS_WEBSITE}.com/api/v1/projects/${PROJECT_NAME}`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-Datatops-User-Key": DATATOPS_USER_KEY
    },
    body: JSON.stringify(DATA),
});
```

So we can see that we need to send a POST request to the URL where the user
provides the following:

* `DATATOPS_WEBSITE`: The server to use. e.g. `http://my-datatops-example.com`
* `PROJECT_NAME`: The name of the project, e.g. `my-project`
* `DATATOPS_USER_KEY`: The user key, e.g. `s9bhn4kd`
* `DATA`: The data to send, e.g. `{ "name": "Jordan", "color": "blue" }`

We want to allow the user to use the library Promise-style OR callback-style.
So we need to return a Promise if the user doesn't provide a callback function.
 We can do this by checking if the user provided a callback function. If they
 did, we can call the callback function with the response. If they didn't, we
 can return a Promise that resolves with the response.

*/

// We will use the fetch API to send the data to the Datatops server.
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

/**
 * The Datatops class.
 *
 * @param {server} string - The Datatops server to use. e.g. `http://my-datatops-example.com`
 * @param {project} string - The name of the project, e.g. `my-project`
 * @param {userKey} string - The user key, e.g. `s9bhn4kd`
*/
class Datatops {

    /**
     * Create a new Datatops instance.
     *
     * @param {server} string - The Datatops server to use. e.g. `http://my-datatops-example.com`
     * @param {project} string - The name of the project, e.g. `my-project`
     * @param {userKey} string - The user key, e.g. `s9bhn4kd`
     *
     */
    constructor({ server, project, userKey }) {
        this.server = server;
        this.project = project;
        this.userKey = userKey;
    }

    /**
     * Send data to the Datatops server.
     *
     * If you provide a callback function, it will be called with the response.
     * For example:
     *
     * ```javascript
     * const datatops = new Datatops({...});
     * datatops.store({ name: "Jordan", color: "blue" }, (response) => {
     *    console.log(response);
     * });
     * ```
     *
     * If you don't provide a callback function, it will return a Promise that
     * resolves with the response.
     * For example:
     *
     * ```javascript
     * const datatops = new Datatops({...});
     * datatops.store({ name: "Jordan", color: "blue" })
     *    .then((response) => {
     *       console.log(response);
     *   });
     * ```
     *
     * @param {data} object - The data to send, e.g. `{ "name": "Jordan", "color": "blue" }`
     * @param {callback} function - The callback function to call when the data is sent. Optional.
     *
     * @returns {Promise} - A Promise that resolves with the response.
     */
    store(data, callback) {
        const url = `${this.server}/api/v1/projects/${this.project}`;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-User-Key": this.userKey
            },
            body: JSON.stringify(data),
        };

        if (callback) {
            return fetch(url, options).then(callback);
        } else {
            return fetch(url, options);
        }
    }
}

// Export the Datatops class so we can use it in other files.
export default Datatops;
