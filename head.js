class MyHead extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <title>Content Strategy Services</title>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
                <!-- empieza el font Jost-->
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
                <!--Termina el font-->
                <link href="styles.css" rel="stylesheet">
        `
    }
}

customElements.define('my-head', MyHead)
