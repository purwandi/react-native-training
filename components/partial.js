import React from 'react'
import { View, Text } from 'react-native'

class Partial extends React.Component {

    render() {
        return (
            <View>
                <Text>{this.props.message}</Text>
            </View>
        )
    }
}

Partial.propTypes = {
    message: React.PropTypes.string.isRequired
}

export default Partial