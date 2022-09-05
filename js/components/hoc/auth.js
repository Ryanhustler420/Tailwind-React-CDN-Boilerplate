function withAuthHoc(Component) {
    return class AuthenticatedComponent extends React.Component {

        constructor(props) {
            super(props)
            this.auth_state = new AuthState();
        }

        isAuthenticated() {
            return this.auth_state.getUser() != null; // this.props.isAuthenticated;
        }

        /**
         * Render
         */
        render() {
            return (
                <div>
                    {this.isAuthenticated() === true ? <Component {...this.props} /> : <Redirect to="/" />}
                </div>
            );
        }
    };
}