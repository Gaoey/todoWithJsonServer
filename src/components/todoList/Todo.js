import React from 'react'
import PropTypes from 'prop-types'
import {
    ListItem,
    CheckBox,
    Body,
    Text, SwipeRow,
    Button,
    Icon,
    Content
} from 'native-base'

const Todo = ({ id, text, completed }) => {
    return (
        <SwipeRow
            body={
                <ListItem>
                    <CheckBox style={{ marginRight: 20 }} checked={completed} />
                    <Text>{text}</Text>
                </ListItem>
            }
            right={
                <Button danger>
                    <Icon active name="trash" />
                </Button>
            }
            left={
                <Button info>
                    <Icon active name="redo" />
                </Button>
            }
            leftOpenValue={75}
            rightOpenValue={-75}
        />
    );
};



export default Todo