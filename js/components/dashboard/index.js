const DashboardLayout = (function () {
    class DashboardLayout extends React.Component {

        constructor(props) {
            super(props);
            this.authState = new AuthState();
            this.state = {
                user: { ...this.authState.getUser().meta }
            }
        };

        logout = () => {
            this.authState.saveUser(null);
            this.props.history.replace('/');
        }


        render() {
            return (
                <h1>Dashboard Page</h1>
            )
        }

    }
    return withAuthHoc(DashboardLayout);
})();