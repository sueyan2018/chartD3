import React from 'react';
import h from 'react-hyperscript'
import Grid from '@material-ui/core/Grid'
import Card, {
    CardContent
} from '@material-ui/core/Card';

const styles = {
    container: {
        padding: 16,
    },
    item: {
        background: '#EEE'
    }
}

class Index extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        let items = []
        for (let i = 0; i < 12; i++) {
            items.push(h(Grid, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
                style: styles.item,
            }, [
                    h(Card, [
                        h(CardContent, 'Hello Card!')
                    ]),
                ]))
        }

        return h(Grid, {
            container: true,
            spacing: 16,
            style: styles.container,
        }, items)
    }


    // render() {
    //     return (
    //         <div>
    //             这是首页
    //         </div>
    //     );
    // }


}

export default Index;