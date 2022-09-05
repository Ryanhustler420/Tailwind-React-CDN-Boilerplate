const HomeLayout = () => {

    const [authState, _] = useState(new AuthState());
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        let params = (new URL(document.location)).searchParams;
        let code = params.get("code");
        // check if user is already logged in before {has browser cached}
        if (authState.getUser()) {
            if (code)
                window.location = redirect_url;
        } else {
            // check if the user has code param on the browser
            if (code) {
                NProgress.start();
                axios({
                    method: 'post',
                    url: 'https://oauth2.googleapis.com/token',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
                    data: `code=${code}&client_id=${clientID}&client_secret=${clientSecret}&redirect_uri=${encodeURIComponent(redirect_url)}&grant_type=authorization_code`,
                }).then(first => {
                    const access_token = first.data.access_token;
                    const token_type = first.data.token_type;
                    const expires_in = first.data.expires_in;
                    const id_token = first.data.id_token;
                    const scope = first.data.scope;
                    axios({
                        method: 'get',
                        url: 'https://www.googleapis.com/oauth2/v2/userinfo',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': `${token_type} ${access_token}` },
                    }).then(second => {
                        authState.saveUser({ pos: AUTH_STATE_KEYBOOK.U1, meta: second.data });
                        NProgress.done();
                        // NProgress.remove();
                        window.location = redirect_url
                    });
                }).catch(err => {
                    console.error(err.message);
                    NProgress.done();
                    // NProgress.remove();
                });
            }

        }
    });

    const login = () => {
        const scope = "https://www.googleapis.com/auth/userinfo.profile";
        const url = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${encodeURIComponent(redirect_url)}&prompt=consent&response_type=code&client_id=${clientID}&scope=${encodeURIComponent(scope)}&access_type=online`;
        window.open(url, '_self');
    }

    const showFormButtonSpinner = () => setSpinner(true);
    const hideFormButtonSpinner = () => setSpinner(false);

    return (
        <h1>Home Page</h1>
    )
}