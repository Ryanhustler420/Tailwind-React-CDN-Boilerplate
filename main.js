const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={HomeLayout} />
                <Route path="/conf" exact component={Conference} />
                <Route path="/dashboard" exact component={DashboardLayout} />
                <Redirect to="/" />
            </Switch>
        </HashRouter>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));