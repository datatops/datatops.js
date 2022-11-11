# Datatops.js

## Usage

Include the `datatops.js` file in your HTML page by downloading it and linking
to it in a `<script>` tag:

```html
<script src="https://cdn.jsdelivr.net/gh/datatops/datatops.js@v0.1.2/datatops.js"></script>
```

Then, use the `Datatops` object to access the library. Put this code somewhere in a `<script>` tag in your project:

```js
const datatops = new Datatops({
    server: "https://my-datatops-website.com",
    project: "my-datatops-survey",
    userKey: "1mg9dj4b",
});
```

Then you can use this code later on to save data:

```js
datatops.store({
    favoriteNumber: 42,
    favoriteColor: "blue",
    dateOfSurveySubmission: new Date(),
});
```

## Building

```shell
rollup index.js --file bundle.js --format umd --name "Datatops"
```
