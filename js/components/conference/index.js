class Conference extends React.Component {

    constructor(props) {
        super(props);

        this.defaultCourse = "Python";
        this.state = {
            course: this.defaultCourse,
            href: '',
            passphrase: '',
            nodes: [],
        }
    };

    loadConfs = () => {
        // fetch(routes.GET_CONF, { method: 'GET', }).then(response => response.json()).then((res) => {
        //     this.setState({ nodes: res.documents });
        // }).catch(showSnackbar);
    }

    componentDidMount() {
        this.loadConfs();
    }

    render() {
        return (
            <h2>Conf Page</h2>
        )
    }
}
