<script>
    import firebase from "firebase/compat/app";
    import firebaseui from "firebaseui";
    import "firebaseui/dist/firebaseui.css";

    import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";

    // https://github.com/firebase/firebaseui-web

    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    const uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },
            uiShown: function () {
                // The widget is rendered.
                // Hide the loader.
                if (document.getElementById("loader")) {
                    document.getElementById("loader").style.display = "none";
                }
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: "popup",
        signInSuccessUrl: "/dashboard",
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        tosUrl: "/tos",
        // Privacy policy url.
        privacyPolicyUrl: "/privacy",
        credentialHelper: firebaseui.auth.CredentialHelper.NONE
    };
    ui.start("#firebaseui-auth-container", uiConfig);

</script>

<main>
    <div class="container">
        <div class="row">
            <div class="col s12 m6 offset-m3">
                <div id="firebaseui-auth-container"></div>
                <FaSpinner id="loader" />
            </div>
        </div>
    </div>
</main>