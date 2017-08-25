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
import { Actions } from 'react-native-router-flux'

const Todo = (state) => {
    const { id, text, completed, onClickDelete, onClickToggle } = state
    return (
        <SwipeRow
            body={
                <ListItem>
                    <CheckBox style={{ marginRight: 20 }} checked={completed} onPress={()=>onClickToggle(state)}/>
                    <Text>{text}</Text>
                </ListItem>
            }
            right={
                <Button danger onPress={() => onClickDelete(id)}>
                    <Icon active name="trash" />
                </Button>
            }
            left={
                <Button info onPress={() => Actions.edit({ id, text })} >
                    <Icon active name="redo" />
                </Button>
            }
            leftOpenValue={75}
            rightOpenValue={-75}
        />
    );
};



export default Todo