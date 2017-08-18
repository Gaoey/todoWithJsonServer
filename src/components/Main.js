import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import { Container, Content } from 'native-base'

const Main = () => (
    <Container>
        <Content>
            <AddTodoContainer />
            <TodoListContainer />
        </Content>
    </Container>
)

export default Main